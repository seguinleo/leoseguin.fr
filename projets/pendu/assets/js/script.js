let word = '';
let maxGuesses = 6;
let score = 0;
let correctLetters = [];
let incorrectLetters = [];
let timeoutNotification = null;
const inputs = document.querySelector('.inputs');
const guessLeft = document.querySelector('.guess-left span');
const scoreP = document.querySelector('.score span');
const reset = document.querySelector('.reset-btn');
const mots = [{
  word: 'maison',
}, {
  word: 'violon',
}, {
  word: 'porte',
}, {
  word: 'macaron',
}, {
  word: 'voiture',
}, {
  word: 'avion',
}, {
  word: 'ballon',
}, {
  word: 'stylo',
}, {
  word: 'peintre',
}, {
  word: 'film',
}, {
  word: 'cerveau',
}, {
  word: 'jambon',
}, {
  word: 'tomate',
}, {
  word: 'pomme',
}, {
  word: 'moteur',
}, {
  word: 'coeur',
}, {
  word: 'tasse',
}, {
  word: 'paquet',
}, {
  word: 'souris',
}, {
  word: 'chien',
}, {
  word: 'argent',
}, {
  word: 'ville',
}, {
  word: 'clavier',
}, {
  word: 'montre',
}, {
  word: 'caillou',
}, {
  word: 'pierre',
}, {
  word: 'cloche',
}, {
  word: 'vache',
}, {
  word: 'casque',
}, {
  word: 'billet',
}, {
  word: 'arbre',
}, {
  word: 'manteau',
}, {
  word: 'chemise',
}, {
  word: 'chapeau',
}, {
  word: 'cadenas',
}, {
  word: 'fichier',
}, {
  word: 'buisson',
}, {
  word: 'bateau',
}, {
  word: 'serveur',
}, {
  word: 'album',
}, {
  word: 'drapeau',
}, {
  word: 'carte',
}, {
  word: 'poisson',
}, {
  word: 'bouton',
}, {
  word: 'soleil',
}, {
  word: 'nuage',
}, {
  word: 'photo',
}, {
  word: 'caisse',
}, {
  word: 'goutte',
}, {
  word: 'fromage',
}, {
  word: 'couteau',
}, {
  word: 'jouet',
}, {
  word: 'livre',
}, {
  word: 'tulipe',
}, {
  word: 'feuille',
}, {
  word: 'rubis',
}, {
  word: 'message',
}, {
  word: 'verre',
}, {
  word: 'logo',
}, {
  word: 'table',
}, {
  word: 'chaise',
}, {
  word: 'bouclier',
}, {
  word: 'armure',
}, {
  word: 'lance',
}, {
  word: 'jeu',
}, {
  word: 'vignette',
}, {
  word: 'galaxie',
}, {
  word: 'collier',
}, {
  word: 'mot',
}, {
  word: 'phrase',
}, {
  word: 'produit',
}, {
  word: 'cravate',
}, {
  word: 'noeud',
}, {
  word: 'plume',
}, {
  word: 'patte',
}, {
  word: 'bague',
}, {
  word: 'gant',
}, {
  word: 'paille',
}, {
  word: 'loupe',
}, {
  word: 'coussin',
}, {
  word: 'tuyau',
}, {
  word: 'sacoche',
}, {
  word: 'console',
}, {
  word: 'manette',
}, {
  word: 'loup',
}, {
  word: 'globe',
}, {
  word: 'meuble',
}, {
  word: 'coque',
}, {
  word: 'poulet',
}, {
  word: 'poussin',
}, {
  word: 'oeuf',
}, {
  word: 'moto',
}, {
  word: 'main',
}, {
  word: 'pied',
}, {
  word: 'oreille',
}, {
  word: 'oeil',
}, {
  word: 'doigt',
}, {
  word: 'manche',
}, {
  word: 'balai',
}, {
  word: 'dossier',
}, {
  word: 'train',
}, {
  word: 'pince',
}, {
  word: 'crabe',
}, {
  word: 'oiseau',
}, {
  word: 'nid',
}, {
  word: 'ligne',
}, {
  word: 'corp',
}, {
  word: 'pompe',
}, {
  word: 'pneu',
}, {
  word: 'rideau',
}, {
  word: 'urgence',
}, {
  word: 'pompier',
}, {
  word: 'feu',
}, {
  word: 'police',
}, {
  word: 'pays',
}, {
  word: 'nez',
}, {
  word: 'bobine',
}, {
  word: 'pile',
}, {
  word: 'batterie',
}, {
  word: 'acrobate',
}, {
  word: 'escalier',
}, {
  word: 'labrador',
}, {
  word: 'lionceau',
}, {
  word: 'ouistiti',
}, {
  word: 'parasite',
}, {
  word: 'poubelle',
}, {
  word: 'sombrero',
}, {
  word: 'tambour',
}, {
  word: 'tonneau',
}, {
  word: 'wagon',
}, {
  word: 'canicule',
}, {
  word: 'chanteur',
}, {
  word: 'chouette',
}, {
  word: 'menteur',
}, {
  word: 'minerai',
}, {
  word: 'mocassin',
}, {
  word: 'myrtille',
}, {
  word: 'poignard',
}, {
  word: 'assiette',
}, {
  word: 'bandana',
}, {
  word: 'ciel',
}, {
  word: 'planete',
}, {
  word: 'etoile',
}, {
  word: 'ficelle',
}, {
  word: 'corde',
}, {
  word: 'bisou',
}, {
  word: 'ecran',
}, {
  word: 'gecko',
}, {
  word: 'serpent',
}, {
  word: 'cochon',
}, {
  word: 'enfant',
}, {
  word: 'voilier',
}, {
  word: 'mouchoir',
}, {
  word: 'guide',
}, {
  word: 'document',
}, {
  word: 'terrier',
}, {
  word: 'blaireau',
}, {
  word: 'lapin',
}, {
  word: 'cercle',
}, {
  word: 'science',
}, {
  word: 'os',
}, {
  word: 'aigle',
}, {
  word: 'royaume',
}, {
  word: 'stade',
}, {
  word: 'terrain',
}, {
  word: 'tombe',
}, {
  word: 'pyramide',
}, {
  word: 'cascade',
}, {
  word: 'botte',
}, {
  word: 'huile',
}, {
  word: 'ceinture',
}, {
  word: 'toilettes',
}, {
  word: 'momie',
}, {
  word: 'tombeau',
}, {
  word: 'marais',
}, {
  word: 'orphelin',
}, {
  word: 'philtre',
}, {
  word: 'muguet',
}, {
  word: 'champion',
}, {
  word: 'quasar',
}, {
  word: 'douille',
}, {
  word: 'bille',
}, {
  word: 'poudre',
}, {
  word: 'briquet',
}, {
  word: 'tourelle',
}, {
  word: 'vague',
}, {
  word: 'etang',
}, {
  word: 'riviere',
}, {
  word: 'lac',
}, {
  word: 'piscine',
}, {
  word: 'gazelle',
}, {
  word: 'girafe',
}, {
  word: 'singe',
}, {
  word: 'tigre',
}, {
  word: 'elephant',
}, {
  word: 'crocodile',
}, {
  word: 'guitare',
}, {
  word: 'piano',
}, {
  word: 'trompette',
}, {
  word: 'badge',
}, {
  word: 'boucle',
}, {
  word: 'couronne',
}, {
  word: 'diamant',
}];

function getRandomIndex(array) {
  const arrayLength = array.length;
  const randomBytes = new Uint32Array(1);
  crypto.getRandomValues(randomBytes);
  const randomValue = randomBytes[0];
  const randomIndex = randomValue % arrayLength;
  return randomIndex;
}

function motRandom() {
  document.querySelectorAll('.letter').forEach((letter) => {
    letter.disabled = false;
  });
  word = mots[getRandomIndex(mots)].word;
  maxGuesses = 6;
  correctLetters = [];
  incorrectLetters = [];
  guessLeft.textContent = maxGuesses;
  scoreP.textContent = score;

  const inputContainer = document.createElement('div');
  inputContainer.setAttribute('id', 'inputContainer');

  for (let i = 0; i < word.length; i += 1) {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('aria-label', `letter ${i + 1}`);
    input.setAttribute('disabled', 'true');
    inputContainer.appendChild(input);
  }
  inputs.textContent = '';
  inputs.appendChild(inputContainer);
}

function start(event) {
  document.querySelector(`#${event}`).disabled = true;
  const guess = event.toLowerCase();
  if (
    guess.match(/^[A-Za-z]+$/)
    && !incorrectLetters.includes(guess)
    && !correctLetters.includes(guess)
  ) {
    if (word.includes(guess)) {
      for (let i = 0; i < word.length; i += 1) {
        if (word[i] === guess) {
          correctLetters += guess;
          inputs.querySelectorAll('input')[i].value = guess;
        }
      }
    } else {
      maxGuesses -= 1;
      incorrectLetters += guess;
    }
    guessLeft.textContent = maxGuesses;
  }

  if (correctLetters.length === word.length) {
    score += 1;
    scoreP.textContent = score;
    motRandom();
  }

  if (maxGuesses < 1) {
    score = 0;
    scoreP.textContent = score;

    for (let i = 0; i < word.length; i += 1) {
      inputs.querySelectorAll('input')[i].value = word[i];
    }
  }
}

reset.addEventListener('click', () => {
  score = 0;
  scoreP.textContent = score;
  motRandom();
});

reset.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') reset.click();
});

document.querySelectorAll('.letter').forEach((letter) => {
  letter.addEventListener('click', () => {
    if (maxGuesses < 1) return;
    start(letter.textContent);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key.match(/^[A-Za-z]+$/)) {
    if (maxGuesses < 1) return;
    const key = event.key.toUpperCase();
    start(key);
  }
});

document.addEventListener('DOMContentLoaded', () => motRandom());
