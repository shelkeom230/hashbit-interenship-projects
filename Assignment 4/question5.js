
// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function

function correctfn(string,wrong,correct){
    let correctString=string.replace(wrong,correct);
    console.log("correct string is : ",correctString);
}
correctfn("Omkar sheke","sheke","shelke");
correctfn("airbus headqters are located in USA","headqters","headquarters");