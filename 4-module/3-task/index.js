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






  // function highlight(table) {

  //   for (let i = 0; i < table.rows.length; i++) {
  //     let row = table.rows[i];
  
  //     if (row.cells[3].dataset.available === "true") {
  //       row.classList.add("available");
  //     } else if (row.cells[3].dataset.available === "false"){
  //       row.classList.add("unavailable");
  //     }
  
  //     if (!row.cells[3].dataset.available) {
  //       row.setAttribute("hidden", true);
  //     }
  
  //     if (row.cells[2].textContent === "m") {
  //       row.classList.add("male");
  //     } else if (row.cells[2].textContent === "f"){
  //       row.classList.add("female");
  //     }
  
  //     if (parseInt(row.cells[1].textContent) < 18) {
  //       row.style.textDecoration = "line-through";
  //     }
  //   }
  // }






  // let links = document.querySelectorAll('a');

  // for (let link of links) {
  //   let href = link.getAttribute('href');
  //   if (!href) continue; // нет атрибута
  
  //   if (!href.includes('://')) continue; // нет протокола
  
  //   if (href.startsWith('http://internal.com')) continue; // внутренняя
  
  //   link.style.color = 'orange';
  // }
  // Пожалуйста, обратите внимание: мы используем link.getAttribute('href'). Не link.href, потому что нам нужно значение из HTML.
  
  // …Другой, более простой путь – добавить проверку в CSS-селектор:
  
  // // найти все ссылки, атрибут href у которых содержит ://
  // // и при этом href не начинается с http://internal.com
  // let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
  // let links = document.querySelectorAll(selector);
  
  // links.forEach(link => link.style.color = 'orange');


  // Методы для работы с атрибутами:
//   // elem.hasAttribute(name) – проверяет наличие атрибута.
//   // elem.getAttribute(name) – получает значение атрибута.
//   // elem.setAttribute(name, value) – устанавливает значение атрибута.
//   // elem.removeAttribute(name) – удаляет атрибут.
// elem.attributes – это коллекция всех атрибутов.
// В большинстве ситуаций предпочтительнее использовать DOM-свойства. 
// Нужно использовать атрибуты только тогда, когда DOM-свойства не подходят, 
// когда нужны именно атрибуты, например:
// Нужен нестандартный атрибут. Но если он начинается с data-, 
// тогда нужно использовать dataset.
// Мы хотим получить именно то значение, которое написано в HTML. 
// Значение DOM-свойства может быть другим, например, 
// свойство href – всегда полный URL, а нам может понадобиться 
// получить «оригинальное» значение.



// !DOCTYPE html>
// <html>
// <body>
//   <div data-widget-name="menu">Choose the genre</div>
//   <script>
//     // получаем элемент
//     let elem = document.querySelector('[data-widget-name]');
//     // читаем значение
//     alert(elem.dataset.widgetName);
//     // или так
//     alert(elem.getAttribute('data-widget-name'));
//   </script>
// </body>
// </html>


// // {/* <body something="non-standard">
//   // <script>
//     {/* alert(document.body.getAttribute('something')); // non-standard */}
//   {/* </script> */}
// // </body> */}



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





