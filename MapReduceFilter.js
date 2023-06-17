// map,filter,reduce


// 1.map,reduce,filter
// 2.polyfill for each functions
// 3.map vs forEach
// 4.output based ques for each functions
// 5.chaining output based ques


// 1.map
// creating new array from existing one from applying function
// to eachh one of the elements 
// map((currentElement, index, actualArray(newArray)) => {})

const nums = [1,2,3,4];

// const mul = nums.map((nums,i,arr)=>{
//     return nums*3 + i;
// })

// console.log(mul);

// 2.filter
// takes each elem into array and applies conditional statement
// against it , if condition true it returns otherwise not.
// returns those fulfills the criteria
// filter((currentElement, index, actualArray(newArray)) => {})

// const moreThanTwo = nums.filter((num) => {
//     return num > 2;
// })

// console.log(moreThanTwo)

// 3.reduce - it returns one value
// reduce itself takes two value (callback func, initialValue)

// (acumulator, currValue, i, Actualarr) - accumulator is 
// results of the previous value. 

// const sum = nums.reduce((prev, curr,i,arr)=>{
//     curr=prev+curr;
//     return curr;
// },0)

// console.log(sum);

// ##############################

// 4.polyfill

// Array.map((num,i,arr)=>{})

// this-referencing parent arr

// Array.prototype.myMap = function (cb){
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this));
//     }
//     return temp;
// }

// const mul = nums.myMap((nums,i,arr)=>{
//     return nums*3;
// })

// console.log(mul);

// Array.filter((ele,i,arr)=> {})

// Array.prototype.myFilter = function (cb){
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i],i,this)){
//             temp.push(this[i])
//         }
//     }
//     return temp;
// }

// const moreThanTwo = nums.myFilter((num) => {
//     return num > 2;
// })

// console.log(moreThanTwo)

// Array.reduce((prev,ele,i,arr)=>{}, 0)
// if user didn't give initialValue, it takes first valuea as initialValue

// Array.prototype.myReduce = function (cb,initialValue){
//     var temp = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         temp = temp ? cb(temp, this[i], i, this) : this[i];
//     }
//     return temp;
// }

// const sum = nums.myReduce((prev, curr,i,arr)=>{
//     curr=prev+curr;
//     return curr;
// },0)

// console.log(sum);

// 5.map vs forEach 
// map - doesn't modify the array, instead creating new array and return the new array
// forEach - it modify new array and doesn't return new array
// in map, we can chain it but forEach doesn't
// const mapRes = nums.map((i) => {return i*3;})
// console.log(mapRes);

// const forEachRes = nums.forEach((val,i) => nums[i]=nums[i]*3);
// console.log(nums);


// 6.outputbased Ques

let students = [
    {name:"guhan", roll:1, marks:80},
    {name:"rajesh", roll:2, marks:69},
    {name:"suresh", roll:3, marks:35},
    {name:"ramesh", roll:4, marks:55},
]

// 1.map

// let nameArr= [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name.toUpperCase();
//     nameArr.push(element);
// }
// console.log(nameArr)

// let newArr = [];
// let nameForEach = students.forEach((stu) => {
//     newArr.push(stu.name.toUpperCase());
// })
// console.log(newArr);

const names = students.map((stu)=> { return stu.name.toUpperCase()})
console.log(names);

// 2. filter

const moreThan50 = students.filter((stu) => {
    return stu.marks > 60 && stu.roll > 2;
})

console.log(moreThan50);

// 3.reduce

const marksSum = students.reduce((i,stu)=> {
    return i + stu.marks;
},0)

console.log(marksSum);

// 7.chaining

const chain = students.filter((stu,i)=>{
    return stu.marks > 80;
}).map((stu)=> {
    return stu.name;
})

console.log(chain);

const chain2 = students.map((stu) => {
    if(stu.marks < 60){
        stu.marks += 20;
    }
    return stu;
}).filter((stu) => stu.marks > 60).reduce((acc,stu) => {
    return acc+stu.marks;
},0)
console.log(chain2);