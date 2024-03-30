

// primtive type
//let isDone: boolean = false;
//let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let nam1: string = "John";

let data: null = null;
let age: undefined = undefined;
//let sym1: symbol = Symbol("key1");
//let sym2: symbol = Symbol("key2");
//let bigIntValue: bigint = 100n;

// array 
let numbers: number[] = [1, 2, 3, 4, 5];

// tuples
let person: [string, number] = ["John", 30];

// function 
function jeevan(name:string):string{
    return "hello";
}




// Define a type alias for a Person object
type Person = {
    name: string;
    age: number;
    email: string;
};

// Function that accepts a Person object
function printPerson(person: Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}, Email: ${person.email}`);
}

// Create a valid Person object
let john: Person = { name: "John", age: 30, email: "john@example.com" };

// Call the function with the valid Person object
printPerson(john);

// Create an invalid Person object (missing required properties)
// let invalidPerson: Person = { name: "Invalid" };

// This will cause a compile-time error because the object does not match the required structure
// printPerson(invalidPerson); // Error: Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.


////

type Position =
    | 'Programmer'
    | 'HR'
    | 'CEO'
 
function getSalaryForPosition(position: Position) {
    if (position === 'Programmer') {
        return 100000
    }
    if (position === 'HR') {
        return 120000
    }
    console.warn(`We don't have a salary for ${position}`)
}

console.log(typeof(getSalaryForPosition('Programmer')))



