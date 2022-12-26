const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_poistion = window.scrollY;
    if(scroll_poistion > 250){
        header.style.backgroundColor = '#43cbac';
    }else{
        header.style.backgroundColor = 'transparent';
    }
});