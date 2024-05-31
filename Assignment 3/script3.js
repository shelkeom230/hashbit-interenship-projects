/*
3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary.
*/

function findTax(salary) {
    let taxBracket;

    if (salary > 1500000) {
        taxBracket = "over_1500000";
    } else if (salary > 1000000) {
        taxBracket = "1000000_1500000";
    } else if (salary > 500000) {
        taxBracket = "500000_1000000";
    } else if (salary > 0) {
        taxBracket = "0_500000";
    } else {
        taxBracket = "invalid";
    }

    switch (taxBracket) {
        case "0_500000":
            console.log("0% tax congrats.");
            break;
        case "500000_1000000":
            console.log("You have to pay the tax of Rs. ", (10 * salary) / 100);
            break;
        case "1000000_1500000":
            console.log("You have to pay the tax of Rs. ", (20 * salary) / 100);
            break;
        case "over_1500000":
            console.log("You have to pay the tax of Rs. ", (30 * salary) / 100);
            break;
        default:
            console.log("Invalid salary");
    }
}

findTax(1000000);
