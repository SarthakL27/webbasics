// dyanmic, no type restriction, mutable : changes to existing object

let arr1=[56,78];
let arr2=[67,'sara',6788, true];
let arr3=['vina','veda'];

arr1[2]=77; // length increased
arr1[0]=34; // replace
console.log(arr1);
arr1.push(89); // add new values from back
console.log(arr1);
arr1.unshift(11); // add new values from front
console.log(arr1);
//pop, shift

let va1=arr1.pop();
console.log(va1);

va1=arr1.shift();
console.log(va1);

let arr4=new Array(); //length=0;
let arr5=new Array(78,66,444); //length=3
let arr6=new Array(5); //length=5
let arr7=new Array('hi'); //length=1


// splice,includes,join,sort,reverse
let arr8=[22,34,11,220,78];
let va2=arr8.splice(2,1); //removes the element next to which we give in first parameter
console.log(va2);

va2=arr8.includes(34);
console.log(va2);

let check = ['cat', 'dog', 'squirrel'];
const check2=check.join(',');
console.log(check2);

va2=arr8.sort((n1,n2)=>n1-n2); //sorts elem

console.log(va2);

va2=arr8.reverse(); //reverses array
console.log(va2);

//self study : implement other spi functions

//STRINGS:

let s1="";
let s2="Hello";

console.log(typeof s2);

let s3=new String();
let s4=new String("India is my country"); //object of type string

console.log(typeof s4);
console.log(s4 instanceof String);

//strings are always immutable

let upperstring=s4.toUpperCase();
console.log(s4);
console.log(upperstring);

let city="Solapur";
city=city.concat("Kolhapur");//ref used same to point to new memory location
console.log(city);
//we want to avoid above

const a=89;


const company="neosoft";

// company =company + "rabale" ;

const concated =company +"rabale";
console.log(concated);
console.log(company);

let india1=new String('india');
let india2=new String('india');

console.log(india1==india2); //mem loc comp
console.log(india1.valueOf()==india2.valueOf()); //value comp

let c1="neosoft";
let c2="neosoft";

console.log(c1==c2); //mem loc true
console.log(c1.valueOf()==c2.valueOf()); //true 

let v1=90
let v2='90';
console.log(v1==v2);
console.log(v1===v2);

let st1=new String(56);
let st2=new String('59');
console.log(st1==st2);
console.log(st1===st2);



let st3="sarthak";
//replace
console.log(st3.replace('a','r'));

//replace all
console.log(st3.replaceAll('a','r'));

//charat
console.log(st3.charAt(3)); //counts from 0

//indexof
console.log(st3.indexOf('a')); //counts from 0

//lastindexof
console.log(st3.lastIndexOf('a'));  //again counts from 0

//includes
console.log(st3.includes('k')); //checks if elem is present

//split
console.log(st3.split("")); //seperates the string in format of array


//slice,substring
const message ="hello how are r u?";

console.log(message.substring(1,4));
console.log(message.slice(1,4));

console.log(message.substring(1));
console.log(message.slice(1));

console.log(message.substring(-1)); //- to 0
console.log(message.slice(-1));

console.log(message.substring);

console.log(message.substring(-1, 5)); // - to 0, 5
console.log(message.slice(-1, 5));  // empty string

console.log(message.slice(-12, 12));  


































