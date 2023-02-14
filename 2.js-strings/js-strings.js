function stringsExample() {

    /** Data types can be integers but they can also be strings. There lots of datat types
     * but it this section we will focus on strings. Strings are alphanumeric characters
     * wrapped in a paraetnhesis of double quotes or single quotes.
     * You should either choose double quotes or single quotes.
     * IN terms of readability I prefer double quotes in Javascript/Typescript - 
     * because it improves readability: helps me to easily distinguish between strings
     * and template literals when I use double quotes for strings nand single backticks for
     * template literals
     */

    let line_of_words = "Javascript is the most used language for web development";
    
    return line_of_words
}

function stringLength() {

    let line_of_words = "Javascript is the most used language for web development";

    /**
     * When a string is initialised - a string object is generated.
     * With an object we can store data but we can also manipulate and read data.
     * javascript gives us access to global properties and methods we can perform
     * on string data types
     * 
     * One popuplar and use for property for checking the lenght of a property
     * is lenght. We use dot notation with the length property
     */
    
    return line_of_words.length
}

function stringStartsWithEgOne() {

    let line_of_words = "Javascript is the most used language for web development";

    /**
     * We can also use methods on string objects.
     * startsWith() is a method we may use to check if we a string starts with a
     * specififie character.
     * startsWith() method returns a boolean - so it will either be true or false.
     */
    
    return line_of_words.startsWith('Javascript')
}

function stringStartsWithEgTwo() {

    let line_of_words = "Javascript is the most used language for web development";

    /**
     * We can also use methods on string objects.
     * startsWith() is a method we may use to check if we a string starts with a
     * specififie character.
     * startsWith() method returns a boolean - so it will either be true or false.
     */
    
    return line_of_words.startsWith('javascript')
}

function stringToLowerCase() {

    let line_of_words = "Javascript is the most used language for web development";

    /**
     * Methods can be changed together. This is a paradigm of programming called
     * functional programming. Each function o method (more accurately) is chained
     * through a dot. It is called dot notation. You can put the method calls on seprate
     * lines for better readability.
     * 
     * In this example we converted the string to all lower case and then performed
     * the satrtsWith method again to see if the lower case javascript is the
     * opening character of the string.
     */
    
    return line_of_words.toLowerCase()
        .startsWith('javascript')
}