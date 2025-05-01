document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const btn = document.getElementById("accesibilidadBtn");

    // Agregar contenedor de accesibilidad dinámicamente
    const panel = document.createElement("div");
    panel.id = "accesibilidadPanel";
    panel.style.display = "none";
    panel.style.position = "fixed";
    panel.style.top = "60px";
    panel.style.right = "20px";
    panel.style.backgroundColor = "#f1f1f1";
    panel.style.border = "1px solid #ccc";
    panel.style.padding = "10px";
    panel.style.zIndex = "9999";
    panel.innerHTML = `
        <button id="btnContraste">Alto Contraste</button><br><br>
        <button id="btnTextoGrande">Texto Grande</button><br><br>
        <button id="btnGris">Escala de Grises</button><br><br>
        <button id="btnRestaurar">Restaurar</button>
    `;
    document.body.appendChild(panel);

    // Mostrar/Ocultar el panel de accesibilidad
    if (btn) {
        btn.addEventListener("click", () => {
            const panelVisible = panel.style.display === "block";
            panel.style.display = panelVisible ? "none" : "block";

            // Cargar Bootstrap si no está cargado
            if (!document.getElementById("bootstrapCSS")) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
                link.id = "bootstrapCSS";
                document.head.appendChild(link);
            }
        });
    }

    // Función: Alto contraste
    document.getElementById("btnContraste").addEventListener("click", () => {
        body.classList.toggle("contraste-activo");
    });

    // Función: Texto grande
    document.getElementById("btnTextoGrande").addEventListener("click", () => {
        body.classList.toggle("texto-grande");
    });

    // Función: Escala de grises
    document.getElementById("btnGris").addEventListener("click", () => {
        body.classList.toggle("escala-grises");
    });

    // Función: Restaurar todo
    document.getElementById("btnRestaurar").addEventListener("click", () => {
        body.classList.remove("contraste-activo", "texto-grande", "escala-grises");
    });
});
