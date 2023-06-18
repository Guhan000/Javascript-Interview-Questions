// functions in JS

// 






// 1.function declaration
// otherwise called function definition,statement

// function square(num){
//     return num*num;
// }

// 2.fucntion expression - stored in variable

// const square = function (num){
//     return num*num;
// }
// console.log(square(4))

// 3. Anonymous function - without naming
// anonymous func acts as callback or assigned to a variable

// 4.firstclass function
// passing another function as parameter just like variable
// function square(num){
//     return num*num;
// }

// function displaySquare(fn){
//     console.log("Square is "+fn);
// }
// displaySquare(square(5))

// 5.IIFE - immediately invoked function expression

// (function square(num){
//     console.log(num*num);
// })(5);

// ques in IIFE

// this gives output as 1
// first this checks inner scope if not present
// then checks outer scope

// (function (x){
//     return(
//         function (y){
//             console.log(y);
//         }
//     )(2)
// })(1)

// 6.function scopes
// let num1=20,num2=3,name1="Guhan"

// function mul(){
//     return num1*num2;
// }

//console.log(mul()) // 60

// function addNames(){
//     let num1=2,num2=3; //shadowing
//     var num3 = num1+num2;
//     return name1 + " is a "+num3;
// }
// console.log(addNames()); //"guhan is a 5"

// 7.function scopes Questions

// if var - 5 5 5 5 5 becoz var doesn't have block scope
// let - 0 1 2 3 4
for (let i = 0; i < 5; i++) {
    setTimeout(function (){
        console.log(i)
    },i*1000)

    console.log(i);
}

// 8. Hoisting
// functions are hoisted completely
// functions completely copied in global scope

// functionName(); //still runs
// function functionName(){
//     console.log("Guhan is legend");
// }

// 9.Hoisting interview Ques - O/P based ques

// var a = 4;

// const fun = function() {
//     console.log(a);
//     var a = 5;
// }

// fun();
// answer - undefined 

// 10. argument and parameters 
// square(5) - parameters, function square(num) - arguments

// 11.Rest,spread paramter
// rest must be the last parameter

// const fun = (a,x,y, ...num) => {
//     console.log(a,num);
// }

// fun(2,3,4,5,6,7,8);

// 12.callback function
// callback function is a function passed into another function as an
// argument, which is then invoked inside the outer function to complete
// some kind of routine or action

// function greeting(name){
//     console.log(`Hi hello, ${name}!!`)
// }

// function greetingMessage(callback){
//     callback("guhan");
// }

// greetingMessage(greeting);

// 13. arrow function vs normal function

// 1.syntax
// 2.return type (arrow func works without return type too)
// 3.arguments - keyword not work in arrow func

// function fn(){
//     console.log(arguments)
// }

// fn(1,2,3,4);

// above arguments keyword not works in arrow function
// 4.this keyword

let user = {
    username: "guhan",
    rc1 : () => {
        console.log(this.username);
        // In this func, this keyword pointing to global scope!
    },
    rc2(){
        console.log(this.username);
    }
}

user.rc1(); //undefined
user.rc2(); //guhan