## TypeScript Function 
### Defining a function in typescript
It seems like you're referring to the arrow function syntax in TypeScript. Here's the correct breakdown:

```typescript
(parameter: Type) => ReturnType { function body }
```

Let's break it down:

- `(parameter: Type)`: This part represents the parameter list, where you specify the parameters the function takes. Each parameter is followed by a colon `:` and its type annotation.
- `=>`: This arrow indicates that what follows is the body of the function.
- `ReturnType`: This is the return type of the function. It specifies the type of value that the function will return.
- `{ function body }`: This is the actual implementation of the function. It consists of curly braces `{}` containing the code that makes up the function.

Here's an example of how you might use this syntax:

```typescript
const add: (x: number, y: number) => number = (x, y) => {
    return x + y;
};
```

In this example:

- `(x: number, y: number) => number` specifies that `add` is a function that takes two parameters of type `number` and returns a value of type `number`.
- `(x, y) => { return x + y; }` is the implementation of the function, where `x` and `y` are the parameters and `x + y` is the expression that calculates the sum of the two parameters.

### Defining an arrow function in typescript

```typescript
const myFunction: () => string = () => {
    return "Hello, world!";
};
```

In this example:

- `() => string` denotes the function type, indicating that the function takes no arguments and returns a string.
- `const myFunction: () => string` declares a constant `myFunction` of type `() => string`.
- `() => { return "Hello, world!"; }` is the function expression that returns the string `"Hello, world!"`.


### Interface Advantages
- We can re - open an interface
- Another advantage we get interface is we can use inheritance by using the `extend` keyword
- Type cannot be changed after being created

### Classes in typescript
-  
 ```typescript   
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the Person class
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

### Readonly Modifier
- We can only read the object values and cannot assign the value again 

### Private
- Can be accessed only within the class
- We can also use ```#``` syntax 

### Public
- Can be accessed anywhere

### Getter and Setter
- 
```typescript
class MyClass {
    private _myProperty: string = '';

    // Getter method
    get myProperty(): string {
        return this._myProperty;
    }

    // Setter method return type should be none
    set myProperty(value: string) {
        // You can perform validation or other logic here
        this._myProperty = value;
    }
}
```

### Protected
- Private variables cannot be accessed
- Protected variables can be accessed in the same class and the class that inherits it 


### Interfaces
- It is a contract we need to follow the rules in the contract
- The class implementing the interface should have the methods 

### Abstract  Class
- The abstract class object cannot be created 
- The class inheriting the abstract class will be instantiated
- All abstract method will be created by the inheriting class


### Why use Generics
- Generics in TypeScript provide a way to create reusable components and increase type safety. They allow you to write code that works with a variety of data types while still maintaining type safety. Here are some reasons why generics are useful:

1. **Code Reusability**: Generics enable you to write code that can work with different types without sacrificing type safety. Instead of writing separate functions or classes for each data type, you can write a single generic function or class that can work with any type.

2. **Type Safety**: Generics help catch type errors at compile time. They allow you to define constraints on the types that a generic function or class can accept, ensuring that only compatible types are used.

3. **Abstraction**: Generics provide a level of abstraction that allows you to write more generic and flexible code. They allow you to focus on the common behavior or functionality of different data types, rather than the specific details of each type.

4. **Reduced Code Duplication**: By using generics, you can reduce code duplication by writing generic code that can be reused with different types. This can lead to cleaner, more maintainable code.

5. **Improved Readability**: Generics make code more readable by expressing the intent of the code more clearly. When you see a generic type or function, you know that it can work with multiple types, which can make the code easier to understand and reason about.


### Using Generics
- 
```typescript
function identity<T>(arg: T): T {
    return arg;
}
// Usage
let output = identity<string>("hello"); // output is of type 'string'
let output2 = identity<number>(42);     // output2 is of type 'number'
```
- 
```typescript
function sort<T>(array: T[]): T[] {
    return array.sort();
}

// Usage
let numbers: number[] = [3, 1, 4, 1, 5, 9, 2, 6];
let sortedNumbers = sort(numbers); // sortedNumbers is of type 'number[]'
```

### Type Narrowing
- ```instanceof``` operator
    - The instanceof operator in TypeScript (and JavaScript) is used to determine whether an object belongs to a specific class or constructor function.
    - It checks if the prototype property of a constructor appears anywhere in the prototype chain of an object.
- ```in```   
    - In TypeScript, the in operator is used to check if a property exists in an object or if a key exists in an object's type. 
    - It can be useful for checking the presence of specific properties in an object or for narrowing down types based on property existence.

