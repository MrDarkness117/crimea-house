var index = document.querySelector('#index');
var rooms = document.querySelector('#rooms');
var photos = document.querySelector('#photos');
var navlinks = [index, rooms, photos];

//TODO: Change this later, in a proper way
index.addEventListener('click', el => {
    document.querySelector('#description').style.display = 'block';
    document.querySelector('#photogrid').style.display = 'none';
    document.querySelector('#rooms').style.display = 'none';
});

photos.addEventListener('click', el => {
    document.querySelector('#description').style.display = 'none';
    document.querySelector('#photogrid').style.display = 'block';
    document.querySelector('#rooms').style.display = 'none';
});

rooms.addEventListener('click', el => {
    document.querySelector('#description').style.display = 'none';
    document.querySelector('#photogrid').style.display = 'none';
    document.querySelector('#rooms').style.display = 'block';
});

menu.onclick = function base() {
    var x = document.querySelector("#tnav")

    if(x.className === 'topnav') {
        x.className += ' responsive';
    } else { 
        x.className = "topnav";
    }
}

