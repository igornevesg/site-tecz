function clickEmail() {
    var email = document.getElementById("formulario");
    if (email.style.display == "none") {
        email.style.display = "block";
    } else {
        email.style.display = "none"
    }
}

function myFunction(x) {
    if (x.matches) {
        document.getElementById("myTopNav").style.display = 'block';
    } else {
        document.getElementById("myTopNav").style.display = 'none';
    }
}

var x = window.matchMedia("(min-width: 769px)")
myFunction(x);
x.addListener(myFunction);

function abrirMenu() {
    var submenu = document.getElementById("myTopNav");
    if (submenu.style.display == 'none') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}