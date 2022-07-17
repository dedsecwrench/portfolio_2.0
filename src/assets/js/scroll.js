window.addEventListener("scroll",()=>{
    let header = document.querySelector(".header");
    header.classList.toggle("scrollOnLanding", window.scrollY > 100);
})