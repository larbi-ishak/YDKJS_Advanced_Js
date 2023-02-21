let foo = function bar() {
    var foo = "baz";
    // console.log("newbie to Advanced JS");
    function baz(foo) {
        foo = bar;
        foo; // function ...
        console.log(foo);
    }
    console.log(foo);
    // baz();
};

foo();
// bar(); // Error

// catch is block scope
var main;

try {
    main.length;
} catch (err) {
    console.log(err); // TypeError
}

console.log(err); // Reference  Error because err is scoped inside catch scope
