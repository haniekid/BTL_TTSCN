function compare_account() {
  var Account_properties =
    JSON.parse(localStorage.getItem('account_register')) || [];
  var Phone_input = document.getElementById('phone').value.trim();
  var Password_input = document.getElementById('password').value.trim();

  var account = Account_properties.find(function (item) {
    return item.phone == Phone_input && item.pass == Password_input;
  });
  if (account) {
    // Đăng nhập thành công, chuyển hướng người dùng đến trang chính
    window.location.href = 'Order.html';
  } else {
    // Đăng nhập không thành công, hiển thị thông báo lỗi cho người dùng
    document.querySelector('.input-err').innerHTML =
      'Sai số điện thoại hoặc mật khẩu';
  }
}
