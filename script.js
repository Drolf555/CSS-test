document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            themeBtn.textContent = isDark ? "Day Match" : "Night Match";
        });
    }
    // Hamburger menu
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});
