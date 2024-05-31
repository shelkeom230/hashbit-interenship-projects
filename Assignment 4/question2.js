
// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

function task(str){
    let words=str.split(" ");

    let revWords=words.reverse();

    
    console.log(revWords.join(" "));
}
let str="I love my India";
task(str);