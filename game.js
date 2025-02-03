// game.js

// Variables globales et états du jeu
let lastTime = 0;
let gameRunning = true;
let gamePaused = false;

// Objets et états pour les entrées clavier
const keys = {};

// Exemple d'objet Pac-Man
const pacman = {
  x: 100, // position x initiale
  y: 100, // position y initiale
  speed: 200, // pixels par seconde
  direction: { x: 0, y: 0 },
  update: function(deltaTime) {
    this.x += this.direction.x * this.speed * (deltaTime / 1000);
    this.y += this.direction.y * this.speed * (deltaTime / 1000);
    
    // Limiter Pac-Man à l'intérieur du game-board (facultatif)
    this.x = Math.max(0, Math.min(this.x, 800 - 40));
    this.y = Math.max(0, Math.min(this.y, 600 - 40));

    const pacmanElement = document.getElementById('pacman');
    pacmanElement.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
};

// Boucle principale du jeu
function gameLoop(timestamp) {
  if (!gameRunning) return;

  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  if (!gamePaused) {
    updateGame(deltaTime);
    renderGame();
  }
  
  requestAnimationFrame(gameLoop);
}

// Mise à jour des états du jeu
function updateGame(deltaTime) {
  // Mise à jour de la direction de Pac-Man en fonction des touches enfoncées
  if (keys['ArrowLeft']) {
    pacman.direction = { x: -1, y: 0 };
  } else if (keys['ArrowRight']) {
    pacman.direction = { x: 1, y: 0 };
  } else if (keys['ArrowUp']) {
    pacman.direction = { x: 0, y: -1 };
  } else if (keys['ArrowDown']) {
    pacman.direction = { x: 0, y: 1 };
  } else {
    // Aucune touche directionnelle enfoncée
    pacman.direction = { x: 0, y: 0 };
  }

  // Mise à jour de Pac-Man
  pacman.update(deltaTime);

  // Ici, ajoute la mise à jour des fantômes, du timer, du score, etc.
}

// Rendu des éléments du jeu
function renderGame() {
  // Si tu as d'autres éléments à animer ou à mettre à jour dans le DOM, fais-le ici.
}

// Gestion du clavier
window.addEventListener('keydown', (e) => {
  keys[e.code] = true;
  if (e.code === 'Escape') {
    togglePause();
  }
});

window.addEventListener('keyup', (e) => {
  keys[e.code] = false;
});

// Gestion du menu de pause
function togglePause() {
  gamePaused = !gamePaused;
  const pauseMenu = document.getElementById('pause-menu');
  pauseMenu.classList.toggle('hidden', !gamePaused);
}

document.getElementById('continue').addEventListener('click', () => {
  togglePause();
});

document.getElementById('restart').addEventListener('click', () => {
  restartGame();
});

function restartGame() {
  // Réinitialisation des variables de jeu
  pacman.x = 100;
  pacman.y = 100;
  // Réinitialise également le score, le timer, et autres éléments du jeu au besoin

  // Reprendre le jeu
  gamePaused = false;
  document.getElementById('pause-menu').classList.add('hidden');
}

// Lancer la boucle principale du jeu
requestAnimationFrame(gameLoop);
