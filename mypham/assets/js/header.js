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