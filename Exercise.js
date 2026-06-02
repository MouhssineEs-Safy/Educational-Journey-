//============== Exercise: Grade Calculator ==================

const getGrade = (score) => {
  //const StudenGPA = Math.ceil(Math.random) //I've made a mistake here because Math.random must be written as Math.random() within parentheses

  const StudenGPA = Math.ceil(Math.random() * 100);

  // if (StudenGPA == 90 ){ So the second mistake was that I told them that if the two numbers were equal,but I should have said: ‘If the number is greater than’ or ‘greater than’

  if (StudenGPA >= 90) {
    console.log(`${StudenGPA} → Grade: A `);
  } else if (StudenGPA >= 72) {
    console.log(`${StudenGPA} → Grade: B `);
  } else if (StudenGPA >= 55) {
    console.log(`${StudenGPA} → Grade: C `);
  } else if (StudenGPA >= 30) {
    console.log(`${StudenGPA} → Grade: F `);
  } else {
    console.log("Invalid Score");
  }
};

getGrade();
