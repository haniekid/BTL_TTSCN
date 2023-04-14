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
   * Xử lý các chức năng với giỏ hàng
   */
  let listCards = [];
  let listCard = select('.listCard');
  let total = select('.total');
  let quantity = select('.quantity');
  let cart = select('#cart');

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
                      <button onclick="handleClick(e)">+</button>
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
  /**
   * Chức năng ẩn hiện card khi click vào icon giỏ hàng
   */
  on('click', '#card', () => {
    card.classList.toggle('active');
  });

  /**
   * Chức năng ẩn hiện product container
   */
  $('.order-container-header').click(function () {
    $(this).parent().children('.order-container').slideToggle();
  });

  /**
   * Xử lý sự kiện ấn vào nút thêm
   */
  $('.btn-add-to-card').click(function handleClickAddProduct(e) {
    var popupHTML = $(`
                      <div class="popup-choose-product">
                        <div class="ss-1 product-infomation">
                          <div class="ss-1-left">
                            <img id="pp-product-img" src="" alt="">
                          </div>
                          <div class="ss-1-right">
                            <div id="pp-product-name" class="product-name">Trà sữa loading...</div>
                            <div class="product-price">
                              <div id="pp-product-price" class="price">...đ</div>
                              <div id="pp-product-regular-price" class="regular-price">...đ</div>
                            </div>
                            <div id="pp-product-short-desc" class="product-info">Chưa có thông tin.</div>
                            <div class="wrap-quantity d-flex align-items-center">
                              <div class="change-quantity-wrap">
                                <div class="change-quantity decrease">-</div>
                                <div class="amount">1</div>
                                <div class="change-quantity increase">+</div>
                              </div>
                              <div class="btn-price-product">+ 25,000đ</div>
                            </div>
                          </div>
                        </div>
                        <div class="ss-2 product-customize">
                          <div class="customize-section type">
                            <div class="customize-title">
                              <div class="left">Chọn loại</div>
                              <div class="right">
                                <i class="fas fa-angle-down"></i>
                              </div>
                            </div>
                            <div class="customize-content">
                            </div>
                          </div>
                          <div class="customize-section comboM">
                            <div class="customize-title">
                              <div class="left">Chọn món size M</div>
                              <div class="right">
                                <i class="fas fa-angle-down"></i>
                              </div>
                            </div>
                            <div class="customize-content">
                            </div>
                          </div>
                          <div class="customize-section comboL">
                            <div class="customize-title">
                              <div class="left">Chọn món size L</div>
                              <div class="right">
                                <i class="fas fa-angle-down"></i>
                              </div>
                            </div>
                            <div class="customize-content">
                            </div>
                          </div>
                          <div class="customize-section size">
                            <div class="customize-title">
                              <div class="left">Chọn size</div>
                              <div class="right">
                                <i class="fas fa-angle-down"></i>
                              </div>
                            </div>
                            <div class="customize-content">
                            </div>
                          </div>
                          <div class="customize-section sugar">
                            <div class="customize-title">
                              <div class="left">Chọn đường</div>
                              <div class="right">
                                <i class="fas fa-angle-down"></i>
                              </div>
                            </div>
                            <div class="customize-content">
                            </div>
                          </div>
                          <div class="customize-section ice">
                            <div class="customize-title">
                              <div class="left">Chọn đá</div>
                              <div class="right">
                                <i class="fas fa-angle-down"></i>
                              </div>
                            </div>
                            <div class="customize-content">
                            </div>
                          </div>
                          <div class="customize-section topping">
                            <div class="customize-title">
                              <div class="left">Chọn topping</div>
                              <div class="right">
                                <i class="fas fa-angle-down"></i>
                              </div>
                            </div>
                            <div class="customize-content">
                            </div>
                          </div>
                        </div>
                      </div>
                    `);
  });
});
