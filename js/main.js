const parallax = document.querySelectorAll('.parallax');
const photogallery = document.querySelectorAll('.album');
var photowidth = photogallery[0].clientWidth;
// var photoview = document.querySelector('.photoview');
var modal = document.getElementById('.modal');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
var span = document.getElementsByClassName('close');
var menu = document.querySelectorAll('li');
var sect = document.querySelectorAll('.sect');

window.addEventListener("scroll", el => {
    let offset = window.pageYOffset;
    parallax.forEach(function(prllx, i) {
        prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.6 + "px";
    })
})

function displayPhoto(el) {
    modal.style.display = "block";
    modalImg.src = el.src;
    captionText.innerHTML = el.alt;
}

photogallery.forEach(el => {
    el.addEventListener('click', event => {
        if (this === photogallery[0]) {
            // photoview.style.backgroundImage = 'url("../assets/img/out/ph9.jpeg")'
            displayPhoto(this);
        } else if (this === photogallery[1]) {
            displayPhoto(this);
            // photoview.style.backgroundImage = 'url("../assets/img/out/ph4.jpeg")'
        } else if (el === photogallery[2]) {
            displayPhoto(this);
            // photoview.style.backgroundImage = 'url("../assets/img/out/ph16.jpg")'
        } else if (el === photogallery[3]) {
            displayPhoto(this);
            // photoview.style.backgroundImage = 'url("../assets/img/out/ph8.jpeg")'
        } else if (el === photogallery[4]) {
            // photoview.style.backgroundImage = 'url("../assets/img/out/ph10.jpg")'
        } else if (el === photogallery[5]) {
            // photoview.style.backgroundImage = 'url("../assets/img/out/ph12.jpg")'
        } else if (el === photogallery[6]) {
            // photoview.style.backgroundImage = 'url("../assets/img/out/ph13.jpg")'
        } else if (el === photogallery[7]) {
            // photoview.style.backgroundImage = 'url("../assets/img/out/ph14.jpg")'
        } else if (el === photogallery[8]) {
            // photoview.style.backgroundImage = 'url("../assets/img/out/ph15.jpg")'
        }
    })
})

photogallery.forEach(el => {
    el.style.height = photowidth + 'px';
})

span.onclick = function() {
    modal.style.display = 'none';
}

menu[0].addEventListener('click', event => {
    sect[1].scrollIntoView();
})
menu[1].addEventListener('click', event => {
    sect[3].scrollIntoView();
})
menu[2].addEventListener('click', event => {
    sect[5].scrollIntoView();
})