// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function task(n1,n2){
    let str1=n1.toString();
    let str2=n2.toString();
    
    // pad the zeros if they are not there 
    if(n1.length<n2.length){
        str1='0'+str1;
    }
    if(n2.length<n1.length){
        str2='0'+str2;
    }
let sum=0;
    for(let i=0;i<str1.length;i++)
        {
            sum+=parseInt(str1[i])*parseInt(str2[i]);
        }
        return sum;
}

let result=task(11,12);
console.log("product is : ",result);