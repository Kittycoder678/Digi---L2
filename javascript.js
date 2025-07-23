function openMenu() {
    menuBar.style.display = 'initial';
    menuTest.style.display = 'initial';
    menuTitle.style.display = 'initial';
    menuBox.style.display = 'none';
    menuTitles.style.display = 'none';
}
function reset() {
    menuBox.style.display = 'initial';
    menuBar.style.display = 'none';
    menuTitles.style.display = 'initial';
    menuTest.style.display = 'none';
    menuTitle.style.display = 'none';
}

menuBox.onmouseover = openMenu;
menuBar.onmouseleave = reset;
