# Théorie rythmique du forró – Rhythm Octagon

Cette documentation présente les fondements rythmiques de cinq styles musicaux brésiliens associés au forró : **Xote**, **Baião**, **Forró/Rojão**, **Xaxado** et **Arrastapé**.  
Elle s’appuie sur une représentation circulaire appelée **Rhythm Octagon**, divisée en huit subdivisions égales.

---

## Structure rythmique de l’octogone

Le Rhythm Octagon fonctionne comme une **horloge à 8 subdivisions** parcourue **dans le sens des aiguilles d’une montre**.  
L’ordre correct des subdivisions est :

> **1 – i – & – a – 2 – i – & – a**

Chaque point peut recevoir (ou non) une frappe percussive.

### Répartition des temps

| Position | Nom | Rôle rythmique |
|----------|-----|----------------|
| 0 | **1** | Temps fort principal |
| 1 | **(i)** | Syncope |
| 2 | **&** | Contretemps (off-beat) |
| 3 | **(a)** | Syncope |
| 4 | **2** | Temps fort secondaire *(ou repos, selon le style)* |
| 5 | **(i)** | Syncope |
| 6 | **&** | Contretemps (off-beat) |
| 7 | **(a)** | Syncope |

> 🔎 **Pourquoi cette correction ?**  
> Dans la première documentation, les repères **(a)** et **(i)** étaient inversés ; on parcourait 1 – **a** – & – **i** – 2 …  
> Cela décalait toutes les syncopes d’une subdivision et produisait un phrasé rythmique incorrect.  
> La table ci-dessus suit désormais le sens horaire observé sur les diagrammes.

---

## Les sons utilisés

Trois frappes fondamentales construisent l’ensemble des patterns ; chacune possède une couleur sonore et un rôle précis :

### Macepa fermé — **Tu**
* Son sec, court, percussif.  
* Sert à marquer les **temps forts** (position 0 et parfois 7).  
* Donne la **pulsation principale** au rythme.

### Macepa ouvert — **Pum**
* Son grave, résonant.  
* Accentue un **balancier** ou une **marche** (souvent sur les positions 4 et 6).  
* Apporte du **mouvement** et du poids.

### Bacalhau — **Tcha**
* Son aigu, claquant.  
* Placé sur les **contretemps** (&) ou certaines syncopes pour créer du **rebond**.  
* Rend le tout plus dansant.

> ⚠️ **Frappes simultanées**  
> Lorsque deux cercles concentriques apparaissent sur un même point de l’octogone, cela indique que **deux sons sont joués exactement sur la même subdivision** (ex. : **Pum + Tcha** à la position “&” dans Xote et Arrastapé).  
> L’implémentation doit déclencher les deux échantillons au même instant.

Avec cette correction de l’ordre des subdivisions et la clarification des frappes simultanées, la grille est maintenant conforme à la pratique des zabumbeiros et aux diagrammes validés.

## Les cinq rythmes fondamentaux (détail subdivision par subdivision)
*(ordre des subdivisions : 1 – i – & – a – 2 – i – & – a)*

> **Légende des frappes**  
> **Tu :** _Macepa fermé_ (frappe grave, cercle rouge)  
> **Pum :** _Macepa ouvert_ (frappe grave, cercle brun)  
> **Tcha :** _Bacalhau_ (frappe aiguë, cercle bleu)  
> **Tu + Tcha / Pum + Tcha :** deux cercles concentriques = frappes simultanées  

---

### 1. Xote

| Position | Nom | Frappe         | Instrument               | Rôle rythmique        |
| -------- | --- | -------------- | ------------------------ | --------------------- |
| 0        | 1   | **Tu**         | Macepa fermé             | Temps fort principal  |
| 1        | (i) |                |                          | Syncope               |
| 2        | &   | **Tcha**       | Bacalhau                 | Contretemps (aigu)    |
| 3        | (a) |                |                          | Syncope               |
| 4        | 2   | **Pum**        | Macepa ouvert            | Temps fort secondaire |
| 5        | (i) |                |                          | Syncope               |
| 6        | &   | **Pum + Tcha** | Macepa ouvert + Bacalhau | Contretemps renforcé  |
| 7        | (a) |                |                          | Syncope               |

**Structure** : Tu – Tcha – Pum – Pum/Tcha  
**Caractère** : doux, balancé, accessible  

---

### 2. Baião

| Position | Nom | Frappe | Instrument | Rôle rythmique |
| -------- | --- | ------ | ---------- | -------------- |
| 0 | 1 | **Tu** | Macepa fermé | Temps fort principal |
| 1 | (i) | | | Syncope |
| 2 | & | **Tcha** | Bacalhau | Contretemps |
| 3 | (a) | **Pum** | Macepa ouvert | Syncope basse |
| 4 | 2 | | | Temps faible (repos) |
| 5 | (i) | | | Syncope |
| 6 | & | **Tcha** | Bacalhau | Contretemps |
| 7 | (a) | | | Syncope |

**Structure** : Tu – Tcha – Pum – Tcha  
**Caractère** : terrien, énergique, marche appuyée  

---

### 3. Forró / Rojão

| Position | Nom | Frappe | Instrument | Rôle rythmique |
| -------- | --- | ------ | ---------- | -------------- |
| 0 | 1 | **Pum** | Macepa ouvert | Temps fort principal |
| 1 | (i) | | | Syncope |
| 2 | & | — | — | Contretemps (silence ou fantôme) |
| 3 | (a) | **Tu** | Macepa fermé | Syncope haute |
| 4 | 2 | **Tcha** | Bacalhau | Temps fort secondaire (aigu) |
| 5 | (i) | | | Syncope |
| 6 | & | **Tcha** | Bacalhau | Contretemps |
| 7 | (a) | **Pum** | Macepa ouvert | Syncope basse |

**Structure** : Pum – Tu – Tcha – Tcha/Pum  
**Caractère** : joyeux, dansant, très répandu  

---

### 4. Xaxado

| Position | Nom | Frappe   | Instrument    | Rôle rythmique               |
| -------- | --- | -------- | ------------- | ---------------------------- |
| 0        | 1   | **Tu**   | Macepa fermé  | Temps fort principal         |
| 1        | (i) | **Tcha** | Bacalhau      | Syncope aiguë                |
| 2        | &   |          |               | Contretemps (silence)        |
| 3        | (a) | **Tu**   | Macepa fermé  | Syncope haute                |
| 4        | 2   | **Tcha** | Bacalhau      | Temps fort secondaire (aigu) |
| 5        | (i) |          |               | Syncope                      |
| 6        | &   | **Pum**  | Macepa ouvert | Contretemps grave            |
| 7        | (a) |          |               | Syncope                      |

**Structure** : Tu – Tcha – Tu – Tcha / Pum  
**Caractère** : martial, marqué, proche d’une marche rapide  

---

### 5. Arrastapé

| Position | Nom | Frappe         | Instrument               | Rôle rythmique        |
| -------- | --- | -------------- | ------------------------ | --------------------- |
| 0        | 1   | **Tu**         | Macepa fermé             | Temps fort principal  |
| 1        | (i) |                |                          | Syncope               |
| 2        | &   | **Tcha**       | Bacalhau                 | Contretemps (aigu)    |
| 3        | (a) |                |                          | Syncope               |
| 4        | 2   | **Pum**        | Macepa ouvert            | Temps fort secondaire |
| 5        | (i) |                |                          | Syncope               |
| 6        | &   | **Pum + Tcha** | Macepa ouvert + Bacalhau | Contretemps renforcé  |
| 7        | (a) |                |                          | Syncope               |

**Structure** : Tu – Tcha – Pum – Pum/Tcha  
**Caractère** : rapide, bondissant ; impression de “course” rythmique — un xote accéléré et plus insistant

---

### 6. Côco

| Position | Nom | Frappe   | Instrument    | Rôle rythmique               |
| -------- | --- | -------- | ------------- | ---------------------------- |
| 0        | 1   | **Pum**  | Macepa ouvert | Temps fort principal         |
| 1        | (i) | –        | –             | Syncope                      |
| 2        | &   | –        | –             | Contretemps (silence)        |
| 3        | (a) | **Tu**   | Macepa fermé  | Syncope haute                |
| 4        | 2   | **Tcha** | Bacalhau      | Temps fort secondaire (aigu) |
| 5        | (i) | –        | –             | Syncope                      |
| 6        | &   | –        | –             | Contretemps (silence)        |
| 7        | (a) | **Pum**  | Macepa ouvert | Syncope basse                |
**Structure** : Pum – Tu – Tcha – Tcha - Pum  
**Caractère** : frappes marquées, balancement énergique, très dansant

---

### 7. Eletrônico

| Position | Nom  | Frappe   | Instrument      | Rôle rythmique              |
|----------|------|----------|----------------|-----------------------------|
| 0        | 1    | **Tcha** | Bacalhau       | Temps fort secondaire (aigu) |
| 1        | (i)  | –        | –              | Syncope                      |
| 2        | &    | –        | –              | Contretemps (silence)        |
| 3        | (a)  | **Tcha** | Bacalhau       | Syncope aiguë                |
| 4        | 2    | **Pum**  | Macepa ouvert  | Temps fort principal         |
| 5        | (i)  | –        | –              | Syncope                      |
| 6        | &    | **Pum**  | Macepa ouvert  | Syncope basse                |
| 7        | (a)  | –        | –              | Syncope                      |

**Structure** : Tcha – Tcha – Pum – Pum
**Caractère** : régulier, moderne, inspiré des boîtes à rythmes électroniques