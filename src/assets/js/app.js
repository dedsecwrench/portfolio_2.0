import gsap from "gsap";


const bar = document.querySelector(".loading__bar--inner");
const counter_num = document.querySelector(".loading__counter--number");
// const circle = document.querySelector(".loading__box");
let counter = 0;
// let cc = 500;
let barInterval = setInterval(()=>{
   bar.style.width = counter + "%";
   counter_num.innerText = counter + "%"
   counter++;
   if(counter===101){
    clearInterval(barInterval);
    gsap.to(".loading__bar",{
        duration:0.7,
        // rotate:"90deg",
        // left:"1000%",
        width:0,
        display:"none",
        opacity:"0"
    })
    gsap.to(".loading__text,.loading__counter",{
        delay:0.1,
        duration:0.7,
        opacity:0,
        display:"none"
    })
    gsap.to(".loading",{
        delay:1,
        opacity:0,
        display:"none"
    })
    gsap.to("header",{
        duration:1,
        delay:0.7,
        top:0,
    })
    gsap.to(".socials",{
        duration:1,
        delay:1,
        bottom:"6.5rem",
    })

   } 
},20)