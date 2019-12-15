menu.onclick = function base() {
    var x = document.querySelector("#tnav")

    if(x.className === 'topnav') {
        x.className += ' responsive';
    } else { 
        x.className = "topnav";
    }
}
