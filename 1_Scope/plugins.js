// "use strict"; prevent making global variables ==> yay is not defined
// Scope is where to look for things(variables)
// the compiler who is looking
// JS is parsed language

// javascript has often function scope block

var foo = "bar";
function bar() {
    var foo = "baz";
}
function baz(foo = "bam") {
    // here we are not adding a new variable called foo we're overriding the parameter value
    foo = "larbi";
    // if we put let in line's beginning ==> Error foo has already been declared , and since we can redeclare var no error occurs but that's not our deal here
    yay = "bam";
    console.log(foo); // larbi
}
baz();

console.log(foo);
console.log(yay);
