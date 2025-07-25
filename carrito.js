

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

  // Mostrar notificación visual (reemplaza el alert)
  showNotification(name);
}

// Función para actualizar el número que aparece en el ícono del carrito
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountEl = document.getElementById("cart-count");

  if (cartCountEl) {
    cartCountEl.textContent = totalItems;
  }
}

// Función para mostrar la notificación
function showNotification(productName) {
  const notification = document.getElementById("cart-notification");

  if (!notification) return;

  const messageEl = notification.querySelector("p");
  messageEl.textContent = `¡${productName} fue añadido al carrito!`;

  notification.classList.remove("hidden");

  // Se cierra automáticamente después de 4 segundos (opcional)
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 4000);
}

// Función para cerrar manualmente la notificación
function closeNotification() {
  const notification = document.getElementById("cart-notification");
  if (notification) {
    notification.classList.add("hidden");
  }
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", updateCartCount);


// Función del carrito antes del contador
function renderCart() {
      const cartList = document.getElementById("cart-list");
      const totalDisplay = document.getElementById("total");
      const cart = JSON.parse(localStorage.getItem("sweetland_cart")) || [];

      cartList.innerHTML = "";
      let total = 0;

      cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.qty} x ${item.name} - $${item.price * item.qty}`;
        cartList.appendChild(li);
        total += item.price * item.qty;
      });

      totalDisplay.textContent = `$${total}`;
    }

    function finalizeOrder() {
      const cart = JSON.parse(localStorage.getItem("sweetland_cart")) || [];
      if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }

      let message = "¡Hola! Quiero hacer un pedido:%0A";
      cart.forEach(item => {
        message += `- ${item.qty} x ${item.name} ($${item.price * item.qty})%0A`;
      });

      const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      message += `%0ATotal: $${total}`;

      const phone = "573332422608"; // Reemplaza con tu número real
      const url = `https://wa.me/${phone}?text=${message}`;
      window.open(url, "_blank");
    }

    function clearCartAndReload() {
      localStorage.removeItem("sweetland_cart");
      location.reload();
    }

    renderCart();

// Mostrar pantalla de carga antes de mostrar el contenido
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const contenido = document.getElementById("contenido-carrito");

  if (loader && contenido) {
    // Oculta el loader después de 1.5 segundos (ajustable)
    setTimeout(() => {
      loader.style.display = "none";
      contenido.style.display = "block";
    }, 1500);
  }
});

