// Swiper initialisation
new Swiper('.rewiews-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  spaceBetween: 50,
  speed: 1000,
  autoheight: true,
  simulateTouch: true,
  touchAngle: 45,
  grabCursor: true,
});
