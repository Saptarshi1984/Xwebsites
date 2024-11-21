/* Hamburger Button Script */

const hamburger = document.getElementById('hamburger');
/* const navLinks = document.getElementById('nav-links'); */
const leftSidebar = document.getElementById('left_sidebar');

hamburger.addEventListener('click', () => {
  leftSidebar.classList.toggle('show');
});
