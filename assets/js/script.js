const panels = document.querySelectorAll('.tab-panel')
const topnav = document.querySelector('#topnav')
const topnavIcon = topnav.querySelector('#btnTopnav')
const topnavBar = topnav.querySelector('.topnav-bar')
const searchWrapper = document.querySelector('.search')
const inputBox = searchWrapper.querySelector('input')
const suggBox = searchWrapper.querySelector('.search-box')
const eventSpan = document.querySelector('#event')
const date = new Date()

const inViewport = entries => {
  entries.forEach(entry => entry.target.classList.toggle('is-inViewport', entry.isIntersecting))
}

const Obs = new IntersectionObserver(inViewport)
document.querySelectorAll('[data-inviewport]').forEach(element => Obs.observe(element))

const showSuggestions = list => {
  suggBox.innerHTML = ''
  list.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    suggBox.appendChild(li)
  })
}

topnavIcon.addEventListener('click', () => topnav.classList.toggle('show'))
topnavBar.addEventListener('click', () => topnav.classList.toggle('show'))
topnavIcon.addEventListener('keydown', event => event.key === 'Enter' && topnavIcon.click())

document.addEventListener('click', event => {
  if (topnav.classList.contains('show') && !topnav.contains(event.target) && event.target !== topnavIcon) {
    topnav.classList.remove('show')
  }
})

const searchSuggestions = ['chronometre', 'meteo', 'notida', 'pendu', 'pileouface', 'clictest', 'colorpicker', 'insta']

inputBox.addEventListener('input', event => {
  const value = event.target.value.toLowerCase()
  const suggestions = searchSuggestions.filter(item => item.includes(value))
  searchWrapper.classList.add('active')
  showSuggestions(suggestions)
  suggBox.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      const page = li.textContent
      if (page === 'meteo') window.location.href = 'https://meteo-leoseguin.vercel.app/'
      else if (page === 'notida') window.location.href = 'https://notida.fr/'
      else window.location.href = `/projets/${page}/`
    })
  })
})

document.addEventListener('keydown', event => {
  if (event.ctrlKey && event.key === 'k') {
    event.preventDefault()
    inputBox.focus()
  }
})

document.querySelectorAll(".tabset input[type='radio']").forEach(tab => {
  tab.addEventListener('change', () => {
    panels.forEach(panel => panel.classList.remove('active'))
    document.querySelector(`#${tab.id.replace('tab', 'panel')}`).classList.add('active')
  })
})

document.querySelectorAll('label[for^="tab"]').forEach(label => {
  label.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const radio = document.getElementById(label.getAttribute('for'))
      if (radio) {
        radio.checked = true
        panels.forEach(panel => panel.classList.remove('active'))
        document.querySelector(`#${radio.id.replace('tab', 'panel')}`).classList.add('active')
      }
    }
  })
  document.querySelector('#tab1').checked = true
})

const specialDates = {
  '1-1': '🌟', '2-14': '💘', '4-1': '🐟', '6-21': '🎶', '7-14': '🎆',
  '10-31': '🎃', '11-26': '🎂', '12-25': '🎁', '12-31': '🎉'
}

const getSpecialDate = date => specialDates[`${date.getMonth() + 1}-${date.getDate()}`] || ''

if (eventSpan) eventSpan.textContent = getSpecialDate(new Date())
