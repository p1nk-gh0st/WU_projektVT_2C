const button = document.querySelector('.hamburger');
const mobileNavbar = document.querySelector('.mobileNav');
const all = document.querySelector('*');
const mobileNavbaralt = document.querySelector('.mobile-Navbar');

button.addEventListener('click', () => {
    button.classList.toggle('is-active');
    mobileNavbar.classList.toggle('show');
    all.classList.toggle('no-scroll');
    mobileNavbaralt.classList.toggle('no-shadow')
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})