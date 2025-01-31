document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.navigation__toggle');
    const menu = document.querySelector('.navigation__menu');
    
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});