

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
