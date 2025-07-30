var hi = 0;
var test = 0; 
function openMenu() {
    menuBar.style.display = 'initial';
    menuTest.style.display = 'initial';
    menuTitle.style.display = 'initial';
    menuBox.style.display = 'none';
    menuTitles.style.display = 'none';
}

function openMen() {
    menuBars.style.display = 'initial';
    menuTes.style.display = 'initial';
    menuTitl.style.display = 'initial';
    menuBo.style.display = 'none';
    menuTitle.style.display = 'none';
}

function reset() {
    menuBox.style.display = 'initial';
    menuBar.style.display = 'none';
    menuTitles.style.display = 'initial';
    menuTest.style.display = 'none';
    menuTitle.style.display = 'none';
}

function rese() {
    menuBo.style.display = 'initial';
    menuBars.style.display = 'none';
    menuTitle.style.display = 'initial';
    menuTes.style.display = 'none';
    menuTitl.style.display = 'none';
}

document.getElementById("hi").innerHTML = hi + 1;
document.getElementById("test").innerHTML = test + 2;
if ( hi == 1 || test == 0){
menuBo.onmouseover = openMen;
menuBars.onmouseleave = rese;    
} else {
menuBox.onmouseover = openMenu;
menuBar.onmouseleave = reset;
}
