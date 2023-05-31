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
  order_hots_data.map((product) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.id = product.id;
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
        </div>
        <button class="btn-add-to-card">
          <ion-icon name="add-circle-outline"></ion-icon>
        </button>
    `;
    order_container1.appendChild(newDiv);
  });
}
init_order_hots_data();

function init_instant_data() {
  instant_data.map((product) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.id = product.id;
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
          <button class="btn-add-to-card">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </div>
    `;
    order_container2.appendChild(newDiv);
  });
}
init_instant_data();

function init_order_fresh_fruit_data() {
  order_fresh_fruit_data.map((product, key) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.id = product.id;
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
          <button class="btn-add-to-card">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </div>
    `;
    order_container3.appendChild(newDiv);
  });
}
init_order_fresh_fruit_data();

function init_order_macchiato_cream_data() {
  order_macchiato_cream_data.map((product, key) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.id = product.id;
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
          <button class="btn-add-to-card">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </div>
    `;
    order_container4.appendChild(newDiv);
  });
}
init_order_macchiato_cream_data();

function init_order_milk_tea_data() {
  order_milk_tea_data.map((product, key) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.id = product.id;
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
          <button class="btn-add-to-card">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </div>
    `;
    order_container5.appendChild(newDiv);
  });
}
init_order_milk_tea_data();
function init6() {
  order_sua_chua_data.map((product, key) => {
    if (product.discount === product.price) {
      product.price = '';
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'product';
    newDiv.id = product.id;
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
          <button class="btn-add-to-card">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </div>
    `;
    order_container6.appendChild(newDiv);
  });
}
init6();
/* ------------------ Generate code end ------------------ */

/* ------------------ Generate search results ------------- */
// function renderSearch(results) {
//   if (results.length != 0) {
//     var htmls = results.map((product) => {
//       return `
//         <div class="search-result-item">
//         <img
//           src="${product.image}"
//           class="result-item-image product-thumb"
//           alt=""
//         />
//         <div class="result-item-details">
//           <h2 class="result-item-name product-name">${product.title}</h2>
//           <div class="result-item-price">
//             <span class="result-item-price-root price-discount">${product.discount}</span>
//             <span class="result-item-price-discount cost">${product.price}</span>
//           </div>
//         </div>
//       </div>
//       `;
//     });
//     searchResult.innerHTML = htmls.join('');
//     sessionStorage.setItem('resultSearch', htmls);
//     searchResult.classList.remove('hidden');
//   } else {
//     searchResult.innerHTML = '';
//     searchResult.classList.add('hidden');
//   }
// }
// inputSearch.addEventListener('keyup', handleSearch);
