function compare_account() {
  var Account_properties =
    JSON.parse(localStorage.getItem('account_register')) || [];
  var Phone_input = document.getElementById('phone').value.trim();
  var Password_input = document.getElementById('password').value.trim();

  var account = Account_properties.find(function (item) {
    return item.phone == Phone_input && item.pass == Password_input;
  });
  if (account) {
    let Account_login =
      JSON.parse(sessionStorage.getItem('account_login')) || [];
    let user = {
      phone: account.phone,
      pass: account.pass,
    };
    let search = Account_login.find(function (item) {
      return user.phone == item.phone;
    });
    if (!search) {
      Account_login.push(user);
      sessionStorage.setItem('account_login', JSON.stringify(Account_login));
    }
    // Đăng nhập thành công, chuyển hướng người dùng đến trang chính
    window.location.href = 'Order.html';
  } else {
    // Đăng nhập không thành công, hiển thị thông báo lỗi cho người dùng
    document.querySelector('.input-err').innerHTML =
      'Sai số điện thoại hoặc mật khẩu';
  }
}
