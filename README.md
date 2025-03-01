# Pac-Man en JavaScript (DOM uniquement)

## 🎯 Objectif

Développer une version de **Pac-Man** en **JavaScript pur**, sans **canvas ni framework**, en utilisant uniquement le **DOM et HTML**. Le jeu doit respecter les contraintes suivantes :

- **60 FPS minimum** sans drop de frames
- Animation fluide avec **requestAnimationFrame**
- Un **menu pause** avec options **continuer** et **redémarrer**
- Un contrôle fluide de Pac-Man avec **le clavier**
- Un **score, un timer et un système de vies**
- **Optimisation des performances** : minimaliser repaint/layers, éviter les reflows inutiles
- Utilisation possible de **SVG** et **asynchronisme** pour améliorer les performances

---

## 🏆 Tâches Prioritaires

### ✅ **Phase 1 : Base du jeu (MVP)**

> **Objectif :** Avoir un jeu fonctionnel où Pac-Man peut se déplacer, manger des pastilles et être poursuivi par les fantômes.

### **1️⃣ Création de la Grille du Labyrinthe (HTML + CSS)**

- [ ] Définir une **grille en `<div>`** (ex : une table **20x20** ou une `grid` CSS)
- [ ] Ajouter des **murs** (bleus comme dans Pac-Man) en CSS
- [ ] Ajouter des **pastilles normales** et **super pastilles** (qui rendent les fantômes vulnérables)
- [ ] Placer **Pac-Man** et les **fantômes** dans la grille

### **2️⃣ Mouvement Fluide de Pac-Man (JS + Keyboard Events)**

- [ ] Capturer les **événements clavier (`keydown`, `keyup`)**
- [ ] Déplacer Pac-Man **sans spam de touches**
- [ ] Empêcher Pac-Man de traverser les **murs**
- [ ] Utiliser **`requestAnimationFrame`** pour un mouvement fluide (éviter `setInterval`)

### **3️⃣ Déplacement Basique des Fantômes (AI Simple)**

- [ ] Faire bouger les **fantômes** aléatoirement
- [ ] **Empêcher les fantômes de traverser les murs**
- [ ] Détecter quand un fantôme **touche Pac-Man** (perte de vie)
- [ ] Gérer la fuite des fantômes quand Pac-Man mange une **super pastille**

### **4️⃣ Gestion du Score, Vies et Timer**

- [ ] **Afficher le score** et l'augmenter quand Pac-Man mange une pastille
- [ ] **Afficher le nombre de vies** et décrémenter si Pac-Man est touché
- [ ] Ajouter un **compteur de temps (Timer/Countdown)** pour les parties chronométrées

---

## 🏅 **Phase 2 : Améliorations et Optimisations**

> **Objectif :** Améliorer l’expérience de jeu et garantir les **60 FPS sans drop**.

### **5️⃣ Ajout du Menu Pause**

- [ ] **Appuyer sur "P" pour mettre en pause**
- [ ] Afficher un **menu pause** avec **Continuer** et **Redémarrer**
- [ ] Arrêter les animations pendant la pause **sans drop de FPS**

### **6️⃣ Intelligence Artificielle Avancée des Fantômes**

- [ ] Implémenter la **vraie AI de poursuite**
- [ ] Différents comportements : **Blinky (rapide), Pinky (anticipation), Inky, Clyde**
- [ ] Faire en sorte que les fantômes **se dispersent après un certain temps**

### **7️⃣ Optimisation des Performances**

- [ ] **Réduire le repaint/layers** (vérifier avec DevTools)
- [ ] **Limiter les reflow inutiles** (ex : mise à jour DOM minimale)
- [ ] **Utiliser SVG** pour optimiser les animations
- [ ] **Gérer la mémoire** pour éviter les fuites

---

## 📌 Conclusion

Le projet sera développé en suivant une approche **itérative** et **optimisée**, garantissant une animation fluide et des performances stables.

🔹 **Prochaine Étape :** Structuration de la grille du labyrinthe en HTML + CSS 🏗️
#
