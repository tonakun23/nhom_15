let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onclick = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active2');
}

document.querySelector('.search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active2')
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active2')
}




function toggleSubnav(event) {
    var subnav = event.target.nextElementSibling;
    subnav.style.display = (subnav.style.display === "none" || subnav.style.display === "") ? "block" : "none";
}

var sanphamLinks = document.getElementsByClassName("sanpham");
for (var i = 0; i < sanphamLinks.length; i++) {
    sanphamLinks[i].addEventListener("dblclick", function(event) {
        if (event.target.tagName === "A") {
            window.location.href = event.target.getAttribute("href");
        }
    });
}

var lastClickTime = 0;

function toggleSubnav(event) {
    var currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) { // Check if the time between clicks is less than 300 milliseconds (0.3 seconds)
        window.location.href = "sanpham.html";
    } else {
        var subnav = event.target.nextElementSibling;
        subnav.style.display = (subnav.style.display === "none" || subnav.style.display === "") ? "block" : "none";
    }
    lastClickTime = currentTime;
}