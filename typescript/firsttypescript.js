// primtive type
//let isDone: boolean = false;
//let decimal: number = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var nam1 = "John";
var data = null;
var age = undefined;
//let sym1: symbol = Symbol("key1");
//let sym2: symbol = Symbol("key2");
//let bigIntValue: bigint = 100n;
// array 
var numbers = [1, 2, 3, 4, 5];
// tuples
var person = ["John", 30];
// function 
function jeevan(name) {
    return "hello";
}
// Function that accepts a Person object
function printPerson(person) {
    console.log("Name: ".concat(person.name, ", Age: ").concat(person.age, ", Email: ").concat(person.email));
}
// Create a valid Person object
var john = { name: "John", age: 30, email: "john@example.com" };
// Call the function with the valid Person object
printPerson(john);
function getSalaryForPosition(position) {
    if (position === 'Programmer') {
        return 100000;
    }
    if (position === 'HR') {
        return 120000;
    }
    console.warn("We don't have a salary for ".concat(position));
}
console.log(typeof (getSalaryForPosition('Programmer')));
