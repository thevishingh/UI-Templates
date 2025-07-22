const swiper = new Swiper('.swiper', {

  autoplay: {
     delay: 4000,
     disableOnInteraction: false
   },
   loop: true,
   spaceBetween: 30,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: false,
          clickable: false,
    },

  

});