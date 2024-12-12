const navbarToggles = document.querySelectorAll('.navbar-toggle .toggle-button');
const sidebar = document.querySelector('.sidebar');

navbarToggles.forEach((navbarToggle) => {
  navbarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });
});

// const counters = document.querySelectorAll('#statistic .value');

// counters.forEach((counter) => {
//   let dataCounter = Number(counter.dataset.counter);
//   let number = 0;
//   counter.addEventListener('click', () => {
//     while (number < dataCounter) {
//       setTimeout(() => {
//         number++
//       }, 1000);
//     }

//     counter.textContent = number;
//   })
// });
