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

// 4. Insertar el footer automaticamente
document.addEventListener("DOMContentLoaded", () => {
    insertarFooter();
    // Podés agregar aquí otros elementos como insertarNav() si lo necesitás
});

// Inserta el footer automáticamente con confirmación en los enlaces
function insertarFooter() {
    const footerHTML = `
        <footer>
            <p>&copy; 2025 Geronimo Ariel Franco.</p>
            <div class="footer-links">
                <a href="https://github.com/tu_usuario" onclick="return confirmarContacto(this.href)">GitHub</a>
                <a href="https://linkedin.com/in/tu_usuario" onclick="return confirmarContacto(this.href)">LinkedIn</a>
                <a href="mailto:tuemail@gmail.com" onclick="return confirmarContacto(this.href)">Gmail</a>
            </div>
        </footer>
    `;

    const footerContainer = document.getElementById("footer-principal");
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}

// Función de confirmación para los enlaces del footer
function confirmarContacto(url) {
    const confirmar = confirm("¿Contactarte con Geronimo?");
    if (confirmar) {
        window.location.href = url;
    }
    return false;
}
