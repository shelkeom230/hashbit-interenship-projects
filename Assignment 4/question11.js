/*
Q11)
Input

[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
    
Output: -
[
    student1: {
        average: 64.2
    },
    student2: {
        average: 64.2
    },
    student3: {
        average: 64.2
    }
]
Write code to find average as mentioned above. Use array and object methods.
*/

let input={
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};
const output=Object.entries(input).map(([student,subjects])=>{
    const scores=Object.values(subjects);
    const average=scores.reduce((acc,score)=>acc+score,0)/scores.length;
    return {[student]:{average:average}};
});

console.log(output);