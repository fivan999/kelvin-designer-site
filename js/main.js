const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button_icon');
const mobileNav = document.querySelector('.nav')

mobileNavButton.addEventListener('click', function(){
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
})

AOS.init({
    once: true
});