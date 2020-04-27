const button = document.querySelector('.hamburger');
const mobileNavbar = document.querySelector('.mobileNav');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    button.classList.toggle('is-active');
    mobileNavbar.classList.toggle('show');
    body.classList.toggle('no-scroll');
})