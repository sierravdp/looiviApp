
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openHamburger(){
	document.getElementById('hamburger').classList.add('is-active');
}

function closeHamburger(){
	document.getElementById('hamburger').classList.remove('is-active');
}