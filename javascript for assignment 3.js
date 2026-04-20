document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. THEME SWITCHER ---
    const themeBtn = document.getElementById('theme-toggle');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            
            if (isDark) {
                themeBtn.textContent = "Day Match";
            } else {
                themeBtn.textContent = "Night Match";
            }
        });
    }

    // --- 2. FORM VALIDATION (To meet the Step 3 requirement) ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Get the value of an input (make sure your HTML input has id="user-email")
            const emailInput = document.getElementById('user-email').value;

            if (emailInput === "") {
                // STOP the form from submitting/refreshing if empty
                event.preventDefault(); 
                alert("Please enter an email address before sending.");
            } else {
                // Optional: Alert success
                alert("Thank you! Your message has been sent.");
            }
        });
    }
});
