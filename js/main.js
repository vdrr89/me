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

// ---------------------- PROYECT CARDS ----------------------

var photoCard = document.getElementById('proyectos-fotog-cards');
var iluCard = document.getElementById('proyectos-ilus-cards');
var dwCard = document.getElementById('proyectos-disweb-cards');
var dgCard = document.getElementById('proyectos-disGraf-cards');

function openPhotoCards(){
    if(photoCard.style.display === "inline"){
        photoCard.style.display = "none";
        console.log('openPhotoCards if');
    } else {
        photoCard.style.display = "inline";
        iluCard.style.display = "none";
        dwCard.style.display = "none";
        dgCard.style.display = "";
        console.log('openPhotoCards else');
    }
}

function openIluCards(){
    if(iluCard.style.display === "inline"){
        iluCard.style.display = "none";
        console.log('openIluCards if');
    } else {
        iluCard.style.display = "inline";
        photoCard.style.display = "";
        dwCard.style.display = "";
        dgCard.style.display = "";
        console.log('openIluCards else');
    }
}

function openDWCards(){
    if(dwCard.style.display === "inline"){
        dwCard.style.display = "none";
        console.log('openDWCards if');
    } else {
        dwCard.style.display = "inline";
        dgCard.style.display = "";
        iluCard.style.display = "";
        photoCard.style.display = "";
        console.log('openDWCards else');
    }
}

function openDGCards(){
    if(dgCard.style.display === "inline"){
        dgCard.style.display = "none";
        console.log('openDGCards if');
    } else {
        dgCard.style.display = "inline";
        dwCard.style.display = "";
        iluCard.style.display = "";
        photoCard.style.display = "";
        console.log('openDGCards else');
    }
}

/* carousel proyect cards */

// var slideIndex = [1,1];
// /* Class the members of each slideshow group with different CSS classes */
// var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
// }

let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})