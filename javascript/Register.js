{
  /* <div class="login-area">
  <input
    type="text"
    name="phone"
    autocomplete="off"
    inputtype="phone"
    placeholder="Nhập số điện thoại của bạn"
  />
  <div class="input-err"></div>
  <input
    type="password"
    name="password"
    autocomplete="off"
    inputtype="password"
    placeholder="Nhập mật khẩu của bạn"
  />
  <div class="input-err"></div>
  <div class="forgot-password">Quên mật khẩu?</div>
  <a href="Order.html" class="login-btn btn-yellow">
    Đăng nhập
  </a>
  <div class="sugget-text">
    <div class="text">Bạn chưa có tài khoản?</div>
    <a href="Register.html" class="link register-link">
      Tạo tài khoản
    </a>
  </div>
  <div class="sugget-text">
    <a href="Order.html" class="back-home">
      {' '}
      Quay lại màn hình chính
    </a>
  </div>
</div>; */
}

let phone = document.querySelector('#phone');
let pass = document.querySelector('#password');
let passConfirm = document.querySelector('#password-retype');
let btnRegister = document.querySelector('.btn-register');
let error = '';
let confirmErr = document.querySelector('.err-nomatch');
let passErr = document.querySelector('#pass-err');
let phoneErr = document.querySelector('#phone-err');
let chkRegist = false;

function Regist() {
  if (pass.value.trim() !== passConfirm.value.trim()) {
    error = 'Mật khẩu xác nhận lại không trùng khớp';
  } else {
    var account = {
      phone: phone.value,
      pass: pass.value,
      logined: false,
    };
    var Account_properties =
      JSON.parse(localStorage.getItem('account_register')) || [];
    let search = Account_properties.find((item) => {
      return account.phone == item.phone;
    });
    if (!search) {
      Account_properties.push(account);
      localStorage.setItem(
        'account_register',
        JSON.stringify(Account_properties)
      );
      window.location.href = 'login.html';
    } else {
      alert('Tài khoản đã tồn tại');
    }
  }
}
