document.querySelector('.click_login').addEventListener('click', function() {
    var emailInput = document.querySelector('.input1[type="email"]').value;
    var passwordInput = document.querySelector('.input1[type="password"]').value;

    // Kiểm tra xem có thông tin đầy đủ không
    if (emailInput === '' || passwordInput === '') {
        alert('Vui lòng điền đầy đủ thông tin đăng nhập.');
        return false; // Ngăn chặn việc gửi biểu mẫu
    }

    // Kiểm tra xem thông tin đăng nhập có khớp với thông tin đăng ký hay không
    var registeredEmail = localStorage.getItem('registeredEmail');
    var registeredPassword = localStorage.getItem('registeredPassword');

    if (emailInput === registeredEmail && passwordInput === registeredPassword) {
        // Nếu thông tin đăng nhập khớp, chuyển hướng đến trang tin tức
        window.location.href = 'tintuc.html';
    } else {
        // Nếu không khớp, thông báo lỗi
        alert('Tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại.');
    }
});

// Lưu thông tin đăng ký vào localStorage
var registeredEmail = 'example@gmail.com'; // Thay đổi thành email từ biểu mẫu đăng ký
var registeredPassword = '123456'; // Thay đổi thành mật khẩu từ biểu mẫu đăng ký
localStorage.setItem('registeredEmail', registeredEmail);
localStorage.setItem('registeredPassword', registeredPassword);
