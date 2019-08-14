//_____Настройка SWIPER_____//

var swiper = 
    new Swiper('.swiper-container--top', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

swiper = new Swiper('.swiper-container--bottom', {
        slidesPerView: 4,
        spaceBetween: 70,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1280: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
    });