// function camelize(str) {
//   // ваш код...



  // let str = prompt('vvedi str snake-case','abc-def');

  function camelize(str) {
  
          let words = str.split('-');
    
    //       for (let word of words ) {
    //            return word[0].toUpperCase() + word.slice(1);
    //           };

    //       let result = words.join('');
    
    // let result = words.map( (item) = {item[0].toUpperCase() + item.slice(1) } 

    let zagl = words.map( function letter (word) {
      return word[0].toUpperCase() + word.slice(1) 
      } );

let result = zagl.join('')

    // console.log(result);

  };
  
  // console.log(camelize(str));
  // camelize(str);

// }
