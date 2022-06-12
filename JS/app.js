const burgerMenu=document.querySelector('.menu-Burger');
const burgerTitle=document.querySelector('.burger-menu');
const deleteMenu=document.querySelector('.delete-menu');

burgerMenu.addEventListener('click',()=>{
    burgerTitle.classList.add('active');
})

deleteMenu.addEventListener('click',()=>{
    burgerTitle.classList.remove('active');
})