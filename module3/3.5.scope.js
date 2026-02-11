/** Lexical Scope */

function outerFunction () {
    const outerVar = 'I am outer variable';
    // console.log (innerVar);   // Can't access

    function innerFunction () {
        const innerVar = 'I am inner variable';
        console.log (outerVar);
    }
    innerFunction ();
}
// outerFunction ();

