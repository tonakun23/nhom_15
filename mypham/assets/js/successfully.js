document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.querySelector('.click_sing_up');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('passwordInput');

    // Xử lý toggle hiển thị mật khẩu
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            // Toggle the type attribute
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            // Toggle the eye/eye slash icon
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // Xử lý khi người dùng click nút "ĐĂNG KÝ"
    if (signUpButton) {
        signUpButton.addEventListener('click', function () {
            const nameInput = document.getElementById('nameInput').value;
            const passwordInput = document.getElementById('passwordInput').value;
            const phoneInput = document.getElementById('phoneInput').value;
            const emailInput = document.getElementById('emailInput').value;
            const checkbox = document.querySelector('.checkbox1');

            if (nameInput === '' || passwordInput === '' || phoneInput === '' || emailInput === '' || !checkbox.checked) {
                alert('Vui lòng điền đầy đủ thông tin và chấp nhận điều khoản.');
                return;
            }

            const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (!passwordRegex.test(passwordInput)) {
                alert('Mật khẩu phải chứa ít nhất 8 ký tự bao gồm số và chữ cái viết hoa.');
                return;
            }

            // Kiểm tra xem tài khoản đã tồn tại trong localStorage chưa
            if (accountExists(emailInput, phoneInput)) {
                alert('Tài khoản hoặc số điện thoại đã tồn tại. Vui lòng sử dụng thông tin khác.');
                return;
            }

            // Nếu tất cả điều kiện đều thoả mãn, hiển thị popup thành công
            showSuccessPopup();
        });
    }

    // Hàm kiểm tra tài khoản đã tồn tại
    function accountExists(email, phone) {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const account = JSON.parse(localStorage.getItem(key));
            if (account && (account.email === email || account.phone === phone)) {
                return true;
            }
        }
        return false;
    }

    // Hàm hiển thị popup thành công
    function showSuccessPopup() {
        const successPopup = document.querySelector('.success-popup'); // Sử dụng phần tử popup có sẵn trong HTML.
        const overlay = document.querySelector('.overlay'); // Sử dụng phần tử overlay có sẵn trong HTML.

        if (successPopup && overlay) {
            // Hiển thị popup và overlay
            successPopup.style.display = 'block';
            overlay.style.display = 'block';

            const confirmButton = successPopup.querySelector('#confirmButton');
            confirmButton.addEventListener('click', function () {
                window.location.href = "login.html";
            });
        }
    }
});