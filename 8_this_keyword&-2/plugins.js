// function foo() {
//     var bar = "bar1";
//     baz();
// }

// function baz() {
//     console.log(this);
//     console.log(this.bar);
// }

// var bar = "bar2";
// foo();

// no way to cross over this keyword and the local scope (context)
// function foo() {
//     var bar = "bar1";
//     this.baz = baz;
//     this.baz();
// }
// function baz() {
//     console.log(this.bar);
// }

// var bar = "bar2";
// foo();

// #explicit binding
function foo() {
    console.log(this.bar);
}
var bar = "barGlobal";
let obj = {
    bar: "barLocal",
};

foo();
foo.call(obj); // obj is the this arg this = obj
