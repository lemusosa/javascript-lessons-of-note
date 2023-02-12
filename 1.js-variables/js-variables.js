function addition(_x, _y) {
    /** can use the let, var and const keyword to declare variables
     * const is a variable that cannot change - use UPPERCASE for const name
     * just a convention to make code readable
     * var is not used in modern day javascript
     * use const where you expect the variable not to change
     * then use let because it is blocked scoped
     * let and const makes your code less error-prone
     * and if there is a bug - then causality anaylsis is more traceable
     * the variable dat types here in this scetion is mainly integers (whole numbers) 
     * */ 
   
    
    

    
    let x = _x;
    let y = _y;
    let z = x + y;
    return z
}

function subtraction(_x, _y) {
    let x = _x;
    let y = _y;
    let a = x - y;
    return a
}

function strings() {
    // strings are used for alphanumeric characters that are not necessarily
    // ... evaluated as numbers. They a re string s- you can strings for a name,
    // ... sentence, name of a place etc.
    // strings are wrapped in double quotes or even signle quotes. Adopt to one
    // convention in your code base 
    let myName = "Lemuel  S S";

    /** concatenation is when you combining things together instead of adding them
     * you use the + operator to concatenate.
     * Concatenation sometime enforces type coercion when two different dtat types: 
     * string and integer
     * 
     */
    return myName
}