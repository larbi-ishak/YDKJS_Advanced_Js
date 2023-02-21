var foo = "bar";

function bar() {
    var foo = "baz";
    console.log(foo);
    // accessing global scope and modifying a variable
    // window.foo = "ishak";
    // console.log(window.foo); // ishak

    function baz(foo) {
        foo = "larbi";
        yay = "bam";
    }
    baz();
}

bar();
console.log(foo);
console.log(yay);
baz(); // Error baz is not defined in global scope
