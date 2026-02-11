/** All primitive data type variables (number, string, boolean) passed argument by value in function calling */

function multiply (a, b) {
    a = a + 5;
    b = b + 7;
    const multiply = a * b;

    return multiply;
}
const x = 5;
const y = 7;

// console.log ('Value of x and y before function calling', x, y);

// console.log (multiply (5, 7));

// console.log ('Value of x and y after function calling', x, y);



/** All non-primitive data type variables (number, string, boolean) passed argument by reference in function calling */

const manik = {name: 'Manik', balance: 5000};
const raton = {name: 'Raton', balance: 20000};

// console.log ('Befor function Calling ', manik, raton);

function totalBalance (person1, person2) {
    person1.balance = 0;
    person2.balance = person2.balance / 2;

    const total = person1.balance + person2.balance;

    return total; 
}
// console.log (totalBalance (manik, raton));

// console.log ('After function Calling ', manik, raton);


/** arguments */

function add (a, b) {
    console.log (arguments);
    console.log (...arguments);
    // console.log (...arguments.map (x => x + 3)); // Not working
}
add (77, 55, 2, 8, 7, 33);