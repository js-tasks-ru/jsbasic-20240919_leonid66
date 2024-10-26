import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {   
    this.slides = slides;
    this.render();
    this.initCarousel();
    this.onClick();
  };

render() {
   
  this.elem = createElement(
          `
      <div class="carousel">
          <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </div>
          <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
          </div>

        <div class="carousel__inner">

        ${
          this.slides.map( ( slide ) => 
            `
            <div class="carousel__slide" data-id="${slide.id}">
              <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
                <div class="carousel__caption">
                    <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                  <div class="carousel__title">${slide.name}
                  </div>
                    <button type="button" class="carousel__button ${slide.id}">
                        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                    </button> 
                </div> 
            </div> 
            `
          ) 
          .join('')
        }

        </div>
      </div>
    ` 
    );

};   /*    end of render */

initCarousel() {

    let arrowR = this.elem.querySelector('.carousel__arrow_right');
    let arrowL = this.elem.querySelector('.carousel__arrow_left');
    let slides = this.elem.querySelectorAll('.carousel__slide');
    let position = 0;
    arrowL.style.display = 'none';

  arrowR.addEventListener('click', () => {
    let slidesInner = this.elem.querySelector('.carousel__inner');
    let slideWidth = slidesInner.offsetWidth;
      if ( position > slides.length-2 ) { position = slides.length-2 };
      if ( position === slides.length-2 ) {
        arrowR.style.display = 'none';
      } else {arrowL.style.display = '' };
      slidesInner.style.transform = `translateX(${ - ( slideWidth * ++position ) + 'px'})`;

  });
  
  arrowL.addEventListener('click', () => {
    let slidesInner = this.elem.querySelector('.carousel__inner');
    let slideWidth = slidesInner.offsetWidth;
      if ( position < 1 ) { position = 1 };
      if ( position === 1 ) {
        arrowL.style.display = 'none';
      } else { arrowR.style.display = '' };
      slidesInner.style.transform = `translateX(${ - ( slideWidth * --position ) + 'px'})`;

  });

};  /*   end of initCarousel */

onClick() {   

  let btn = this.elem.querySelectorAll('.carousel__button');
        // console.log('btn: ', btn);
      for (let bt of btn) {
        bt.addEventListener('click', () => {
              // console.log('bt: ', bt);
              // console.log('bt id: ', bt.closest('.carousel__slide').dataset.id);
            let slideid = bt.closest('.carousel__slide').dataset.id;
              // console.log('slideid: ', slideid);

          let btnAdd = new CustomEvent("product-add", {
            // detail: this.slides.id,  /*   хоть один ид передает */
            detail: slideid,   /*  взять ид от ближайшего слайда */
            // detail: bt.closest('.carousel__slide').dataset.id,   /*  взять ид от ближайшего слайда */
            bubbles: true, 
          });
    
          this.elem.dispatchEvent(btnAdd);    /*   запускаем на элементе чтобы воспринимался обычно */      
        });
      };

};     /*   end of onClick */

};     /*   end of class Carousel */