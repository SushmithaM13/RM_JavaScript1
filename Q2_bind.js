
function showAge(){
    console.log(this.age);
}
//showAge function logs "this.age"
const user={
    age: 30,
    display: showAge
};
//user has age 30 and "display" references the showAge function at this point "user.display" will logs 30
const boundShowAge=user.display.bind({age: 50});
// this line creates a new function(boundShowAge) where "this" is permanently bound to {age: 50}
// so when we call boundShowAge() it will logs 50
user.display=boundShowAge;
// this line changes the reference of "display" to boundShowAge function
user.display();
//This is now calling the bound function where "this" is {age:50}, not user

//so, output for the above code is: 50





// Modify it so that it always logs 30 regardless of the bind.
// We can do this by using an arrow function which does not have its own "this" context.
// They use the "this" from where they are defined
const user={
    age: 30,
    display: ()=>{
        console.log(user.age);
    }
};
//user has age 30 and "display" references the arrow function at this point "user.display"
const boundShowAge1=user.display.bind({age:50});
user.display=boundShowAge1;
user.display();

//output for the above code is:30