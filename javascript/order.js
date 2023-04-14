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

/**
 * Xử lý các chức năng với giỏ hànghàng
 */
let listCards = [];
let listCard = select('.listCard');
let total = select('.total');
let quantity = select('.quantity');
let cart = select('#cart');

/**
 * Chức năng ẩn hiện card khi click vào icon giỏ hàng
 */
on('click', '#card', () => {
  card.classList.toggle('active');
});

/**
 * Chức năng thêm vào cart khi click vào nút add
 */
function addToCard(key, originArray) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(originArray[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
