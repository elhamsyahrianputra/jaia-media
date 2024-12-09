let navbarToggles = document.querySelectorAll('.navbar-toggle .toggle-button');
let sidebar = document.querySelector('.sidebar');

navbarToggles.forEach((navbarToggle) => {
  navbarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  })
});