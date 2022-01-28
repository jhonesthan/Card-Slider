//             ==== Initialize Swiper ====
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4, 
    spaceBetween: 30,
    centeredSlides: false,
    slidesPerGroupSkip: 3,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });