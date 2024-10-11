function highlight(table) {

    let trList = table.querySelectorAll('tr');
    // console.log(trList);
    // console.log(trList.length);

  for (let i=2 ; i <= trList.length ; i++) {
    // console.log(i)
  //  if (td.classList.contains("td[data-available]") == null) {
// tr.hidden = true;
  //  }

  }

  let elementsTrue = document.querySelectorAll('[data-available="true"]');
      // console.log(elementsTrue);
    for (td of elementsTrue) {
      let parentTr = td.parentElement
        // console.log(parentTr);
      parentTr.classList.add('available');
    }

  let elementsFalse = document.querySelectorAll('[data-available="false"]');
      // console.log(elementsFalse);
    for (td of elementsFalse) {
      let parentTr = td.parentElement
        // console.log(parentTr);
      parentTr.classList.add('unavailable');
    }


  }



//   // ваш код...
// for (let tr of table) {
// if (проверить есть ли у строки тр ячейка с тд атрибутом дата-авэйлабл
//   если нет то присвоить хидден) {
// tr.hidden = true;
// } else if (let td = td.querySelector("td[data-available='true']")  /* data-available=="true" */ ){
//   tr.classList.add('available');
// } else if (data-available="false") {
//   tr.classList.add('unavailable');
// }

// 2 если тд с атрибутом дата-авэйлабл тру - то присвоить класс строке -авэйлабл
// если фолс - то унавеэл

// // tr.getElementsByTagName("td data-available")
// // document.getElementsByTagName("table")[0].classList.add("yourclass")
// // метод Element.getElementsByTagName() вам может помочь, 
// // a если у вас несколько таблиц, 
// // то просто добавить data-* атрибут и по нему производить поиск.

// // document.querySelector("td[data-available='true']")

//   // td.classList.contains('red');

// }


