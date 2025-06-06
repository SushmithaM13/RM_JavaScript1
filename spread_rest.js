
// Spread

let arr1=[1,2,3];

let arr2=[...arr1,4,5]

console.log(arr2)


// usecase2
//update the user profile immutably
let obj1={name: "sushma", age:25};
let obj2={...obj1,age:26,city:"hyd"}
console.log(obj2);


//Rest

function sumAll(...numbers){
    return numbers.reduce((acc,val)=>acc+val, 0);
}
console.log(sumAll(1,2,3,4,5,6))


// usecase2:object destructuring
//pull the key info and keep the rest somewhere else
const person1={name:"sushmitha",age:25,city:"hyd",state:"TS"}

const {name, ...rest}=person1;
console.log(name);
console.log(rest)



// common mistakes
// 1.
const x={a:1};
console.log([...x])

// 2.
const obj={a:1,b:2};
const updated={...obj,b:100,a:2}
console.log(updated)