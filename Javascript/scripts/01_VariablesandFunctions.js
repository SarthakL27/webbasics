/* dynamically typed lang */

var num1; // type not decided here
console.log(typeof num1);
num1=67;  // number
console.log(typeof num1);
num1="abc"; // string
console.log(typeof(num1));

num1=true; // boolean
console.log(checkType(123));

function checkType(value){
    return typeof value;
}

let num2=67;
num2="pqr";

const num3=67;
/* num3=89; */ // error

/* we can redeclare var type variables */

var companyname="Neosoft technologies";
var companyname="Nesoft";

/* we can not redeclare var type variables */
let city="Dadar";
//let city="Rabale";
city="Rabale";

//var type variables have functional scope, if function anywhere they are declared
function loop(){
    console.log(i);
    
   for(var i=1;i<=5;i++){ //because we used var so we can use i anywhere inside the whole loop
    console.log(i);
   }// for end
   console.log("after:"+i);

   function test(){
    var year=2025;
    console.log(year);
    console.log(i); // 
    
   } // year scope ends
   test();
   /* console.log(year);  */// error
   
   
}// i scope ends

loop();


console.log("--------------");

//let type variables have block scope, in which block they are declared
function loop2(){
    /*   console.log(i);  */    /* error : not defined */
          for(let i=1;i<=5;i++){
              console.log(i);
          }// for end i scope end
        /*   console.log("after:"+i); */  /* error : not defined */
      }
      loop2();

/* functions without name */

//anonymous functions
const addfun=function(num1,num2){
    return num1+num2;
}

const result=addfun(45,67);
console.log(result);
addfun(45,67);

// for(var i=0;i<5;i++){
//     console.log(i)
// }

/*arrow functions */

const arrowfun=(num1,num2)=>{
document.write(num1);
document.write("<br>"+num2);
document.write("<p>"+num1+"</p>"); 
document.write("<p>"+num2+"</p>");
return  num1+num2;
}

const  res=arrowfun(67,88);
document.write(res);

//if arrow function body has single statement then {} are optional  
const subfun2=(num1,num2)=>console.log(num1-num2)
subfun2(56,23);
    

//if arrow function body has single statement then {} are optional , return keyword not allowed
//it implicity returns result  
const subfun3=(num1,num2)=>num1-num2;
console.log(subfun3(56,23))

//if arrow function has single format argument then () are optional */
const cubeFun=num=>num*num*num;
const cuberes=cubeFun(6);
console.log(cuberes);

//loops in js 

//for loop

let arr=[45,55,65,75];

for(let I=0;I<arr.lenght-1;I++){
    console.log(arr[I]);
}
console.log("--------------------");

/*for of loop */
for(let arrvalue of arr){
    console.log(arrvalue);
}

/*forEach */
arr.forEach((vl)=>console.log(vl));

/* <60 */
const filterarr=arr.filter((val)=>val<60);
console.log(filterarr);

//function chaining
arr.filter((val)=>val<60).forEach((filtval)=>console.log(filtval));

const names=['Amol','kiran','aman','savita','Amant'];
//show names starting with 'A' : startswith

const capitalA=names.filter(name=>name.startsWith("A"));
console.log(capitalA);
