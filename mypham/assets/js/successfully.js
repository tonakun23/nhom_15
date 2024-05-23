document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.querySelector('.click_sing_up');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('passwordInput');
    const overlay = document.querySelector('.overlay');
    const nameInput = document.getElementById('nameInput');

    // Convert name input field to uppercase on blur
    if (nameInput) {
        nameInput.addEventListener('blur', function () {
            this.value = this.value.toUpperCase();
        });
    }
    
    // Ensure phone number is 10 digits
    const phoneInput = document.getElementById('phoneInput');
    phoneInput.addEventListener('blur', function () {
        this.value = this.value.slice(0, 10);
    });
    
    // Toggle password visibility
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // Sign up button click event
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

            // Check if account exists
            if (accountExists(emailInput, phoneInput)) {
                alert('Tài khoản hoặc số điện thoại đã tồn tại. Vui lòng sử dụng thông tin khác.');
                return;
            }

            // Save new account to localStorage
            saveAccount(nameInput, emailInput, phoneInput, passwordInput);

            // Show success popup
            showSuccessPopup();
        });
    }

    // Check if account exists
       // Check if account exists
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

    // Save new account to localStorage
    function saveAccount(name, email, phone, password) {
        const account = { name, email, phone, password };
        localStorage.setItem(email, JSON.stringify(account));
    }

    // Show success popup
    function showSuccessPopup() {
        // Check if successPopup already exists
        let successPopup = document.querySelector('.success-popup');
        
        if (!successPopup) {
            // If it doesn't exist, create and append it to the body
            successPopup = document.createElement('div');
            successPopup.classList.add('success-popup');
            document.body.appendChild(successPopup);
        }

        // Update the content of successPopup
        successPopup.innerHTML = `
            <img src="./assets/picture/login/frane.png" alt="Success">
            <h3>Đăng ký thành công</h3>
            <p>Cám ơn bạn đã đăng ký tài khoản của Cocoon</p>
            <button id="confirmButton" type="button">VỀ TRANG CHỦ</button>
        `;

        // Display successPopup and overlay
        successPopup.style.display = 'block';
        overlay.style.display = 'block';

        // Add click event to the confirmation button to redirect to the homepage
        const confirmButton = successPopup.querySelector('#confirmButton');
        confirmButton.addEventListener('click', function() {
            successPopup.style.display = 'none';
            overlay.style.display = 'none';
            window.location.href = "login.html";
        });
    }
});

