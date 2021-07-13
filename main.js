// ====================== NAVIGATION ======================

var menuList = document.getElementById('menu-list');
var menuProjectsList = document.getElementById('menu-projects-list');

// ---------------------- HAMBURGER MENU ----------------------

function openHamb(){
    if(menuList.style.display === "list-item"){
        menuList.style.display = "none";
    } else {
        menuList.style.display = "list-item";
    }
}

// ---------------------- DROPDOWN PROYECTOS MENU ----------------------

function openDropdown(){
    if(menuProjectsList.style.display === "block"){
        menuProjectsList.style.display = "none";
    } else {
        menuProjectsList.style.display = "block";
    }
}

// ---------------------- NAVBAR LINKS SCROLL TO DIV ----------------------

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

// ---------------------- PROYECTS TABS ----------------------

var proyTabs = [
    {
        varName: 'disWebCards',
        htmlId: 'tabs-diseno-web',
        funcName: 'opernProyDisWeb'
    },
    {
        varName: 'fotoCards',
        htmlId: 'tabs-fotografia',
        funcName: 'opernProyFoto'
    },
    {
        varName: 'fotoLandCards',
        htmlId: 'tabs-fotografia-landscape',
        funcName: 'opernProyFotoLand'
    },
    {
        varName: 'fotoObjCards',
        htmlId: 'tabs-fotografia-objetos',
        funcName: 'opernProyFotoObj'
    },
    {
        varName: 'fotoTextCards',
        htmlId: 'tabs-fotografia-texturas',
        funcName: 'opernProyFotoText'
    },
    {
        varName: 'fotoFotoIlCards',
        htmlId: 'tabs-fotografia-fotoilustracion',
        funcName: 'opernProyFotoIl'
    },
    {
        varName: 'fotoPhotoCards',
        htmlId: 'tabs-fotografia-photoshop',
        funcName: 'opernProyFotoPhoto'
    },
    {
        varName: 'disGrafCards',
        htmlId: 'tabs-diseno-grafico',
        funcName: 'opernProyDisGraf'
    },
    {
        varName: 'iluCards',
        htmlId: 'tabs-ilustracion',
        funcName: 'opernProyIlu'
    }
]

// PROYECT TABS OPEN/CLOSE GENERIC FUNCTION

// let proyTabsLenght = proyTabs.length;

// for(let i; i <= proyTabsLenght; i++){
// // for(let {} of proyTabs){

//     let proyTabs = document.getElementById('{proyTabs.htmlId[i]}');

//     function proyTabs(){
//         if(proyTabs.varName[i].style.display === "list-item"){
//             proyTabs.varName[i].style.display = "none";
//         } else {
//             proyTabs.varName[i].style.display = "list-item";
//         }
//     }
    
// }

// ====================== NAVIGATION ======================

