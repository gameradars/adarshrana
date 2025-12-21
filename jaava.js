function loco(){
    const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector('.tope'),
    smooth: true
});
}

function revealToSpan(){
    document.querySelectorAll(".reveal").forEach(elem =>{
        let parent = document.createElement("span")
        let child = document.createElement("span")

        parent.classList.add("parent")
        child.classList.add("child")

        child.innerHTML = elem.innerHTML
        parent.appendChild(child)

        elem.innerHTML = ''
        elem.appendChild(parent)
    })
}
revealToSpan()

function valueSetters(){
    gsap.set(".tope .nav",{
        opacity: 0,
        y: -70
    })
    gsap.set(".tope .row h1",{
        opacity: 0,
        y: 100
    })
    gsap.set(".tope .row h5",{
        opacity: 0,
        y: -100
    })
    gsap.set(".tope .row h3",{
        opacity: 0,
        y: -100
    })
}
valueSetters()

function topgAnimation(){
    let tl = gsap.timeline()
    tl.from(".child span",{
        x: 80,
        duration: 1.2,
        delay: .3,
        stagger: 0.1,
        ease: Power4.easeInOut
    })
    tl.to(".parent .child",{
        y: "-100%",
        duration: 1,
        delay: -.5,
        ease: Power4.easeInOut,
    })
}
topgAnimation()

function loaderAnimation(){
    let tl = gsap.timeline()

    tl.to(".topg",{
        height: "0%",
        duration: 2,
        delay: 1.5,
        ease: Expo.easeInOut
    })
    tl.to(".greendiv",{
        height: "100%",
        duration: 2,
        delay: -2,
        ease: Expo.easeInOut
    })
    tl.to(".tope",{
        height: "100%",
        display: "block",
        duration: 2,
        delay: -1.8,
        ease: Expo.easeInOut,
        onComplete: function(){
            topeAnimation()
        }
    })
}
loaderAnimation()

function topeAnimation(){
    let tl = gsap.timeline()

    tl.to(".tope .nav",{
        y: 0,
        opacity: 1,
        duration: 2,
        delay: -1,
        stagger: 1,
        ease: Expo.easeInOut
    })
    tl.to(".tope .row h1",{
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: .4,
        delay: -1.2,
        ease: Expo.easeInOut
    })
    tl.to(".tope .row h5",{
        y: 0,
        opacity: 0.6,
        duration: 2,
        delay: -1.5,
        ease: Expo.easeInOut
    })
    tl.to(".tope .row h3",{
        y: 0,
        opacity: 0.6,
        duration: 2,
        delay: -1.6,
        ease: Expo.easeInOut
    }) 
}

function cardHoverEffect(){
    document.querySelectorAll("#cnt").forEach(elem =>{
        let showImage;
        elem.addEventListener("mousemove",function(dets){
            console.log(dets.target.dataset.index)
            document.querySelector(".cursor").children[dets.target.dataset.index].style.opacity = 1
            showImage = dets.target
            document.querySelector(".cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
            showImage.style.filter = "grayscale(0.7)"
            document.querySelector(".works").style.backgroundColor = showImage.dataset.color
        })
        elem.addEventListener("mouseleave",function(dets){
            document.querySelector(".cursor").children[showImage.dataset.index].style.opacity = 0
            showImage.style.filter = "grayscale(0)"
            document.querySelector(".works").style.backgroundColor = "#fff"
        })
    })
}

cardHoverEffect()
loco()

