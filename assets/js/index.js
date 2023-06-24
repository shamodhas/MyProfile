AOS.init();
window.addEventListener("scroll",function (e){
    const squared = document.querySelector(".trapezoid");
    squared.classList.toggle("trapezoid-hide",window.scrollY > 150);
    if ($(window).width() < 992){
        skillLoad(2200, 4200);
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


