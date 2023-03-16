gsap.registerPlugin(ScrollTrigger);

let direction = 1;

const roll1 = roll(".rollingText", {
        duration: 25
    }),
    roll2 = roll(".rollingText02", {
        duration: 10
    }, true),
    scroll = ScrollTrigger.create({
        onUpdate(self) {
            if (self.direction !== direction) {
                direction *= -1;
                gsap.to([roll1, roll2], {
                    timeScale: direction,
                    overwrite: true
                });
            }
        }
    });

function roll(targets, vars, reverse) {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() {
                this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            }
        }),
        elements = gsap.utils.toArray(targets),
        clones = elements.map(el => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
        }),
        positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {
            position: "absolute",
            overwrite: false,
            top: el.offsetTop,
            left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)
        }));
    positionClones();
    elements.forEach((el, i) => tl.to([el, clones[i]], {
        xPercent: reverse ? 100 : -100,
        ...vars
    }, 0));
    window.addEventListener("resize", () => {
        let time = tl.totalTime(); // record the current time
        tl.totalTime(0); // rewind and clear out the timeline
        positionClones(); // reposition
        tl.totalTime(time); // jump back to the proper time
    });
    return tl;
}


const effect_button = document.querySelectorAll('.effect_button');

effect_button.forEach((item, index) => {
    let inside = item.querySelector('.effect_button_inside')

    item.addEventListener('mouseover', () => {
        gsap.to(inside, {
            top: 0,
            duration: .45,
            ease: Power3.easeIn,
        })
    })

    item.addEventListener('mouseout', () => {
        let tl = new gsap.timeline({});

        tl.to(inside, {
            top: -100 + '%',
            duration: .45,
            ease: Power3.easeIn,

        });

        tl.set(inside, {
            top: 100 + '%',
            ease: Power3.easeIn,

        })
    })
})

const nav_toggle = document.querySelector('.nav_toggle');

document.addEventListener('scroll', function () {
    if (window.scrollY >= 850) {
        nav_toggle.classList.add('displayed')
    } else {
        nav_toggle.classList.remove('displayed')
    }
})


const datetime_target = document.querySelector('.datetime_target');

function getHour() {
    const date = new Date();
    let hour = date.getHours();
    let minute = '0' + date.getMinutes();
    let second = date.getSeconds();
    let time = hour + ':' + minute + ':' + second;
    datetime_target.innerHTML = time;
}

getHour();
setInterval(getHour, 1000);