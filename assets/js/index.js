AOS.init();

const projects = [
    {
        id: 1,
        title: "Online Movie Ticket Booking - Full Stack",
        image: "",
        content: "MERN Stack- <b>React, TypeScript, Node.js, Express.js, MongoDB</b>, TailwindCSS, Vite",
        link: "assets/project/mtb.html"
    }, {
        id: 2,
        title: "Travel Planning System - Full Stack",
        image: "",
        content: "About <b>Spring Boot</b>, <b>Microservice</b>, Spring Web MVC / <b>Spring Security</b> / Spring Data / Spring Validation / <b>Java</b> / MySql / MongoDB / HTML / CSS / JavaScript / <b>JWT</b>",
        link: "https://github.com/shamodhaSahan/Travel-Planning-System"
    }, {
        id: 3,
        title: "Calculator - Mobile Development",
        image: "",
        content: "This is a simple calculator. It is designed very simply with simple math methods and accurate ux.<b>React Native</b>",
        link: "https://github.com/shamodhaSahan/Calculator_Mobile_Application_React_Native"
    }, {
        id: 4,
        title: "Web Pos - (This is in commercial use in a shop)",
        image: "",
        content: "<b>React, Firebase</b>",
        link: "assets/project/msms.html"
    }, {
        id: 5,
        title: "Pos - Backend",
        image: "",
        content: "There are two backgrounds with Auth Security. <b>Spring Boot / Spring MVC</b>",
        link: "assets/project/pos_backend.html"
    }, {
        id: 6,
        title: "Connect Four - OOP",
        image: "assets/image/project/oop.png",
        content: "This is a task project to learn oop concept from github. Here it is complete and <b>simple AI</b> design built by min-max algorithm",
        link: "https://github.com/shamodhaSahan/oop-final-connect-four"
    }, {
        id: 7,
        title: "Calculator - Web Development",
        image: "",
        content: "This is a simple calculator. It is designed very simply with simple math methods and accurate ux.<b>Html, Css, JavaScript</b>",
        link: "https://github.com/shamodhaSahan/web-calculator"
    }, {
        id: 8,
        title: "Computer Shop Management System - Desktop",
        image: "assets/image/project/csms.png",
        content: "An application designed for a mange computer shop.Available in both <b>MVC</b> and <b>Layered</b> architecture. Javafx, Java, Maven, MySql, jdbc. oop",
        link: "assets/project/csms.html"
    }, {
        id: 9,
        title: "Warehouse Management System",
        image: "assets/image/project/warehouse.jpg",
        content: "An application designed to manage storage space. <b>Java Swing</b>, <b>jdbc</b>,<b>oop</b>, <b>Layered</b> architecture",
        link: "https://github.com/shamodhaSahan/Warehouse-Management-System"
    }, {
        id: 10,
        title: "Hostel Management System",
        image: "assets/image/project/orm.jpg",
        content: "An application designed for a hostel to handle customer, user, students and rooms. <b>Javafx</b>, <b>Java</b>, <b>Maven</b>, <b>Hibernate</b>, MySql, <b>Layered</b> architecture",
        link: "https://github.com/shamodhaSahan/Hostel-Management-System"
    }, {
        id: 11,
        title: " Group Chat Application",
        image: "assets/image/project/chatApp.png",
        content: "This is a chat application for a group chat. <b>Java</b>, java <b>socket</b> programming",
        link: "https://github.com/shamodhaSahan/Group-Chat-Application"
    }, {
        id: 12,
        title: "My Personal Web Site",
        image: "",
        content: "Html, Css, JavaScript",
        link: "https://github.com/shamodhaSahan/MyProfile"
    }, {
        id: 13,
        title: "Student Data Mini Project - Full Stack",
        image: "",
        content: "Student data crud project.<b>React js</b>, <b>JavaEE 8</b>, <b>JDBC</b>, <b>Tomcat 9</b>",
        link: "assets/project/sdmp.html"
    }
]

const loadProject = () => {
    var projectCards = document.getElementById('project_cards');
    projectCards.innerHTML = ''
    projects.map(project => {
        projectCards.innerHTML += `
        <li class="card">
            <div>
                <h3 class="card-title">${project.title}</h3>
                <img class="project_image" src="${project.image}" alt="">
                <div class="card-content">
                    <p>${project.content}</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a target="_blank" href="${project.link}" class="card-link">see here</a>
            </div>
        </li>
    `;
    });
}

loadProject();


window.addEventListener("scroll", function (e) {
    const squared = document.querySelector(".trapezoid");
    squared.classList.toggle("trapezoid-hide", window.scrollY > 150);
    if ($(window).width() < 992) {
        skillLoad(2300, 5000);
    } else {
        skillLoad(2400, 3401);
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0)
    }
});

function skillLoad(start, down) {
    if (window.scrollY < start || window.scrollY > down) {
        $('.percent').css("display", "none")
    } else {
        $('.percent').css("display", "block")
    }
};

$('.menu-toggle').click(function () {
    $('nav').toggleClass('active');
});


const gallery = document.querySelector('#gallery-list');
const getVal = function (elem, style) {
    return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
const getHeight = function (item) {
    return item.querySelector('.content').getBoundingClientRect().height;
};
const resizeAll = function () {
    const altura = getVal(gallery, 'grid-auto-rows');
    const gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        item.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            const altura = getVal(gallery, 'grid-auto-rows');
            const gap = getVal(gallery, 'grid-row-gap');
            const gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});

window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('full');
    });
});

const textWrapper = document.querySelector('.home-job');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.home-job .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
    }).add({
        targets: '.home-job',
        opacity: 0,
        duration: 0,
        easing: "easeOutExpo",
        delay: 0
    });



// // project carousel
// const project_name = [
//     ['Group Chat Application', 'Group chat application implementing java socket programming', 'https://github.com/shamodhas/Group-Chat-Application'],
//     ['Computer Shop Management System', 'Computer Shop Management software implementing Layered Architecture', 'https://github.com/shamodhas/csms-layered-architecture'],
//     ['Connect Four Game', 'Connect Four Game implementing Oop Concept', 'https://github.com/shamodhas/Connect-Four-Game'],
//     ['Hostel Management System', 'Hostel Management System implementing Orm Concept', 'https://github.com/shamodhas/Hostel-Management-System'],
//     ['Css Playing Car', 'Css Playing Car implementing Html , Css', 'https://github.com/shamodhas/Internet-Technologies-Assignment-04'],
//     ['Point Of Sale System', 'Pos System Html, Css, JavScript', 'https://github.com/shamodhas/Internet-Technologies-Assignment-11'],
//     ['Warehouse Management System', 'Warehouse Management System implementing Java Swing', 'https://github.com/shamodhas/Warehouse-Management-System'],
//     ['Test', 'test']
// ];
// let project_index = 0;
// window.addEventListener('load', () => {
//     const carousels = document.querySelectorAll('.my-project-carousel');
//     for (let i = 0; i < carousels.length; i++) carousel(carousels[i]);
// });
// function carousel(root) {
//     var
//         figure = root.querySelector('.project-carousel-item'),
//         nav = root.querySelector('.project-carousel-nav'),
//         images = figure.children,
//         n = images.length,
//         bfc = ('bfc' in root.dataset),
//         theta = 2 * Math.PI / n,
//         currImage = 0;

//     setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
//     window.addEventListener('resize', () => {
//         setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
//     });

//     setupNavigation();

//     function setupCarousel(n, s) {
//         var apothem = s / (2 * Math.tan(Math.PI / n));
//         figure.style.transformOrigin = `50% 50% ${-apothem}px`;

//         for (var i = 0; i < n; i++)
//             images[i].style.padding = `20px`;
//         for (i = 1; i < n; i++) {
//             images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
//             images[i].style.transform = `rotateY(${i * theta}rad)`;
//         }
//         if (bfc)
//             for (i = 0; i < n; i++)
//                 images[i].style.backfaceVisibility = 'hidden';

//         rotateCarousel(currImage);
//     }

//     function setupNavigation() {
//         nav.addEventListener('click', (e)=>{
//             e.stopPropagation();

//             var t = e.target;
//             if (t.tagName.toUpperCase() !== 'BUTTON')
//                 return;
//             // if(project_index === 7) project_index = 0;
//             if (t.classList.contains('next')) {
//                 project_index++;
//                 currImage++;
//             } else
//             {
//                 project_index--;
//                 currImage--;
//             }
//             rotateCarousel(currImage);
//         }, true);
//     }
//     function rotateCarousel(imageIndex) {
//         if (project_index < 0) project_index = project_index + 8;
//         if (project_index > 7) project_index = project_index - 8;
//         figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
//         $('.my-project-header h5').text(project_name[project_index][0])
//         $('.my-project-header p').text(project_name[project_index][1])
//         $('.my-project-header a').attr('href', project_name[project_index][2]);
//         console.log(project_index)
//     }
// }

