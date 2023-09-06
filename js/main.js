// ====================== [ NAVIGATION ] ======================

var menuList = document.getElementById('menu-list');
var menuProjectsList = document.getElementById('menu-projects-list');



// ---------------------- < HAMBURGER MENU >----------------------

function openHamb(){
    if(menuList.style.display === "list-item"){
        menuList.style.display = "none";
    } else {
        menuList.style.display = "list-item";
    }
}



// ---------------------- < DROPDOWN PROYECTOS MENU > ----------------------

function openDropdown(){
    if(menuProjectsList.style.display === "block"){
        menuProjectsList.style.display = "none";
        console.log("openDropdown if")
    } else {
        menuProjectsList.style.display = "block";
        console.log('openDropdown else');
    }
}



// ---------------------- < NAVBAR LINKS SCROLL TO DIV > ----------------------

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



// ====================== [ HOME ] ======================



// ---------------------- < ABOUT > ----------------------

var shortAbout = document.getElementById("short-about");

shortAbout.innerHTML = '<p class="short-about">'+aboutTxt[0].whoIAm+'</p><p class="short-about">'+aboutTxt[0].whatIDid+'</p><p class="short-about">'+aboutTxt[0].continueToWeb+'</p>'



// ---------------------- < ABOUT SKILLS > ----------------------

var progressIcon = document.getElementById('progress-icon');

for(let i=0; i < skillsIcon.length; i++){
    progressIcon.innerHTML += '<div class="progress-circle progress-circle.progress-' + skillsIcon[i].percentage + '"><span>' + skillsIcon[i].icon + '</span></div><p class="hint-text">' + skillsIcon[i].hint + '</p>'
}

var textHint = document.getElementsByClassName("hint-text");

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