var foo = "bar";

// the need for using IIFE functions is to wrap a unit of code in a scope , and our unit scope in JS is the function
(function () {
    var foo = "foo2";
    console.log(foo);
})();

console.log(foo);
// this is not a new scope, this is the global scope
{
    var foo = "bazbam";
    console.log(foo);
}
console.log(foo);

// we can use i without declaration so that would be an auto globalized variables
// but we use let to refer that it's just for the loop
for (i = 0; i < 7; i++) {
    console.log("ishak larbi is the logo maker");
}

let m = (function ishak(name) {
    console.log(`${name} is such a loser`);
})("ishak");

console.log(typeof m);

// vsCode shortcut ctrl+p to open a file
