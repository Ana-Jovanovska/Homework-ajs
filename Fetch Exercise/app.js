console.log("Fetch is working");

/*
Fetch the product data from "https://fakestoreapi.com/products" and log it to the console
Once you have all the data and can read it in console generate cards in the html that contain the data about the products
Every card should contain the id, title, price, description and image
The styling of the card is up to the student, what is mandatory is that all the above properties are displayed in the html
*/

const productsContainerEl = document.querySelector(".products-container");

const PRODUCTS_URL = "https://fakestoreapi.com/products";

function fetchProducts() {
  fetch(PRODUCTS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      renderProducts(productsContainerEl, data);
    });
}

function renderProducts(productContainerEl, productsData) {
  let productsHTML = "";

  for (let product of productsData) {
    productsHTML += ` 
    <div class="product-card">
     <h3>${product.id}. ${product.title}</h3>
     <h4>${product.price}$</h4>
     <img src=${product.image}  />
     <p>${product.description}</p>
    </div>`;
  }

  productContainerEl.innerHTML = productsHTML;
}

fetchProducts();
