AOS.init();
window.addEventListener("scroll",function (e){
    console.log(window.scrollY)
    var squared = document.querySelector(".trapezoid");
    squared.classList.toggle("trapezoid-hide",window.scrollY > 150);
    if (window.scrollY > 50 && window.scrollY < 700){
        $('#project-heading').toggleClass("animate__animated animate__swing");
    }
    if ($(window).width() < 992){
        skillLoad(2000, 5094);
    }else {
        skillLoad(2400, 3401);
        var header = document.querySelector("header");
        header.classList.toggle("sticky",window.scrollY > 0)
    }
})

function skillLoad(start, down){
    if(window.scrollY < start || window.scrollY > down ){
        $('.percent').css("display", "none")
    }else {
        $('.percent').css("display", "block")
    }
}

$('.menu-toggle').click(function(){
    $('nav').toggleClass('active');
})


var gallery = document.querySelector('#gallery-list');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
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

