document.addEventListener('DOMContentLoaded', function () {
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

  // Xử lý sự kiện thêm vào giỏ hàng
  let quantity = select('#quantity');
  let listCard = select('#listCard');
  let totalPriceCard = select('.card-ss2-four');
  let totalQuantityCard = select('.card-ss2-two');
  let cardItemTitle = select('.name');
  let itemAddTitle = select('#pp-product-name');
  let itemAddImg = select('#pp-product-img');
  let itemAddPrice = totalPrice / amount;

  let basket = JSON.parse(localStorage.getItem('cart_data')) || [];

  const productAdd = {
    id: '',
    img: '',
    title: '',
    price: '',
    quantity: '',
  };

  const generateCartItems = () => {
    if (basket.length !== 0) {
      return (listCard.innerHTML = basket
        .map((item) => {
          return `<div class="card-item" id="${item.id}">
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
                          <span class="item-mount">${item.quantity}</span>
                          <span> = </span>
                          <span class="item-total-price">${(
                            item.price * item.quantity
                          ).toFixed(3)}đ</span>
                        </div>
                      </div>
                    </div>
                    <div class="card-item-right">
                      <div class="item-change-quantity item-decrease">-</div>
                      <div class="item-amount">${item.quantity}</div>
                      <div class="item-change-quantity item-increase">+</div>
                    </div>
                  </div>`;
        })
        .join(''));
    } else {
      listCard.innerHTML = 'Bạn không có sản phẩm nào';
    }
  };
  window.addEventListener('load', generateCartItems);

  const calculation = () => {
    let totalQuantity = basket
      .map((x) => x.quantity)
      .reduce((x, y) => x + y, 0);
    let totalPrice = basket
      .map((x) => x.price * x.quantity)
      .reduce((x, y) => x + y, 0);
    quantity.innerHTML = totalQuantity;
    totalQuantityCard.innerHTML = totalQuantity;
    totalPriceCard.innerHTML = totalPrice.toFixed(3) + 'đ';
  };
  window.addEventListener('load', calculation);

  // Xử lý chức năng thêm vào cart
  on('click', '.btn-price-product', function () {
    productAdd.id = Date.now();
    productAdd.img = itemAddImg.src;
    productAdd.title = itemAddTitle.innerHTML;
    productAdd.quantity = amount;
    productAdd.price = itemAddPrice.toFixed(3);
    console.log(productAdd);
    basket.push(productAdd);
    localStorage.setItem('cart_data', JSON.stringify(basket));
    calculation();
    generateCartItems();
  });

  // Lặp qua danh sách các button và gán sự kiện "click"
  // Lấy danh sách tất cả các phần tử .item-change-quantity
  var buttons = document.querySelectorAll('.item-change-quantity');

  // Thêm sự kiện "click" cho mỗi phần tử
  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      // Lấy id của phần tử cha .card-item
      var productId = event.target.closest('.card-item').id;
      console.log('Clicked button for product:', productId);
      // Xử lý các thay đổi số lượng sản phẩm tương ứng với nút được click
    });
  });

  // on('click', '.item-increase', increment(this.parentNode.parentNode.id));
});
