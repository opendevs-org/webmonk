/** ANCHOR ----------------------------------------------DEFINING VARIABLES------------------------------------------------------------------  */

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


/** ANCHOR ------------------------------------------------------DATA TYPES----------------------------------------------------------  */

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
console.log(`the result is ${1 + 2}`); // the result is 3

/**
 * -------------------BOOLEAN
 * NOTE: The boolean type has only two values: true and false.
 */

let nameFieldChecked = true;
console.log(nameFieldChecked);
let isGreater = 4 > 1;
console.log(isGreater); // true (the comparison result is "yes")

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


/** ANCHOR ------------------------------------------------------ARRAYS----------------------------------------------------------  */
/*
NOTE: There are two syntaxes for creating an empty array:
let arr = new Array();
let arr = [];
*/
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

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
 * length: Access the length of the array.
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
console.log(fruits.shift()); // remove Apple
console.log(fruits); // Orange, Pear

// unshift
let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
console.log(fruits); // Apple, Orange, Pear

// delete
let fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; // Changes the first element in fruits to undefined
console.log(fruits);


/** ANCHOR ------------------------------------------------------OBJECTS----------------------------------------------------------  */
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
console.log(user.name); // John
console.log(user.age); // 30

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

for (let i in user) {
    console.log(i, user[i]);
}


/** ANCHOR ------------------------------------------------------LOOPS----------------------------------------------------------  */

/**
 * --------------------WHILE Loop
 * NOTE: While the condition is truthy, the code from the loop body is executed.
 */

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log(i);
    i++;
}

/**
 * --------------------DO-WHILE Loop
 * NOTE: The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
 */
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

/**
 * --------------------FOR Loop
 * NOTE: The for loop is more complex, but it’s also the most commonly used loop.
 * for (begin; condition; step) {
 *   // ... loop body ...
 * }
 */
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i);
}

// Any part of for can be skipped.
let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  console.log( i ); // 0, 1, 2
}

let i = 0;

for (; i < 3;) {
  console.log( i++ );
}

for (;;) {
    // repeats without limits
    console.log('hey');
}

// break keyword
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break;
  sum += value;
}
console.log( 'Sum: ' + sum );

// continue keyword
for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    console.log(i); // 1, then 3, 5, 7, 9
}


/** ANCHOR ------------------------------------------------------CONDITIONALS----------------------------------------------------------  */
let year = 2015;

if (year < 2015) {
  console.log('Too early...');
} else if (year > 2015) {
  console.log('Too late');
} else {
  console.log('Exactly!');
}

let accessAllowed = (year > 2015) ? true : false;
console.log(accessAllowed);

/** ANCHOR ------------------------------------------------------INTERACTION WITH JS----------------------------------------------------------  */

// NOTE: alert
alert("Hello");

// NOTE: prompt : The function prompt accepts two arguments: prompt(title, [default]);
/**
 * It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
 * title: The text to show the visitor.
 * default: An optional second parameter, the initial value for the input field.
 */
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

// NOTE: Confirm
/**
 * The function confirm shows a modal window with a question and two buttons: OK and Cancel.
 * The result is true if OK is pressed and false otherwise.
 */
let isBoss = confirm("Are you the boss?");
console.log( isBoss ); // true if OK is pressed


/** ANCHOR ------------------------------------------------------OPERATORS----------------------------------------------------------  */

// NOTE: exponential operators
console.log(4**(1/2));

// NOTE: guess some examples?
console.log('1' + 2);
console.log(2 + 2 + '1' );
console.log( 6 - '2' );
console.log( '6' / '2' );

// NOTE: assignment operators
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log( a ); // 3
console.log( c ); //

let a, b, c;
a = b = c = 2 + 2;
console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

// NOTE: modify in place operators
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
console.log( n ); // 14

let n = 2;
n *= 3 + 5;
console.log( n ); // 16  (right part evaluated first, same as n *= 8)

// NOTE: Increment decrement operators
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
console.log( counter ); // 3

let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
console.log( counter ); // 1

let counter = 1;
let a = ++counter; // (*)
console.log(a); // 2

let counter = 1;
let a = counter++; // (*) changed ++counter to counter++
console.log(a); // 1

// NOTE: Boolean operators
console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)

let result = 5 > 4; // assign the result of the comparison
console.log( result ); // true

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

console.log( true == 1 ); // true
console.log( false == 0 ); // true

let a = 0;
console.log( Boolean(a) ); // false
let b = "0";
console.log( Boolean(b) ); // true
console.log(a == b); // true!

console.log( 0 == false ); // true
console.log( '' == false ); // true
console.log( null == undefined ); // true

console.log( 0 === false ); // false, because the types are different
console.log( null === undefined ); // false

// NOTE: Logical operators
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

console.log( !true ); // false
console.log( !0 ); // true

/** ANCHOR ------------------------------------------------------FUNCTIONS AND SCOPES---------------------------------------------------------- */
/**
 * Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
 * We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). 
 * But we can create functions of our own as well.
 */

function showMessage() {
  console.log( 'Hello everyone!' );
}
showMessage();

// Local variables
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  console.log( message );
}
showMessage(); // Hello, I'm JavaScript!
console.log( message ); // <-- Error! The variable is local to the function

// Outer variables
let userName = 'John';
function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}
showMessage(); // Hello, John

// *** The function has full access to the outer variable. It can modify it as well.
let userName = 'John';
function showMessage() {
  userName = "Bob"; // (1) changed the outer variable
  let message = 'Hello, ' + userName;
  alert(message);
}
console.log(userName); // John before the function call
showMessage();
console.log(userName); // Bob, the value was modified by the function

/**
 * The outer variable is only used if there’s no local one.
 * If a same-named variable is declared inside the function then it shadows the outer one.
 * For instance, in the code below the function uses the local userName. The outer one is ignored:
 */

let userName = 'John';
function showMessage() {
  let userName = "Bob"; // declare a local variable
  let message = 'Hello, ' + userName; // Bob
  console.log(message);
}
// the function will create and use its own userName
showMessage();
console.log( userName ); // John, unchanged, the function did not access the outer variable

// One Use Case
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}
let age = prompt('How old are you?', 18);
if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

// -----------------Arrow function
const sum = (a, b) => a + b;
alert( sum(1, 2) ); // 3


const sayHi = () => alert("Hello!");
sayHi();

let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");
welcome();

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
alert( sum(1, 2) ); // 3

/** ANCHOR ------------------------------------------------------THIS KEYWORD---------------------------------------------------------- */
// NOTE “this” in methods
let user = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }
};
user.sayHi(); // John

// NOTE “this” is not bound
function sayHi() {
  alert(this);
}
sayHi(); // undefined in strict mode; window object in non strict mode

// NOTE Arrow functions have no “this”
// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};
user.sayHi(); // Ilya
