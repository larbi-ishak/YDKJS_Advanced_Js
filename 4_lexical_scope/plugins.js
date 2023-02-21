function bar() {
    var bar = "baz";

    function baz() {
        console.log(bar);
        // the interpreter doesn't need to look inside baz function because he knows before in compiling period, so it goes directly to the bar scope and get bar value
        // ### it's a matter of performance
    }
    baz();
}

bar();
