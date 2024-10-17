// function filterRange(arr, a, b) {
//   // ваш код...
// }

// let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    // Ваш код
    let newArr = arr.filter( (item) => (item >= a && item <=b) );
    return newArr;   
};

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // [3,1] (совпадающие значения)
// console.log( arr ); // [5,3,8,1] (без изменений)


