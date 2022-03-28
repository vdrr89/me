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

// ====================== HOME ======================

// ---------------------- ABOUT SKILLS ----------------------
var progressIcon = document.getElementById('progress-icon');

var skillsIcon = [
    { 
        'percentage': '80' , 
        'icon': '<i class="fab fa-html5"></i>', 
        'hint': 'HTML' 
    },
    { 
        'percentage': '80' , 
        'icon': '<i class="fab fa-css3-alt"></i>', 
        'hint': 'CSS' 
    },
    { 
        'percentage': '20' , 
        'icon': '<i class="fab fa-js"></i>', 
        'hint': 'JS' 
    },
    { 
        'percentage': '20' , 
        'icon': '<img id="typescript" class="img-icons invertir-color" src="https://cdn.iconscout.com/icon/free/png-256/typescript-2336947-1982828.png" srcset="https://cdn.iconscout.com/icon/free/png-512/typescript-2336947-1982828.png 2x" alt="Typescript">', 
        'hint': 'typescript' 
    },
    { 
        'percentage': '30' , 
        'icon': '<i class="fab fa-git-square"></i>', 
        'hint': 'GIT' 
    },
    { 
        'percentage': '30' , 
        'icon': '<i class="fab fa-angular"></i>', 
        'hint': 'Angular' 
    },
    { 
        'percentage': '85' , 
        'icon': '<svg id="photoshop" class="progress-title item-img-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" alt="photoshop"><path class="skills-path" d="M 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 5 C 21 3.9 20.1 3  19 3 L 5 3 z M 7.7285156 8 L 9.5878906 8 C 11.913891 8 12.193359  10.140469 12.193359 10.605469 C 12.193359 12.465469  10.891641 13.115234 9.6816406 13.115234 L 8.5644531 13.115234  L 8.5644531 15.068359 C 8.5644531 15.530359 8.1905156  15.90625 7.7285156 15.90625 C 7.2665156 15.90625 6.890625 15.530359  6.890625 15.068359 L 6.890625 8.8378906 C 6.890625  8.3758906 7.2665156 8 7.7285156 8 z M 8.5644531 9.3027344 L 8.5644531  11.814453 L 9.6816406 11.814453 C 10.425641 11.814453  10.611328 11.256469 10.611328 10.605469 C 10.612328 9.9534687 10.333641  9.3027344 9.6816406 9.3027344 L 8.5644531 9.3027344  z M 15.169922 9.953125 C 15.995922 9.953125 16.593359 10.245266 16.943359  10.697266 C 17.295359 11.151266 16.966578 11.8125  16.392578 11.8125 L 16.296875 11.8125 C 16.026875 11.8125 15.759063  11.665109 15.664062 11.412109 C 15.581062 11.192109 15.417922  11.068359 15.169922 11.068359 C 14.890922 11.068359 14.611328 11.254953  14.611328 11.626953 C 14.611328 12.556953 17.308594  12.277219 17.308594 14.324219 C 17.308594 15.721219 15.913922 16 15.169922  16 C 14.284922 16 13.663688 15.637437 13.304688  15.148438 C 12.968687 14.691437 13.296281 14.046875 13.863281 14.046875  C 14.131281 14.046875 14.392188 14.190453 14.492188  14.439453 C 14.646187 14.825453 15.023922 14.882813 15.169922 14.882812  C 15.541922 14.882812 15.820313 14.696219 15.820312  14.324219 C 15.820312 13.487219 13.121094 13.581703 13.121094 11.720703  C 13.121094 10.325703 14.424922 9.953125 15.169922 9.953125 z"> </path></svg>', 
        'hint': 'Photoshop'  
    },
    { 
        'percentage': '80' , 
        'icon': '<svg id="illustrator" class="progress-title item-img-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" alt="illustrator"> <path class="skills-path" d="M 5 3 C 3.898438 3 3 3.898438 3 5 L 3 19 C 3 20.101563 3.898438  21 5 21 L 19 21 C 20.101563 21 21 20.101563 21 19 L 21 5 C 21 3.898438  20.101563 3 19 3 Z M 15.5 7.5 C 16 7.5 16.40625 7.90625 16.40625 8.40625  C 16.40625 8.90625 16 9.3125 15.5 9.3125 C 15 9.3125 14.59375 8.90625  14.59375 8.40625 C 14.59375 7.90625 15 7.5 15.5 7.5 Z M 9.6875 7.90625  L 11.3125 7.90625 L 14 16.40625 L 12.09375 16.40625 L 11.59375 14.6875  L 9.3125 14.6875 L 8.8125 16.40625 L 7 16.40625 Z M 14.6875 10.09375 L  16.40625 10.09375 L 16.40625 16.40625 L 14.6875 16.40625 Z M 10.5 10.1875  L 9.6875 13.1875 L 11.3125 13.1875 Z"> </path> </svg>', 
        'hint': 'Illustrator' 
    }, 
    { 
        'percentage': '90' , 
        'icon': '<i class="fas fa-camera"></i>' , 
        'hint': 'Photography'
    },
    { 
        'percentage': '70' , 
        'icon': '<i class="fas fa-paint-brush"></i>' , 
        'hint': 'Ilustration'
    },
    { 
        'percentage': '90' , 
        'icon': '<img id="microsoft-office" class="img-icons invertir-color" src="https://cdn.iconscout.com/icon/free/png-256/microsoft-office-2-761689.png" srcset="https://cdn.iconscout.com/icon/free/png-512/microsoft-office-2-761689.png 2x" alt="Microsoft office">' , 
        'hint': 'office'
    }, 
    { 
        'percentage': '80' , 
        'icon': '',
        'hint': 'Social Networks'
    }
]

for(let i=0; i < skillsIcon.length; i++){
    progressIcon.innerHTML += '<div class="progress-circle progress-' + skillsIcon[i].percentage + '"><span>' + skillsIcon[i].icon + '</span></div><p class="hint-text">' + skillsIcon[i].hint + '</p>'
}

var textHint = document.getElementsByClassName("text-hint");

function switchTextHint(){
    if(textHint.style.display == none){
        textHint.style.display == "block";
    } else {
        textHint.style.display == "none";
    }
}


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

// ---------------------- PROYECT CARDS ----------------------

var projectsContainer = document.getElementById('projects-container');

var dwSection = document.getElementById('dw-proj');
var dgSection = document.getElementById('dg-proj');
var fotoSection = document.getElementById('foto-proj');
var iluSection = document.getElementById('ilu-proj');

// src name
var dgSlides = [
    { 'src': 'img/diseno grafico/01.jpg', 'name': 'dg1'},
    { 'src': 'img/diseno grafico/02.jpg', 'name': 'dg2'},
    { 'src': 'img/diseno grafico/03.jpg', 'name': 'dg3'},
    { 'src': 'img/diseno grafico/04.jpg', 'name': 'dg4'},
    { 'src': 'img/diseno grafico/05.jpg', 'name': 'dg5'}
]

var dwSlides = [
    { 'src': '', 'name': 'dw1'},
    { 'src': '', 'name': 'dw2'},
    { 'src': '', 'name': 'dw3'},
    { 'src': '', 'name': 'dw4'},
    { 'src': '', 'name': 'dw5'}
]

var fSlides = [
    { 'src': 'img/fotografia/fotos/landscape/1.jpg', 'name': 'f1'},
    { 'src': 'img/fotografia/fotos/objects/06.jpg', 'name': 'f2'},
    { 'src': 'img/fotografia/fotos/textures/01.jpg', 'name': 'f3'},
    { 'src': 'img/fotografia/fotos/landscape/10.jpg', 'name': 'f4'},
    { 'src': 'img/fotografia/fotos/objects/06.jpg', 'name': 'f5'}
]

var iSlides = [
    { 'src': 'img/ilustracion/10.jpg', 'name': 'i1'},
    { 'src': 'img/ilustracion/11.jpg', 'name': 'i2'},
    { 'src': 'img/ilustracion/12.jpg', 'name': 'i3'},
    { 'src': 'img/ilustracion/13.jpg', 'name': 'i4'},
    { 'src': 'img/ilustracion/9.jpg', 'name': 'i5'}
]

// FUNCIÓN PARA ABRIR CADA SECCIÓN DE PROYECTOS 

// este if no funca
if (dwSection.style.display == "none" && dgSection.style.display == "none" && fotoSection.style.display == "none" && iluSection.style.display == "none"){
    projectsContainer.style.overflowX == hide;
}


function openDwSection(){
    if(dwSection.style.display === "none"){
        dwSection.style.display = "inline-block";
        dgSection.style.display = "none";
        fotoSection.style.display = "none";
        iluSection.style.display = "none";
        projectsContainer.style.overflowX == scrollHorizontally;
    } else {
        dwSection.style.display = "none";
        dgSection.style.display = "none";
        fotoSection.style.display = "none";
        iluSection.style.display = "none";
    }
}

function openDgSection(){
    if(dgSection.style.display === "none"){
        dwSection.style.display = "none";
        dgSection.style.display = "inline-block";
        fotoSection.style.display = "none";
        iluSection.style.display = "none";
        projectsContainer.style.overflowX == scrollHorizontally;
    } else {
        dwSection.style.display = "none";
        dgSection.style.display = "none";
        fotoSection.style.display = "none";
        iluSection.style.display = "none";
    }
}

function openFotoSection(){
    if(fotoSection.style.display === "none"){
        dwSection.style.display = "none";
        dgSection.style.display = "none";
        fotoSection.style.display = "inline-block";
        iluSection.style.display = "none";
        projectsContainer.style.overflowX == scrollHorizontally;
    } else {
        dwSection.style.display = "none";
        dgSection.style.display = "none";
        fotoSection.style.display = "none";
        iluSection.style.display = "none";
    }
}
 
function openIluSection(){
    if(iluSection.style.display === "none"){
        dwSection.style.display = "none";
        dgSection.style.display = "none";
        fotoSection.style.display = "none";
        iluSection.style.display = "inline-block";
        projectsContainer.style.overflowX == scrollHorizontally;
    } else {
        dwSection.style.display = "none";
        dgSection.style.display = "none";
        fotoSection.style.display = "none";
        iluSection.style.display = "none";
    }
}


// FOR PARA CADA SECCIÓN DE PROYECTOS 
for (let i=0; i < dwSlides.length; i++){
    dwSection.innerHTML += '<div class="proj-img"><img src="' + dwSlides[i].src + '" alt="' + dwSlides[i].name + '"></div>'
}

for (let i=0; i < dgSlides.length; i++){
    dgSection.innerHTML += '<div class="proj-img"><img src="' + dgSlides[i].src + '" alt="' + dgSlides[i].name + '"></div>'
}

for (let i=0; i < fSlides.length; i++){
    fotoSection.innerHTML += '<div class="proj-img"><img src="' + fSlides[i].src + '" alt="' + fSlides[i].name + '"></div>'
}

for (let i=0; i < iSlides.length; i++){
    iluSection.innerHTML += '<div class="proj-img"><img src="' + iSlides[i].src + '" alt="' + iSlides[i].name + '"></div>'
}

// HORIZONTAL SCROLL PARA PROYECTOS 

var projectsContainer = document.getElementById("projects-container");

function scrollHorizontally(e) {
    e = window.event || e;
    // var container = document.getElementById('container'); // projectsContainer
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); // Delta vale 1 en scroll hacia arriba y -1 en scroll hacia abajo
    
    projectsContainer.scrollLeft -= (delta*40); // De cuantos pixeles haremos el scroll lateral;
    console.log("Delta: " + delta); 
    console.log("projectsContainer ScrollLeft: " + projectsContainer.scrollLeft);
    console.log("projectsContainer offsetWidth: " + projectsContainer.offsetWidth);
    console.log("ScrollLeft + offsetWidht: " + (projectsContainer.scrollLeft + projectsContainer.offsetWidth));
    console.log("projectsContainer offsetWidth: " + projectsContainer.offsetWidth);
    console.log("projectsContainer scrollWidth: " + projectsContainer.scrollWidth);
    if ((delta > 0 && projectsContainer.scrollLeft > 0) || (delta < 0 && (projectsContainer.offsetWidth + projectsContainer.scrollLeft) < (projectsContainer.scrollWidth - 1))) {
      e.preventDefault();
    }
  }
  
  // Si hay event listener quiere decir que no estamos en IE
  //if (container.addEventListener) {
    // IE9, Chrome, Safari, Opera
    projectsContainer.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    projectsContainer.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  // } else {
    // IE 6/7/8
    projectsContainer.attachEvent("onmousewheel", scrollHorizontally);
  // }