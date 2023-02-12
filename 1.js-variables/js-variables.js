function addition(_x, _y) {
    // can use the let, var and const keyword to declare variables
    // const is a variable that cannot change - use UPPERCASE for const name
    // ... just a convention to make code readable
    // var is not used in modern day javascript
    // use const where you expect the variable not to change
    // then use let because it is blocked scoped
    // let and const makes your code less error-prone
    // and if there is a bug - then causality anaylsis is more traceable
    let x = _x;
    let y = _y;
    let z = x + y;
    return z
}

function subtraction(_x, _y) {
    let x = _x;
    let y = _y;
    let a = y - x;
    return a
}