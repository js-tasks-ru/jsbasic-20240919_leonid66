import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.onClick();
    this.initRibbon();
  };

  render() { 

    this.elem = createElement(
      `
        <div class="ribbon">

            <!--Кнопка прокрутки влево-->
          <button class="ribbon__arrow ribbon__arrow_left">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </button>

        <nav class="ribbon__inner">

      ${
        this.categories.map( ( cat ) => 
          `
            <a href="#" class="ribbon__item" data-id="${cat.id}">${cat.name}</a>
          `
        )
        .join('')
      }

      </nav>

          <!--Кнопка прокрутки вправо-->
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>

    `
    );

    this.elem.querySelector('.ribbon__item').classList.add('ribbon__item_active');

  };      /* end of render */

  initRibbon() {

      let arrowR = this.elem.querySelector('.ribbon__arrow_right');
      let arrowL = this.elem.querySelector('.ribbon__arrow_left');
  
    arrowR.addEventListener('click', () => {

      let ribbonInner = this.elem.querySelector('.ribbon__inner');
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;

      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      ribbonInner.scrollBy(350, 0);

      if (scrollRight < 350) {
        arrowR.classList.remove('ribbon__arrow_visible')
      };

      arrowL.classList.add('ribbon__arrow_visible');

    });     /*   end of arrowR */
    
    arrowL.addEventListener('click', () => {

      let ribbonInner = this.elem.querySelector('.ribbon__inner');
      let scrollLeft = ribbonInner.scrollLeft;

      ribbonInner.scrollBy(-350, 0);

      if (scrollLeft <= 350) {
        arrowL.classList.remove('ribbon__arrow_visible')
      };
    
      arrowR.classList.add('ribbon__arrow_visible'); 

    });     /*   end of arrowL */
    
  };    /*   end of initRibbon */


  onClick() {
    
    let cats = this.elem.querySelectorAll('.ribbon__item');
    for (let cat of cats) {
      cat.addEventListener('click', () => {

          for (let cat of cats) {
            cat.classList.remove('ribbon__item_active'); 
          };

        cat.preventDefault; 
        cat.classList.add('ribbon__item_active'); 
        let catId = cat.closest('.ribbon__item').dataset.id;
        let ribbonSelect = new CustomEvent('ribbon-select', { 
          detail: catId,
          bubbles: true
        });
        this.elem.dispatchEvent(ribbonSelect);
      })
    };

  };      /* end of onClick */

};      /* end of class RibbonMenu */
