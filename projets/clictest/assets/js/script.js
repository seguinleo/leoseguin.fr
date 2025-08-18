let startTime;
let timer = 10;
let counter = 0;
let isTimerRunning = false;
const clickerElement = document.getElementById('clicker');
const resetButton = document.getElementById('reset');
const info = document.getElementById('info');
const timerElement = info.children[0];
const scoreElement = info.children[1];

const SCORE_MESSAGE = [
  { min: 0, max: 19, color: 'red', text: 'NUL!' },
  { min: 20, max: 39, color: 'orange', text: 'Mouais.' },
  { min: 40, max: 59, color: 'yellow', text: 'Ok' },
  { min: 60, max: 79, color: 'limegreen', text: 'Pas mal' },
  { min: 80, max: 99, color: 'green', text: 'OMG?' },
  { min: 100, max: 119, color: 'cyan', text: 'WTF!!' },
  { min: 120, max: 149, color: 'blue', text: 'OoOoOh!' },
  { min: 150, max: Infinity, color: 'purple', text: 'Tu triches?' }
];

function startTimer() {
  if (isTimerRunning) return;
  isTimerRunning = true;
  startTime = performance.now();
  requestAnimationFrame(updateTimer);
}

function updateTimer(currentTime) {
  if (!isTimerRunning) return;

  const elapsedTime = (currentTime - startTime) / 1000;
  timer = Math.max(0, timer - elapsedTime);

  if (timer === 0) {
    isTimerRunning = false;
    clickerElement.removeEventListener('mousedown', handleClick);
  } else {
    timerElement.textContent = `Timer: ${timer.toFixed(1)}s`;
    startTime = currentTime;
    requestAnimationFrame(updateTimer);
  }
}

function handleClick() {
  if (!isTimerRunning) startTimer();
  counter += 1;
  updateScore();
}

function updateScore() {
  const message = SCORE_MESSAGE.find(t => counter >= t.min && counter <= t.max);
  scoreElement.style.color = message.color;
  scoreElement.textContent = `Score: ${counter} ${message.text}`;
}

function resetClickTest() {
  isTimerRunning = false;
  timer = 10;
  counter = 0;
  timerElement.textContent = 'Timer: 10.0s';
  scoreElement.textContent = 'Score: 0';
  scoreElement.style.color = 'white';
  clickerElement.addEventListener('mousedown', handleClick);
}

document.addEventListener('DOMContentLoaded', () => {
  resetButton.addEventListener('click', resetClickTest);
  clickerElement.addEventListener('mousedown', handleClick);
});
