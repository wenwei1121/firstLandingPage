function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  }
  
  function handleScroll() {
    const up = document.querySelectorAll('.up-on-scroll');
    const right = document.querySelectorAll('.right-on-scroll');
    const left = document.querySelectorAll('.left-on-scroll');
    const video = document.querySelectorAll('.video-show-on-scroll');

    up.forEach(elem => {
      if (isElementUnderBottom(elem, -120)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(50px)';
      } else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
      }
    })
    right.forEach(elem => {
        if (isElementUnderBottom(elem, -120)) {
          elem.style.opacity = "0";
          elem.style.transform = 'translateX(-30px)';
        } else {
          elem.style.opacity = "1";
          elem.style.transform = 'translateX(0px)';
        }
      })
    left.forEach(elem => {
    if (isElementUnderBottom(elem, -120)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateX(30px)';
        } 
    else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateX(0px)';
        }
    })
    video.forEach(elem => {
      if (isElementUnderBottom(elem, -120)) {
          elem.style.opacity = "0";
          } 
      else {
          elem.style.opacity = "1";
        }
    })
}
  
  window.addEventListener('scroll', handleScroll);