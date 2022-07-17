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
});

// SCRIPT_CONTACTS_MODAL_LOCATION

(() => {
  const refs = {
    openLocationBtn: document.querySelector("[data-location-open]"),
    closeLocation: document.querySelector("[data-location-close]"),
    location: document.querySelector("[data-location]"),
  };

  refs.openLocationBtn.addEventListener("click", toggleLocation);
  refs.openLocationBtn.addEventListener("click", toggleLocation);

  function toggleLocation() {
    refs.location.classList.toggle("is-hidden");
    refs.body.classList.toggle('no-scroll');
  }
})();

// SCRIPT_CONTACTS_MODAL_FRANCHISE

(() => {
  const refs = {
    openFranchiseBtn: document.querySelector("[data-franchise-open]"),
    closeFranchise: document.querySelector("[data-franchise-close]"),
    franchise: document.querySelector("[data-franchise]"),
  };

  refs.openFranchiseBtn.addEventListener("click", toggleFranchise);
  refs.openFranchiseBtn.addEventListener("click", toggleFranchise);

  function toggleFranchise() {
    refs.franchise.classList.toggle("is-hidden");
    refs.body.classList.toggle('no-scroll');
  }
})();

