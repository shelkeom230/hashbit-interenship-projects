// Q9) Write a function to count the number of words in a paragraph.

function countWords(para){
    let words=para.split(" ")
    console.log(words.length);
}
let para="The sky glows orange at sunset, casting long shadows on the ground. Birds sing, signaling day's end. Cool breezes sway trees gently. Nature rests, awaiting another dawn. Peace reigns momentarily.";
countWords(para);