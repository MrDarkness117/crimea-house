const parallax = document.querySelectorAll('.parallax');
const photogallery = document.querySelectorAll('.album');
var photoview = document.querySelector('.photoview');

window.addEventListener("scroll", el => {
    let offset = window.pageYOffset;
    parallax.forEach(function(prllx, i) {
        prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.6 + "px";
    })
})

photogallery.forEach(el => {
    el.addEventListener('click', event => {
        if (this === photogallery[0]) {
            photoview.style.backgroundImage = 'url("../assets/img/out/ph9.jpeg")'
        } else if (this === photogallery[1]) {
            photoview.style.backgroundImage = 'url("../assets/img/out/ph4.jpeg")'
        } else if (el === photogallery[2]) {
            photoview.style.backgroundImage = 'url("../assets/img/out/ph16.jpg")'
        } else if (el === photogallery[3]) {
            photoview.style.backgroundImage = 'url("../assets/img/out/ph8.jpeg")'
        } else if (el === photogallery[4]) {
            photoview.style.backgroundImage = 'url("../assets/img/out/ph10.jpg")'
        } else if (el === photogallery[5]) {
            photoview.style.backgroundImage = 'url("../assets/img/out/ph12.jpg")'
        } else if (el === photogallery[6]) {
            photoview.style.backgroundImage = 'url("../assets/img/out/ph13.jpg")'
        } else if (el === photogallery[7]) {
            photoview.style.backgroundImage = 'url("../assets/img/out/ph14.jpg")'
        } else if (el === photogallery[8]) {
            photoview.style.backgroundImage = 'url("../assets/img/out/ph15.jpg")'
        }
    })
})