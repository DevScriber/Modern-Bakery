const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
   slidesPerView: 1,
  spaceBetween: 10,
  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
    }
  },

  // If we need pagination
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button_active'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button.next',
    prevEl: '.swiper-button.prev',
  },
});