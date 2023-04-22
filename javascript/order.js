$(document).ready(function () {
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
        $(selectEl).on(type, listener);
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
    $(window).on('load', headerScrolled);
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
  $(window).on('load', navbarlinksActive);
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
  onscroll(window, () => {
    card.classList.remove('active');
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
  var totalPrice = priceDiscount * amount;

  on(
    'click',
    '.change-quantity',
    function () {
      var $amount = $(this).siblings('.amount');
      if ($(this).hasClass('decrease')) {
        if (parseInt($amount.text()) > 1) {
          $amount.text(parseInt($amount.text()) - 1);
          amount--;
        }
      } else if ($(this).hasClass('increase')) {
        $amount.text(parseInt($amount.text()) + 1);
        amount++;
      }
      totalPrice = priceDiscount * amount;
      $('.btn-price-product').text(`+ ${totalPrice.toFixed(3)}đ`);
    },
    true
  );

  $("input[name='topping']").on('change', function () {
    var checkboxValue = $(this).siblings('label').attr('value');

    if ($(this).is(':checked')) {
      totalPrice += parseFloat(checkboxValue);
    } else {
      totalPrice -= parseFloat(checkboxValue);
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

  /**
   * Xử lý các chức năng với giỏ hàng
   */
  // let listCards = [];
  // let listCard = select('.listCard');
  // let total = select('.total');
  // let quantity = select('.quantity');
  // let cart = select('#cart');

  // /**
  //  * Chức năng thêm vào cart khi click vào nút add
  //  */
  // function addToCard(key, originArray) {
  //   if (listCards[key] == null) {
  //     // copy product form list to list card
  //     listCards[key] = JSON.parse(JSON.stringify(originArray[key]));
  //     listCards[key].quantity = 1;
  //   }
  //   reloadCard();
  // }
  // function reloadCard() {
  //   listCard.innerHTML = '';
  //   let count = 0;
  //   let totalPrice = 0;
  //   listCards.forEach((value, key) => {
  //     totalPrice = totalPrice + value.price;
  //     count = count + value.quantity;
  //     if (value != null) {
  //       let newDiv = document.createElement('li');
  //       newDiv.innerHTML = `
  //                 <div><img src="image/${value.image}"/></div>
  //                 <div>${value.name}</div>
  //                 <div>${value.price.toLocaleString()}</div>
  //                 <div>
  //                     <button onclick="changeQuantity(${key}, ${
  //         value.quantity - 1
  //       })">-</button>
  //                     <div class="count">${value.quantity}</div>
  //                     <button onclick="handleClick(e)">+</button>
  //                 </div>`;
  //       listCard.appendChild(newDiv);
  //     }
  //   });
  //   total.innerText = totalPrice.toLocaleString();
  //   quantity.innerText = count;
  // }
  // function changeQuantity(key, quantity) {
  //   if (quantity == 0) {
  //     delete listCards[key];
  //   } else {
  //     listCards[key].quantity = quantity;
  //     listCards[key].price = quantity * products[key].price;
  //   }
  //   reloadCard();
  // }

  // Xử lý sự kiện thêm vào giỏ hàng
  let quantity = select('#quantity');
  let listCard = select('.listCard');
  let cardSs2 = select('.card-ss2-two');
  let totalPriceCard = select('.card-ss2-four');
  let totalQuantityCard = select('.card-ss2-two');
  let cardItemTitle = select('.name');
  let itemAddTitle = select('#pp-product-name');
  let itemAddImg = select('#pp-product-img');

  let basket = JSON.parse(localStorage.getItem('cart_data')) || [];

  const productAdd = {
    id: '',
    img: '',
    title: '',
    price: '',
    quantity: '',
  };
  // let calculation = () => {
  //   let cartIcon = document.getElementById('cartAmount');
  //   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  // };

  // calculation();
  on('click', '.btn-price-product', function () {
    productAdd.id = Date.now();
    productAdd.img = itemAddImg.attr('src');
    productAdd.title = itemAddTitle.text();
    productAdd.quantity = amount;
    productAdd.price = totalPrice / amount;
    console.log(productAdd);
    basket.push(productAdd);
    localStorage.setItem('cart_data', JSON.stringify(basket));
  });
});
