const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
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

