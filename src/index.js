// Swiper initialisation and setup
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

  spaceBetween: 30,
  speed: 1000,

  effect: 'flip',
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },
});


// SCRIPT_CONTACTS_MODAL_LOCATION

(() => {
  const refs = {
    openLocationBtn: document.querySelector("[data-location-open]"),
    closeLocation: document.querySelector("[data-location-close]"),
    location: document.querySelector("[data-location]"),
  };

  refs.openLocationBtn.addEventListener("click", toggleLocation);
  refs.closeLocationBtn.addEventListener("click", toggleLocation);

  function toggleLocation() {
    refs.location.classList.toggle("is-hidden");
    refs.body.classList.toggle('no-scroll');
  }

  })();

// mob-menu
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

})();
