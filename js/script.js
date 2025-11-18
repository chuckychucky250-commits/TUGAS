// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

let cartCount = 0;
// Update badge tampil atau hide
function updateBadge() {
  const badge = document.getElementById("cart-badge");
  badge.textContent = cartCount;

  if (cartCount > 0) {
    badge.style.display = "inline-block";
  } else {
    badge.style.display = "none";
  }
}

// Tambah cart
function addToCart() {
  cartCount++;
  updateBadge();
}

// Kurangi cart
function removeFromCart() {
  if (cartCount > 0) {
    cartCount--;
    updateBadge();
  }
}

// Event untuk cart-item
const cartItems = document.querySelectorAll('.shopping-cart .cart-item');

cartItems.forEach(item => {

  // Klik item = tambah
  item.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-item')) return; // jika trash, jangan tambah
    addToCart();
  });

  // Klik trash = hapus item + kurangi
  const removeBtn = item.querySelector('.remove-item');
  removeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    removeFromCart();
  });
});

// Ketika cart-item di klik → tambah ke badge
cartItems.forEach(item => {
  item.addEventListener('click', function (e) {
    // jika klik trash, jangan tambah
    if (e.target.classList.contains('remove-item')) return;

    addToCart();
  });
});


// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
