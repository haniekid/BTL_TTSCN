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

const order_container1 = select('.order-catogory1 .order-container');
order_hots_data.map((product) => {
  var product_container = document.createElement('div');
  product_container.className = 'product';
  var img = document.createElement('img');
  img.setAttribute('src', product.image);
  img.className = 'product-thumb';
  product_container.appendChild(img);
  var product_desc = document.createElement('div');
  product_desc.className = 'product-desc';
  var product_title = document.createElement('h3');
  product_title.className = 'product-name';
  product_title.innerText = product.title;
  var price_discount = document.createElement('span');
  price_discount.className = 'price-discount';
  price_discount.innerHTML = product.discount;
  var price = document.createElement('span');
  price.className = 'price';
  price.innerHTML = product.discount === product.price ? '' : product.price;
  product_desc.appendChild(product_title);
  product_desc.appendChild(price_discount);
  product_desc.appendChild(price);

  product_container.appendChild(product_desc);
  order_container1.appendChild(product_container);
});
const order_container2 = select('.order-catogory2 .order-container');
instant_data.map((product) => {
  var product_container = document.createElement('div');
  product_container.className = 'product';
  var img = document.createElement('img');
  img.setAttribute('src', product.image);
  img.className = 'product-thumb';
  product_container.appendChild(img);
  var product_desc = document.createElement('div');
  product_desc.className = 'product-desc';
  var product_title = document.createElement('h3');
  product_title.className = 'product-name';
  product_title.innerText = product.title;
  var price_discount = document.createElement('span');
  price_discount.className = 'price-discount';
  price_discount.innerHTML = product.discount;
  var price = document.createElement('span');
  price.className = 'price';
  price.innerHTML = product.discount === product.price ? '' : product.price;
  product_desc.appendChild(product_title);
  product_desc.appendChild(price_discount);
  product_desc.appendChild(price);

  product_container.appendChild(product_desc);
  order_container2.appendChild(product_container);
});

const order_container3 = select('.order-catogory3 .order-container');
order_milk_tea_data.map((product) => {
  var product_container = document.createElement('div');
  product_container.className = 'product';
  var img = document.createElement('img');
  img.setAttribute('src', product.image);
  img.className = 'product-thumb';
  product_container.appendChild(img);
  var product_desc = document.createElement('div');
  product_desc.className = 'product-desc';
  var product_title = document.createElement('h3');
  product_title.className = 'product-name';
  product_title.innerText = product.title;
  var price_discount = document.createElement('span');
  price_discount.className = 'price-discount';
  price_discount.innerHTML = product.discount;
  var price = document.createElement('span');
  price.className = 'price';
  price.innerHTML = product.discount === product.price ? '' : product.price;
  product_desc.appendChild(product_title);
  product_desc.appendChild(price_discount);
  product_desc.appendChild(price);

  product_container.appendChild(product_desc);
  order_container3.appendChild(product_container);
});

const order_container4 = select('.order-catogory4 .order-container');
order_fresh_fruit_data.map((product) => {
  var product_container = document.createElement('div');
  product_container.className = 'product';
  var img = document.createElement('img');
  img.setAttribute('src', product.image);
  img.className = 'product-thumb';
  product_container.appendChild(img);
  var product_desc = document.createElement('div');
  product_desc.className = 'product-desc';
  var product_title = document.createElement('h3');
  product_title.className = 'product-name';
  product_title.innerText = product.title;
  var price_discount = document.createElement('span');
  price_discount.className = 'price-discount';
  price_discount.innerHTML = product.discount;
  var price = document.createElement('span');
  price.className = 'price';
  price.innerHTML = product.discount === product.price ? '' : product.price;
  product_desc.appendChild(product_title);
  product_desc.appendChild(price_discount);
  product_desc.appendChild(price);

  product_container.appendChild(product_desc);
  order_container4.appendChild(product_container);
});

const order_container5 = select('.order-catogory5 .order-container');
order_macchiato_cream_data.map((product) => {
  var product_container = document.createElement('div');
  product_container.className = 'product';
  var img = document.createElement('img');
  img.setAttribute('src', product.image);
  img.className = 'product-thumb';
  product_container.appendChild(img);
  var product_desc = document.createElement('div');
  product_desc.className = 'product-desc';
  var product_title = document.createElement('h3');
  product_title.className = 'product-name';
  product_title.innerText = product.title;
  var price_discount = document.createElement('span');
  price_discount.className = 'price-discount';
  price_discount.innerHTML = product.discount;
  var price = document.createElement('span');
  price.className = 'price';
  price.innerHTML = product.discount === product.price ? '' : product.price;
  product_desc.appendChild(product_title);
  product_desc.appendChild(price_discount);
  product_desc.appendChild(price);

  product_container.appendChild(product_desc);
  order_container5.appendChild(product_container);
});

const order_container6 = select('.order-catogory6 .order-container');
order_sua_chua_data.map((product) => {
  var product_container = document.createElement('div');
  product_container.className = 'product';
  var img = document.createElement('img');
  img.setAttribute('src', product.image);
  img.className = 'product-thumb';
  product_container.appendChild(img);
  var product_desc = document.createElement('div');
  product_desc.className = 'product-desc';
  var product_title = document.createElement('h3');
  product_title.className = 'product-name';
  product_title.innerText = product.title;
  var price_discount = document.createElement('span');
  price_discount.className = 'price-discount';
  price_discount.innerHTML = product.discount;
  var price = document.createElement('span');
  price.className = 'price';
  price.innerHTML = product.discount === product.price ? '' : product.price;
  product_desc.appendChild(product_title);
  product_desc.appendChild(price_discount);
  product_desc.appendChild(price);

  product_container.appendChild(product_desc);
  order_container6.appendChild(product_container);
});

document.addEventListener('DOMContentLoaded', () => {
  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('.order-catagories .scrollto', true);
  let orderContent = select('.order-content');
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
  orderContent.addEventListener('load', navbarlinksActive);
  onscroll(orderContent, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop - 150;
    orderContent.scrollTo({
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
  orderContent.addEventListener('load', () => {
    if (orderContent.location.hash) {
      if (select(orderContent.location.hash)) {
        scrollto(orderContent.location.hash);
      }
    }
  });
});
