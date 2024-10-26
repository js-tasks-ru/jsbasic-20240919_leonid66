export default class UserTable {
      constructor(rows) {
        this.rows = rows; 
        this.render();
      };       /*    end of constructor    */

      render() {      /*   метод отрисовыки компонента */
        this.elem = document.createElement('table');    /* insert table */

          this.elem.insertAdjacentHTML('afterBegin',     /* insert thead */
              ` <thead>
                  <tr>
                    <th>Имя</th>
                    <th>Возраст</th>
                    <th>Зарплата</th>
                    <th>Город</th>
                    <th></th>
                  </tr>
                </thead> `
          );

          this.elem.insertAdjacentHTML('beforeEnd',      /*   insert tbody */
            this.rows.map( ( { name, age, salary, city }, ) => 
              ` <tbody>
                      <tr>
                          <td> ${name} </td>
                          <td> ${age} </td>
                          <td> ${salary} </td>
                          <td> ${city} </td>
                          <td id = 'btnX' > <button> X </button> </td>
                      </tr>
                  </tbody> `
              ) .join('')      /*    можно ли очевиднее? */
          );

        this.elem.addEventListener('click', this.onClick);
        // return this.elem;   /*  ?????????? нужен ли здесь? */
      };      /*   END OF render()    */

      onClick(event) {         /* метод для удаления строки */
        
        // let tr = event.target.closest('tr')
        // tr.remove()     /*   глушит строку при нажатии в любом месте */

        let tdBtnX = event.target.closest('button');
          // console.log(tdBtnX);
        let trTdBtnX = tdBtnX.closest('tr');
          // console.log('tr with btn: ', trTdBtnX);
          trTdBtnX.remove();
      };
};

