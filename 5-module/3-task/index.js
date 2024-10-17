
function initCarousel() {
  // ваш код...
    let arrowR = document.querySelector('.carousel__arrow_right');
    let arrowL = document.querySelector('.carousel__arrow_left');
    let slides = document.querySelectorAll('.carousel__slide');
    let slidesInner = document.querySelector('.carousel__inner');
    let slideWidth = slidesInner.offsetWidth;
    let position = 0;
    arrowL.style.display = 'none';

  arrowR.addEventListener('click', () => {
      if ( position > slides.length-2 ) { position = slides.length-2 };
      if ( position === slides.length-2 ) {
        arrowR.style.display = 'none';
      } else {arrowL.style.display = '' };
      slidesInner.style.transform = `translateX(${ - ( slideWidth * ++position ) + 'px'})`;
  });
  
  arrowL.addEventListener('click', () => {
      if ( position < 1 ) { position = 1 };
      if ( position === 1 ) {
        arrowL.style.display = 'none';
      } else { arrowR.style.display = '' };
      slidesInner.style.transform = `translateX(${ - ( slideWidth * --position ) + 'px'})`;
  });
  
};