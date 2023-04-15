const play = document.querySelector('.scrollicon');

  gsap.from('.scrollicon', { 
    repeat: -1,
    y: '-20',
    yoyo:true,
  });
