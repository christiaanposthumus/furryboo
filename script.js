// Smooth Scroll Animations and Parallax
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const sections = document.querySelectorAll('[data-scroll]');
    let scrollPosition = window.pageYOffset;

    // Parallax effect for hero section
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

    // Fade in sections on scroll
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
        }
    });
});

// Sticky Navbar Highlight
const navbarLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');

    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section, index) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            navbarLinks.forEach(link => link.classList.remove('active'));
            navbarLinks[index].classList.add('active');
        }
    });
});
