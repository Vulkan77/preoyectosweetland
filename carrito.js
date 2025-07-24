// Cargar carrito desde localStorage (si existe)
let cart = JSON.parse(localStorage.getItem("sweetland_cart")) || [];

// Función para agregar producto al carrito
function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  // Guardar el carrito actualizado
  localStorage.setItem("sweetland_cart", JSON.stringify(cart));

  // Actualizar contador del carrito
  updateCartCount();

  // Mostrar mensaje opcional
  alert(`${name} agregado al carrito`);
}

// Función para actualizar el número que aparece en el ícono del carrito
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountEl = document.getElementById("cart-count");

  if (cartCountEl) {
    cartCountEl.textContent = totalItems;
  }
}

// Cuando la página se carga, se actualiza el contador con lo que haya en localStorage
document.addEventListener("DOMContentLoaded", updateCartCount);
