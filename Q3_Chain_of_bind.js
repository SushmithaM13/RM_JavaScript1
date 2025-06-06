
function sayHello(){
    console.log(`Hello, ${this.name}`);
}
const user1={name:"Alice"};
const user2={name:"Bob"};

const boundOnce=sayHello.bind(user1);
// we create a new function where "this" is permanently bound to user1{name:"Alice"}
// now "boundOnce()" will always log "Hello, Alice"
const boundTwice=boundOnce.bind(user2);
// Once a function is "bound using" .bind(), the bining is permanent
// we cannot re-bind it.
// "boundOnce" is already a bound function
// Trying to .bind() it again does nothing
// "boundTwice" is effectively the same as "boundOnce"
boundTwice();
// so, boundOnce was already locked to user1, further .bind() calls don't override it.

// it is logged :Hello, Alice