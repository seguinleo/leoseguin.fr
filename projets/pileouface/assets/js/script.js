const coin = document.querySelector('.coin');
const flipBtn = document.querySelector('button');

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(() => {
    flipBtn.disabled = false;
  }, 2000);
}

async function getRandomNumber() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  const result = array[0] % 2;
  console.log(`using Crypto: ${result}`);
  return result;
}

flipBtn.addEventListener('click', async () => {
  disableButton();
  const i = await getRandomNumber();
  coin.style.animation = 'none';
  if (i) {
    setTimeout(() => {
      coin.style.animation = 'spin-heads 2s forwards';
    }, 100);
  } else {
    setTimeout(() => {
      coin.style.animation = 'spin-tails 2s forwards';
    }, 100);
  }
});
