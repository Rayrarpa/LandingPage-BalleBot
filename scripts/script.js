setTimeout(() => {
    document.getElementsByClassName("none")[0].style = "opacity: 0;"
    document.getElementsByClassName("none")[1].style = "opacity: 0;"
}, 5000)

setTimeout(() => {
    document.getElementsByClassName("none")[0].style = "display: none;"
    document.getElementsByClassName("none")[1].style = "display: none;"
}, 5500)