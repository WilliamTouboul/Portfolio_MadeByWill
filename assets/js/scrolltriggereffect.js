gsap.registerPlugin(ScrollTrigger);

scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.5,
    getDirection: true,
    getSpeed: true,
    getHorizontalOffset: true,
    getVerticalOffset: true,
    scrollFromAnywhere: true,
    smartphone: {
        smooth: true,
    },
});

window.onresize = scroll.update();

scroll.on("scroll", () => ScrollTrigger.update());

ScrollTrigger.scrollerProxy('[data-scroll-container]', {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },

    pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
});

ScrollTrigger.defaults({
    scroller: document.querySelector('[data-scroll-container]'),
});

ScrollTrigger.addEventListener('refresh', () => scroll.update());


ScrollTrigger.refresh();


// ScrollTrigger Gallery Home.
const skills = document.querySelector('.home_skills');

const side = document.querySelector('.side_gallery');
const row1 = document.querySelector('.row_1');
const row2 = document.querySelector('.row_2');
const row3 = document.querySelector('.row_3');
const inner1 = document.querySelector('.inner_1');
const inner2 = document.querySelector('.inner_2');
const inner3 = document.querySelector('.inner_3');
const innerWidth = inner1.offsetWidth;

gsap.to(inner1, {
    scrollTrigger: {
        trigger: row1,
        start: 'top 98%',
        end: 'top -100%',
        scrub: true,
        easing: 'Power2.out'
    },
    x: -innerWidth,
    easing: Power3.easeIn,
});

gsap.to(inner2, {
    scrollTrigger: {
        trigger: row2,
        start: 'top 98%',
        end: 'top -100%',
        scrub: true,
    },
    x: innerWidth,
    easing: Power3.easeIn,
});

gsap.to(inner3, {
    scrollTrigger: {
        trigger: row3,
        start: 'top 98%',
        end: 'top -100%',
        scrub: true,
    },
    x: -innerWidth,
    easing: Power3.easeIn,
});

