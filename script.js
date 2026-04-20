document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // This is the line that actually makes the magic happen
            const isDark = document.body.classList.toggle('dark-mode');
            themeBtn.textContent = isDark ? "Day Match" : "Night Match";
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const emailInput = document.getElementById('user-email');
            if (emailInput.value.trim() === "") {
                event.preventDefault();
                alert("Please enter an email address.");
            }
        });
    }
});
