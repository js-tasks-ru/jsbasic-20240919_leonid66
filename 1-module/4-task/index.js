let str = prompt ( 'vvedi' , '' );

function checkSpam ( str ) {
    let text = str.toLowerCase();
    if ( text.includes( 'viagra' ) || text.includes( 'xxx' ) ) {
        return true;
        } else {
            return false
            };
};

alert( checkSpam( str ) );