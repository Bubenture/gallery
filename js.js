const projects = [
	'reactQuiz',
	'reactModalWindow',
	'reactCounter',
	'gallery',	
	'parodyOfGlass',
	'kremka',
	'reactPage',
	'onepageLayout',
	'calculator',
	'citrusLayout',
	'catWizardLayout',
	'users',
	'notes',
	'tic-tac-toe',
	'date',
	'testDriver',
	'terminatingProcesses',
	'consolePrograms',
]
const contacts = `
    <a href="https://github.com/Bubenture" class="contact" target="_blank">Github</a>
    <a href="https://t.me/bubenture" class="contact" target="_blank">Telegram</a>
    <a href="https://wa.me/79833799501" class="contact" target="_blank">WhatsApp</a>
		<a href="mailto:bubenture@gmail.com" class="contact" target="_blank">bubenture@gmail.com</a>`
const contactsSlider = `<div class="slider contacts">` + contacts + `</div>`

function renderDesktop() {
  const width = window.innerWidth
  const height = window.innerHeight
  const desktop = document.querySelector('.desktop')
  desktop.innerHTML = ''

  if (width <= height) {
    document.documentElement.style.setProperty('--scale', '1')
    const swiper = document.createElement('div')
    swiper.className = 'swiper'
    swiper.innerHTML =
      contactsSlider +
      Array.from(
        { length: projects.length },
        (_, i) =>
          `<a href="https://github.com/Bubenture/${projects[i]}" class="slider" target="_blank"><img src="img/projects/${projects[i]}.webp" style="width: 70vw;" alt="Image"  class="sliderImg" loading="lazy"></a>`
      ).join('')
    desktop.appendChild(swiper)
  } else {
    document.documentElement.style.setProperty('--scale', '1.2')
    const totalImages = projects.length
    const imagesPerSlider = Math.ceil(totalImages / 3)

    for (let i = 0; i < 3; i++) {
      const swiper = document.createElement('div')
      swiper.className = 'swiper'

      const startIndex = i * imagesPerSlider
      const endIndex = Math.min(startIndex + imagesPerSlider, totalImages)
      let imagesHTML = ''
      if (i === 1) {
        imagesHTML += contactsSlider
      }
      for (let j = startIndex; j < endIndex; j++) {
        imagesHTML += `<a href="https://github.com/Bubenture/${projects[j]}" class="slider" target="_blank"><img  src="img/projects/${projects[j]}.webp" style="width: 30vw;" alt="Image" class="sliderImg" loading="lazy"></a>`
      }

      swiper.innerHTML = imagesHTML
      desktop.appendChild(swiper)
    }
  }
}

function toggleSlider() {
  window.requestAnimationFrame(() => {
    setTimeout(renderDesktop, 0)
  })
}

document.querySelector('footer').innerHTML = contacts

let lastIsLandscape = window.innerWidth > window.innerHeight

function handleResize() {
  const isLandscape = window.innerWidth > window.innerHeight
  if (isLandscape !== lastIsLandscape) {
    lastIsLandscape = isLandscape
    toggleSlider()
  }
}

window.addEventListener('load', toggleSlider)
window.addEventListener('resize', handleResize)
