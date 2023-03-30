const navToggleAnim = document.querySelector('.nav_toggle');
const navsideAnim = document.querySelector('.nav_side');

navToggleAnim.addEventListener('click', function () {
    if (!navOpen) {
        gsap.to(navsideAnim, {
            right: 0
        })
        navOpen = true;
    } else {
        gsap.to(navsideAnim, {
            right: -100 + '%'
        })
        navOpen = false;
    }
})


// Nav Menu
const navToggle = document.querySelector('.nav_toggle');
const navside = document.querySelector('.nav_side');
let navOpen = false;

function popup(instance) {
    const scrollY = instance.scroll.y;
    if (window.innerWidth <= 768) {
        gsap.to(navToggle, {
            height: 88,
            width: 88,
        })
    } else {
        if (scrollY >= 850) {
            gsap.to(navToggle, {
                height: 124,
                width: 124,
            })
        } else {
            gsap.to(navToggle, {
                height: 0,
                width: 0,
            })
        }
    }
}

scroll.on('scroll', popup);

if (window.innerWidth <= 768) {

    gsap.to(navToggle, {
        height: 88,
        width: 88,
    })
};