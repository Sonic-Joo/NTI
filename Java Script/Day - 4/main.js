const products = [
  { id: 1, name: "Laptop", price: 900, stock: 3, category: "Computers" },
  { id: 2, name: "PC", price: 1200, stock: 5, category: "Computers" },
  { id: 3, name: "Mouse", price: 50, stock: 5, category: "Accessories" },
  { id: 4, name: "Keyboard", price: 80, stock: 3, category: "Accessories" },
];

const cart = [];
const dataProducts = document.getElementById("products");
const cartBox = document.getElementById("cart");
const messages = document.getElementById("messages");
const summary = document.getElementById("summary");
const searchBtn = document.getElementById("searchBtn");
const searchValue = document.getElementById("searchId");

function displayData() {
  dataProducts.innerHTML = "";
  products.forEach((p) => {
    let row = `
        <div class="prod">
          <h3>${p.name}</h3>
          <div class="muted">Price: ${p.price} | Available: ${p.stock}</div>
          <div class="row">
            <button data-id="${p.id}">Add</button>
            <input type="number" min="1" step="1" value="1" id="qty-${p.id}">
          </div>
        </div>`;
    dataProducts.innerHTML += row;
  });
  document.querySelectorAll("button[data-id]").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id)));
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const qty = parseInt(document.getElementById(`qty-${id}`).value);

  if (!product) return;
  if (isNaN(qty) || qty <= 0) {
    showMessage("Choose a valid quantity", "danger");
    return;
  }

  if (!product.initialStock) product.initialStock = product.stock;
  const itemInCart = cart.find((i) => i.id === id);
  const currentQty = itemInCart ? itemInCart.qty : 0;
  const available = product.initialStock - currentQty;

  if (qty > available && available != 0) {
    showMessage(`We Have Only ${available}`, "danger");
    return;
  }

    if (available == 0) {
    showMessage(`This Product is out of Stock`, "danger");
    return;
  }

  if (itemInCart) {
    itemInCart.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }

  product.stock -= qty;
  showMessage("Added Successfully", "success");
  displayData();
  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    cartBox.innerHTML = `<div class="center muted">Cart is Empty</div>`;
    updateSummary();
    return;
  }

  cartBox.innerHTML = "";
  cart.forEach((item) => {
    cartBox.innerHTML += `
        <div class="item">
          <div>
            <strong>${item.name}</strong>
            <div class="muted">Unit Price: ${item.price}</div>
          </div>
          <span>Qty: ${item.qty}</span>
          <button class="btn-secondary" onclick="removeFromCart(${item.id})">Remove</button>
        </div>`;
  });
  updateSummary();
}

function removeFromCart(id) {
  const index = cart.findIndex((item) => item.id === id);
  if (index > -1) {
    const item = cart[index];
    const product = products.find((prod) => prod.id === id);
    if (product) product.stock += item.qty;
    cart.splice(index, 1);
  }
  renderCart();
  displayData();
}

function updateSummary() {
  let price = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  let discount = price > 1000 ? price * 0.1 : 0;
  let tax = (price - discount) * 0.14;
  let delivery = cart.length > 0 ? 50 : 0;
  let total = price - discount + tax + delivery;

  const lines = summary.querySelectorAll(".line strong");
  lines[0].textContent = price;
  lines[1].textContent = discount;
  lines[2].textContent = tax.toFixed(2);
  lines[3].textContent = delivery;
  lines[4].textContent = total.toFixed(2);
}

function showMessage(text, type = "muted") {
  messages.innerHTML = `<span class="${type}">${text}</span>`;
  setTimeout(() => (messages.innerHTML = ""), 2000);
}

searchBtn.addEventListener("click", () => {
  const id = parseInt(searchValue.value);
  const product = products.find((prod) => prod.id === id);
  if (!product) {
    showMessage("Product Not Found", "danger");
    return;
  }
  addToCart(id);
});

displayData();
renderCart();
