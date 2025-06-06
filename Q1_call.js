const person={
    name:"John",
    greet:function(){
        return `Hello, ${this.name}`
    }
};

const anotherPerson={name:"Alice"};

const greetFn=person.greet;
console.log(greetFn())

//output will be: Hello, undefined
//person.greet() would normally return "Hello, John" because "this" refer to the person object.
//but  
// const greetFn=person.greet;
// console.log(greetFn())
// here we are not calling the greet as a method of person 
// instead we are assigning the function to greetFn then calling it without an object of context.


