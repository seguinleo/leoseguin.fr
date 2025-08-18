function getRandomKeys(array, num) {
  const keys = Object.keys(array)
  const shuffledKeys = keys.sort(() => {
    return 0.5 - Math.random()
  })
  return shuffledKeys.slice(0, num)
}

const imagePath = 'assets/img/gallery/'
const imageFiles = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
  '18.jpg',
  '19.jpg',
  '20.jpg',
  '21.jpg',
  '22.jpg',
  '23.jpg',
  '24.jpg',
  '25.jpg',
  '26.jpg',
  '27.jpg',
  '28.jpg',
  '29.jpg',
  '30.jpg',
  '31.jpg',
  '32.jpg',
  '33.jpg',
  '34.jpg',
  '35.jpg',
  '36.jpg',
  '37.jpg',
  '38.jpg',
  '39.jpg',
  '40.jpg'
]
const numImages = 20
const randomKeys = getRandomKeys(imageFiles, numImages)
const galleryContainer = document.getElementById('galleryContainer')
randomKeys.forEach((key) => {
  const imageFile = imageFiles[key]
  const imageName = imageFile.split('.').shift()

  const galleryItem = document.createElement('div')
  galleryItem.className = 'col-xl-3 col-lg-4 col-md-6 p-2'

  const galleryItemContent = document.createElement('div')
  galleryItemContent.className = 'gallery-item h-100'

  const imageElement = document.createElement('img')
  imageElement.src = '/photographie/' + imagePath + imageFile
  imageElement.alt = imageName
  imageElement.className = 'img-fluid'

  const galleryLinks = document.createElement('div')
  galleryLinks.className = 'gallery-links d-flex align-items-center justify-content-center'

  const previewLink = document.createElement('a')
  previewLink.href = '/photographie/' + imagePath + imageFile
  previewLink.className = 'glightbox preview-link'
  previewLink.setAttribute('aria-label', 'Plein écran')
  previewLink.textContent = 'Voir'

  galleryLinks.appendChild(previewLink)
  galleryItemContent.appendChild(imageElement)
  galleryItemContent.appendChild(galleryLinks)
  galleryItem.appendChild(galleryItemContent)
  galleryContainer.appendChild(galleryItem)
})

document.addEventListener('DOMContentLoaded', async () => {
  'use strict'
  const preloader = document.querySelector('#preloader')
  if (preloader) {
    window.addEventListener('load', async () => {
      setTimeout(() => {
        preloader.classList.add('loaded')
      }, 1000)
      setTimeout(() => {
        preloader.remove()
      }, 2000)
    })
  }
  GLightbox({
    selector: '.glightbox'
  })
})
