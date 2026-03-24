// Selecciona todas las secciones ocultas
const hiddenSections = document.querySelectorAll('.hidden-section');

// Delay inicial para staggered effect
let revealDelay = 0;

// Función de revelado con staggered + parallax suave
const revealSections = () => {
    hiddenSections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(sectionTop < screenHeight - 100 && !section.classList.contains('visible-section')){
            setTimeout(() => {
                section.classList.add('visible-section');
            }, index * 200); // cada sección aparece 200ms después de la anterior
        }
    });
}

// Parallax suave
const parallaxSections = () => {
    hiddenSections.forEach(section => {
        const scrolled = window.scrollY;
        section.style.transform = `translateY(${50 - scrolled * 0.05}px)`; // ligera subida al hacer scroll
    });
}

// Eventos
window.addEventListener('scroll', () => {
    revealSections();
    parallaxSections();
});

window.addEventListener('load', () => {
    revealSections();
    parallaxSections();
});