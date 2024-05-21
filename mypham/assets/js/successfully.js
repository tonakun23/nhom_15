document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.querySelector('.click_sing_up');

    signUpButton.addEventListener('click', function() {
        // Get input values
        const nameInput = document.getElementById('nameInput').value;
        const passwordInput = document.getElementById('passwordInput').value;
        const phoneInput = document.getElementById('phoneInput').value;
        const emailInput = document.getElementById('emailInput').value;
        const checkbox = document.querySelector('.checkbox1');

        // Simple validation (you can add more complex validation if needed)
        if (nameInput === '' || passwordInput === '' || phoneInput === '' || emailInput === '' || !checkbox.checked) {
            alert('Vui lòng điền đầy đủ thông tin và chấp nhận điều khoản.');
            return false; // Prevent form submission
        }

        // Additional validation for password (at least 8 characters including numbers and uppercase letters)
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(passwordInput)) {
            alert('Mật khẩu phải chứa ít nhất 8 ký tự bao gồm số và chữ cái viết hoa.');
            return false; // Prevent form submission
        }

        // If all conditions are met, show success popup
        const successPopup = document.createElement('div');
        const overlay = document.createElement('div');

        // Create popup content
        successPopup.classList.add('success-popup');
        successPopup.innerHTML = `
            <img src="./assets/picture/login/frane.png" alt="Success">
            <h3>Đăng ký thành công</h3>
            <p>Cám ơn bạn đã đăng ký tài khoản của Cocoon</p>
            <button id="confirmButton" type="button">VỀ TRANG CHỦ</button>
        `;

        // Style the overlay
        overlay.classList.add('overlay');
        document.body.appendChild(overlay); // Append overlay to body
        document.body.appendChild(successPopup); // Append successPopup to body

        // Function to close the popup
        function closePopup() {
            successPopup.style.display = 'none';
            overlay.style.display = 'none';
        }

        // Add event listener to the "Xác Nhận" button within the popup
        const confirmButton = successPopup.querySelector('#confirmButton');
        confirmButton.addEventListener('click', function() {
            window.location.href = "login.html"; // Redirect to login page
        });

        // Show success popup and overlay
        successPopup.style.display = 'block';
        overlay.style.display = 'block';
    });
});
