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
        menuMobile.style.display = "block";
        document.body.style.overflow = "hidden";
    } else {
        menuMobile.style.display = "none";
        document.body.style.overflow = "visible";
    }
})
