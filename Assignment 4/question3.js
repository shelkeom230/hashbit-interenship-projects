// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

function task(string){

    let stringArray = string.split("");

    stringArray.splice(3,2 ,"ONESIA");

    let modifiedString = stringArray.join("");
    
    console.log(modifiedString);
}
task("INDIA");