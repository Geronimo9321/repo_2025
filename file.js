// 1. Desplazamiento suave solo para anclas internas
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Aplica solo si es un enlace interno (#)
        if (href.startsWith('#')) {
            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        }
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

// 3. Confirmación de redirección
function confirmarRedireccion(url) {
    const confirmar = confirm("¿Deseas ir a esta sección?");
    if (confirmar) {
        alert("Espera, estás siendo redirigido a...");
        window.location.href = url;
    }
    return false; // Evita la navegación automática si no se confirma
}
