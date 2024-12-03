window.addEventListener("wheel",function(dets){
    if(dets.deltaY > 0){
        gsap.to(".marquee",{
            transform :"translateX(-200%)",
            duration:4,
            ease:"none",
            repeat:-1,
        })
        gsap.to(".marquee img",{
            rotate:180
        })
    }
    else{
        gsap.to(".marquee",{
            transform :"translateX(0%)",
            duration:4,
            ease:"none",
            repeat:-1,
        })
        gsap.to(".marquee img",{
            rotate:0
        })
    }
})

        const navbar = document.getElementById('navbar')
        const closeMenu = document.getElementById('close')
        const menu = document.getElementById('menu')

        menu.addEventListener('click', () => {
            navbar.classList.add('active')
        })
        closeMenu.addEventListener('click', () => {
            navbar.classList.remove('active')
        })


        const skills = document.getElementById('skills')
        const contact = document.getElementById('contact')


        const skillsactive = () => {
            console.log(window.scrollY + '>' + skills.offsetTop + skills.offsetHeight)
            if (window.scrollY > skills.offsetTop) {
                skills.classList.add('active')
            }
            if (window.scrollY > (contact.offsetTop)) {
                skills.classList.remove('active')
            }
        }

        window.addEventListener('scroll', skillsactive)


        const header = document.getElementById('header')
        const HeaderActive = () => {
            if (window.scrollY >100) {
                header.classList.add('active')
            }else {
                header.classList.remove('active')
            }
        }

        window.addEventListener('scroll', HeaderActive)

