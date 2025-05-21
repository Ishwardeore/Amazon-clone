// Show alert on Sign In click
document.querySelector('.nav-signin').addEventListener('click', function() {
  alert('Redirecting to Sign In page...');
});

// Change cart text when hovering
const cart = document.querySelector('.nav-cart');
cart.addEventListener('mouseover', function() {
  cart.style.color = 'orange';
  cart.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> View Cart';
});
cart.addEventListener('mouseout', function() {
  cart.style.color = '';
  cart.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Cart';
});

// Search on Enter key
document.querySelector('.search-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
    } else {
      alert('Please enter a search term.');
    }
  }
});
