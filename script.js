function toggleMenu() {
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector("hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionPos = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if (sectionPos < screenPos) {
                section.classList.add('visible');
            }
        });
    });
});
s