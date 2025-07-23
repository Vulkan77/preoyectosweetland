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
