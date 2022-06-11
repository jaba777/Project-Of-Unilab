const burgerMenu=document.querySelector('.menu-Burger');
const burgerTitle=document.querySelector('.burger-menu');

burgerMenu.addEventListener('click',()=>{
    burgerTitle.classList.add('active');
})