// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

function task(inputArr){
    let newArr=inputArr.filter(num=>num>5);
    console.log(newArr);
}
let inputArr=[1,2,3,9,10,7,5,4,3];
task(inputArr);