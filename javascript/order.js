import {
  order_hots_data,
  instant_data,
  order_fresh_fruit_data,
  order_macchiato_cream_data,
  order_milk_tea_data,
  order_sua_chua_data,
} from '../assets/data/product_data.js';

const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener);
};

let order_container1 = select('.order-catogory1 .order-container');
let order_container2 = select('.order-catogory2 .order-container');
let order_container3 = select('.order-catogory3 .order-container');
let order_container4 = select('.order-catogory4 .order-container');
let order_container5 = select('.order-catogory5 .order-container');
let order_container6 = select('.order-catogory6 .order-container');

// ---------------------- Generate code start
function init_order_hots_data() {
  order_hots_data.forEach((product, key) => {
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
          <span class="cost">${product.price}</span>
          <span class="price-discount">${product.discount}</span>
          <button class="btn-add-to-card" onclick="addToCard(${key}>Đặt hàng</button>
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
          <span class="cost">${product.price}</span>
          <span class="price-discount">${product.discount}</span>
          <button class="btn-add-to-card" onclick="addToCard(${key}>Đặt hàng</button>
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
          <span class="cost">${product.price}</span>
          <span class="price-discount">${product.discount}</span>
          <button class="btn-add-to-card" onclick="addToCard(${key}>Đặt hàng</button>
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
          <span class="cost">${product.price}</span>
          <span class="price-discount">${product.discount}</span>
          <button class="btn-add-to-card" onclick="addToCard(${key}>Đặt hàng</button>
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
          <span class="cost">${product.price}</span>
          <span class="price-discount">${product.discount}</span>
          <button class="btn-add-to-card" onclick="addToCard(${key}>Đặt hàng</button>
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
          <span class="cost">${product.price}</span>
          <span class="price-discount">${product.discount}</span>
          <button class="btn-add-to-card" onclick="addToCard(${key}>Đặt hàng</button>
        </div>
    `;
    order_container6.appendChild(newDiv);
  });
}
init6();
/* ------------------ Generate code end ------------------ */

document.addEventListener('DOMContentLoaded', () => {
  let selectHeader = select('#order-header');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('.order-catagories .scrollto', true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(window, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop - 150;
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth',
    });
  };

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    'click',
    '.scrollto',
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let body = select('body');
        if (body.classList.contains('mobile-nav-active')) {
          body.classList.remove('mobile-nav-active');
          let navbarToggle = select('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });
});
