// 🟢 Company Problem – Employee Performance Review

// I understood from the manager's comments that he wants to add 20 points to each employee's score,
// and I have to write a program that adds 20 points and tells me whether the employee is good or bad.

const giftPrincipal = 20;

const employeeList = [
  {
    Name: "Liam",
    score: 90,
  },
  {
    Name: "Emma",
    score: 72,
  },
  {
    Name: "Noah",
    score: 48,
  },
  {
    Name: "Mike",
    score: 88,
  },
  {
    Name: "Sarah",
    score: 61,
  },
];

employeeList[0].Name;
employeeList[0].score;

// console.log(employeeList[0].Name);

// const DB = employeeList[0].score;

// console.log(DB);

/*That's completely normal.
But think like a company.
Tomorrow the HR manager says:
"We hired 500 employees." */

// const addPoint = () => {
//   employeeList[0].score += 1;
//   employeeList[0].score += 1;
//   employeeList[0].score += 1;
// };

// for (let i = 0; i < 20; i++) {
//   addPoint();
// }

// console.log(employeeList[0].score);
// console.log(employeeList[1].score);
// console.log(employeeList[2].score);
// console.log(employeeList[3].score);

/* Excellent → score 90 or above
Good → score 70–89
Average → score 50–69
Needs Improvement → score below 50*/

// console.log(scoreValue);
// console.log(NameValue);

const checkScore = (name, score) => {
  if (score >= 100) {
    return `${score} => Excellent`;
  } else if (score >= 70) {
    return ` Hello ${name} Your score : ${score} => Good`;
  } else if (score >= 69) {
    return ` Hello ${name} Your score : ${score} Average `;
  } else if (score >= 50) {
    return ` Hello ${name} Your score : ${score} Needs Improvement`;
  } else {
    return `Mather Fucker  ${name} Your score : ${score} Get out. You've been fired.`;
  }
};

console.log(checkScore(employeeList[0].Name, employeeList[0].score));


const Loopsing = [
  {
    Name: "Sarah",
    score: 61,
  },
    {
    Name: "Emma",
    score: 72,
  },
] 


// so here i want you to do a  loops for this to add 20 Gift

for (Gift = 0; Gift 20 ; Gift++ ){

}

