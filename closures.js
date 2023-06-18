// Closures in js

// closures is a function that references variable in the outer scope 
// from its inner scope.

// 1.lexical scope
var name = "guhan";
// global scope
function local(){
    // local scope

    // lexical scope - declare outside ans access inside.
    console.log(name);
}
// local(); 

// 2.lexical scope questions
function subscribe(){
    var name = "guhan";
    function display(num){
        console.log(name, num);
    }
    return display;
}
// subscribe()(5);

// 3.closure scope chain - local scope, outer func scope, global scope, these can be accessed.
var e=10;
function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d+e;
            }
        }
    }
}
// console.log(sum(1)(2)(3)(4));

// 4.Questions
// 1.
// let count = 0;
// (function printCount() {
//     if(count === 0){
//         let count = 1; // shadowing
//         console.log(count);
//     }
//     console.log(count);
// })();
// O/P - 1 0

// 2.

function createBase(num){
    return function (innerNum) {
        console.log(num+innerNum);
    }
}
// createBase(6)(10);
// var addSix = createBase(6);
// addSix(10);
// addSix(21);
// Both are same

// 3.
// Time Optimization
function find(){
    let a = [];
    for(let i = 0;i<1000000;i++){
        a[i] = i*i;
    }
    return function(index){
        console.log(a[index]);
    }
    
}

const closure = find();
// console.time("50");
// closure(50);
// console.timeEnd("50"); // this takes 56ms after optimization, it takes 10ms.


// 4.
// Block scope, setTimeout 
function a(){
    for(var i=0;i<3;i++){
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
// a();

// for(var i=0;i<3;i++){
//     function inner(i){
//         setTimeout(()=>{
//             console.log(i);
//         }, i*1000);
//     }
//     inner(i);
// }
// this function shows correct result as 0,1,2 because of closure.

// setTimeout ran after code runs successfully
// In above, it prints 3 3 3 
// because of var, var doesn't have block scope, it only have function scope
// if we let , then it runs - 0,1,2
// another solution is using 

// 5. create a private counter
// like getter, setter
function counter(){
    var _counter = 0;

    function add(increment){
        _counter += increment;
    }

    function retrieve(){
        return "Counter: "+_counter;
    }

    return { add, retrieve };
}

const c = counter();
c.add(10);
// console.log(c.retrieve());

// 6. Module Pattern

var Module = (function() {
    function private(){
        console.log("private");
    }
    return {
        publicMethod: function() {
            console.log("public");
        }
    }
})();

// Module.publicMethod(); // this gives correct result
// Module.private() // this gives error

// 7. Make this run only once

let view;
function likeTheVideo(){
    let called = 0;
    return function (){
        if(called > 0){
            console.log("Already called");
        }else{
            view = "View Here";
            console.log("Subscribe to", view);
            called++;
        }
    }
   
}
let isCalled = likeTheVideo();
// isCalled();
// isCalled();
// isCalled();
// isCalled();
// isCalled();
// isCalled();

// In this code, only one time runs View here then it runs Already called

// 8. once polyfill, above by closure
function once(func, context){
    let ran;
    return function(){
        if(func){
            ran = func.apply(context || this, arguments);
            func = null;
        }
        return null;
    };
}

const hello = once((a,b) => console.log("hello", a, b));
hello(1,2);
hello(1,2);
hello(1,2);
hello(1,2);

// 9. memoize Implementation

function memoize(fn, context){
    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];
    }
}

const clumsyPro = (n1, n2) => {
    for (let i = 0; i < 1000000; i++) {
        return n1 * n2;
    }
}

const memoizefn = memoize(clumsyPro);
// console.time("first call")
// console.log(memoizefn(9876,7896));
// console.timeEnd("first call")

// console.time("second call")
// console.log(memoizefn(9876,7896));
// console.timeEnd("second call")

// diff between closure, scope

// closure - creating func within another func as the inner func 
// and access variables from outer scope
// scope - defines what variable we can access 

function add(n){
    return function (m){
        console.log(n+m)
    }
}

add(2)(5);

var value = "i'm a lasagna hog"
  .split('')
  .reverse()
  .join('');

  console.log(value)