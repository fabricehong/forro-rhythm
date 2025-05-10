# Plan d'implémentation – Application pédagogique des rythmes du forró (corrigé)

## Objectif
Créer une application web interactive permettant de visualiser, comprendre et jouer les cinq rythmes fondamentaux du forró à l'aide d'un octogone rythmique, en s'appuyant sur la version corrigée de la théorie (voir `theorie.md`).

---

## 1. Structure générale de l'interface

- **En-tête**
  - Titre de l'application
  - Court descriptif pédagogique

- **Sélecteur de rythme**
  - Menu déroulant ou boutons pour choisir entre Xote, Baião, Forró/Rojão, Xaxado, Arrastapé

- **Visualisation de l'octogone rythmique**
  - Octogone affichant les 8 subdivisions dans l'ordre **1 – i – & – a – 2 – i – & – a** (sens horaire)
  - Affichage des frappes (Tu, Pum, Tcha) selon le rythme sélectionné, y compris frappes simultanées (ex : Pum + Tcha)
  - Couleurs et icônes distinctes pour chaque son
  - Animation de la progression (aiguille ou surbrillance)

- **Contrôles de lecture**
  - Boutons Play/Pause/Stop
  - Réglage du tempo (slider ou input)

- **Explications pédagogiques**
  - Description du rythme sélectionné
  - Conseils d'écoute et de danse

---

## 2. Correspondance stricte avec la théorie corrigée

- **Ordre des subdivisions** :
  - Toujours respecter l'ordre **1 – i – & – a – 2 – i – & – a** (positions 0 à 7, sens horaire)

- **Frappes par subdivision** :
  - Chaque subdivision peut contenir :
    - Une frappe unique (Tu, Pum ou Tcha)
    - Plusieurs frappes simultanées (ex : Pum + Tcha)
    - Un silence (aucune frappe)
  - Les frappes simultanées doivent être jouées exactement au même instant (superposition sonore et graphique)
  - Les silences sont des subdivisions sans frappe, à ne pas jouer

- **Attribution correcte des instruments** :
  - Tu = Macepa fermé (cercle rouge foncé)
  - Pum = Macepa ouvert (cercle brun)
  - Tcha = Bacalhau (cercle bleu)

- **Synchronisation stricte** :
  - L'animation de l'octogone, la progression visuelle et la lecture audio doivent être parfaitement synchronisées avec la structure rythmique corrigée

---

## 3. Structure de données recommandée

- Un rythme est un tableau de 8 subdivisions (index 0 à 7, dans l'ordre horaire)
- Chaque subdivision est un tableau de frappes (chaque frappe = { type: 'Tu' | 'Pum' | 'Tcha', instrument: string })
- Exemple :
  ```js
  // Pour Xote
  [
    [{type: 'Tu', instrument: 'Macepa fermé'}], // 1
    [],                                         // i
    [{type: 'Tcha', instrument: 'Bacalhau'}],   // &
    [],                                         // a
    [{type: 'Pum', instrument: 'Macepa ouvert'}], // 2
    [],                                         // i
    [
      {type: 'Pum', instrument: 'Macepa ouvert'},
      {type: 'Tcha', instrument: 'Bacalhau'}
    ], // & (frappes simultanées)
    [] // a
  ]
  ```
- Cette structure permet de représenter fidèlement tous les rythmes et de déclencher plusieurs sons simultanément

---

## 4. Composants React prévus

- `App` : composant racine
- `Header` : titre et descriptif
- `RhythmSelector` : choix du rythme
- `OctagonVisualizer` : affichage et animation de l'octogone (gère frappes multiples et silences)
- `PlaybackControls` : play/pause/stop, tempo
- `RhythmExplanation` : explications pédagogiques

---

## 5. Gestion de l'audio et de l'animation

- Utilisation de Tone.js pour séquencer et jouer les sons (Tu, Pum, Tcha)
- À chaque subdivision, déclencher toutes les frappes listées (simultanées si besoin)
- Ne rien jouer sur les subdivisions vides
- Synchronisation stricte entre l'animation de la progression et la lecture audio

---

## 6. Extensions possibles (optionnel)

- Visualisation audio (oscilloscope)
- Mode apprentissage (affichage progressif)
- Personnalisation des sons ou du tempo

---

## 7. Technologies utilisées

- React + TypeScript (Vite)
- Tone.js (audio)
- styled-components (ou Tailwind CSS)
- react-icons, framer-motion (optionnel)

---

## 8. Étapes de développement

1. Initialisation du projet et installation des dépendances
2. Création de la structure de base des composants
3. Implémentation de l'octogone rythmique (statique puis animé, frappes multiples)
4. Intégration de Tone.js pour la lecture audio synchronisée
5. Ajout des contrôles de lecture et du tempo
6. Ajout des explications pédagogiques dynamiques
7. Améliorations visuelles et animations
8. Tests et ajustements pédagogiques 