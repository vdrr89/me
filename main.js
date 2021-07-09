// var menuHamburgerButton = document.getElementById('hamburger-menu-icon');
var menuList = document.getElementById('menu-list');
// var menuProjectButton = document.getElementById('menu-projects-button');
var menuProjectsList = document.getElementById('menu-projects-list');

// --- HAMBURGER MENU ---

function openHamb(){
    if(menuList.style.display === "inline-flex"){
        menuList.style.display = "none";
    } else {
        menuList.style.display = "inline-flex";
    }
}

// --- DROPDOWN PROYECTOS MENU ---

function openDropdown(){
    if(menuProjectsList.style.display === "block"){
        menuProjectsList.style.display = "none";
    } else {
        menuProjectsList.style.display = "block";
    }
}
