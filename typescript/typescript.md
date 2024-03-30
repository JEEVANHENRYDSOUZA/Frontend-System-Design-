## TypesScript
### How does typescript work 
- Remember browser and node can only understand javascript
- We need to convert typescript to javascript to run 
- The conversion of typescript to javscript is done by typescript compiler
- We will compile typecript but run javascript
- Or we can use typescript node

### Typescript Compiler
- Rules for typescript
- How javscript code will be generated

### Linting 
- Goes throught the code finds and resolved the problems
- Lint is the computer science term for a static code analysis tool used to flag programming errors, bugs, stylistic errors and suspicious constructs.

### Primitive Types in typescript
- boolean 
- number
    - includes all types of numbers
- string in double quotes
- undefined --- values not assigned
- null --- represents a null value
- bigInt --- for greater precision 
- symbols --- Represents unique and immutable values that may be used as property keys
- any ---  it will disable the type check, used when we dont know the type of data being returned 
        here any thing can be returned , we should neve use this 
- unknown --- here also anything can be returned but we need to do something called as type narrrowing
    which will make sure the return values is of the correct type

### Arrays in typescript
- In TypeScript, arrays are indeed objects. 
- While they are a special type of object designed to store and manipulate collections of data, they have characteristics that align with objects in JavaScript.
- Defining an array : let numbers: number[] = [1, 2, 3, 4, 5];
- In TypeScript, an empty array literal [] represents an array of any types

### Tuples in typescript (Not Present in JavaScript)
- a tuple is a fixed-size, ordered collection of elements, where each element may have a different data type
- Defining a tuple : let numbers: [string , number] = ["jeevan",  5];

### Types aliases
- Type aliases in TypeScript allow you to create custom names for types.
- We can also use the aliasing to define the type of object
  type Person = {
    name: string;
    age: number;
    email: string;
};
- "?" property
    - The ? symbol in TypeScript object types denotes an optional property. It signifies that the property may or may not exist in an object of that type

### Functions in typescript 
- Argument type needs to be specified
- What is the type of return value 


### Type Literal 
- Literal types in TypeScript refer to specific ```values``` that a variable can hold, rather than a data type itself. 
- For example, let status: "success" defines a variable status that can only hold the string values "success" or "failure".

###  Literal Union 
- In TypeScript, a literal union type is a union type where each member is a literal type
- They can hold more than one value 

### Optional Operator is somewhat like optional Chaining in JavaScript
- The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

### Type Assertion 
- In TypeScript, type assertions are a way to tell the compiler about the specific type of a variable when the compiler cannot infer it correctly. 
- It's essentially a way to assert to the compiler that you know more about the type of a value than TypeScript does.


### Type  intersection 
- Helps to reduce duplicate code
- Also called as type intersection 

### Never Keyword
- In TypeScript, the `never` keyword is used to denote a type that represents values that never occur. It is used primarily in two scenarios:

1. **Functions that never return**: Functions that always throw an error or enter an infinite loop are annotated with a return type of `never`.

    ```typescript
    function throwError(message: string): never {
        throw new Error(message);
    }

    function infiniteLoop(): never {
        while (true) {
            // Do something indefinitely
        }
    }
    ```

2. **Exhaustiveness checking in switch statements**: When TypeScript performs exhaustiveness checking in switch statements, the `never` type is used to indicate that the switch statement is exhaustive. This ensures that all possible cases are handled.

    ```typescript
    type Direction = "Up" | "Down" | "Left" | "Right";

    function move(direction: Direction) {
        switch (direction) {
            case "Up":
                // Move up
                break;
            case "Down":
                // Move down
                break;
            case "Left":
                // Move left
                break;
            case "Right":
                // Move right
                break;
            default:
                const exhaustiveCheck: never = direction;
                throw new Error(`Unhandled direction: ${exhaustiveCheck}`);
        }
    }
    ```


### Type Narrowing 
- In typescript we can have multiple types of the variable
- Type  narrowing helps us to idnetify what action to take in case of one type
- There are different ways to assert type narrowing 
    - Using the typeof 
    - Using assertion 

### Typeof in Typescript    
In TypeScript, the `typeof` operator serves multiple purposes, including:

1. **Getting the Type of a Variable**: `typeof` can be used to determine the type of a variable or an expression at compile time. This is particularly useful when you want to perform different actions based on the type of a variable. For example:

```typescript
let x = 10;
console.log(typeof x); // Output: "number"

let y = "hello";
console.log(typeof y); // Output: "string"
```

2. **Type Guards**: `typeof` can be used in type guards to narrow down the type of a variable within a conditional block. For example:

```typescript
function printLength(value: string | number) {
    if (typeof value === "string") {
        console.log("Length of string:", value.length);
    } else {
        console.log("Value is not a string.");
    }
}

printLength("hello"); // Output: Length of string: 5
printLength(10);      // Output: Value is not a string.
```

3. **Type Predicates**: TypeScript allows you to define custom type guards using type predicates, which involve `typeof` checks. For example:

```typescript
function isString(value: any): value is string {
    return typeof value === "string";
}

function processValue(value: any) {
    if (isString(value)) {
        console.log("Value is a string:", value.toUpperCase());
    } else {
        console.log("Value is not a string.");
    }
}
```

### Type Interface
- In TypeScript, an interface is a way to define the structure or shape of an object. It's a powerful tool for describing the contract that objects must adhere to in order to be considered of a certain type.
- Written as a function declaration 

### Type interface vs type 
- In TypeScript, both interfaces and type aliases (`type`) serve similar purposes—they allow you to define the shape of data. However, there are some differences between them that might influence your choice of which to use in a given situation.

Here's a breakdown of the main differences:

1. **Syntax:**
   - **Interfaces:** Interfaces are declared using the `interface` keyword.
   - **Type aliases:** Type aliases are declared using the `type` keyword.

2. **Extensibility:**
   - **Interfaces:** Interfaces can be extended by other interfaces using the `extends` keyword.
   - **Type aliases:** Type aliases cannot be extended or extended from—they are standalone definitions.

3. **Declaration Merging:**
   - **Interfaces:** Interfaces support declaration merging. This means if you declare multiple interfaces with the same name, TypeScript will merge them into a single interface.
   - **Type aliases:** Type aliases do not support declaration merging. If you declare multiple type aliases with the same name, TypeScript will throw an error.

4. **Object Literal Compatibility:**
   - **Interfaces:** Interfaces can be used to describe object shapes and enforce type checking on object literals.
   - **Type aliases:** Type aliases can also be used to describe object shapes and enforce type checking on object literals.

5. **Readability and Expressiveness:**
   - **Interfaces:** Interfaces are often preferred when defining the shapes of objects, especially when you want to define contracts that classes or objects must adhere to. They are particularly expressive for describing the structure of complex object types.
   - **Type aliases:** Type aliases are useful for creating aliases for complex types, especially union types, intersection types, and other types that may be verbose to write out repeatedly.

6. **Intersection and Union Types:**
   - **Interfaces:** Interfaces cannot directly represent union or intersection types. However, you can achieve similar results by extending multiple interfaces or by using type assertions.
   - **Type aliases:** Type aliases can directly represent union and intersection types, making them more flexible in some scenarios.

Here's an example illustrating the difference:

```typescript
// Interface
interface Point {
    x: number;
    y: number;
}

// Type alias
type PointAlias = {
    x: number;
    y: number;
}

// Intersection type with interface
interface Named {
    name: string;
}

interface PointWithName extends Point, Named {}

// Intersection type with type alias
type PointWithNameAlias = Point & Named;
```
### Typescript inference
- Sometimes typescript will infer the type of the variable
- For example some types are very obvious like number we do not need to specify them explicilty
- The compiler will assume types 

### Typescript enum
- TypeScript, an enum (short for "enumeration") is a way to define a set of named constants, typically related to a specific concept or domain 
- Enums provide a convenient way to work with a fixed set of values, making your code more readable and maintainable



### Classes in TypeScript
In TypeScript, classes provide a way to define blueprints for creating objects with properties and methods. They are an essential part of object-oriented programming (OOP) and allow you to create reusable and structured code.

Here's a basic example of how to define and use a class in TypeScript:

```typescript
class Person {
    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the Person class
const person1 = new Person('Alice', 30);

// Accessing properties and calling methods
console.log(person1.name); // Output: Alice
console.log(person1.age); // Output: 30
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

