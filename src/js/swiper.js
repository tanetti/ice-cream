var swiper = new Swiper('.swiper-container', {
  spaceBetween: 35,
  slidesPerView: 1,
  speed: 800,
  autoplay: {
    delay: 4000,
  },
  loop: true,
  paginationClickable: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
