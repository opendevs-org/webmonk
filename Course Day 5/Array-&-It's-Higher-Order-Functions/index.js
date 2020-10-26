// SECTION: Filter function usage:
// A data set
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 },
];

// A whole code block to iterate over the array to find people above 18 yrs of age
const fullAge = [];
for (let i of persons) {
    if (i.age >= 18) {
        fullAge.push(i);
    }
}
console.log(fullAge);

// Or, use Filter which filters out value of an array based on some condition returning new array
console.log(persons.filter(person => person.age >= 18));


// SECTION: Map function usage:
// A data set
const users = [
    { name: 'Yazeed', age: 25 },
    { name: 'Sam', age: 30 },
    { name: 'Bill', age: 20 }
];

// A normal function, can be reused
getName = (user) => user.name;

// A whole code block to iterate over the array & call the function
usernames = [];
for (let i of users) {
    const name = getName(i);
    usernames.push(name);
}
console.log(usernames);

// Or, use Map which calls the given function on every values of an array
usernames = users.map(getName);
console.log(usernames);


// SECTION: Reduce function usage
// A data set
const intArr = [5, 7, 1, 8, 4];

// To find sum of all elements in the array

// A whole code block to iterate over the array & sum up the elements
sum = 0;
for (let i of intArr) {
    sum += i;
}
console.log(sum);

// Or, use reduce to call the given function
console.log(intArr.reduce((accumulator, currentValue) => accumulator + currentValue));


// SECTION: forEach function usage
const items = ['item1', 'item2', 'item3']
const copyItems = []

// iterates over the loop
items.forEach(item => copyItems.push(item));
console.log(copyItems);


// SECTION: spread operator
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr4 = [-2, -1, ...arr1, ...arr2, 6, 7, 8];
console.log(arr4);


// SECTION: rest operators
const myFun = (a, b, ...manyMoreArgs) => {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")
