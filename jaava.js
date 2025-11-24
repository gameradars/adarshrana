window.addEventListener("scroll",function(){
    let header = document.querySelector("header")
    header.classList.toggle('sticky' , window.scrollY > 0);
})

let menubtn = document.querySelector(".menu-btn")
let nav = document.querySelector(".nav")
let navItems = document.querySelectorAll(".nav a")

menubtn.addEventListener("click",function(){
    menubtn.classList.toggle("active")
    nav.classList.toggle("active")
    closebtn.classList.toggle("active")
})

navItems.forEach((navItem) =>{
    navItem.addEventListener("click", function(){
        menubtn.classList.remove("active")
        nav.classList.remove("active")
        closebtn.classList.remove("active")
    })
})

let scrolltopbtn = document.querySelector(".scrolltop-btn")

window.addEventListener("scroll",function(){
    scrolltopbtn.classList.toggle("active", window.scrollY > 500)
})

scrolltopbtn.addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
