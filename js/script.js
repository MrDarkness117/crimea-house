var index = document.querySelector('#index');
var rooms = document.querySelector('#rooms');
var photos = document.querySelector('#photos');
var navlinks = [index, rooms, photos];
var phEls = document.querySelectorAll('.photoElement');
var popup = document.querySelector('#popup'); 
var popupbg = document.querySelector('.popupbg'); 

//TODO: Change this later, in a proper way
index.addEventListener('click', el => {
    document.querySelector('#description').style.display = 'block';
    document.querySelector('#photogrid').style.display = 'none';
    document.querySelector('#roomsdiv').style.display = 'none';
});

photos.addEventListener('click', el => {
    document.querySelector('#description').style.display = 'none';
    document.querySelector('#photogrid').style.display = 'block';
    document.querySelector('#roomsdiv').style.display = 'none';
});

rooms.addEventListener('click', el => {
    document.querySelector('#description').style.display = 'none';
    document.querySelector('#photogrid').style.display = 'none';
    document.querySelector('#roomsdiv').style.display = 'block';
});

// So apparently this doesn't work because style.backgroundImage won't return the string you want
// for (var photo of phEls) {
//     photo.addEventListener('click', el => {
//         console.log(photo.id);
//         popup.style.backgroundImage = photo.style.backgroundImage;
//         popup.className += ' visible';
//         popupbg.className += ' visible';
//     })
// }

function setPopupVisible() {
    popup.style.display = 'block';
    popupbg.style.display = 'block';
}

for (var photo of phEls) {
    photo.addEventListener('click', el => {
        console.log(photo.id);
        if (this.id === 'ph1') {
            popup.style.backgroundImage = "url('../assets/img/out/ph4.jpeg')"
            setPopupVisible;
        } else if (this.id === 'ph2') {
            popup.style.backgroundImage = "url('../assets/img/out/ph1.jpeg')"
            setPopupVisible;
        } else if (photo.id === 'ph3') {
            popup.style.backgroundImage = "url('../assets/img/out/ph2.jpeg')"
            setPopupVisible;
        } else if (photo.id === 'ph4') {
            popup.style.backgroundImage = "url('../assets/img/out/ph9.jpeg')"
            setPopupVisible;
        } else if (photo.id === 'ph5') {
            popup.style.backgroundImage = "url('../assets/img/out/ph6.jpeg')"
            setPopupVisible;
        } else if (photo.id === 'ph6') {
            popup.style.backgroundImage = "url('../assets/img/out/ph8.jpeg')"
            setPopupVisible;
        } else if (photo.id === 'kitchen') {
            popup.style.backgroundImage = "url('../assets/img/ap/room4/1.jpeg')"
            setPopupVisible;
        } 
    })
}

popupbg.addEventListener('click', el => {
    popup.style.display = 'none';
    popup.style.display = 'none';
})

// for (var nameIndex of fNameList) {
//     nameIndex.addEventListener('mouseover', function() {
//         for (var toneIndex of fToneList) {
//             if (fNameList.indexOf(this) === fToneList.indexOf(toneIndex)) {
//                 toneIndex.currentTime = 0;
//                 stopsound(fToneList);
//                 toneIndex.play();
//             }
//         }
//     })
// };

menu.onclick = function base() {
    var x = document.querySelector("#tnav")

    if(x.className === 'topnav') {
        x.className += ' responsive';
    } else { 
        x.className = "topnav";
    }
}

