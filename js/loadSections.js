const loadSection = async (id, file) => {
    try {
        const res = await fetch(file);
        const html = await res.text();
        document.getElementById(id).innerHTML = html;

        // 🔥 REACTIVAR SCROLL REVEAL
        if (typeof initScrollReveal === "function") {
            initScrollReveal();
        }
    } catch (err) {
        console.error("Error cargando sección:", err);
    }
};

// cargar sección sobre mí
loadSection("about-me", "./sections/about_me.html");
loadSection("projects", "./sections/projects.html");
loadSection("contact", "./sections/contact.html");