/* Animation engine — listens to <deck-stage>'s slidechange event and adds .is-active to the current slide.
   All keyframes are CSS; this script only swaps the class. */
(function(){
  const stage = document.querySelector('deck-stage');
  if(!stage) return;

  function activate(slide){
    // Remove from all
    stage.querySelectorAll('section').forEach(s => s.classList.remove('is-active'));
    if(slide) {
      // Force reflow so animations restart even when re-entering same slide
      slide.classList.remove('is-active');
      void slide.offsetWidth;
      slide.classList.add('is-active');
    }
  }

  stage.addEventListener('slidechange', (e) => {
    activate(e.detail.slide);
  });

  // Initial slide
  requestAnimationFrame(() => {
    const active = stage.querySelector('section[data-active="true"]') || stage.querySelector('section');
    activate(active);
  });
})();
