const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

/* Evertime that we click on button, this function will be called*/
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

/* Below, an algorithm to close your hamburguer menu after item click*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})