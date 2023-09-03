AOS.init();

window.addEventListener("scroll",function (e){
    const squared = document.querySelector(".trapezoid");
    squared.classList.toggle("trapezoid-hide",window.scrollY > 150);
    if ($(window).width() < 992){
        skillLoad(2300, 5000);
    }else {
        skillLoad(2400, 3401);
        const header = document.querySelector("header");
        header.classList.toggle("sticky",window.scrollY > 0)
    }
});

function skillLoad(start, down){
    if(window.scrollY < start || window.scrollY > down ){
        $('.percent').css("display", "none")
    }else {
        $('.percent').css("display", "block")
    }
};

$('.menu-toggle').click(function(){
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

// project carousel
const project_name = [
    ['Group Chat Application', 'Group chat application implementing java socket programming', 'https://github.com/shamodhas/Group-Chat-Application'],
    ['Computer Shop Management System', 'Computer Shop Management software implementing Layered Architecture', 'https://github.com/shamodhas/csms-layered-architecture'],
    ['Connect Four Game', 'Connect Four Game implementing Oop Concept', 'https://github.com/shamodhas/Connect-Four-Game'],
    ['Hostel Management System', 'Hostel Management System implementing Orm Concept', 'https://github.com/shamodhas/Hostel-Management-System'],
    ['Css Playing Car', 'Css Playing Car implementing Html , Css', 'https://github.com/shamodhas/Internet-Technologies-Assignment-04'],
    ['Point Of Sale System', 'Pos System Html, Css, JavScript', 'https://github.com/shamodhas/Internet-Technologies-Assignment-11'],
    ['Warehouse Management System', 'Warehouse Management System implementing Java Swing', 'https://github.com/shamodhas/Warehouse-Management-System'],
    ['Test', 'test']
];
let project_index = 0;
window.addEventListener('load', () => {
    const carousels = document.querySelectorAll('.my-project-carousel');
    for (let i = 0; i < carousels.length; i++) carousel(carousels[i]);
});
function carousel(root) {
    var
        figure = root.querySelector('.project-carousel-item'),
        nav = root.querySelector('.project-carousel-nav'),
        images = figure.children,
        n = images.length,
        bfc = ('bfc' in root.dataset),
        theta = 2 * Math.PI / n,
        currImage = 0;

    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', () => {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });

    setupNavigation();

    function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));
        figure.style.transformOrigin = `50% 50% ${-apothem}px`;

        for (var i = 0; i < n; i++)
            images[i].style.padding = `20px`;
        for (i = 1; i < n; i++) {
            images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
            images[i].style.transform = `rotateY(${i * theta}rad)`;
        }
        if (bfc)
            for (i = 0; i < n; i++)
                images[i].style.backfaceVisibility = 'hidden';

        rotateCarousel(currImage);
    }

    function setupNavigation() {
        nav.addEventListener('click', (e)=>{
            e.stopPropagation();

            var t = e.target;
            if (t.tagName.toUpperCase() !== 'BUTTON')
                return;
            // if(project_index === 7) project_index = 0;
            if (t.classList.contains('next')) {
                project_index++;
                currImage++;
            } else
            {
                project_index--;
                currImage--;
            }
            rotateCarousel(currImage);
        }, true);
    }
    function rotateCarousel(imageIndex) {
        if (project_index < 0) project_index = project_index + 8;
        if (project_index > 7) project_index = project_index - 8;
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
        $('.my-project-header h5').text(project_name[project_index][0])
        $('.my-project-header p').text(project_name[project_index][1])
        $('.my-project-header a').attr('href', project_name[project_index][2]);
        console.log(project_index)
    }
}