# Méthode et sources

Pourquoi Tic-tac est fait comme ça, et d'où viennent les idées. Synthèse d'une recherche documentaire faite en novembre 2026.

Limite : pour les articles scientifiques, seuls les résumés ont pu être lus (les textes complets sont payants). La recherche sur l'apprentissage de l'heure est peu abondante, comme le note la synthèse de Cambridge Mathematics.

## Ce que dit la recherche, et ce que fait l'appli

| Constat | Dans l'appli |
|---|---|
| **Lire l'heure est long et difficile, même à 10-12 ans**, surtout pour les durées (Kamii & Russell, 2012). | Des séances courtes tous les jours, des révisions espacées, et un ton qui ne culpabilise pas. |
| **La petite aiguille est la plus dure.** Les élèves la placent nettement moins bien que la grande (*Journal of Numerical Cognition*, 2018). Erreur classique : 8h45 lu « 9h45 ». | Un niveau « petite aiguille seule », une petite aiguille toujours dessinée à sa vraie place (presque sur le 9 à 8h45), et une horloge à engrenages. |
| **Savoir lire un affichage numérique ne prouve pas qu'on comprend l'heure** (guide PDST ; Cambridge Mathematics). | On garde toujours le cadran à aiguilles et on relie les deux écritures (horloge ↔ `13h35`). |
| **Trois erreurs typiques** : confondre les aiguilles, lire le cadran « comme un réveil » (grande aiguille sur 3 → « 3 min »), mélanger les côtés « et » et « moins » (Craig Barton). | L'appli reconnaît ces erreurs et donne l'astuce précise (§ « Les erreurs que l'appli reconnaît » du README). |
| **La langue compte** : les expressions changent d'une langue à l'autre (Bock et al., 2003). En français : et quart, moins le quart, et la double lecture du soir. | Un niveau bonus « Dire l'heure », avec la voix et le cadran coloré côté « et » / côté « moins ». |
| **Enseigner explicitement et pas à pas** (Burny, Valcke & Desoete, 2009), **en laissant l'enfant raisonner** (Kamii & Russell). | Des niveaux dans l'ordre, des aides retirées petit à petit, et l'enfant fait les bonds lui-même. |
| **Le vrai obstacle des durées : 60 et pas 100** (Kamii & Russell : « coordonner des unités hiérarchiques »). Exemple : 2h50 + 20 min = « 2h70 ». | La droite des bonds qui passe par l'heure pile, et des pièges proposés exprès. |
| **La ligne du temps est l'outil clé des durées**, en passant de la ligne au cadran et inversement (Earnest, 2017). | La droite des bonds de la leçon, avec le même trajet montré sur l'horloge. |
| **Répétition espacée** : revenir sur ce qui a été raté. Principe général des sciences de l'apprentissage, pas propre à l'heure. | Une question ratée revient le lendemain, puis 3 jours, puis 7 jours après. |

## L'ordre d'apprentissage suivi

1. La petite aiguille seule (« 3 h passées », « presque 4 h »).
2. La grande aiguille seule : de 5 en 5, puis à la minute près.
3. Les deux aiguilles ensemble, avec une horloge à engrenages.
4. Matin / après-midi, de 0 à 24 h, avec les moments de la journée.
5. Le vocabulaire oral (et quart, moins le quart…), en bonus.
6. Les unités de durée et les conversions.
7. Les durées sur la droite des bonds, en passant par l'heure pile, y compris en passant minuit.

## Ce que demande le programme (cycle 3)

D'après le document de l'académie de Bordeaux (juin 2025) qui reprend les repères de progressivité.

| | CM1 | CM2 |
|---|---|---|
| Lire l'heure | horloge à aiguilles, à la minute près | idem, jusqu'à la seconde |
| Placer les aiguilles | heures et minutes | heures, minutes, secondes |
| Durées | temps écoulé entre deux instants (h, min) | idem avec les secondes |
| Problèmes | 1 ou 2 étapes | 1 ou plusieurs étapes |

Les secondes sur l'horloge (CM2) ne sont pas dans la première version de l'appli.

## Sources

Recherche
- Kamii, C. & Russell, K. A. (2012). *Elapsed Time: Why Is It So Difficult to Teach?* Journal for Research in Mathematics Education 43(3). [nctm.org](https://nctm.org/Publications/Journal-for-Research-in-Mathematics-Education/2012/Vol43/Issue3/Elapsed-Time_-Why-Is-It-So-Difficult-to-Teach_) (résumé seulement)
- *Time as a Measure: Elementary Students Positioning the Hands of an Analog Clock*, Journal of Numerical Cognition (2018). [jnc.psychopen.eu](https://jnc.psychopen.eu/article/view/94) (résumé seulement)
- Cambridge Mathematics, *Espresso 32 : Developing concepts of time* (synthèse citant Burny et al. 2009, Earnest 2017, Bock et al. 2003, Ethridge & King 2005). [PDF](https://www.cambridgemaths.org/Images/espresso_32_developing_concepts_of_time.pdf)
- Thèse de l'université de Durham, *An examination of how children read the time*. [etheses.durham.ac.uk](https://etheses.durham.ac.uk/id/eprint/6561)

Guides pour enseignants
- PDST / curriculumonline.ie, *Strategies and tools for teaching Time*. [PDF](https://www.curriculumonline.ie/getattachment/0196c2d2-3b03-43e3-a457-9f8f03ba0318/PMC_SM_Strategies-and-tools-for-teaching-Time.pdf)
- Graham Fletcher, *The one-handed clock in a digital era*. [gfletchy.com](https://gfletchy.com/2016/10/31/the-one-handed-clock-in-a-digital-era/)
- Craig Barton, *Question of the Week 6: Telling the Time*. [podcast.mrbartonmaths.com](https://podcast.mrbartonmaths.com/question-week-6-telling-time/)

France
- Académie de Bordeaux, *Grandeurs et mesures cycle 3* (juin 2025). [PDF](https://ent2d.ac-bordeaux.fr/disciplines/mathematiques/wp-content/uploads/sites/3/2025/06/2025-06-Grandeurs-et-mesures-cycle-3.pdf)
- Digischool, *La méthode pour apprendre à lire l'heure*. [digischool.fr](https://www.digischool.fr/articles/primaire/la-methode-pour-apprendre-a-lire-lheure/)
- Pass-Education, leçons et exercices cycle 3 sur l'heure et les durées. [pass-education.fr](https://www.pass-education.fr/heure-duree-ce2-cm1-cm2-grandeurs-et-mesures-cycles-3)
