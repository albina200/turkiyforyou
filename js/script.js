let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav__links");
let navSocial = document.querySelector(".nav__social");
let aboutUs = document.querySelector("#aboutUs")
let Transfer = document.querySelector("#Transfer")
hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navSocial.classList.toggle("nav__social_active")
}
const swiper = new Swiper('.header__slider', {
    speed: 2000,
    effect: 'fade',
    autoplay: {
        delay: 2000,
    },
});

const reviewsSwiper = new Swiper('.reviews__slider', {
    speed: 2000,
    effect: 'cards',
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const tursSwiper = new Swiper('.turs__slider', {
    speed: 2000,
    // autoplay: {
    //     delay: 2000,
    // },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2.17,
          spaceBetween: 20
        },
        768: {
            slidesPerView: 3.17,
            spaceBetween: 20  
        },
        992:{
            slidesPerView: 4.17,
            spaceBetween: 20  
        },
        1200: {
            slidesPerView: 6.17,
            spaceBetween: 20  
        },
        1920: {
            slidesPerView: 10.17,
            spaceBetween: 20  
        },
    }
});

const transferSwiper = new Swiper('.transfer__slider', {
    speed: 2000,
    // autoplay: {
    //     delay: 2000,
    // },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2.17,
          spaceBetween: 20
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20  
        },
        992:{
            slidesPerView: 2.8,
            spaceBetween: 20  
        },
        1200: {
            slidesPerView: 4.17,
            spaceBetween: 20  
        },
        1920: {
            slidesPerView: 7.17,
            spaceBetween: 20  
        },
    }
})