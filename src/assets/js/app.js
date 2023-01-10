import gsap from "gsap";
// import Scrollbar,{ ScrollbarPlugin } from 'smooth-scrollbar';


// class AnchorPlugin extends ScrollbarPlugin {
//     static pluginName = 'anchor';
  
//     onHashChange = () => {
//       this.jumpToHash(window.location.hash);
//     };
  
//     onClick = (event) => {
//       const { target } = event;
  
//       if (target.tagName !== 'A') {
//         return;
//       }
  
//       const hash = target.getAttribute('href');
  
//       if (!hash || hash.charAt(0) !== '#') {
//         return;
//       }
  
//       this.jumpToHash(hash);
//     };
  
//     jumpToHash = (hash) => {
//       const { scrollbar } = this;
  
//       if (!hash) {
//         return;
//       }    
  
//       // reset scrollTop
//       scrollbar.containerEl.scrollTop = 0;
  
//       scrollbar.scrollIntoView(document.querySelector(hash));
//     };
  
//     onInit() {
//       this.jumpToHash(window.location.hash);
  
//       window.addEventListener('hashchange', this.onHashChange);
  
//       this.scrollbar.contentEl.addEventListener('click', this.onClick);
//     }
  
//     onDestory() {
//       window.removeEventListener('hashchange', this.onHashChange);
  
//       this.scrollbar.contentEl.removeEventListener('click', this.onClick);
//     }
//   }
  
//   // usage
//   Scrollbar.use(AnchorPlugin);

// //   SCROLLING ANCHOR


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
        bottom:"4rem",
    })
    // let options={
    //     damping:0.1,
    //     // alwaysShowTracks:true
    // }

   } 
},20)

// Scrollbar.init(document.body);