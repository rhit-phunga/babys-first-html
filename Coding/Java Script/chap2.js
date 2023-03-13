// comment

/* long 
comment */

const message = 'Hello!'
alert(message)

//can also be written as
const message2 = 'Hello Hello!';alert(message);

//block
{
    // this is a block containing 2 statements
    const message = 'Hola!';
    alert(message);
}

/*

---words that cannot be a var---

abstract, await, boolean, break, byte, case, catch, char, 
class, const, continue, debugger, default, delete, do, double, 
else, enum, export, extends, false, final, finally, float, for, 
function, goto, if, implements, import, in instanceof, int, interface, 
let, long, native, new, null, package, private, protected, public, return, 
short, static, super, switch, synchronized, this, throw, throws, transient, 
true, try, typeof, var, volatile, void, while, with, yield
*/

/* 
---Generic data types---

String

Symbol

Number

Boolean

Undefined

Null

---* Console log *---

typeof 'hello'
<< 'string'

typeof 10
<< 'number'

typeof true
<< 'boolean'

typeof { ninja: 'turtle' }
<< 'object'

typeof [ 1, 2, 3 ]
<< 'object'
    

*/

const name = 'Alexa'; // This won't be assigned to another string since it is constant

let score = 0; // This value may change during the program

let x = 3, y = 4, z = 5; // assign multiple var

var number = 2; // same as let, scope might be diffrent

/* 
Goblal Scope : Accessible anywhere
Local Scope : available only within the block/ stack

*/

let b = 2; // b is global 

{ b = 4; b; } // b should output 4

{ c = 5; c; } // create a global inside a block

{ const d = 6; d; } // create a local var inside the block

// --- Var naming scheme ---
// Constant and variable names can start with any upper or 
// lower-case letter, an underscore, _, or dollar character, $. 
// They can also contain numbers, but cannot start with them.


const a = 1;
let f = a; // a = 1, b = 1

f = 2; // a = 1, b = 2


const c = { value: 1 }; // non primitive value assignment is done by reference
let d = c; // c.value = 1, d.value = 1
d.value = 2; // c.value = 2, d.value = 2

//  Strings
// 'It's me' --> causes an error
// "It’s me" --> this works
// 'It\'s me' --> make the ' mark work

/* 
Useful applications

Single quote marks -> \'

Double quote marks -> \"

End of line -> \n

Carriage return -> \r

Tab -> \t

*/


const names = 'Alexa'; // declare and assign a variable

names.length; // retrieve the name variable's length property

names['length']; // note the property name is in quote marks

names.toUpperCase();

names.toLowerCase();

names.charAt(1);

names.indexOf('A'); // return index

names.indexOf('z'); // return -1 if doesn't exist

names.lastIndexOf('a'); // last occurence of a character

names.includes('a'); // return true or false

names.startsWith('A'); // return true or false

names.endsWith('A'); // return true or false

'JavaScript'.concat('Ninja');

'Java' + 'Script' + ' ' + 'Ninja'; // concat string

'    Hello World     '.trim(); // the space in the middle will be preserved


const n = `Siri`; // template literal
`Hello ${ n }!`; //<< 'Hello Siri!'

// --- Symbols --- 
const uniqueID = Symbol();

//const uniqueID = Symbol('this is a unique ID');
uniqueID = Symbol('this is a unique ID');

console.log(uniqueID); // << Symbol(this is a unique ID)

const A = Symbol.for('shared symbol'); // point to the same symbol
const B = Symbol.for('shared symbol');

// ---Numbers ---

typeof 42; // integer   -- > << 'number'

typeof 3.14159; // floating point decimal -- > << 'number'
               
//hex = '0x'
//octal = '0x'
//binary = '0x'
//1e6; // means 1 multiplied by 10 to the power 6 (a million)


0xAF; // A represents 10, F represents 15
// out = 175

5 .toExponential(); // >> "5e+0"
  
(5).toExponential(); // >> "5e+0"

5.0.toExponential(); // >> "5e+0"

5..toExponential(); // >> "5e+0"

const number = 5; // >> 5

number.toExponential(); // >> "5e+0"
   
const PI = 3.1415926; // << undefined

//round to 3 decimal place
PI.toFixed(3); // only one dot is needed when using constants or variables
// << "3.142"

// -- Math --

5 +4.3;
6-11;
6*9;
3/6;
2**3; // exponetial
23%6; //modulus

//special case
-4%3; // -4 modulo 3 would be 2
//<< -1

//self explanatory, same as Java

let points = 0; // initialize points score to zero

points = points + 10;

points += 10;

points -= 5; // decreases points by 5
//<< 15

points *= 2; // doubles points
//<< 30

points /= 3; // divides value of points by 3
//<< 10

points %= 7; // changes the value of points to the remainder if its current value is divided by 7
//<< 3

'hello' * 5;
//<< NaN -> Not a Number


// --- Check if value is a number ---
Number.isFinite(1/0); // -> false

Number.isFinite(-Infinity); // -> false

Number.isFinite(NaN); // -> false

Number.isFinite(42); // -> true
/*
Type coersion
Js will try to convert 
one operand to an equivalent 
value of the other operand's type.
*/
'2' * 8; // -> 16

'2' + 8; // - > 28

// String to Number

Number('23'); //-> 23

Number('hello'); // <<< NaN

const answer = '5' * 1;
//<< 5

typeof answer;
//<< "number"

// Number to String

String(3);

2+''; // using type coersion

10..toString(); 

28101..toString(36) // a million in base 36
// << 'lol'

// --Parsing Number--

parseInt('1010',2); // converts from binary, back to decimal
//<< 10

parseInt('omg',36);
//<< 31912

parseInt('23',10);
//<< 23
   
const address = '221B Baker Street';

//parseInt(var, <numFormat>)
parseInt(address, 10)
//<< 221 --> ignore everything but the number

parseInt('2.9',10); //remove decimal, doesn't round
//<< 2
       
// --- Null ---

10 + null; // null behaves like zero
//<< 10

10 + undefined; // undefined is not a number
//<< NaN

// ---Bool ---
Boolean('hello');
//<< true

Boolean(42);
//<< true

Boolean(0);
//<< false

/* 
Things that are false

    * "" // double quoted empty string literal
    * '' // single quoted empty string literal
    * `` // empty template literal
    * 0
    * -0 // considered different to 0 by JavaScript!
    * NaN
    * false
    * null
    * undefined

*/ 

// -- Logical Not --

!true; // negating true returns false
//<< false

!0; // 0 is falsy*, so negating it returns true
//<< true

/*
to find out something is falsy or not use '!!'
!!'';
<< false

!!"hello";
<< true

!!3;
<< true

!!NaN;
<< false

!!"false";
<< true

!!'0';
<< true
*/

// --- Logical AND 

'shoes' && 18; // both values are truthy
//<< 18

'shoes' && 0; // returns 0 because it is falsy
//<< 0

// --- logical OR
'shoes' || 0;
//<< 'shoes'

NaN || undefined;  // both NaN and undefined are falsy, so undefined will be returned
//<< undefined

//lazy operator

let ay = 0; // declare the variable a and assign the value of 0
//<< 0

false && (a = 1); // (a = 1) is truthy, but it won't be evaluated, since the first operand is false
//<< false

ay // the value of a is still 0
<< 0

false || (a = 1); // this will evaluate both operands, so a will be assigned the value of 1, which is returned
//<< 1

// -- bitwise NOT '~'
// convert to  32 bit integer, flip all bits, return the new value
~2476;  
//<< -2477

// --
    