setInterval(() => {
  const images = document.querySelectorAll('.home-phones img');
  const currentImage = document.querySelector('.home-phones img:not(.d-none)');
  const nextImage = currentImage.nextElementSibling || images[0];
  currentImage.classList.add('d-none');
  nextImage.classList.remove('d-none');
}, 5000);
