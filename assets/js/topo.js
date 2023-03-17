const simplex = new SimplexNoise();
let c = chroma.scale(['#455CE8', '#3a86ff']);
let fake = document.querySelector('.fake');
let ctx = fake.getContext('2d');

let paths = document.querySelectorAll('path');

function setupPaths(paths) {
    paths.forEach(p => {
        p.length = p.getTotalLength();
        p.previous = p.getPointAtLength(0);
        p.tween = 0;
        p.playing = false;
        p.gsap = gsap.fromTo(p, {
            tween: 0
        }, {
            tween: 1,
            duration: p.length * 0.01 + 1, // Vitesse
            delay: Math.random() * 5, // Variance des délais
            ease: 'power2.inOut',
            onStart: () => {
                p.playing = true;
            },
            onComplete: () => {
                p.playing = false;
            },
        });
    });
}

function resetPaths(paths) {
    paths.forEach(p => {
        p.playing = false;
        p.gsap.restart(true, false);
    });
}
setupPaths(paths);

let ratio = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    strokeWeight(1.2);
    windowResized();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    fake.width = width * pixelDensity();
    fake.height = height * pixelDensity();
    resetPaths(paths);

    if (1081.45 / 603.34 > windowWidth / windowHeight) {
        ratio = windowHeight / 603.34;
    } else {
        ratio = windowWidth / 1081.45;
    }
}

function draw() {
    paths.forEach(p => {
        const dot = p.getPointAtLength(p.length * p.tween);
        if (p.playing) {
            let a = simplex.noise3D(dot.x * 0.01, dot.y * 0.01, 1) + 1;
            stroke(c(a / 2).hex());
            line(dot.x * ratio, dot.y * ratio, p.previous.x * ratio, p.previous.y * ratio);
        }
        p.previous = dot;
    });

    ctx.drawImage(drawingContext.canvas, 0, 0);
}