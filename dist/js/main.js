// Navbar
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    navLinks.forEach((link) => {
      link.classList.remove('active')
    });
    navLink.classList.add('active');
  });
});


// Jumbotron
let jumbotronButton = document.querySelector('.jumbotron-button');
let jumbotronMask = document.querySelector('.jumbotron-mask');
let jumbotronBackground = document.querySelector('.jumbotron-background')


jumbotronButton.addEventListener('mouseover', () => {
  jumbotronBackground.classList.add('blur-20');
  jumbotronMask.style.opacity = 100;
});

jumbotronButton.addEventListener('mouseout', () => {
  jumbotronBackground.classList.remove('blur-20');
  jumbotronMask.style.opacity = 0;
});



