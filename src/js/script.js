const toggleButton = document.querySelector('.main-nav__toggle')
const menu = document.querySelector('.main-nav__menu')

let isOpen = false

toggleButton.addEventListener('click', () => {
  if (isOpen) {
    isOpen = false
    menu.style.display = 'none'
    toggleButton.style.backgroundImage = 'url("assets/hamburger-menu.svg")'
  } else {
    isOpen = true
    menu.style.display = 'block'
    toggleButton.style.backgroundImage = 'url("assets/close.svg")'
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 801) {
    isOpen = false
    menu.style.display = 'none'
    toggleButton.style.backgroundImage = 'url("assets/hamburger-menu.svg")'
  }
})