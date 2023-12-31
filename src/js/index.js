let mobileNav = document.querySelector('.mobile-nav');

document.querySelector('#mobile-menu').onclick = () => {
    mobileNav.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () => {
    mobileNav.classList.toggle('active');
}