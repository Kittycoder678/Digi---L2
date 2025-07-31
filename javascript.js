function openMenu() {
    menuBar.style.display = 'initial';
    menuTest.style.display = 'initial';
    menuTitle.style.display = 'initial';
    menuBox.style.display = 'none';
    menuTitles.style.display = 'none';    
    menuBars.style.display = 'initial';
}

function reset() {
    menuBox.style.display = 'initial';
    menuBar.style.display = 'none';
    menuTitles.style.display = 'initial';
    menuTest.style.display = 'none';
    menuTitle.style.display = 'none';
    menuBars.style.display = 'none';
}

function openMen() {
    menuBars.style.display = 'initial';
    menuTes.style.display = 'initial';
    menuTitl.style.display = 'initial';
    menuBo.style.display = 'none';
    menuTitle.style.display = 'none';
}

function rese() {
    menuBo.style.display = 'initial';
    menuBars.style.display = 'none';
    menuTitle.style.display = 'initial';
    menuTes.style.display = 'none';
    menuTitl.style.display = 'none';
}

menuBox.onmouseover = openMenu;
menuBar.onmouseleave = reset;
menuBo.onmouseenter = openMen;
menuBars.onmouseout = rese;
