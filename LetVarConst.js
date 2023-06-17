// 1.var,let,const

// 1.variable scope
// 2.variable shadowing
// 3.illegal shadowing
// 4.declaration
// 5.declaration without initialization
// 6.initialization
// 7.execution context
// 8.hoisting

// 1.variable scope
// var is function scope, let is block scope&function scope
{
    var a = 2 //gives output whereas let,const won't
}
console.log(a);

// 2.variable shadowing - shadows the variable and gives value
// 3.var and then let is legal whereas let first then var is illegal shadowing
function eg(){
    let s = "hello"
    var ss = "how r u"
    const a = "nope"
    if(s){
        let ss = "fine"
        let s = "hi" // with only let
        let a = "yep"
        console.log(a);
    }
    console.log(a);
}
eg()

// 4.decalaring same variable name with var in same block is valid wheareas let,const is not valid
var a;
var a;//legal

// let c;
// let c;//illegal

// 5.declaration without initialization with var,let is ok but const won't
// ok
var a1;
let a2;

//const a3; //error we should initialize value

// 6.Reinitialization - const should not be reinitialized

var a =5;
a=6;//valid

let b=5;
b=6;//valid

const c = 3;
//c=8; //not valid

// 7.Execution context 
// first js created global window in that two phases creation and execution phases
// creation phase first initialize all variables and assign it into undefined
// execution phase then ran the code from top down approach
// (function executes only when it calls)

// 8. hoisting 

// During the creation phase JavaScript engine moves your variables and functions declarations on the top of your code and this is known as hoisting
console.log(d); // it gives undefined instead of error because first creation phase creates all variable with undefined 
// then execution phase happens so it gives undefined
var d=10;

// 9.temporal dead zone - hoisting works with var but let in temporal dead zone
// temporal dead zone is time between declaration and initialization

function abc(){
    console.log(a,b,c);
    var a =10;
    let b =11;
    const c = 13;
}

abc()

// In the ablove func - a is undefined in console, wheares let, const variables is in temporal dead zone and shows reference error