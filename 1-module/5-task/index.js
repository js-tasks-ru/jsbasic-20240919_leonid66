let str = prompt('vvedi str', '');
let maxlength = +prompt('skolko bukv?', '');

function truncate(str, maxlength) {
if (str.length > maxlength) {

    let newStr = str.slice(0, (maxlength - 1));
    alert(newStr + "…");
} else {
    alert( str );
};
};

truncate( str, maxlength );
