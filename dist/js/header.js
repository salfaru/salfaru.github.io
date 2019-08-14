//_____Скрипт ФИКСАЦИИ ХЭДЭРА_____//

(function () {
    let header = document.getElementsByClassName("header")[0];
    let content;

    if(document.getElementById("js-slider-top")){
        content = document.getElementById("js-slider-top");
    } else {
        content = document.querySelector(".js-content");
    }

    let header__fixed = "header--fixed";
    let content__fixed = "is-fixed";



    window.addEventListener("scroll", fixed_header);

    function fixed_header () {
        if((window.pageYOffset >= 56) && (document.documentElement.clientWidth <= 560)) {
            if(!header.classList.contains(header__fixed)){
                header.classList.add(header__fixed);
            }

            if(!content.classList.contains(content__fixed)){
                content.classList.add(content__fixed);
            }
        } else {
            if(header.classList.contains(header__fixed)){
                header.classList.remove(header__fixed);
            }

            if(content.classList.contains(content__fixed)){
                content.classList.remove(content__fixed);
            }
        }
    }
}) ();