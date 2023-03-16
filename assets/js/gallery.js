const viewer = document.querySelector('.gallery_viewer');

document.addEventListener('mousemove', function (e) {
    x = e.pageX + 10;
    y = e.pageY + 10;

    viewer.style.top = `${y}px`
    viewer.style.left = `${x}px`
})

const project = document.querySelectorAll('.project_item');
project.forEach((item, index) => {

    item.addEventListener('mouseover', () => {
        let source = item.getAttribute('data-img');
        viewer.style.backgroundImage = `url('${source}')`
        gsap.to(viewer, {
            height: 420,
            width: 640,
            x: 5 + '%',
            y: -20 + '%',
            duration: .2
        })
    });

    item.addEventListener('mouseout', () => {
        gsap.to(viewer, {
            height: 0,
            width: 0,
            duration: .2
        })
    });

})


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
    },
    x: -innerWidth,
    easing : Power3.easeIn,
});

gsap.to(inner2, {
    scrollTrigger: {
        trigger: row2,
        start: 'top 98%',
        end: 'top -100%',
        scrub: true,
    },
    x: innerWidth,
    easing : Power3.easeIn,

});

gsap.to(inner3, {
    scrollTrigger: {
        trigger: row3,
        start: 'top 98%',
        end: 'top -100%',
        scrub: true,
    },
    x: -innerWidth,
    easing : Power3.easeIn,

});