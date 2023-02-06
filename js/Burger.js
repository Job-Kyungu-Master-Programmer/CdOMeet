
// Burger MENU 

const icons = document.querySelectorAll('.nav-icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


// Open And Closed Menu For All Pages Website 

let ButtonBurger = document.querySelector('#ButtonBurger');
let MenuNav      = document.querySelector('.header__list');

ButtonBurger.addEventListener('click' , () => {
   MenuNav.classList.toggle('MenuNavbarOpen');
   console.log(ButtonBurger);
});