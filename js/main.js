/* Menu show and hidden */ 
const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close")

/* Menu Show */
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu")
    })
}
/* Menu Hidden*/

if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}

/* Remove menu when click a nav_link -- mobile*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Skills */

const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills__content skills__close"
    }
    if(itemClass === "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open"
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener("click", toggleSkills)
})

/* Knowledge tabs */
const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove("knowled__active")
        })
        target.classList.add("knowled__active")

        tabs.forEach(tab => {
            tab.classList.remove("knowled__active")
        })
        tab.classList.add("knowled__active")
    })
})

/* Swiper JS*/

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

/* Class actions bc scroll */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* box shadow in the header when scroll*/ 

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* Dark mode theme*/ 

const logo = document.getElementById("logoimg")
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-cloud-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-cloud-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme);
        if(document.body.classList.value === "dark-theme"){
        logo.classList.remove("nav__img-close");
    }else{
        logo.classList.add("nav__img-close");
    };
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})