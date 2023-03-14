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
        gsap.to(viewer,{
            height : 420,
            width : 640,
            duration : .2
        })
        // viewer.style.height = 420 + 'px';
        // viewer.style.width = 640 + 'px'
    });

    item.addEventListener('mouseout', () => {
        gsap.to(viewer,{
            height : 0,
            width : 0,
            duration : .2
        })
    });

})