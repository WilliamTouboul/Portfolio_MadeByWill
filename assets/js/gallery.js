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
        console.log(viewer.style.top)
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