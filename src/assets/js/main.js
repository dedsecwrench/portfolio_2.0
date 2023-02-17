const mediaQuery = window.matchMedia('(min-width:360px) and (max-width:600px)')
// Check if the media query is true
let skills_head = document.querySelector(".skills_left");
let about_head = document.querySelector(".about_left");
let prj_head = document.querySelector(".project_head");
let contact_head = document.querySelector(".c")
if (mediaQuery.matches) {
//   alert('Media Query Matched!')
// data-aos="zoom-in"  data-aos-easing="ease-in-out"
    skills_head.setAttribute('data-aos','zoom-in')
    skills_head.setAttribute('data-aos-easing','ase-in-out')
    about_head.setAttribute('data-aos','zoom-in')
    about_head.setAttribute('data-aos-easing','ase-in-out')
    prj_head.setAttribute('data-aos','zoom-in')
    prj_head.setAttribute('data-aos-easing','ase-in-out')
    contact_head.setAttribute('data-aos','zoom-in')
    contact_head.setAttribute('data-aos-easing','ase-in-out')
}