import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
    this.open();
    this.setTitle();
    this.setBody();
    this.close();
  };

  render() {
    this.elem  = createElement(
      `
         <!--Корневой элемент Modal-->
      <div class="modal">
          <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>
    
        <div class="modal__inner">
          <div class="modal__header">
              <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
    
            <h3 class="modal__title">
              Вот сюда нужно добавлять заголовок
            </h3>
          </div>
    
          <div class="modal__body">
            A сюда нужно добавлять содержимое тела модального окна
          </div>
        </div>
      </div>
      `
    );

  };   /* end of render   */

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
  };  /* end of  open  */

  setTitle(title) {
    let modT = this.elem.querySelector('.modal__title');
    modT.textContent = title;
  };   /* end of setTitle  */

  setBody(node) {
    let modB = this.elem.querySelector('.modal__body');
    modB.innerHTML = '';
    modB.append(node);
  }; /* end of  setBody  */

  close() {
    this.elem.remove();
    document.body.classList.remove('is-modal-open');

//    1)    BUTTON X
    let btnX = this.elem.querySelector('.modal__close');
      btnX.addEventListener('click', () => { 
        this.elem.remove();
        document.body.classList.remove('is-modal-open');
      });

//    2)    ESCAPE
    document.addEventListener('keydown', () => {
      if (event.code === 'Escape') {
        this.elem.remove();
        document.body.classList.remove('is-modal-open');
        document.removeEventListener('keydown', close);
      };
    });

  }; /* end of  close  */

};   /* end of class Modal  */
