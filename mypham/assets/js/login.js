document.querySelector('.click_login').addEventListener('click', function() {
    var emailInput = document.querySelector('.input1[type="email"]').value;
    var passwordInput = document.querySelector('.input1[type="password"]').value;

    // Kiểm tra xem đã nhập đầy đủ thông tin hay chưa
    if (emailInput === '' || passwordInput === '') {
        alert('Vui lòng điền đầy đủ thông tin đăng nhập.');
        return false;
    }

    // Lấy thông tin đăng ký từ localStorage
    var userInfo = localStorage.getItem(emailInput);
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        if (passwordInput === userInfo.password) {
            // Đăng nhập thành công, chuyển hướng đến trang account.html
            window.location.href = 'acount.html';
        } else {
            alert('Mật khẩu không chính xác. Vui lòng thử lại.');
        }
    } else {
        // Không tìm thấy email trong localStorage, chuyển hướng đến trang đăng ký
        alert('Tài khoản không tồn tại. Vui lòng đăng ký.');
        window.location.href = 'sign_up.html';
    }
});