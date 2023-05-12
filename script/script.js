
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MorphSVGPlugin);

let hauteurTotaleDuDocument = document.body.scrollHeight;

let parallax1 = document.querySelector("#parallax-bg-1");
let parallax1data = parallax1.getAttribute("data-vitesse");
let parallax2 = document.querySelector("#parallax-bg-2");
let parallax2data = parallax1.getAttribute("data-vitesse");
let parallax3 = document.querySelector("#parallax-bg-3");
let parallax3data = parallax1.getAttribute("data-vitesse");

const play = document.querySelector('.scrollicon');

  gsap.from('.scrollicon', { 
    repeat: -1,
    y: '-20',
    yoyo:true,
  });

  let delay;
  let sprite = document.querySelector(".ougabouga");
  let body = document.querySelector("body");
  document.body.classList.remove("is-scrolling");

window.addEventListener("scroll", (delay)=>{
  clearTimeout(delay);
  body.classList.add("is-scrolling");
  delay = setTimeout(function(){
    body.classList.remove("is-scrolling");
  }, 1000)
})




/* Animation Chapitre 1 */
let chapitreun = gsap.timeline({
  scrollTrigger: {
    pin: true,
    markers: true,
    start: "center center",
    end: "bottom top",
    toggleActions: "restart complete reset",
    trigger: ".chien_5"
  }
});
chapitreun.fromTo(".chien_5", {x:"-100vw"}, {x:"100vw",  duration: 7})


/*parallax nuages */

gsap.to("#parallax-bg-1", {
  scrollTrigger: {
    scrub: true,
    markers: true
  },
  x: hauteurTotaleDuDocument*-0.25,
  ease: "none"
})

gsap.to("#parallax-bg-2", {
  scrollTrigger: {
    scrub: true,
    markers: true
  },
  x: hauteurTotaleDuDocument*-0.40,
  ease: "none"
})

gsap.to("#parallax-bg-3", {
  scrollTrigger: {
    scrub: true,
    markers: true
  },
  x: hauteurTotaleDuDocument*-0.75,
  ease: "none"
})


 drawsvg 
gsap.registerPlugin(DrawSVGPlugin);
gsap.from("#path", { drawSVG: "0 0", duration: 5})
gsap.from("#eyeone", { drawSVG: "0 0", duration: 2})
gsap.from("#eyetwo", { drawSVG: "0 0", duration: 4})
gsap.from("#mouthone", { drawSVG: "0 0", duration: 6})
gsap.from("#mouthtwo", { drawSVG: "0 0", duration: 7})


let anim = gsap.to("#starone", {
  morphSVG: "#skull"
});

/* Animation Chapitre 2 */
let chapitredeux = gsap.timeline({
  scrollTrigger: {
    pin: true,

    markers: true,
    start: "center center",
    end: "bottom top",
    toggleActions: "restart complete reverse reset",
    trigger: ".chien-tombe"
  }
})
chapitredeux.fromTo(".chien-tombe", { x: "-35vw", y: "-50vh"}, {y: "100vh", duration: 4,repeat:-1, 
})

/* Animation Chapitre 3 */
let chapitretrois = gsap.timeline({
  scrollTrigger: {
    pin: true,
    markers: true,
    start: "top center",
    end: "bottom top",
    toggleActions: "restart complete reset",
    trigger: ".chien-3"
  }
});
chapitretrois.fromTo(".chien-3", {x:"-100vw"}, {x: "100vw", duration: 6})

/* Animation Chapitre 4 */
let chapitrequatre = gsap.timeline({
  scrollTrigger: {

    markers: true,
    start: "top center",
    end: "bottom top",
    toggleActions: "restart complete reset",
    trigger: ".dog-water"
  }
})
chapitrequatre.fromTo(".dog-water", {x:"-100vw", y: "10vh"}, {x:"100vw", y:"-100vh",  duration: 7, })

/* Animation Chapitre 5 */
let chapitrecinq = gsap.timeline({
  scrollTrigger: {
    markers: true,
    start: "top center",
    end: "bottom top",
    toggleActions: "restart complete reset",
    trigger: ".chien"
  }
});
chapitrecinq.fromTo(".chien", {x:"-100vw"}, {x:"100vw",  duration: 7})

/* Animation Chapitre 6 */
let chapitresix = gsap.timeline({
  scrollTrigger: {
    markers: true,
    start: "center center",
    end: "bottom top",
    toggleActions: "restart complete reset",
    trigger: ".chienfin"
  }
});
chapitresix.fromTo(".chienfin", {x:"-100vh"}, {x:"10vw",  duration: 3})
.to(".chienfin", {y: "-100vh", rotation:-65, scale: 0,duration: 3})

let animation = gsap.to("#plume", {
  motionPath: {
    align: "#path-2",
    path: "#path-2",
    start:0,
    end: 0.55,
  },
  duration: 10,
  repeat: -1,
  scale:2,
})





