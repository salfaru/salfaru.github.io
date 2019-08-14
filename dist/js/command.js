//_____Скрипт ГАМБУРГЕРА_____//

(function () {
    let hamburger_button = document.getElementsByClassName("hamburger-button")[0];
    let menu = document.getElementsByClassName("hamburger-menu")[0];
    let classActive = "is-active";
    let bodyNoScroll = document.body;

    hamburger_button.addEventListener("click", hamburger_attribute);

    function hamburger_attribute () {

        hamburger_button.classList.contains (classActive) ? hamburger_button.classList.remove(classActive) : hamburger_button.classList.add(classActive);
        menu.classList.contains (classActive) ? menu.classList.remove(classActive) : menu.classList.add(classActive);

        (bodyNoScroll.style.overflow === "hidden") ? bodyNoScroll.style.overflow = "" : bodyNoScroll.style.overflow = "hidden"

    }
}) ();


//_____Скрипт ПАРАЛЛАКСА ОТ МЫШИ_____//

(function () {
    let ball =  {   "element" : [  document.getElementById("js_ball_1"), document.getElementById("js_ball_2"), document.getElementById("js_ball_3"), document.getElementById("js_ball_4")], 
                    "Xvalue" : [30, 10, 10, 20], 
                    "Xcoefficient" : [-1, 1, 1, -1], 
                    "Yvalue" : [20, 30, 20, 20], 
                    "Ycoefficient" : [-1, -1, 1, 1],                  
                    "mausCoefficient" : 0.8,
                    "radius" : 200,
                    "pics_start" : 500,
                    "angular_plus" : 0.04 
                }
    let move =  [   {"x" : 0, "y" : 0},
                    {"x" : 0, "y" : 0} 
                ];
    let ang = 0;

    document.body.addEventListener("mousemove", parralax);

    setInterval(move_balls, 50);

    function parralax(event) {
            move[1].x = event.pageX * ball.mausCoefficient;
            move[1].y = event.pageY * ball.mausCoefficient;
    };

    function move_balls () {
        let maus = {};
  
        maus.x = Math.cos(ang) * ball.radius + ball.pics_start;
        maus.y = Math.sin(ang) * ball.radius + ball.pics_start;

        if (ang >= 6.28) {ang = 0;} 
        else {ang += ball.angular_plus;}

        for(let i = 0; i < 4; i++) {
            move[0].x = (maus.x * ball["Xcoefficient"][i] / ball["Xvalue"][i]) + (move[1].x * ball["Xcoefficient"][i] / ball["Xvalue"][i]);
            move[0].y = (maus.y * ball["Ycoefficient"][i] / ball["Yvalue"][i]) + (move[1].y * ball["Ycoefficient"][i] / ball["Yvalue"][i]);
  
            ball["element"][i].style.transform = "translate(" + move[0].x + "px," + move[0].y + "px)";
            ball["element"][i].style.transform = "transition: transform 0.2s linear";
        }
    }
}) ();

//_____Скрипт АВТО-СЛАЙДЕРА топ_____//

(function () {
    let background = document.getElementById("js-slider-top");

    let button = document.getElementById("js-button-big");

    let spiral_pink = document.getElementById("js-slider-top__spiral--pink");
    let spiral_grey = document.getElementById("js-slider-top__spiral--grey");
    let spiral_white = document.getElementById("js-slider-top__spiral--white");

    let photo_pink = document.getElementById("js-slider-top__photo--pink");
    let photo_grey = document.getElementById("js-slider-top__photo--grey");
    let photo_white = document.getElementById("js-slider-top__photo--white");

    let section_pink = document.getElementById("js-section-name--pink");
    let section_grey = document.getElementById("js-section-name--grey");
    let section_white = document.getElementById("js-section-name--white");

    let step = 0;

    setInterval(step_slider, 10000);

    function step_slider() {
        slider_button();
    
        slider();
        step += 1;
        if (step > 2) {step = 0;}
    }

    function slider_button() {
        button.classList.toggle("show");
        button.classList.toggle("hide");
    }

    function slider() {
        if (step == 0) {
            spiral_pink.classList.toggle("show");
            spiral_pink.classList.toggle("hide");
            spiral_grey.classList.toggle("show");
            spiral_grey.classList.toggle("hide");

            background.classList.toggle("slider-top--pink");
            background.classList.toggle("slider-top--grey");

            step_pink_big();
            setTimeout(step_grey_big, 1250);
            setTimeout(step_pink_smoll, 1250);
        }

        if (step == 1) {
            spiral_grey.classList.toggle("show");
            spiral_grey.classList.toggle("hide");
            spiral_white.classList.toggle("show");
            spiral_white.classList.toggle("hide");

            background.classList.toggle("slider-top--grey");
            background.classList.toggle("slider-top--white");

            step_grey_big(); 
            setTimeout(step_white_big, 1250);
            setTimeout(step_grey_smoll, 1250);
        }

        if (step == 2) {
            spiral_white.classList.toggle("show");
            spiral_white.classList.toggle("hide");
            spiral_pink.classList.toggle("show");
            spiral_pink.classList.toggle("hide");

            background.classList.toggle("slider-top--white");
            background.classList.toggle("slider-top--pink");

            step_white_big(); 
            setTimeout(step_pink_big, 1250);
            setTimeout( step_white_smoll, 1250);
        }
    }

    function step_pink_big() {
        photo_pink.classList.toggle("slider-top__photo-pink--hide");

        section_pink.classList.toggle("show");
        section_pink.classList.toggle("hide");
    }

    function step_grey_big() {
        photo_grey.classList.toggle("slider-top__photo-grey--hide");

        section_grey.classList.toggle("show");
        section_grey.classList.toggle("hide");
    }

    function step_white_big() {
        photo_white.classList.toggle("slider-top__photo-white--hide");

        section_white.classList.toggle("show");
        section_white.classList.toggle("hide");
    }

    function step_pink_smoll() {
        button.classList.toggle("slider__button--pink");
        button.classList.toggle("slider__button--grey");

        slider_button();
    }

    function step_grey_smoll() {
        button.classList.toggle("slider__button--grey");
        button.classList.toggle("slider__button--white");

        slider_button();
    }

    function step_white_smoll() {
        button.classList.toggle("slider__button--white");
        button.classList.toggle("slider__button--pink"); 

        slider_button();
    }
}) ();

//_____Настройка SWIPER_____//

var swiper = 
    new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 50,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });