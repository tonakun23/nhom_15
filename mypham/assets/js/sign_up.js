// Toggle password visibility
document.querySelector('.toggle-password').addEventListener('click', function() {
    var passwordInput = document.getElementById('passwordInput');
    var icon = document.querySelector('.toggle-password');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
      
    } else {
      passwordInput.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
  
  // Validate sign up form
  document.querySelector('.click_sing_up').addEventListener('click', function() {
    var nameInput = document.getElementById('nameInput').value;
    var passwordInput = document.getElementById('passwordInput').value;
    var phoneInput = document.getElementById('phoneInput').value;
    var emailInput = document.getElementById('emailInput').value;
    var checkbox = document.querySelector('.checkbox1');
  
    // Simple validation (you can add more complex validation if needed)
    if (nameInput === '' || passwordInput === '' || phoneInput === '' || emailInput === '' || !checkbox.checked) {
      alert('Vui lòng điền đầy đủ thông tin và chấp nhận điều khoản.');
      return false; // Prevent form submission
    }

  
    // Additional validation for password (at least 8 characters including numbers and uppercase letters)
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(passwordInput)) {
      alert('Mật khẩu phải chứa ít nhất 8 ký tự bao gồm số và chữ cái viết hoa.');
      return false; // Prevent form submission
    }
  
  });
  
  // Close success popup
  function closePopup() {
    document.querySelector('.success-popup').style.display = 'none';
    
  }
  