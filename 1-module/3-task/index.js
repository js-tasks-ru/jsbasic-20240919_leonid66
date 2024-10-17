// let str = prompt('vvedite stroku', '');

function ucFirst( str ) {
    if ( str === '' ) {
        return( str );
    } else {
    // здесь попробовал вложить оператор. не знаю на сколко это правильно 
    let res = (( str.at( 0 ) ) . toUpperCase() + str.slice( 1 ) );
    return( res );
    };
};
