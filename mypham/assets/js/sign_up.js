document.addEventListener('DOMContentLoaded', function() {
  const signUpButton = document.querySelector('.click_sing_up');

  signUpButton.addEventListener('click', function() {
    var nameInput = document.getElementById('nameInput').value;
    var passwordInput = document.getElementById('passwordInput').value;
    var phoneInput = document.getElementById('phoneInput').value;
    var emailInput = document.getElementById('emailInput').value;
    var checkbox = document.querySelector('.checkbox1');

    // Simple validation
    if (nameInput === '' || passwordInput === '' || phoneInput === '' || emailInput === '' || !checkbox.checked) {
      alert('Vui lòng điền đầy đủ thông tin và chấp nhận điều khoản.');
      return; // Chỉ trả về mà không đóng popup
    }

    // Additional validation for password
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(passwordInput)) {
      alert('Mật khẩu phải chứa ít nhất 8 ký tự bao gồm số và chữ cái viết hoa.');
      return; // Chỉ trả về mà không đóng popup
    }

    // Check if account already exists in localStorage
    if (localStorage.getItem(emailInput)) {

      return; // Chỉ trả về mà không đóng popup
    }

    // Check if phone number already exists in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let account = JSON.parse(localStorage.getItem(key));
      if (account.phone === phoneInput) {
        alert('Số điện thoại đã được sử dụng. Vui lòng sử dụng số điện thoại khác.');
        return; // Chỉ trả về mà không đóng popup
      }
    }

    // Save to localStorage as a simple example (email as key)
    localStorage.setItem(emailInput, JSON.stringify({name: nameInput, password: passwordInput, phone: phoneInput}));
    alert('Đăng ký thành công!');
    closePopup(); // Nếu tất cả điều kiện đều được thoả mãn thì đóng popup
  });

  function closePopup() {
    document.querySelector('.success-popup').style.display = 'none';
  }
});