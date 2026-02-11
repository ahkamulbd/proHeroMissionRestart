function pakhiBhai (callMeBack, patro, patri){
    // console.log (patro);
    if (patri){
        callMeBack (patro);
    }
    else {
        console.log ('Tur Kopale Biya Nai');
    }
}

function callSomeOne (person) {
    // person = 7;
    console.log ('Calling', person);
}

// pakhiBhai (callSomeOne, 'Jadu', 'Modhu');

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

// greet("Ahkamul", sayBye);



function makeOperation (a, b, operation) {
    return operation (a, b);
}

function add (x, y) {
    return x + y;
}

const result = makeOperation (5, 7, add);
// console.log (result)

function greeting (greetingHandler) {
    greetingHandler ();
}

function morningGreet () {
    console.log ('Good Morning');
}

// greeting (morningGreet);

function calculate (a, b, callback) {
    const sum = a + b;
    callback (sum);
}

function printSum (value) {
    console.log ('Print Sum: ', value);
}

// calculate (10, 20, printSum);

const numbers = [1, 2, 3, 4, 5];

const mapDoubleNumbers = numbers.map (x => x * 2);
// console.log (mapDoubleNumbers);

const funcDoubleNumbers = numbers.map (function (num) {
    return num * 2;
})
console.log (funcDoubleNumbers);