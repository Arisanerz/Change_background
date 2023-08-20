const navbar = document.querySelector('.navbar')
const btns = document.querySelectorAll('.container .btn')

btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const color = btn.getAttribute('data-color')
    navbar.style.background = color
  })
})