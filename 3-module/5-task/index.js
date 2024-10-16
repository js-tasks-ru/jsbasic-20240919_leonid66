// function getMinMax(str) {
//   // ваш код...
// }

// let inputData = '1 и -5.8 или 10 -5.6 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  // ...
      let strToArr = str.split(' ');
      // console.log(strToArr);
      let numbersOfArr = strToArr.filter( (item) => ( isFinite(item) ) );
      // console.log(numbersOfArr);
      let poryadok = numbersOfArr.sort(function(a, b) {return a - b});
      // console.log(poryadok);

      let result = {};
      result.min = +poryadok[0];
      result.max = +poryadok.at(-1);

return result;

};

// console.log(getMinMax(inputData))

