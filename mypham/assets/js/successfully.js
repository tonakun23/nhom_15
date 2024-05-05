document.addEventListener('DOMContentLoaded', function() {
  const signUpButton = document.querySelector('.click_sing_in');
  const successPopup = document.createElement('div');

  // Create popup content
  successPopup.classList.add('success-popup');
  successPopup.innerHTML = `
    <img src="./assets/picture/login/tick.png" alt="Success"> 
    <h3>Đăng ký thành công</h3>
    <p>Cám ơn bạn đã đăng ký tài khoản của Cocoon</p>
    <button type="button">VỀ TRANG CHỦ</button> 
  `;

  // Function to close the popup and redirect
  function closePopup() {
    successPopup.style.display = 'none';
    window.location.href = "login.html"; // Redirect to login page
  }

  // Add event listener to the sign-up button
  signUpButton.addEventListener('click', function() {
    successPopup.style.display = 'block';
    document.body.appendChild(successPopup); 
  });

  // Add event listener to the "VỀ TRANG CHỦ" button within the popup
  const closeButton = successPopup.querySelector('button');
  closeButton.addEventListener('click', closePopup);
}); 