/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () => {
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200,
})

sr.reveal(`.home__img, .section__title, .about__title, .about__list, .about__intro, .about__description, .about__quotes, .contact__content, .footer__content, .footer__copy`)
sr.reveal(`.home__data`, {delay: 500})


/*=============== THEME CHANGE ===============*/
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme if available
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-switch');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';

    if (currentTheme === 'dark') {
        body.classList.remove('dark-theme');
        body.style.setProperty('--color-background', 'var(--color-background-light)');
        body.style.setProperty('--color-text', 'var(--color-text-light)');
        themeIcon.classList.remove('ri-sun-fill')
        themeIcon.classList.add('ri-moon-fill')
        localStorage.setItem('theme', 'light')
    } else {
        body.classList.add('dark-theme');
        body.style.setProperty('--color-background', 'var(--color-background-dark)');
        body.style.setProperty('--color-text', 'var(--color-text-dark)');
        themeIcon.classList.remove('ri-moon-fill')
        themeIcon.classList.add('ri-sun-fill')
        localStorage.setItem('theme', 'dark')
    }
}