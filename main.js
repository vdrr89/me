var menuProjectsList = document.getElementById('menu-projects-list');
// var menuProjectButton = document.getElementById('menu-projects-button');

// --- HAMBURGER MENU ---

function openHamb(){
    if(menuProjectsList.style.display === "inline-grid"){
        menuProjectsList.style.display = "none";
    } else {
        menuProjectsList.style.display = "inline-grid";
    }
}

// --- DROPDOWN PROYECTOS MENU ---


function openDropdown(){
    menuProjectsList.classList.toggle("sectionEnabled");
    console.log("openDropdown simple");
}

// menuProjectButton.addEventListener("click", openDropdown());

// function openDropdown(){ 
//     if(menuProjectsList.classList.contains("sectionDisabled")){
//         menuProjectsList.remove("sectionDisabled");
//         console.log("openDropdown if")
//     } else {
//         menuProjectsList.classList.add("sectionDisabled");
//         console.log("openDropdown else")
//     }
// }
