

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


let chapitredeux = gsap.timeline();
chapitredeux.fromTo(".chien-tombe", { x: "-35vw", y: "-80vh"}, {y: "100vh", duration: 4,repeat:-1 })

let chapitretrois = gsap.timeline();
chapitretrois.fromTo(".chien-3", {x:"-100vw"}, {x: "100vw", duration: 6})

let chapitrequatre = gsap.timeline()
chapitretrois.fromTo(".dog-water", {x:"-100vw", y: "100vh"}, {x:"100vw", y:"-100vh",  duration: 7, })

let chapitresix = gsap.timeline();
chapitresix.fromTo(".chienfin", {x:"-100vh"}, {x:"10vw",  duration: 3})
.to(".chienfin", {y: "-40vh", rotation:-65, duration: 3})
let chapitrecinq = gsap.timeline();
chapitrecinq.fromTo(".chien", {x:"-100vw"}, {x:"100vw",   duration: 7})