//_____скрипт открытия и закрытия мобильного фильтра_____//

(function () {
    let filters_button = document.getElementsByClassName("js-catalog-open-filters")[0];
    let filters = document.getElementsByClassName("js-catalog-filters")[0];
    let filters_close = document.getElementsByClassName("js-catalog-filters-close")[0];
    let openClass = "is-show";
    console.log("aertwr");

    filters_button.addEventListener("click", openFilters);
    filters_close.addEventListener("click", closeFilters);

    function openFilters () {
        filters.classList.add(openClass);
        document.body.style.overflow = "hidden";
    }

    function closeFilters () {
        filters.classList.remove(openClass);
        document.body.style.overflow = "";
    }

}) ();