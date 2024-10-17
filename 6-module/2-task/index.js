// import createElement from '../../assets/lib/create-element.js';    /*  что значит? на пальцах? */

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.render();
    this.onClick();
  };

  render() {
    this.elem = document.createElement('str');

    this.elem.insertAdjacentHTML('afterBegin',  
          `
            <div class="card">
                <div class="card__top">
                    <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
                    <span class="card__price">€${this.product.price.toFixed(2)}</span>
                </div>
                <div class="card__body">
                    <div class="card__title">${this.product.name}</div>
                    <button type="button" class="card__button">
                        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                    </button>
                </div>
            </div>
          `
    );
    // this.elem.addEventListener('click', this.onClick);
    // return this.elem;      /*  надо ли? для: созд эл - св-во класса ProductCard */
  };        /*   end of render */

  onClick() {   
  
    let btn = this.elem.querySelector('.card__button');
          // console.log('btn: ', btn);
    btn.addEventListener('click', () => {
      let btnAdd = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
        detail: this.product.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true, // это событие всплывает - это понадобится в дальнейшем
      });
      // console.log('btnAdd: ', btnAdd);
      this.elem.dispatchEvent(btnAdd);    /*   запускаем на элементе чтобы воспринимался обычно */      
    });
    
  };     /*   end of onClick */

};


