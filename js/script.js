// TOGGLE NAVBAR ICON
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// RESET FORM AFTER EMAIL SENT
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

// SET NAVBAR ACTIVE LINK
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // STICKY NAVBAR
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // CLOSE NAVBAR WHEN CLICKING A LINK
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// SCROLL REVEAL
// https://scrollrevealjs.org/guide/customization.html
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form, .heading-bottom-showed', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .skill', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .new-contact', { origin: 'right' });


// TYPED JS
// https://github.com/mattboldt/typed.js/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Game Developer', 'Computer Lover'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// COPY EMAIL BUTTON
function copyToClipboard(text) {
    var input = document.createElement('textarea');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    var confirmation = document.getElementById("copyConfirmation");
    confirmation.style.display = "inline";
    setTimeout(function () {
        confirmation.style.display = "none";
    }, 1500);
}