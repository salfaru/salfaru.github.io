//_____скрипт регулировки размера абсолютно позиционированного контента прайса_____//

(function () {
    let price = document.querySelector(".js-price");
    let inputsPrice = price.querySelectorAll(".js-price-input");

    const fixColumn = document.getElementById("js-price-fix-column");

    for(let i =0; i < inputsPrice.length; i++){
        let inputPrice = inputsPrice[i];

        changeInputPrice(inputPrice);
    }

    function changeInputPrice(input){
        input.addEventListener("change", function(e){

            let priceContent = e.target.closest("div").querySelector(".js-price-content");
            let heightPriceContent = priceContent.clientHeight;
            fixColumn.style.height = heightPriceContent + "px";


        })
    }

}) ();