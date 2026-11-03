# Tic-tac

Apprendre à lire l'heure et à calculer des durées, sur téléphone ou tablette. L'appli reprend toute la leçon de CM « Lire l'heure, connaître et calculer des durées » : l'horloge à aiguilles, les unités de durée et les conversions, et le calcul d'une durée avec la droite des bonds.

- **Jouer en ligne :** https://lechampdelaurore-boop.github.io/tic-tac/
- **Pour les parents :** [guide des parents](docs/guide-parents.md)
- **Pourquoi l'appli est faite comme ça :** [méthode et sources](docs/methode-et-sources.md)

## Le principe

- Une **horloge qu'on fait tourner au doigt**. Les aiguilles sont liées comme sur une vraie horloge : quand on tourne la grande, la petite avance toute seule, 12 fois moins vite.
- Les deux aiguilles ne se ressemblent pas : la **petite aiguille** (heures) est courte, épaisse et bleue ; la **grande aiguille** (minutes) est longue, fine et framboise.
- On travaille dans les deux sens : **lire** (« Quelle heure est-il ? ») et **placer** (« Mets l'horloge à 7h20 »).
- Des aides au début de chaque série (les minutes 5, 10, 15… autour du cadran, les chiffres des heures en bleu), retirées vers la fin.
- Quand on se trompe, l'appli **reconnaît l'erreur** et donne l'astuce qui va avec, au lieu d'un simple « faux ».
- Des séances courtes : 10 questions, environ 5 minutes. Les questions ratées reviennent les jours suivants.

## Les trois mondes

Les trois mondes sont ouverts dès le début. Dans chaque monde, un niveau réussi ouvre le suivant.

### 🕐 Lire l'heure

1. **Les deux aiguilles** : laquelle indique les heures, laquelle indique les minutes.
2. **La petite aiguille seule** : « il est 3 h pile, 3 h passées ou presque 4 h ? ».
3. **La grande aiguille seule** : compter les minutes de 5 en 5, puis à la minute près.
4. **Lire l'heure** : les deux aiguilles ensemble, lire et placer l'heure complète, jusqu'à la minute près.
5. **Matin ou après-midi** : de 0 à 12 h et de 12 à 24 h (1h35 ou 13h35), avec les moments de la journée (réveil, école, cantine, goûter, dodo).
6. **Dire l'heure (bonus)** : et quart, et demie, moins le quart, moins dix… La voix peut dire la phrase. Ce niveau n'est pas sur la fiche de leçon.

### ⏳ Les durées

1. **La bonne unité** : secondes, minutes, heures, jours, mois, années ou siècles ? Durées courtes et durées longues.
2. **Les équivalences** : 1 jour = 24 h, 1 h = 60 min, 1 min = 60 s, 1 semaine = 7 jours, 1 an = 365 jours, 1 an = 12 mois.
3. **Vers la petite unité** : on multiplie (2 jours = 2 × 24 h = 48 h).
4. **Vers la grande unité** : on divise (72 h = 3 jours).
5. **Défis** : problèmes en deux étapes (combien d'heures dans une semaine ?).

### 📏 Calculer une durée

La **droite des bonds**, comme sur la fiche : l'heure de début à gauche, l'heure de fin à droite, l'heure pile qui suit le début, l'heure pile qui précède la fin. On fait les bonds soi-même, l'appli les additionne. Aux niveaux 3 et 4, la droite guide pas à pas les 6 premières questions de la série ; ensuite on tape directement la durée, la droite restant là comme brouillon.

```
  +30 min       +3 h        +20 min
 23h30 ---> 0h00 ------> 3h00 ---> 3h20      = 3 h 50 min
```

1. **Jusqu'à l'heure pile** (14h40 → 15h00).
2. **Un seul bond** : heures entières, ou dans la même heure (9h00 → 11h00, 9h10 → 9h45).
3. **Les trois bonds** (20h45 → 23h15).
4. **Passer minuit** (23h30 → 3h20).
5. **Quelle heure sera-t-il ?** (il est 2h50, dans 20 min il sera… 3h10, et pas 2h70).
6. **Petites histoires** : film, récré, cantine, trajet, recette, match.

À côté de la droite, la même durée se voit sur l'horloge (la grande aiguille tourne pendant chaque bond).

### ✏️ Je me teste

Toujours ouvert. 10 questions qui mélangent les trois mondes (4 pour lire l'heure, 3 sur les durées, 3 de calcul), dont les 4 questions de la fiche. À la fin, le score de chaque partie et un bouton pour travailler la plus faible. Pratique la veille d'une évaluation.

## Les erreurs que l'appli reconnaît

| Erreur | Exemple | Astuce |
|---|---|---|
| Aiguilles inversées | 2h35 lu 7h10 | Les aiguilles clignotent avec leur nom. |
| Petite aiguille lue trop tôt | 8h45 lu 9h45 | « Elle n'est pas encore arrivée sur le 9. » |
| Minutes lues comme le chiffre | grande aiguille sur le 3 lue « 3 min » | On compte de 5 en 5 : 5, 10, 15. |
| Matin / après-midi | 4h30 au lieu de 16h30 | « Après midi, on ajoute 12. » |
| Heure comptée sur 100 | 2h50 + 20 min = 2h70 | « Une heure, c'est 60 minutes, pas 100. » |
| Mauvaise équivalence | 2 h = 200 min | Rappel de l'égalité, puis l'opération. |
| × au lieu de ÷ (ou l'inverse) | 72 h = 1 728 jours | « Unité plus grande : il en faut moins, on divise. » |
| Bond oublié | 30 min + 3 h sans les 20 min | Le bond manquant clignote. |
| « Et » et « moins » mélangés | « neuf heures moins le quart » lu 9h15 | « Moins », c'est avant l'heure. Le côté « et » et le côté « moins » du cadran se colorent. |

Au deuxième essai raté, l'appli montre la bonne réponse en l'expliquant, et la question revient un peu plus tard dans la série. Jamais de rouge ni de croix.

## Séance du jour et révisions

- **Ma séance du jour** : 10 questions : jusqu'à 3 questions ratées les jours d'avant, le reste vient du prochain niveau à travailler.
- Une question ratée revient le lendemain, puis 3 jours après, puis 7 jours après. Un nouvel échec la remet au lendemain.
- Niveau réussi à 8 bonnes réponses sur 10 du premier coup. Étoiles : 1 à 8/10, 2 à 9/10, 3 à 10/10. On garde le meilleur score.
- Une créature arrive en récompense à la fin de chaque série réussie, et parfois sur une bonne réponse. 3 étoiles partout dans un monde donnent un trophée.

## Carnet du parent

Lien discret en bas de l'accueil : étoiles par niveau, jours joués sur les 14 derniers jours, erreurs les plus fréquentes sur 7 jours, « Remettre à zéro » et « Copier le résumé ». Détails dans le [guide des parents](docs/guide-parents.md).

## Réglages ⚙

Sons, animations, voix (lire l'heure à voix haute), vibrations. Les animations respectent aussi le réglage « réduire les animations » du téléphone.

Les progrès restent dans le navigateur de l'appareil : aucun compte, et rien n'est envoyé sur internet.

## Fichiers

- `index.html` : toute l'appli (HTML, CSS et JavaScript, sans bibliothèque). Le haut du style reprend la charte commune des applis ; les 30 personnages de récompense sont dans le script. Les heures et les nombres sont tirés au hasard dans les bornes de chaque niveau ; seules les situations « la bonne unité » et les petites histoires sont écrites à la main.
- `sw.js` et `manifest.webmanifest` : mode hors ligne et installation. Après une modification des fichiers de l'appli, changer la valeur de `CACHE` dans `sw.js`.
- `fonts/` : polices Fredoka et Nunito (licence SIL Open Font License, voir les fichiers `OFL-*.txt`).
- `docs/` : le [guide des parents](docs/guide-parents.md) et la [méthode et les sources](docs/methode-et-sources.md).
- `tests/telephone.cjs` et `.github/workflows/test-telephone.yml` : après chaque mise en ligne, GitHub ouvre le site publié dans Chrome au format téléphone (7 tailles d'écran), joue une série dans chaque monde, fait glisser la grande aiguille et provoque chaque type d'erreur, en vérifiant qu'il n'y a ni ascenseur ni erreur dans la console. Résultat et captures dans l'onglet Actions. Lancement local : `npm install --no-save playwright && node tests/telephone.cjs`.
