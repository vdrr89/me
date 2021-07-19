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
        console.log("openDropdown if")
    } else {
        menuProjectsList.style.display = "block";
        console.log('openDropdown else');
    }
}

// HACE CLICK EN PANTALLA Y DROPDOWN CIERRA

// las 2 siguientes funciones tienen el mismo problema, se aplican al hacer click incluso en el botón de despleagar dropdown

// window.onclick = function(e){
//     e.preventDefault();
//     if(menuProjectsList.style.display === "block"){
//         menuProjectsList.style.display = "none";
//         console.log("windows.onclick");
//     }
// };

// window.addEventListener("click", function(e){
//     e.preventDefault();
//     if(menuProjectsList.style.display === "block"){
//         menuProjectsList.style.display = "none";
//         console.log("windows.onclick");
//     }
// }) 


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

// ====================== HOME ======================

// ---------------------- ABOUT TIMELINE: OPEN CLOSE ----------------------

var timelineBtn = document.getElementById('btn-short-timeline');
var longTimeline = document.getElementById('timeline');
var shortTimeline = document.getElementById('short-timeline');

function openTimeline(){
    if (longTimeline.style.display === "list-item") { 
        shortTimeline.style.display = "";
        longTimeline.style.display = "none"; 
        console.log("openTimeline() if");
    } else { 
        longTimeline.style.display = "list-item"; 
        shortTimeline.style.display = "none"; 
        console.log("openTimeline() else");
    }
}