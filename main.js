// var menuHamburgerButton = document.getElementById('hamburger-menu-icon');
var menuList = document.getElementById('menu-list');
// var menuProjectButton = document.getElementById('menu-projects-button');
var menuProjectsList = document.getElementById('menu-projects-list');

// --- HAMBURGER MENU ---

function openHamb(){
    if(menuList.style.display === "list-item"){
        menuList.style.display = "none";
    } else {
        menuList.style.display = "list-item";
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

// --- NAVBAR LINKS SCROLL TO DIV ---

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

