import {
  order_hots_data,
  instant_data,
  order_fresh_fruit_data,
  order_macchiato_cream_data,
  order_milk_tea_data,
  order_sua_chua_data,
} from '../assets/data/product_data.js';
const CART_DATA = 'cart_data';
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

/**
 * Back to top button
 */
let backtotop = select('.back-to-top');
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active');
    } else {
      backtotop.classList.remove('active');
    }
  };
  window.addEventListener('load', toggleBacktotop);
  onscroll(document, toggleBacktotop);
}

let selectHeader = select('#order-header');
let catagoriesContainer = select('.order-catagories-container');
if (selectHeader) {
  const headerScrolled = () => {
    if (
      window.scrollY >
      selectHeader.offsetTop + selectHeader.offsetHeight - 10
    ) {
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
let navbarlinks = select('.order-catagories-container .scrollto', true);
const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = select(navbarlink.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight - 20
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
      if (catagoriesContainer.classList.contains('active')) {
        catagoriesContainer.classList.remove('active');
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
 * Xử lý chức năng ẩn hiện ô tìm kiếm
 */
let inputSearch = select('.input-search');
const toggleHideSearch = () => {
  inputSearch.classList.toggle('active');
};
on('click', '#btn-search', toggleHideSearch);
onscroll(window, () => {
  inputSearch.classList.remove('active');
});

// Xử lý chức năng tìm kiếm
// Xử lý chức năng tìm kiếm
let results = [],
  searchResult = document.querySelector('#search-result');
function handleSearch() {
  var searchValue = inputSearch.value.trim();
  if (searchValue != '') {
    results = order_hots_data.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });
  } else {
    results = [];
    searchResult.classList.add('hidden');
  }

  renderSearch(results);
}

function renderSearch(results) {
  if (results.length != 0) {
    var htmls = results.map((product) => {
      return `
        <div class="search-result-item">
        <img
          src="${product.image}"
          class="result-item-image product-thumb"
          alt=""
        />
        <div class="result-item-details">
          <h2 class="result-item-name product-name">${product.title}</h2>
          <div class="result-item-price">
            <span class="result-item-price-root price-discount">${product.discount}</span>
            <span class="result-item-price-discount cost">${product.price}</span>
          </div>
        </div>
      </div>
      `;
    });
    searchResult.innerHTML = htmls.join('');
    sessionStorage.setItem('resultSearch', htmls);
    searchResult.classList.remove('hidden');
  } else {
    searchResult.innerHTML = '';
    searchResult.classList.add('hidden');
  }
}
inputSearch.addEventListener('keyup', handleSearch);

/**
 * Xử lý user
 */
const reloadUser = () => {
  let userLogin = JSON.parse(sessionStorage.getItem('account_login')) || [];
  let user = document.getElementById('user');
  if (userLogin.length == 0) {
    user.innerHTML = `<a href="login.html" class="loggin-btn">Login</a>`;
  } else {
    user.innerHTML = `
        <a href="login.html" class="user-btn">
          <img src="../assets/images/Order/logo_icon.png" id="user-avatar" alt=""/>
        </a>
        `;
  }
};
window.addEventListener('load', reloadUser);

/**
 * Chức năng ẩn hiện product container
 */
$('.order-container-header').click(function () {
  $(this).parent().children('.order-container').slideToggle();
});

/**
 * Xử lý chức năng ẩn hiện menu danh mục
 */
let btnMenu = select('.btn-menu-content');
on('click', '.btn-menu', () => {
  btnMenu.classList.toggle('fa-bars');
  btnMenu.classList.toggle('fa-xmark');
  catagoriesContainer.classList.toggle('active');
});
onscroll(window, () => {
  btnMenu.classList.add('fa-bars');
  btnMenu.classList.remove('fa-xmark');
  catagoriesContainer.classList.remove('active');
});

/**
 * Xử lý chức năng ẩn hiện card
 */
let card = select('#card');
on('click', '#cart', () => {
  card.classList.toggle('active');
});
/**
 * Xử lý chức năng ẩn hiện popup
 */
let wrapPopup = select('.wrap-popup');
/**
 * Hàm xử lý sự kiện đong popup
 */
const closePopup = () => {
  wrapPopup.classList.remove('active');
};
on('click', '.close-btn', closePopup);
on('click', '.btn-price-product', closePopup);

/**
 * Hàm xử lý sự kiện mở popup
 */
let popup = select('.popup');
let PopupImg = select('#pp-product-img');
let PopupName = select('#pp-product-name');
let PopupPrice = select('#pp-product-price');
let PopupCost = select('#pp-product-regular-price');

function handleProductClick() {
  // Phương thức closest trả về tra gân nhất nếu không có trả về null
  PopupImg.src = $(this).find('.product-thumb').attr('src');
  PopupName.innerHTML = $(this).find('.product-name').text();
  PopupPrice.innerHTML = $(this).find('.price-discount').text();
  PopupCost.innerHTML = $(this).find('.cost').text();
  wrapPopup.classList.add('active');
  popup.id = this.id;

  // Ẩn card
  card.classList.remove('active');
}
$('.product').click(handleProductClick);

/**
 * Hàm xử lý sự kiện collapse customize-content
 */
$('.customize-title').click(function () {
  $(this).parent().children('.customize-content').slideToggle();
});

/** Xử lý sự kiện thay đổi nội dung btn thành tổng giá
 *
 */
// Lấy giá sản phẩm giảm giá
var amount = 1;
var priceDiscount = parseFloat(select('#pp-product-price').innerHTML);
var totalPrice = priceDiscount * amount,
  itemPrice = priceDiscount * amount;

on(
  'click',
  '.change-quantity',
  function () {
    var $amount = $(this).siblings('.amount');
    if ($(this).hasClass('decrease')) {
      if (parseInt($amount.text()) > 1) {
        $amount.text(parseInt($amount.text()) - 1);
        amount--;
        totalPrice -= itemPrice;
      }
    } else if ($(this).hasClass('increase')) {
      $amount.text(parseInt($amount.text()) + 1);
      amount++;
      totalPrice += itemPrice;
    }
    $('.btn-price-product').text(`+ ${totalPrice.toFixed(3)}đ`);
  },
  true
);

$("input[name='topping']").on('change', function () {
  var checkboxValue = $(this).siblings('label').attr('value');

  if ($(this).is(':checked')) {
    totalPrice += parseFloat(checkboxValue) * amount;
    itemPrice += parseFloat(checkboxValue);
  } else {
    totalPrice -= parseFloat(checkboxValue) * amount;
    itemPrice -= parseFloat(checkboxValue);
  }

  // Cập nhật giá trị lên button
  $('.btn-price-product').text(`+ ${totalPrice.toFixed(3)}đ`);
});

/**
 * Set maxHeight cho product-customize
 */
// get the height of the popup
const popupHeight = select('.popup').offsetHeight;

// get the height of the product-infomation section
const productInfoHeight = select('.product-infomation').offsetHeight;

// calculate the remaining height
const remainingHeight = popupHeight - productInfoHeight;

// set the max-height of the product-customize section
select('.product-customize').style.maxHeight = remainingHeight + 'px';

/* Xử lý chức năng card
 */
let quantity = select('.quantity');
let listCard = select('.listCard');
let totalPriceCard = select('.card-ss2-four');
let totalQuantityCard = select('.card-ss2-two');
let cardItemTitle = select('.name');
let itemAddTitle = select('#pp-product-name');
let itemAddImg = select('#pp-product-img');
let clearBtn = select('.card-remove');
let alert = '';

const productAdd = {
  id: '',
  img: '',
  title: '',
  price: '',
  quantity: '',
};

// Hàm xử lý chức năng clear cart
function clearCart() {
  const cart = listCard.querySelectorAll('.card-item');
  if (cart.length > 0) {
    alert = 'Bạn có chắc muốn xóa tất cả?';
    var confirmed = displayAlert(alert, 'confirm');
    if (confirmed) {
      cart.forEach((item) => {
        listCard.removeChild(item);
      });
    }
    localStorage.removeItem(CART_DATA);
    setCartToDefault();
  }
}
clearBtn.addEventListener('click', clearCart);

function displayAlert(alert, type) {
  switch (type) {
    case 'alert':
      alert(alert);
      break;
    case 'confirm':
      return confirm(alert);
  }
}
function setCartToDefault() {
  totalPriceCard.innerHTML = '0đ';
  totalQuantityCard.innerHTML = 0;
  listCard.innerHTML = 'Bạn chưa có sản phẩm nào trong giỏ hàng';
  quantity.innerHTML = 0;
}
function setPopupToDefault() {
  let topping = document.querySelectorAll('.topping');
  topping.forEach((item) => {
    if (item.checked) {
      item.checked = false;
    }
  });
  $('.btn-price-product').text(
    `+ ${parseFloat(PopupPrice.innerHTML).toFixed(3)}đ`
  );
  document.querySelector('#popup-amount').innerHTML = 1;
}

// edit quantity
function editQuantity(e) {
  const element = e.currentTarget.parentElement.parentElement;
  var itemQuantity = $(this).siblings('.item-amount');
  let itemAmount = element.querySelectorAll('.item-amount');
  var amount = parseInt(itemQuantity.text());
  var totalQuantity = totalQuantityCard.innerHTML;
  let itemTotalPrice = element.querySelector('.item-total-price');
  let totalPrice = parseInt(itemTotalPrice.innerHTML);
  let itemPrice = parseInt(element.querySelector('.item-price').innerHTML);

  // Kiểm tra lớp của nút được nhấp để xác định hành động là giảm hay tăng
  if ($(this).hasClass('item-decrease')) {
    --totalQuantity;
    totalPrice -= itemPrice;
    // Nếu giá trị nhỏ hơn 1 thì sẽ xóa phần tử
    if (amount > 1) {
      --amount;

      editLocalStorage(element.id, amount, CART_DATA);
    } else {
      listCard.removeChild(element);
      removeFromLocalStorage(element.id, CART_DATA);
    }
  } else if ($(this).hasClass('item-increase')) {
    // Tăng giá trị amount
    ++amount;
    ++totalQuantity;
    totalPrice += itemPrice;
    editLocalStorage(element.id, amount, CART_DATA);
  }

  // Cập nhật giá trị mới vào phần tử amount
  if (totalQuantity == 0) {
    setCartToDefault();
  } else {
    itemAmount.forEach((item) => (item.innerText = amount));
    itemTotalPrice.innerHTML = totalPrice.toFixed(3) + 'đ';

    // totalQuantityCard.innerHTML = totalQuantity;
    let items = getLocalStorage(CART_DATA);
    calculation(items);
    // setUpItems(CART_DATA);
  }
}

// Hàm add to localStorage
function addToLocalStorage(key, value) {
  let items = getLocalStorage(key);
  items.push(value);
  localStorage.setItem(key, JSON.stringify(items));
}
function getLocalStorage(key) {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}
function removeFromLocalStorage(id, key) {
  let items = getLocalStorage(key);

  items = items.filter(function (item) {
    return item.id !== id;
  });

  localStorage.setItem(key, JSON.stringify(items));
}
function editLocalStorage(id, quantity, key) {
  let items = getLocalStorage(key);

  items = items.map(function (item) {
    if (item.id == id) {
      item.quantity = quantity;
    }
    return item;
  });
  localStorage.setItem(key, JSON.stringify(items));
}
function setUpItems(key) {
  let items = getLocalStorage(key);
  if (items.length > 0) {
    listCard.innerHTML = '';
    items.forEach((item) => createListItem(item.id, item));
    calculation(items);
  } else {
    listCard.innerHTML = 'Bạn chưa có sản phẩm nào trong giỏ hàng';
  }
}

const calculation = (items) => {
  let totalQuantity = items.map((x) => x.quantity).reduce((x, y) => x + y, 0);
  let totalPrice = items
    .map((x) => x.price * x.quantity)
    .reduce((x, y) => x + y, 0);
  quantity.innerHTML = totalQuantity;
  totalQuantityCard.innerHTML = totalQuantity;
  totalPriceCard.innerHTML = totalPrice.toFixed(3) + 'đ';
};

function createListItem(id, item) {
  const element = document.createElement('div');
  element.id = id;
  element.classList.add('card-item');
  element.innerHTML = `
    <div class="card-item-left">
      <img
        src=${item.img}
        alt=""
        class="item-img"
      />
      <div class="item-info">
        <div class="item-name">${item.title} (M)</div>
        <div class="item-customize">70% đường,100% đá,</div>
        <div class="item-total">
          <span class="item-price">${item.price}đ</span>
          <span> x </span>
          <span class="item-amount amount">${item.quantity}</span>
          <span> = </span>
          <span class="item-total-price ">${(
            item.price * item.quantity
          ).toFixed(3)}đ</span>
        </div>
      </div>
    </div>
    <div class="card-item-right">
      <div class="item-change-quantity item-decrease">-</div>
      <div class="item-amount amount">${item.quantity}</div>
      <div class="item-change-quantity item-increase">+</div>
    </div>
  `;

  element
    .querySelector('.item-decrease')
    .addEventListener('click', editQuantity);
  element
    .querySelector('.item-increase')
    .addEventListener('click', editQuantity);

  listCard.appendChild(element);
}
window.addEventListener('DOMContentLoaded', setUpItems(CART_DATA));

// Xử lý chức năng thêm vào cart
function addToCard() {
  productAdd.id = new Date().getTime().toString();
  productAdd.img = itemAddImg.src;
  productAdd.title = itemAddTitle.innerHTML;
  productAdd.quantity = amount;
  productAdd.price = itemPrice.toFixed(3);
  console.log(productAdd.price + ' ' + itemPrice + ' ' + totalPrice);
  createListItem(productAdd.id, productAdd);
  setPopupToDefault();
  addToLocalStorage(CART_DATA, productAdd);
  setUpItems(CART_DATA);
}
on('click', '.btn-price-product', addToCard);
