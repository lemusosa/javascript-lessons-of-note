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

   
    return myName
}

function concatenation() {
    
     /** concatenation is when you combine things together instead of adding
      *  them (not always). You use the + operator to concatenate or join types
     *   Concatenation sometimes enforces type coercion when two different 
     *   data types: string and integer - are present.
     * So if we "add" a string and a number - the number will be casted or
     * converted to the string type: hence the term type coercion - 
     * that can be a bad thing in js hence why we need typ safety like typescript
     * which allows us to explicltyl (optionally) specifiy the type on declaration
     * 
     */


    let myName = "lemuel S S";
    let number = 12;
    // using template literals to interpolate variables - notice the backticks
    console.log(`adding number ${number} to a string ${myName}`)
    let concatenation = myName + number;
    return concatenation
}

function fullName() {
    let firstName = "Lemuel";
    let lastName = "Sauls";
    let fullName = firstName + " " + lastName;
    return fullName
}