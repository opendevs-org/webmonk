/** ----------------------------------------------DEFINING VARIABLES------------------------------------------------------------------  */

var a = 'I am var';
let b = 'I am let';
const c = 'I am CONST';

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

a = 'I am VAR and I can be modified';
b = 'I am LET and I can be modified too';
c = 'I am CONST, and no one can change me, I am going to throw error';

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);


/** ------------------------------------------------------DATA TYPES----------------------------------------------------------  */

/**
 * NOTE: Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, 
 * meaning that there exist data types, but variables are not bound to any of them.
 */

let message = 'hello';
message = 123456;
console.log(message);

/**
 * --------------------NUMBER
 * NOTE: The number type represents both integer and floating point numbers.
 */

let n = 123;
n = 12.345;
console.log(n);

/**
 * -------------------BIGINT
 * NOTE: In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
 * It’s a technical limitation caused by their internal representation.
 * For most purposes that’s quite enough, but sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.
 * BigInt type was recently added to the language to represent integers of arbitrary length.
 * A BigInt value is created by appending n to the end of an integer. 
 * Right now, BigInt is supported in Firefox/Chrome/Edge/Safari, but not in IE.
 */

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

/**
 * ------------------STRING
 * NOTE: In JavaScript, there are 3 types of quotes.
 * Double quotes: "Hello".
 * Single quotes: 'Hello'.
 * Backticks: `Hello`.
 * Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
 * Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…},
 */

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(str);
console.log(str2);
console.log(phrase);

let name = "John";
// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!
// embed an expression
console.log( `the result is ${1 + 2}` ); // the result is 3

/**
 * -------------------BOOLEAN
 * NOTE: The boolean type has only two values: true and false.
 */

let nameFieldChecked = true;
console.log(nameFieldChecked);
let isGreater = 4 > 1;
console.log( isGreater ); // true (the comparison result is "yes")

/**
 * -------------------NULL
 * NOTE: It forms a separate type of its own which contains only the null value.
 * It’s just a special value which represents “nothing”, “empty” or “value unknown”.
 */

let age = null;
console.log(age);

/**
 * -------------------undefined
 * NOTE: The meaning of undefined is “value is not assigned”.
 * If a variable is declared, but not assigned, then its value is undefined.
 */


let age;
console.log(age); // shows "undefined"

let age = 100;
// change the value to undefined
age = undefined;
console.log(age); // "undefined"

/**
 * -------------------Object
 * NOTE: The object type is special.
 * All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever).
 * In contrast, objects are used to store collections of data and more complex entities.
 */

/**
 * -------------------Symbol
 * NOTE: The symbol type is used to create unique identifiers for objects.
 * We have to mention it here for the sake of completeness, but also postpone the details till we know objects.
 */

/**
 * -------------------TYPEOF
 * NOTE: The typeof operator returns the type of the argument.
 * It’s useful when we want to process values of different types differently or just want to do a quick check.
 * It supports two forms of syntax:
 * As an operator: typeof x.
 * As a function: typeof(x).
 * The call to typeof x returns a string with the type name:
 */

console.log(typeof undefined) // "undefined"
console.log(typeof 0) // "number"
console.log(typeof 10n) // "bigint"
console.log(typeof true) // "boolean"


/** ------------------------------------------------------ARRAYS----------------------------------------------------------  */
/*
NOTE: There are two syntaxes for creating an empty array:
let arr = new Array();
let arr = [];
*/
let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange
console.log( fruits[2] ); // Plum

// We can replace an element:
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
console.log(fruits);

// …Or add a new one to the array:
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
console.log(fruits);

// The total count of the elements in the array is its length:
console.log(fruits.length); // 4

// An array can store elements of any type.
let tempArr = [1, 'Alok', 'opendevs'];
console.log(tempArr);

/**
 * Array Methods:
 * push: adds an element to the end.
 * pop: takes an element from the end.
 * shift: Extracts the first element of the array and returns it.
 * unshift: Add the element to the beginning of the array.
 * delete: Changes the element to undefined.
 *** Using delete may leave undefined holes in the array. Use pop() or shift() instead.
 *** Methods push and unshift can add multiple elements at once:
 */

// push
let fruits = ["Apple", "Orange"];
fruits.push("Pear");
console.log(fruits); // Apple, Orange, Pear

// pop
let fruits = ["Apple", "Orange", "Pear"];
console.log(fruits.pop()); // remove "Pear"
console.log(fruits); // Apple, Orange

// Methods that work with the beginning of the array: 
// shift
let fruits = ["Apple", "Orange", "Pear"];
console.log( fruits.shift() ); // remove Apple
console.log( fruits ); // Orange, Pear

// unshift
let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
console.log( fruits ); // Apple, Orange, Pear

// delete
let fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; // Changes the first element in fruits to undefined
console.log(fruits);


/** ------------------------------------------------------OBJECTS----------------------------------------------------------  */
/**
 * NOTE: objects are used to store keyed collections of various data and more complex entities.
 * An object can be created with figure brackets {…} with an optional list of properties.
 * A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
 * An empty object (“empty cabinet”) can be created using one of two syntaxes:
 * let user = new Object(); // "object constructor" syntax
 * let user = {};  // "object literal" syntax
 */

// In the user object, there are two properties:
// The first property has the name "name" and the value "John".
// The second one has the name "age" and the value 30.
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

// We can add, remove and read files from it any time.
// Property values are accessible using the dot notation or []
// get property values of the object:
console.log( user.name ); // John
console.log( user.age ); // 30

// The value can be of any type. Let’s add a boolean one:
user.isAdmin = true;
console.log(user);

// To remove a property, we can use delete operator:
delete user.age;
console.log(user);

// We can also use multiword property names, but then they must be quoted:
let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};

/**
 * NOTE: Please note: an object declared as const can be modified.
 * The const would give an error only if we try to set user=... as a whole.
 */

const user = {
    name: "John"
};  
user.name = "Pete"; // It might seem that the line (*) would cause an error, but no. The const fixes the value of user, but not its contents.
console.log(user.name); // Pete

let user = {
    name: "John",
    age: 30
};
console.log(Object.keys(user)); // = ["name", "age"]
console.log(Object.values(user)); // = ["John", 30]
console.log(Object.entries(user)); // = [ ["name","John"], ["age",30] ]