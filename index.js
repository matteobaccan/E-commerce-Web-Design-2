//Initialize Swiper
     var swiper = new Swiper(".mySwiper", {});
//Initialize Swiper2
     var swiper = new Swiper(".mySwiper2", {
       slidesPerView: 1,
       spaceBetween: 10,
       pagination: {
         el: ".swiper-pagination2",
         clickable: true,
       },
       breakpoints: {
         640: {
           slidesPerView: 1,
           spaceBetween: 20,
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 40,
         },
         1024: {
           slidesPerView: 3,
           spaceBetween: 50,
         },
       },
     });
   
