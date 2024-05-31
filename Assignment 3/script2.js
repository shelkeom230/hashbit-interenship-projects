// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(x,y){
    console.log("1. addition\n2.subtraction\n3.multiplication\n4.division");
    let userInput = parseInt(prompt("\nPlease enter an option number:"));
    switch(userInput){
        case 1: console.log("addition: ",x+y);
        break;
        case 2: 
        if(x<y){
            console.log("invalid input, x must be greater than y");
        }else{
            console.log("subtraction: ",x-y);
        }
        break;
        case 3:
            console.log("multiplication: ",x*y);
            break;
        case 4:
            if(y==0){
                console.log("divide by zero error");
            }else{
                console.log("division: ",x/y);
            }
            break;
        default:
            console.log("invalid option number, please enter option between 1 and 4");            
    }

}
calculate(10,5);
