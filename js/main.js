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

// hacer el click para que el botón abra cada section 
function openDwSection(){
    if(dwSection.style.display === "none"){
        dwSection.style.display = "inline-block";
        dgSection.style.display = "none";
        fotoSection.style.display = "none";
        iluSection.style.display = "none";
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
    } else {
        dwSection.style.display = "none";
        dgSection.style.display = "none";
        fotoSection.style.display = "none";
        iluSection.style.display = "none";
    }
}


// for para diseño web
for (let i=0; i < dwSlides.length; i++){
    dwSection.innerHTML += '<div class="proj-img"><img src="' + dwSlides[i].src + '" alt="' + dwSlides[i].name + '"></div>'
}

// for para diseño grafico 
for (let i=0; i < dgSlides.length; i++){
    dgSection.innerHTML += '<div class="proj-img"><img src="' + dgSlides[i].src + '" alt="' + dgSlides[i].name + '"></div>'
}

// for para fotografía 
for (let i=0; i < fSlides.length; i++){
    fotoSection.innerHTML += '<div class="proj-img"><img src="' + fSlides[i].src + '" alt="' + fSlides[i].name + '"></div>'
}

// for para ilustracion 
for (let i=0; i < iSlides.length; i++){
    iluSection.innerHTML += '<div class="proj-img"><img src="' + iSlides[i].src + '" alt="' + iSlides[i].name + '"></div>'
}

