document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. THEME SWITCHER LOGIC ---
    // This looks for the button in your header
    const themeBtn = document.getElementById('theme-toggle');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // Toggles the "dark-mode" class on the <body> tag
            const isDark = document.body.classList.toggle('dark-mode');
            
            // Updates the text of the button so users know how to switch back
            if (isDark) {
                themeBtn.textContent = "Day Match";
            } else {
                themeBtn.textContent = "Night Match";
            }
        });
    }

    // --- 2. CONTACT FORM VALIDATION LOGIC ---
    // This looks for the form on your contact page
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Select the email input field
            const emailInput = document.getElementById('user-email');

            // If the email field is empty, stop the form from sending
            if (emailInput.value.trim() === "") {
                event.preventDefault(); // Requirement: Stop the form submission
                alert("Please enter an email address before sending.");
            } else {
                alert("Thank you! Your message has been sent.");
            }
        });
    }
});
