const parallax = document.querySelector('.parallax');

window.addEventListener("scroll", el => {
    let offset = window.pageYOffset;
    parallax.forEach(function(prllx, i) {
        prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.6 + "px";
    })
})
