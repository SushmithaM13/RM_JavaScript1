

// In javaScript, the rest parameter(...nums) must be the last parameter
// in a function definition. we cannot have any parameter after it.
// so this is invalid:


// function sum(...nums, multiplier){
//     return nums.reduce((acc,num)=>acc+num*multiplier, 0);
// }
// console.log(sum(1,2,3,2));


// SyntaxError: Rest parameter must be last formal parameter


// fix it so that it multiplies each number by the last argument.
// use "arguments" pattern or split the last argument manually.
function sum(...nums){
    let multiplier = nums.pop();
    return nums.reduce((acc, nums)=>acc+nums*multiplier, 0);
}
console.log(sum(1,2,3,2));