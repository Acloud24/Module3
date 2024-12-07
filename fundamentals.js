//console.log('hello') 
//console.log('world')

/*This is a comment */

//const integer = 123  integer - whole number
//const float = 12.345  floating point - decimal number

//console.log(-1/0)  negative division by zero = -Infinity
//console.log("not a number" / 1)  invalid mathematical operation = NaN
//console.log(1/0)  division by zero = Infinity

//let one = 1;
//let two = 2;
//let three = 3;
// standard BODMAS order of operations - use brackets to override

// below is: 1 + 2 - ( (3 * 2) / 1 ) = 3 - 6
//console.log(one + two - three * two / one); // -3

//const bigint_valid = 1234567890123456789012345n;
//const bigint_invalid = 1234567890123456789012345; // too large for standard integers
//console.log(bigint_valid == bigint_invalid) // false

//const backTicks = `String that can include variables - ${singleQuotes}`
//const singleQuotes = 'String that can include "double quotes"'
//const doubleQuotes = "String that can include 'single quotes'"

//let age = null

// let location; // no value is assigned with the = operator
// console.log(location); // undefined

// let location; // no assigned value, therefore undefined
// let age = null; // explicitly assigned null value
// console.log(`${location} == ${age} ? ${location == age}`) // true (uses == to check value equivalence)
// console.log(`${location} === ${age} ? ${location === age}`) // false (uses === to check type equality)

// the object begins and ends. Inside, a series of key (property name) and value
// pairs are separated by commas, with colons separating the key and value.
// const tv = { // object starts here
// brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
// size: "55-inch", // values can be any data type
// model: 2023, // multiple key-value pairs are separated by commas
// resolution: "4K" // the comma on the last key-value pair can be omitted
// } // object ends here. All data is stored in tv variable.

// console.log(typeof undefined); // undefined
// console.log(typeof 0); // number
// console.log(typeof 10n); // bigint
// console.log(typeof true); // boolean
// console.log(typeof 'text'); // string
// console.log(typeof Symbol('id')) // symbol
// console.log(typeof Math); // object
// console.log(typeof null); // object

//console.log( String(false) ) // false - string form of boolean
// console.log( "1" + 2 + 3 ) // 123 - string ‘1’ is concatenated with number 2 then number 3
// console.log( 1 + 2 + "3" ) // 33 - number 1 is added to number 2 then concatenated with string ‘3’

// console.log("6" / "2") // 3
// console.log("6" * "2") // 12
// console.log("6" - "2") // 4
// console.log(+"6") // 6

// console.log( Number(" 4 ") ) // 4 - trims spaces
// console.log( Number(null) ) // 0 - intentionally empty value converts to 0
// console.log( Number(undefined) ) // NaN - non-existent value is unknown
// console.log( Number(false) ) // 0 - false converts to 0
// console.log( Number(true) ) // 1 - true converts to 1
// console.log( Number("") ) // 0 - empty string converts to 0
// console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot convert

// console.log( Boolean("") ) // false - empty string
// console.log( Boolean(0) ) // false - zero value
// console.log( Boolean(null) ) // false - no value
// console.log( Boolean(undefined) ) // false - unknown value
// console.log( Boolean(NaN) ) // false - not a number
// console.log( Boolean("false") ) // true - non-empty string
// console.log( Boolean(-1) ) // true - non-zero number

// function helloWorld() // we can include parameters inside the () as function variables
// { // function body is enclosed with curly brackets (braces)
// console.log('hello world'); // can be one or multiple statements inside the function
// }
// helloWorld(); // once the function is defined, we need to call it to make it run/execute

// function checkAge returns a value when called
// function checkAge(age) {
//     if (age >= 18) {
//     return 'adult'; // if the condition is true, return this string and exit
//     }
//     return 'minor'; // if the condition was false, return this string and exit
//     }
//     console.log( checkAge(21) ) // adult
//     console.log( checkAge(13) ) // non-adult
``
// let person1 = { name: 'Anna' }; // object - stored by reference
// let person2 = person1; // person2 points to same memory location as person1
// person1.name = 'Brian';
// console.log(person2.name); // Brian, even though we changed person1.name
// let person3 = 'Carly'; // string - stored by value
// let person4 = person3; // person4 points to separate memory location than person3, but both store same value
// person3 = 'David';
// console.log(person4); // still Carly, since person3 and person4 are string primitives and store independent values

// const box1 = {
//     weight: '20kg',
//     dimensions: { // nested object property
//     width: '30cm',
//     height: '10cm'
//     }
//     }
//     const box2 = {...box1}; // shallow clone
//     box1.dimensions.height = '12cm'; // change box1 nested object property
//     console.log(box2); // box2 references box1 dimensions and picks up height change

// const user = {
//     name: 'Bilbo Baggins',
//     sing: function() { // method of user object
//     console.log('Roads go ever ever on');
//     },
//     sing2() { // shorthand method syntax, does same as above
//     console.log('Over rock and under tree');
//     }
//     }
//     user.sing(); // Roads go ever ever on
//     user.sing2(); // Over rock and under tree

// const user = {
//     name: 'Bilbo Baggins',
//     printGreeting() {
//     console.log(`Hello, I'm ${this.name}`) // 'this' is the current object
//     }
//     }
//     // 'user' is before the dot, provides the context where 'this' comes from
//     user.printGreeting(); // Hello, I'm Bilbo Baggins

//     const user = {
//         name: 'Bilbo Baggins',
//         printThis() {
//         console.log(this); // 'this' is the current object
//         return this; // if we return it, we can 'chain' object methods together
//         },
//         printGreeting() {
//         console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
//         }
//         }
//         user.printThis().printGreeting(); // methods chained together, works because printThis returns this

function User(first, last) { // constructor function
    this.first = first;
    this.last = last;
    this.hasShortName = () => this.first.length <= 3;
    }
    // we can create multiple users with different names
    let user1 = new User('Tim', 'Smith'); // need to use 'new'
    console.log(user1); // User { first: 'Tim', last: 'Smith' }
    console.log(user1.hasShortName()); // true