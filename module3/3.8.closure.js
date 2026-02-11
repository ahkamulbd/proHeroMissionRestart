/** A closure is a function that remembers variables from its lexical scope even after the outer function has finished executing. */

function outer () {
    let count = 0;

    function inner () {
        count ++;
        console.log (count);
    }
    return inner;
}
const counter = outer ();
counter ();
counter ();
counter ();