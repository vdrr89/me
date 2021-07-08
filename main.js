// var menuProjectsButton = document.getElementById('menu-projects-button');
var menuProjectsList = document.getElementById('menu-projects-list');

// menuProjectsButton.addEventListener('click', openDropdown());
// menuProjectsButton.addEventListener('keypress', openDropdown());

function openDropdown(){ 
    if(menuProjectsList.classList.contains("sectionDisabled")){
        menuProjectsList.remove("sectionDisabled");
    } else {
        menuProjectsList.classList.add("sectionDisabled");
    }
}