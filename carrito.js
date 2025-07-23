let cart = JSON.parse(localStorage.getItem("sweetland_cart")) || [];

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  localStorage.setItem("sweetland_cart", JSON.stringify(cart));
  alert(`${name} agregado al carrito`);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("sweetland_cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) {
    cartCountEl.textContent = totalItems;
  }
}

// Ejecutar al cargar
updateCartCount();
