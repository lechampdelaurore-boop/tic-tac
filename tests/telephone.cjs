// Vérifie le site EN LIGNE (ou une adresse donnée) dans Chrome au format téléphone :
//  - aucune erreur dans la console ;
//  - l'écran de question tient sans défiler, aux 7 tailles de téléphone ;
//  - une série complète jouée dans chaque monde (via window.__tictac) ;
//  - glisser la grande aiguille fait bouger la petite ;
//  - une erreur volontaire de chaque type déclenche la bonne astuce ;
//  - l'appli marche hors ligne après une première visite.
// Usage : node tests/telephone.cjs [url]   (captures dans captures/)
const { chromium } = require('playwright');
const fs = require('fs');

const URL = process.argv[2] || 'https://lechampdelaurore-boop.github.io/tic-tac/';
const LIVE = !process.argv[2];
const SIZES = [[320, 568], [360, 640], [375, 667], [390, 664], [390, 844], [412, 780], [430, 932]];
const expectedCache = (fs.readFileSync('sw.js', 'utf8').match(/tic-tac-v\d+/) || [])[0];
const PREFS = JSON.stringify({ son: false, anim: false, voix: false, vibre: false });
// Écrans les plus hauts : clavier + horloge, placer, droite guidée, histoire, choix longs
const ECRANS = [['m1-4', 6], ['m1-4', 1], ['m1-5', 0], ['m1-6', 0], ['m2-3', 0], ['m3-3', 2], ['m3-3', 6], ['m3-6', 0]];
const TYPES = {
  inversees: ['m1-1', 'm1-4'], tropTot: ['m1-2'], reveil: ['m1-3'], matinSoir: ['m1-5'], cent: ['m3-1', 'm3-5'],
  equivalence: ['m2-2', 'm2-3'], operation: ['m2-4', 'm2-3'], bondOublie: ['m3-3', 'm3-4'], etMoins: ['m1-6']
};

const lignes = [];
let echec = false;
function note(ok, texte) { if (!ok) echec = true; lignes.push(`| ${ok ? '✅' : '❌'} | ${texte} |`); console.log((ok ? 'OK   ' : 'ÉCHEC ') + texte); }

async function nouvellePage(browser, w, h, erreurs) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  page.on('pageerror', e => erreurs.push(e.message));
  page.on('console', m => { if (m.type() === 'error') erreurs.push(m.text()); });
  await page.addInitScript(p => { if (!localStorage.getItem('marc.tictac.prefs')) localStorage.setItem('marc.tictac.prefs', p); }, PREFS);
  await page.goto(URL + '?nocache=' + Date.now());
  await page.waitForFunction(() => window.__tictac);
  return page;
}
// Joue la question en cours jusqu'au bout, en répondant juste
async function finirQuestion(page) {
  for (let g = 0; g < 10; g++) {
    if (await page.evaluate(() => __tictac.etat().question.fini)) return true;
    await page.evaluate(() => __tictac.juste());
    await page.waitForTimeout(720);
  }
  return false;
}
// Amène le jeu sur la question n° idx du niveau
async function allerA(page, niv, idx) {
  await page.evaluate(n => __tictac.lancer(n), niv);
  for (let i = 0; i < idx; i++) { await finirQuestion(page); await page.evaluate(() => __tictac.suivant()); }
  await page.waitForTimeout(100);
}

(async () => {
  fs.mkdirSync('captures', { recursive: true });
  if (LIVE) {
    for (let i = 0; ; i++) {
      const live = await fetch(URL + 'sw.js?nocache=' + Date.now()).then(r => r.text()).catch(() => '');
      if (live.includes(expectedCache)) { console.log('Version en ligne : ' + expectedCache); break; }
      if (i >= 18) { console.log('Version en ligne différente de ' + expectedCache + ' après 3 min'); process.exit(1); }
      await new Promise(r => setTimeout(r, 10000));
    }
  }
  const browser = await chromium.launch();

  // 1. Les 7 tailles : aucun écran de question ne défile
  for (const [w, h] of SIZES) {
    const erreurs = [];
    const page = await nouvellePage(browser, w, h, erreurs);
    let pire = 0, pireEcran = '', petiteHorloge = 9999;
    for (const [niv, idx] of ECRANS) {
      await allerA(page, niv, idx);
      const mesure = async (etiquette) => {
        const d = await page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
        if (d > pire) { pire = d; pireEcran = etiquette; }
        const t = await page.evaluate(() => { const s = document.querySelector('#scene .horloge:not(.mini-horloge .horloge)'); if (!s) return null; const r = s.getBoundingClientRect(); return Math.min(r.width, r.height); });
        if (t && t < petiteHorloge) petiteHorloge = Math.round(t);
      };
      await mesure(niv + ' question');
      if (w === 320 || w === 390) await page.screenshot({ path: `captures/${w}x${h}-${niv}-${idx}.png` });
      // une erreur pour voir l'astuce
      const st = await page.evaluate(() => __tictac.etat().question);
      const f = st.fautes && Object.values(st.fautes)[0];
      if (f !== undefined) { await page.evaluate(v => __tictac.repondre(v), f); await page.waitForTimeout(150); await mesure(niv + ' astuce'); }
    }
    note(pire <= 0 && !erreurs.length, `${w}×${h} : ${pire > 0 ? 'dépasse de ' + pire + ' px (' + pireEcran + ')' : 'tient sans défiler'}, horloge ${petiteHorloge} px${erreurs.length ? ', erreurs : ' + erreurs.join(' / ') : ''}`);
    await page.close();
  }

  // 2. Une série complète dans chaque monde, et « Je me teste »
  {
    const erreurs = [];
    const page = await nouvellePage(browser, 390, 844, erreurs);
    for (const niv of ['m1-4', 'm2-3', 'm3-3', 'm3-6', 'test']) {
      if (niv === 'test') await page.evaluate(() => __tictac.test()); else await page.evaluate(n => __tictac.lancer(n), niv);
      let n = 0;
      while ((await page.evaluate(() => __tictac.etat().ecran)) === 'jeu' && n++ < 20) {
        if (!(await finirQuestion(page))) break;
        await page.evaluate(() => __tictac.suivant());
      }
      const fin = await page.evaluate(() => ({ ecran: __tictac.etat().ecran, res: __tictac.etat().serie.res, prog: __tictac.prog() }));
      const bons = fin.res.filter(Boolean).length;
      note(fin.ecran === 'vFin' && bons === 10 && !erreurs.length, `Série complète ${niv} : ${bons}/10, écran de fin ${fin.ecran === 'vFin' ? 'atteint' : 'non atteint'}`);
      if (niv === 'm1-4') await page.screenshot({ path: 'captures/fin-de-serie.png' });
    }
    const p = await page.evaluate(() => __tictac.prog());
    note(p.m1[3] === 3 && p.m1[4] === 0, 'Étoiles gardées et niveau suivant ouvert');
    await page.close();
  }

  // 3. Glisser la grande aiguille fait avancer la petite (engrenage)
  {
    const erreurs = [];
    const page = await nouvellePage(browser, 390, 844, erreurs);
    let ok = false;
    for (let k = 0; k < 10 && !ok; k++) {
      await allerA(page, 'm1-4', 1);                       // question « placer »
      if ((await page.evaluate(() => __tictac.etat().question.type)) !== 'placer') continue;
      const avant = await page.evaluate(() => __tictac.horloge());
      const box = await page.locator('#scene svg.horloge').boundingBox();
      const s = Math.min(box.width, box.height * 320 / 328), cx = box.x + box.width / 2, cy = box.y + box.height / 2 - s * 4 / 328;
      const R = s * 100 / 320, pt = d => [cx + R * Math.sin(d * Math.PI / 180), cy - R * Math.cos(d * Math.PI / 180)];
      let [x, y] = pt(avant.m * 6);
      await page.mouse.move(x, y); await page.mouse.down();
      for (let d = avant.m * 6; d <= avant.m * 6 + 400; d += 10) { [x, y] = pt(d); await page.mouse.move(x, y); }
      await page.mouse.up();
      const apres = await page.evaluate(() => __tictac.horloge());
      const tours = ((apres.h * 60 + apres.m) - (avant.h * 60 + avant.m) + 720) % 720;
      ok = apres.h === (avant.h + 1) % 12 && tours > 60 && tours < 80;
      note(ok, `Glisser la grande aiguille : ${avant.h}h${avant.m} → ${apres.h}h${apres.m} (la petite a avancé d'une heure)`);
      break;
    }
    await page.close();
  }

  // 4. Chaque type d'erreur déclenche la bonne astuce
  {
    const erreurs = [];
    const page = await nouvellePage(browser, 390, 844, erreurs);
    for (const [type, nivs] of Object.entries(TYPES)) {
      let vu = null;
      for (let essai = 0; essai < 40 && vu === null; essai++) {
        const niv = nivs[essai % nivs.length];
        if (essai % 10 === 0 || (await page.evaluate(() => __tictac.etat().ecran)) !== 'jeu') await page.evaluate(n => __tictac.lancer(n), niv);
        const q = await page.evaluate(() => __tictac.etat().question);
        if (q.fautes && q.fautes[type] !== undefined) {
          await page.evaluate(v => __tictac.repondre(v), q.fautes[type]);
          await page.waitForTimeout(100);
          vu = await page.evaluate(() => __tictac.astuce());
        } else { await finirQuestion(page); await page.evaluate(() => __tictac.suivant()); }
      }
      note(vu === type, `Erreur « ${type} » → astuce ${vu === null ? 'non trouvée' : '« ' + vu + ' »'}`);
    }
    note(!erreurs.length, 'Console sans erreur pendant les erreurs volontaires' + (erreurs.length ? ' : ' + erreurs.join(' / ') : ''));
    await page.close();
  }

  // 5. Hors ligne après une première visite
  if (URL.startsWith('https:') || URL.includes('localhost')) {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();
    await page.goto(URL);
    await page.evaluate(() => navigator.serviceWorker.ready);
    await page.waitForTimeout(1500);
    await ctx.setOffline(true);
    let ok = false;
    try { await page.reload(); ok = await page.evaluate(() => !!window.__tictac && document.title === 'Tic-tac'); } catch (e) {}
    note(ok, 'Fonctionne hors ligne après une première visite');
    await ctx.close();
  }

  await browser.close();
  const rapport = '| | Vérification |\n|---|---|\n' + lignes.join('\n');
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, '## Test téléphone (site en ligne)\n\n' + rapport + '\n');
  process.exit(echec ? 1 : 0);
})();
