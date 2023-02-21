// #HOISTING

// to avoid any global variables you put your hole code in an IIFE

function getValue(condition) {
    if (condition) {
        var value = "blue";
        // other code
        return value;
    } else {
        console.log(value);
        // value exists here with a value of undefined
        return null;
    }
    // value exists here with a value of undefined
}

console.log(getValue());

function getValue(condition) {
    if (condition) {
        let value = "blue";
        // other code
        return value;
    } else {
        // console.log(value); // Reference Error
        // value doesn't exist here
        return null;
    }
}
// console.log(getValue());

let z = true;
console.log(z);

window.moh = "larbi mohamed";
console.log(moh);
