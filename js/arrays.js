console.log("arrays.js opened");

// ---------------------- ABOUT ----------------------
var aboutTxt =[
    {
        'whoIAm':'Soy Verónica, vivo en Montevideo, Uruguay.',
        'whatIDid': 'Estudié / estudio / seguiré estudiando sobre diseño de comunicación visual, desarrollo web, fotografía, y otras áreas relacionadas con la expresión visual.',
        'continueToWeb': 'Aquí debajo te dejo un poco más de información sobre mi...'
    }
]

// ---------------------- SKILLS ----------------------
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

// ---------------------- PROJECTS ----------------------

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

// ---------------------- EDUCATION ----------------------
var education = [
    {
        'instituto': 'Udelar',
        'institutoDetalle': '',
        'curso': 'LDCV',
        'cursoDetalle': 'Licenciatura en Diseño de Comunicación Visual',
        'detalle':'Creación de piezas gráficas, editorial, packaging, contenido multimeida, Fotografía.'    
    },
    {
        'instituto': 'GA',
        'institutoDetalle': 'General Assembly',
        'curso': 'HTML y CSS',
        'cursoDetalle':'',
        'detalle':'o HTML and CSS with '
    },
    {
        'instituto': 'IDF',
        'institutoDetalle': 'Interaction Design Foundation',
        'curso': 'UX UI',
        'cursoDetalle':'',
        'detalle':''
    },
    {
        'instituto': 'El Taller de Informática',
        'institutoDetalle': '',
        'curso': 'Front End',
        'cursoDetalle':'HTML CSS Git JS TS Angular',
        'detalle':''
    },
    {
        'instituto': 'Udemy',
        'institutoDetalle': '',
        'curso': 'Web Development Bootcamp',
        'cursoDetalle':'',
        'detalle':''
    }
]

// ---------------------- WORK EXPERIENCE ----------------------
var workExperience = [
    {
        'place':'Fidemar',
        'job': 'Auxiliar Administrativo',
        'time':'2021 - 2023',
        'detalle':'Caja (cobro a los clientes mediante dinero en efectivo, tarjeta, cheques y depósitos bancarios), arqueo, recepción de clientes en local y vía telefónica derivando las llamadas; Ingreso de documentación al sistema, relacionar documentos digital y fisicamente, archivo de documentos, trámites ante instituciones públicas y privadas referentes a la empresa y sus vehículos.',
        'referenceName': 'Claudio Beinhacker',
        'referenceJob': 'Director',
        'referenceContact': '099 441 931'
    },
    {
        'place':'Calado Design',
        'job': 'Auxiliar de Diseño de Packaging y Redes Sociales',
        'time':'',
        'detalle':'Auxiliar en packaging, toma de fotografías y su publicación en redes sociales, gestión de comunicación con los clientes, entre otros.',
        'referenceName': 'Mayra Acuña',
        'referenceJob': 'Directora',
        'referenceContact': '095 731 866'
    },
    {
        'place':'Districomp',
        'job': 'Diseño Gráfico y Web',
        'time':'',
        'detalle':'Creación de piezas gráficas para impresión o digital, como por ejemplo mailings, banners para la web, botones para la web, estampados para ropa, vehículos, diseño para tarjetería y documentación administrativa, entre otros.',
        'referenceName': 'Gabriel Insiburo',
        'referenceJob': '',
        'referenceContact': '091 230 618'
    },
    {
        'place':'P. Alciaturi',
        'job': 'Promotora',
        'time':'',
        'detalle':'Promotora de diversos productos y servicios, entrega de folletería en vía pública y locales, recepción de clientes, caja (cobro a clientes en efectivo y con tarjeta), cuidado de niños, degustaciones.',
        'referenceName': 'Pamela Alciaturi',
        'referenceJob': 'Director',
        'referenceContact': '099 413 398'
    }
]

/* -- referencias ocultas
    {
        'place':'Mosca',
        'job': 'Vendedora',
        'time':'',
        'jobDetail':'Auxiliar de ventas en salón, atención al cliente.',
        'referenceName': 'Ana',
        'referenceJob': 'Encargada',
        'referenceContact': '09X XXX XXX'
    }
*/

// ---------------------- CONTACT ----------------------
var contact = [
    {
        'name':'phone',
        'linkText':'(+598) 92 103 185',
        'kindOfLink':'href',
        'link':'https://api.whatsapp.com/send?phone=59892103185',
        'icon':'bi bi-whatsapp'
    },
    {
        'name':'mail',
        'linkText':'vdrr89@gmail.com',
        'kindOfLink':'mailto',
        'link':'vdrr89@gmail.com',
        'icon':'bi bi-envelope-fill'
    },
]

var socialNetworks = [
    {
        'name':'Behance',
        'link':'https://www.behance.net/vdrr89',
        'writtenLink':'behance.net/vdrr89',
        'icon':''
    },
    {
        'name':'Github',
        'link':'https://github.com/vdrr89',
        'writtenLink':'github.com/vdrr89',
        'icon':'bi bi-github'
    },
    {
        'name':'CodePen',
        'link':'https://codepen.io/vdrr89',
        'writtenLink':'codepen.io/vdrr89',
        'icon':'fab fa-codepen'
    },
    {
        'name':'Linkedin',
        'link':'https://www.linkedin.com/in/veronicaromero89/',
        'writtenLink':'linkedin.com/in/veronicaromero89',
        'icon':'bi bi-linkedin'
    }
]