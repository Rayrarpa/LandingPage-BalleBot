const checkbox = document.getElementById("checkbox-menu");
const menuMobile = document.getElementById("menu-mobile");

setTimeout(() => {
    document.getElementsByClassName("none")[0].style = "opacity: 0;"
    document.getElementsByClassName("none")[1].style = "opacity: 0;"
}, 5000)

setTimeout(() => {
    document.getElementsByClassName("none")[0].style = "display: none;"
    document.getElementsByClassName("none")[1].style = "display: none;"
}, 5500)

checkbox.addEventListener("click", () => {
    
    if (checkbox.checked) {
        // menuMobile.style.display = "block";
        menuMobile.style.top = "0px";
        document.body.style.overflow = "hidden";
    } else {
        // menuMobile.style.display = "none"
        menuMobile.style.top = "-700px"
        document.body.style.overflow = "visible";
    }

    // document.body.scrollTop = 10000;
})
