// 1. Desplazamiento suave al hacer clic en los enlaces del menú de navegación
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Selecciona el destino al que se quiere desplazar
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Desplazamiento suave
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Ajustar el desplazamiento para compensar el header
            behavior: 'smooth'
        });
    });
});

// 2. Resaltar el enlace activo en el menú de navegación
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav ul li a');

    let currentSectionId = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            currentSectionId = section.id;
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
});

function confirmarRedireccion(){

    const confirmar = confirm("¿Deseas ir a esta seccion?");

    if (confirmar) {
        alert("Espera, estas siendo redirigido a...");

        window.location.href = "./src/about.html";
        window.location.href = "./src/projects.html";
        window.location.href = "./src/skill.html";
        window.location.href = "./src/contact.html";
    }
}