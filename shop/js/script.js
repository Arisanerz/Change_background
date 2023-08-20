const carts = document.querySelectorAll('.cart')
const total = document.querySelector('.total b')

carts.forEach(function(cart) {
  cart.addEventListener('click', function() {
    cart.classList.toggle('cart-active')
    getPrice()
  })
})

function getPrice() {
  let price = 0
  carts.forEach(function(cart) {
    if (cart.classList.contains('cart-active')) {
      price += +cart.getAttribute('data-price')
    }
    total.textContent = price + '$'
  })
}