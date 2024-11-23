// JavaScript to change Logo Dynamically
        window.onload = () => {
            const textElement = document.getElementById('logo');
            const FooterText = document.getElementById('footer-text');
            textElement.textContent = "Logo Changed";
            FooterText.textContent = "2024 LustfulLinks. All rights reserved.";
        };
/* Hamburger Button Script */
const hamburger = document.getElementById('hamburger');
/* const navLinks = document.getElementById('nav-links'); */
const leftSidebar = document.getElementById('left_sidebar');
hamburger.addEventListener('click', () => {
leftSidebar.classList.toggle('show');
});
/* Night Mode Script */
const toggleButton = document.getElementById('toggleMode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
    toggleButton.textContent = 
        document.body.classList.contains('night-mode') 
        ? 'Switch to Day Mode' 
        : 'Switch to Night Mode';
});

