// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function reverseString(str){
    let stringArray=str.split("")
    stringArray.reverse();
    let revString=stringArray.join("");
    console.log(revString);   
}
reverseString("omkar pramod shele");