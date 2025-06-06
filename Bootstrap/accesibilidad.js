document.addEventListener("DOMContentLoaded", function () {
    console.log("Script de accesibilidad cargado.");

    const body = document.body;
    const html = document.documentElement; // ⬅️ Añadido
    const btn = document.getElementById("accesibilidadBtn");

    // Crear el panel de accesibilidad
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
        <button id="btnContraste" class="btn btn-dark btn-sm mb-2">Alto Contraste</button><br>
        <button id="btnTextoGrande" class="btn btn-secondary btn-sm mb-2">Texto Grande</button><br>
        <button id="btnGris" class="btn btn-secondary btn-sm mb-2">Escala de Grises</button><br>
        <button id="btnRestaurar" class="btn btn-danger btn-sm">Restaurar</button>
    `;
    document.body.appendChild(panel);

    // Mostrar/Ocultar el panel
    if (btn) {
        btn.addEventListener("click", () => {
            const panelVisible = panel.style.display === "block";
            panel.style.display = panelVisible ? "none" : "block";

            // Cargar Bootstrap si no está
            if (!document.getElementById("bootstrapCSS")) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
                link.id = "bootstrapCSS";
                document.head.appendChild(link);
            }
        });
    }

    // 🟡 Modificado: aplicar alto contraste también a <html>
    document.getElementById("btnContraste").addEventListener("click", () => {
        body.classList.toggle("contraste-activo");
        html.classList.toggle("contraste-activo"); // ⬅️ Esto aplica fondo negro al html
    });

    document.getElementById("btnTextoGrande").addEventListener("click", () => {
        body.classList.toggle("texto-grande");
    });

    document.getElementById("btnGris").addEventListener("click", () => {
        body.classList.toggle("escala-grises");
    });

    document.getElementById("btnRestaurar").addEventListener("click", () => {
        body.classList.remove("contraste-activo", "texto-grande", "escala-grises");
        html.classList.remove("contraste-activo"); // ⬅️ Restaurar clase de <html>
    });
});
