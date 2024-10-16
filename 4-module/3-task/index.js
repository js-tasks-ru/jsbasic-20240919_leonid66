function highlight(table) {

    let tableVal = table.querySelector('tbody');
    let trList = tableVal.querySelectorAll('tr');

    let elementsTrue = document.querySelectorAll('[data-available="true"]');
      // console.log(elementsTrue);
        for (td of elementsTrue) {
          let parentTr = td.parentElement;
            // console.log(parentTr);
          parentTr.classList.add('available');
        };

    let elementsFalse = document.querySelectorAll('[data-available="false"]');
      // console.log(elementsFalse);
        for (td of elementsFalse) {
          let parentTr = td.parentElement;
            // console.log(parentTr);
          parentTr.classList.add('unavailable');
        };

        for (let i=0 ; i <= trList.length ; i++) {
          // console.log(i);
            if (!td.classList.contains("td[data-available]")) {
              let parentTrI=td.parentElement;
              parentTrI.hidden = true;
            };
        };

         
        for (let tr of trList) {
          let genderTd = tr.cells[2].textContent;
            // console.log('genderTd', genderTd);
              if (genderTd === 'm') {
              tr.classList.add('male');
              } else if (genderTd === 'f') {
              tr.classList.add('female');
              }

          let ageTd = +tr.cells[1].textContent;
            // console.log('ageTd', ageTd);
              if (ageTd < 18) {
              tr.style.textDecoration = "line-through";
              };
        };
  };