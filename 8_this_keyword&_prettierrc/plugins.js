'use strict'
// every function when calling it has a reference to its current execution context called "this"

// when this is not defined it refers to the window object

// there are 4 rules for referring this keyword

// the 4th rule (default binding) the window object
// this doesn't work in strict mode , because this refers to undefined

function foo() {
      console.log(this.bar)
}
let bar = 'larbi'
let o2 = { bar: 'bar2', foo: foo }
let o3 = { bar: 'bar3', foo: foo }

foo()
o2.foo()
o3.foo()
