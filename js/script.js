
const products = [
  { name: "Кожаный ремень", price: 1200, image: "img/card1.jpg" },
  { name: "Часы наручные", price: 6500, image: "img/card2.jpg" },
  { name: "Солнцезащитные очки", price: 2400, image: "img/card7.jpg" },
  { name: "Футболка BRAVEMAN", price: 1800, image: "img/card4.jpg" },
  { name: "Браслет мужской", price: 900, image: "img/card5.jpg" },
  { name: "Кожаный ремень", price: 1200, image: "img/card6.jpg" },
  { name: "Часы наручные", price: 6500, image: "img/card8.jpg" },
  { name: "Бритва", price: 2400, image: "img/card3.jpg" },
  { name: "Футболка BRAVEMAN", price: 1800, image: "img/card9.jpg" },
  { name: "Браслет мужской", price: 900, image: "img/card10.jpg" },

];

const productList = document.getElementById("productList");

// Рендер карточек
function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
  <a href="product.html">
    <div class="img-wrapper">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <h3>${product.name}</h3>
    <p>${product.price.toLocaleString()} ₽</p>
  </a>
  <div class="product-actions">
    <button onclick="addToCart('${product.name}', ${product.price})">Купить</button>
    <button onclick="addToFavorites('${product.name}')">❤</button>
  </div>
        `;
    productList.appendChild(card);
  });
}

// Поиск
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(filtered);
});

// Действия
function showModal(text) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");
  modalText.textContent = text;
  modal.classList.add("show");
  setTimeout(() => {
    modal.classList.remove("show");
  }, 2000);
}

// Инициализация
renderProducts(products);