// "use strict";
var bar = "bar";

function foo(str) {
    eval(`${str};console.log(bar)`); // in strict mode code inside eval exists only inside the eval statement
    console.log(bar);
}

foo("var bar=42;");

let obj = {
    a: 1,
    b: 2,
    c: 5,
};

with (obj) {
    // all variables inside with statement are properties for obj
    c = a + b + c;
    d = 3;
}

console.log(obj.c);
console.log(obj.d);
console.log(d);
