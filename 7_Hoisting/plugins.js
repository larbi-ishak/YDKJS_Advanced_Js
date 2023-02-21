// #HOISTING

// function declaration is hoisted but function expression is not
m("ishak");

function m(name) {
    console.log(name);
}

m("mouad");

// ----------------
// d(12); Error d is not a function
var d = function age(a) {
    console.log(`your age is ${a}`);
};

d(89);

// ----------
// function declaration are hoisted before variables and hoisted in the last value
console.log(foo());

var foo = 2;

function foo() {
    console.log("bar");
}
function foo() {
    console.log("bom");
}

function z() {
    console.log(z.name, "///", z.arguments);
}
z();

function essay(bar) {
    if (bar) {
        console.log(baz);
        var baz = bar;
    }
}
essay("abderraouf");
