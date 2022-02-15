const menuButton = document.querySelector("#menuButton");

menuButton.addEventListener('click', () => {

    const icon = menuButton.children[0];
    if( icon.innerHTML == 'menu') {
        icon.innerHTML = 'close';
        const parent = menuButton.parentNode;
        parent.classList.add("open");
        //document.querySelector("asd").classList.add("large");
        document.querySelector(".nav-items").classList.remove("large");
        document.querySelector(".footer").classList.add("display-none");
        document.querySelector(".main-wrapper").classList.add("display-none");
    }
    else {
        icon.innerHTML = 'menu';    
        const parent = menuButton.parentNode;
        parent.classList.remove("open");
        document.querySelector(".nav-items").classList.add("large");
        document.querySelector(".footer").classList.remove("display-none");
        document.querySelector(".main-wrapper").classList.remove("display-none");
    }



});