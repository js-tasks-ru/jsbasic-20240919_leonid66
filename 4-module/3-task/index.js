function highlight(table) {

    let tableVal = table.querySelector('tbody');
    let trList = tableVal.querySelectorAll('tr');
    // console.log('trList: ', trList)

    let elementsTrue = table.querySelectorAll('[data-available="true"]');
      // console.log('elementsTrue: ', elementsTrue);
        for (td of elementsTrue) {
          let parentTr = td.parentElement;
            // console.log('parentTr true: ', parentTr);
          parentTr.classList.add('available');
        };

    let elementsFalse = table.querySelectorAll('[data-available="false"]');
      // console.log('elementsFalse: ', elementsFalse);
        for (td of elementsFalse) {
          let parentTr = td.parentElement;
            // console.log('parentTr false: ', parentTr);
          parentTr.classList.add('unavailable');
        };

        // for (let i=0 ; i <= trList.length ; i++) {         Когда удалилась строка, решил что это такой удобный доступ к ячейке td строк из trList. Те я не рассматривал td как переменную.
        //     if (!td.classList.contains("td[data-available]"))   /*  строка удалилась и я подумал,что условие сработало. Но удалилась другая строка, на что не обратил внимание. А td.parentElement для удаляемой строки прилетело из предедущего let elementsFalse пхоже. */
        //       let parentTrI=td.parentElement;
        //       parentTrI.hidden = true;
        //     };
        // };

/*       dataset  Если дата-атрибутов на элементе нет, то вернётся пустой объект:
        const heading = document.querySelector('h1')
        console.log(heading.dataset)   // {}        попробовать */

        for (let tr of trList) {

          // let  statusTd = tr.cells[3];
            // console.log('statusTd: ', statusTd);
            if (!tr.cells[3].hasAttribute('data-available')) {
            // if (!statusTd.hasAttribute('data-available')) {
              // console.log('uslovie srabotalo');
              tr.hidden=true;
            };

          let genderTd = tr.cells[2].textContent;
            // console.log('genderTd', genderTd);
              if (genderTd === 'm') {
              tr.classList.add('male');
              } else if (genderTd === 'f') {
              tr.classList.add('female');
              };

          let ageTd = +tr.cells[1].textContent;
            // console.log('ageTd', ageTd);
              if (ageTd < 18) {
              tr.style.textDecoration = "line-through";
              };
        };
  };