// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

function task(str){
    let consonants=0,vowels=0;

    let stringArray=str.toLowerCase().split('');

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === 'a' || stringArray[i] === 'e' || stringArray[i] === 'i' || stringArray[i] === 'o' || stringArray[i] === 'u') {
            vowels++;
        } else if (stringArray[i] >= 'a' && stringArray[i] <= 'z') {
            consonants++;
        }
    }
    console.log("no of vowels: ",vowels," no. of consonants: ",consonants);
}
task("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
task("Omkar Shelke");