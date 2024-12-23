const navbarToggles = document.querySelectorAll('.navbar-toggle .toggle-button');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggleBtn = document.querySelector('.navbar-toggle .toggle-button').contains(event.target);

    if (!isClickInsideSidebar && !isClickOnToggleBtn && sidebar.classList.contains('show')) {
      sidebar.classList.remove('show');
      body.classList.remove('overflow-hidden');
    }
  });

  navbarToggles.forEach((navbarToggle) => {
    navbarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      body.classList.toggle('overflow-hidden');
    });
  });
});

// Counter Animation
function counterAnimate(target) {
  let data = Number(target.dataset.counter);
  let startValue = 0;
  let currentValue = startValue;
  const duration = 800;

  let increment = (data / duration) * 25;

  const incrementAnimation = setInterval(() => {
    currentValue += increment;
    target.textContent = Math.round(currentValue);

    if (currentValue > data) {
      target.textContent = data;
      clearInterval(incrementAnimation);
    }
  }, 25);
}

const plus = document.querySelectorAll('#statistic .plus');
// Play counter when in viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counterAnimate(entry.target);
        plus.forEach((item) => {
          item.classList.add('solid');
        });
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.75,
  },
);

const counters = document.querySelectorAll('#statistic .value');
counters.forEach((counter) => {
  observer.observe(counter);
});

// Carousel
// const carouselItems = document.querySelectorAll('#client .client-carousel .carousel-item');
// const clientCarousel = document.querySelector('.client-carousel');

// carouselItems.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     carouselItems.forEach((i) => {
//       i.classList.remove('active', 'main');
//     });

//     item.classList.add('active', 'main');

//     if (item.previousElementSibling) {
//       item.previousElementSibling.classList.add('active');
//     }
//     if (item.nextElementSibling) {
//       item.nextElementSibling.classList.add('active');
//     }
//     const translateValue = 25 - ((50) * (index));

//     clientCarousel.style.transform = `translateX(${translateValue}%)`;
//   });
// });

const cardLefts = document.querySelectorAll('#client .carousel-card .card-left');
const cardRights = document.querySelectorAll('#client .carousel-card .card-right');

document.addEventListener('DOMContentLoaded', () => {
  cardLefts.forEach((cardLeft) => {
    cardLeft.addEventListener('click', () => {
      cardLeft.nextElementSibling.classList.add('show');
    });
  });

  cardRights.forEach((cardRight) => {
    cardRight.addEventListener('click', () => {
      cardRight.classList.remove('show');
    });
  });
});

// Plan
const serviceButtons = document.querySelectorAll('#plan .plan-service .service-list .service-item .service-button');
const planCategories = document.querySelectorAll('#plan .plan-category');

serviceButtons.forEach((button) => {
  button.addEventListener('click', () => {

    serviceButtons.forEach((item) => {
      item.classList.remove('active');
    })
    planCategories.forEach((category) => {
      category.classList.remove('active');
    });
    
    button.classList.add('active');
    planCategories.forEach((category) => {
      if (category.id === button.dataset.category) {
        category.classList.add('active');
      }
    });
  });
});



