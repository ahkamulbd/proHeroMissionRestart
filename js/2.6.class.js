class Player {
    constructor (name, runs, wickets) {
        this.name = name;
        this.runs = runs;
        this.wickets = wickets;
    }
    scoreRuns () {
        return this.runs;
    }
    gotWickets (wicket) {
        return this.wickets + wicket;
    }
}
const tamim = new Player ('Tamim Iqbal', 10500, 37);
const tamimRuns = tamim.scoreRuns ();
const tamimWickets = tamim.gotWickets (10);
// console.log (tamim);
// console.log (tamimRuns);
// console.log (tamimWickets);

class bankAccount {
    constructor (owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit (amount) {
        this.balance += amount;

        return this.balance;
    }
    withdraw (amount) {
        if (this.balance >= amount) {
            this.balance -= amount

            return amount;
        }
        else {
            return `Insufficient Balance`;
        }
    }
}
// const polBalance = new bankAccount ('Pol', 10000);
// const polPresentBalance = polBalance.deposit (3000);
// console.log (polPresentBalance);

// const polBalanceAfterWithdraw = polBalance.withdraw (5000);
// console.log (polBalanceAfterWithdraw);

/** একটা class লিখে ফেল, যেটার নাম দিবি Library। এইটার ভিতরে একটা প্রোপারটি থাকবে books নামে, আর সেই প্রোপার্টির প্রাথমিক মান হবে একটা খালি  Array। এরপর addBooks নামে একটা মেথড লিখবি। সে প্যারামিটার হিসেবে একটা বইয়ের নাম নিবে। তারপর books প্রোপার্টিতে সেই বই যোগ করে দিবে। আরেকটা মেথড লিখবি hasBook নামে, সে একটা প্যারামিটার নিবে। প্যারামিটারে থাকবে বইয়ের নাম। সে গিয়ে চেক করবে, যে নাম দিয়ে বই খুজতেছস, সেই বই যদি books প্রোপার্টিতে থাকে, থাহলে রিটার্ন true করবে, আর না থাকলে সে false রিটার্ন করবে। */

class Library {
    constructor (){
        this.books = [];
    }
    // addBooks (bookName) {
    //     this.books.push (bookName);
    // }
    addBooks (bookName) {
        this.books.push (bookName);

        return this.books;
    }
    hasBook (bookName) {
        return this.books.includes (bookName);
    }
}
const myLibrary = new Library ();

const library1 = myLibrary.addBooks ('Pather Pachali');
const library2 = myLibrary.addBooks ('Sangsaptak');
const library3 = myLibrary.addBooks ('Sonar Tori');
// console.log (myLibrary);
// console.log (library2);
// console.log (library3);

// const library4 = myLibrary.hasBook ('Sonar Tori');
const library4 = myLibrary.hasBook ('Nowka Dubi');
console.log (library4);