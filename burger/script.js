const menu = document.querySelector('.header .mobile-menu')
const burger = document.querySelector('.header .header-burger')

burger.addEventListener('click', function() {
  menu.classList.toggle('active')
  burger.classList.toggle('active')
})