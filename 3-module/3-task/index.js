function camelize(str) {

  let words = str.split('-');

  let zagl = words.map( (word, index) => {
    if (index == 0) {
      return word
    } else {
      return word[0].toUpperCase() + word.slice(1)
    };
    } );

return zagl.join('');  
}

