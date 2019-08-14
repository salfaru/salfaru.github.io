(function () {
    let hamburger_buttons = document.getElementsByClassName("hamburger-button");
    let menu = document.getElementsByClassName("hamburger-menu")[0];
    let classActive = "is-active";
    let bodyNoScroll = document.body;

    for(let i =0; i < hamburger_buttons.length; i++){
        let hamburger_button = hamburger_buttons[i];

        hamburger_button.addEventListener("click", function(e){
            hamburger_attribute (e.target.closest(".hamburger-button"))
        });
    }

    function hamburger_attribute (hamburger_button) {
        console.log("jhkhkjhkjhkjhk", hamburger_button);

        hamburger_button.classList.contains (classActive) ? hamburger_button.classList.remove(classActive) : hamburger_button.classList.add(classActive);
        menu.classList.contains (classActive) ? menu.classList.remove(classActive) : menu.classList.add(classActive);

        (bodyNoScroll.style.overflow === "hidden") ? bodyNoScroll.style.overflow = "" : bodyNoScroll.style.overflow = "hidden"

    }
}) ();

