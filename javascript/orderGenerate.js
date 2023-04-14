import {
  order_hots_data,
  instant_data,
  order_fresh_fruit_data,
  order_macchiato_cream_data,
  order_milk_tea_data,
  order_sua_chua_data,
} from '../assets/data/product_data.js';

let order_container1 = document.querySelector(
  '.order-catogory1 .order-container'
);
let order_container2 = document.querySelector(
  '.order-catogory2 .order-container'
);
let order_container3 = document.querySelector(
  '.order-catogory3 .order-container'
);
let order_container4 = document.querySelector(
  '.order-catogory4 .order-container'
);
let order_container5 = document.querySelector(
  '.order-catogory5 .order-container'
);
let order_container6 = document.querySelector(
  '.order-catogory6 .order-container'
);

// ---------------------- Generate code start
function init_order_hots_data() {
  order_hots_data.map((product, key, originArray) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.innerHTML = `
        <img
          src=${product.image}
          alt=""
          class="product-thumb"
        />
        <div class="product-desc">
          <h3 class="product-name">
            ${product.title}
          </h3>
          <div className="price">
            <span class="price-discount">${product.discount}</span>
            <span class="cost">${product.price}</span>
          </div>
          <button class="btn-add-to-card" onclick="addToCard(${key})">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </div>
    `;
    order_container1.appendChild(newDiv);
  });
}
init_order_hots_data();

function init_instant_data() {
  instant_data.forEach((product, key) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.innerHTML = `
        <img
          src=${product.image}
          alt=""
          class="product-thumb"
        />
        <div class="product-desc">
          <h3 class="product-name">${product.title}</h3>
          <div className="price">
            <span class="price-discount">${product.discount}</span>
            <span class="cost">${product.price}</span>
          </div>
          <button class="btn-add-to-card" onclick="addToCard(${key})">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </div>
    `;
    order_container2.appendChild(newDiv);
  });
}
init_instant_data();

function init_order_fresh_fruit_data() {
  order_fresh_fruit_data.forEach((product, key) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.innerHTML = `
        <img
          src=${product.image}
          alt=""
          class="product-thumb"
        />
        <div class="product-desc">
          <h3 class="product-name">${product.title}</h3>
          <div className="price">
            <span class="price-discount">${product.discount}</span>
            <span class="cost">${product.price}</span>
          </div>
          <button class="btn-add-to-card" onclick="addToCard(${key})">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </div>
    `;
    order_container3.appendChild(newDiv);
  });
}
init_order_fresh_fruit_data();

function init_order_macchiato_cream_data() {
  order_macchiato_cream_data.forEach((product, key) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.innerHTML = `
        <img
          src=${product.image}
          alt=""
          class="product-thumb"
        />
        <div class="product-desc">
          <h3 class="product-name">${product.title}</h3>
          <div className="price">
            <span class="price-discount">${product.discount}</span>
            <span class="cost">${product.price}</span>
          </div>
          <button class="btn-add-to-card" onclick="addToCard(${key})">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </div>
    `;
    order_container4.appendChild(newDiv);
  });
}
init_order_macchiato_cream_data();

function init_order_milk_tea_data() {
  order_milk_tea_data.forEach((product, key) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.innerHTML = `
        <img
          src=${product.image}
          alt=""
          class="product-thumb"
        />
        <div class="product-desc">
          <h3 class="product-name">${product.title}</h3>
          <div className="price">
            <span class="price-discount">${product.discount}</span>
            <span class="cost">${product.price}</span>
          </div>
          <button class="btn-add-to-card" onclick="addToCard(${key})">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </div>
    `;
    order_container5.appendChild(newDiv);
  });
}
init_order_milk_tea_data();
function init6() {
  order_sua_chua_data.forEach((product, key) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.innerHTML = `
        <img
          src=${product.image}
          alt=""
          class="product-thumb"
        />
        <div class="product-desc">
          <h3 class="product-name">${product.title}</h3>
          <div className="price">
            <span class="price-discount">${product.discount}</span>
            <span class="cost">${product.price}</span>
          </div>
          <button class="btn-add-to-card" onclick="addToCard(${key})">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </div>
    `;
    order_container6.appendChild(newDiv);
  });
}
init6();
/* ------------------ Generate code end ------------------ */
