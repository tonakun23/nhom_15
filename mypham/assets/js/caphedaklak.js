let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// Open cart
cartIcon.onclick = () => {
    cart.classList.add('active');
};

// Close cart
closeCart.onclick = () => {
    cart.classList.remove('active');
};

// Wait for DOM to load before setting up event listeners
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Function to set up event listeners and load cart from local storage
function ready() {
    // Remove item from cart
    let removeCartButtons = document.getElementsByClassName("cart-remove");
    for (let button of removeCartButtons) {
        button.addEventListener("click", removeCartItem);
    }

    // Quantity changes
    let quantityInputs = document.getElementsByClassName("cart-quantity");
    for (let input of quantityInputs) {
        input.addEventListener("change", quantityChanged);
    }

    // Add to cart
    let addCartButtons = document.getElementsByClassName("tang_them");
    for (let button of addCartButtons) {
        button.addEventListener("click", addCartClicked);
    }

    // Buy button
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);

    // Load cart from local storage
    loadCartFromLocalStorage();
}

// Buy button clicked
function buyButtonClicked() {
    alert("Your order has been placed");
    let cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
    saveCartToLocalStorage();
}

// Remove item from cart
function removeCartItem(event) {
    event.target.parentElement.remove();
    updateTotal();
    saveCartToLocalStorage();
}

// Quantity changes
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
    saveCartToLocalStorage();
}

// Add to cart
function addCartClicked(event) {
    let button = event.target;
    let shopProduct = button.closest('.product_box');
    let titleElement = shopProduct.querySelector(".product_title");
    let priceElement = shopProduct.querySelector(".price");
    let imgElement = shopProduct.querySelector(".box1");

    if (!titleElement || !priceElement || !imgElement) {
        console.error('Failed to add product to cart. Missing information.');
        return;
    }

    let title = titleElement.innerText;
    let price = priceElement.innerText;
    let productImg = imgElement.src;

    addProductToCart(title, price, productImg);
    updateTotal();
    saveCartToLocalStorage();
}

// Add product to cart
function addProductToCart(title, price, productImg) {
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    let cartItems = document.getElementsByClassName("cart-content")[0];
    let cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (let cartItemName of cartItemsNames) {
        if (cartItemName.innerText === title) {
            alert("You have already added this item to cart");
            return;
        }
    }

    let cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="fa-solid fa-circle-minus cart-remove"></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);

    cartShopBox.querySelector(".cart-remove").addEventListener("click", removeCartItem);
    cartShopBox.querySelector(".cart-quantity").addEventListener("change", quantityChanged);
}

// Update total
function updateTotal() {
    let cartContent = document.querySelector(".cart-content");
    let cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;
    cartBoxes.forEach(cartBox => {
        let priceElement = cartBox.querySelector(".cart-price");
        let quantityElement = cartBox.querySelector(".cart-quantity");
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = quantityElement.value;
        total += price * quantity;
    });
    document.querySelector(".total-price").innerText = "$" + total.toFixed(2);
}

// Save cart to local storage
function saveCartToLocalStorage() {
    let cartContent = document.querySelector(".cart-content");
    let cartBoxes = cartContent.querySelectorAll(".cart-box");
    let cartItems = [];
    cartBoxes.forEach(cartBox => {
        let title = cartBox.querySelector(".cart-product-title").innerText;
        let price = cartBox.querySelector(".cart-price").innerText;
        let imgSrc = cartBox.querySelector(".cart-img").src;
        let quantity = cartBox.querySelector(".cart-quantity").value;
        cartItems.push({ title, price, imgSrc, quantity });
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Load cart from local storage
function loadCartFromLocalStorage() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
        cartItems.forEach(item => {
            addProductToCart(item.title, item.price, item.imgSrc);
            let cartContent = document.querySelector(".cart-content");
            let cartBoxes = cartContent.querySelectorAll(".cart-box");
            cartBoxes[cartBoxes.length - 1].querySelector(".cart-quantity").value = item.quantity;
        });
    }
    updateTotal();
}
