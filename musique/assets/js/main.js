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
  '2.jpg'
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
  imageElement.src = '/musique/' + imagePath + imageFile
  imageElement.alt = imageName
  imageElement.className = 'w-100 img-fluid'

  const galleryLinks = document.createElement('div')
  galleryLinks.className = 'gallery-links d-flex align-items-center justify-content-center'

  const previewLink = document.createElement('a')
  previewLink.href = '/musique/' + imagePath + imageFile
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
