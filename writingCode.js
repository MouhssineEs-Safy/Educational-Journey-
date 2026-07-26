// let day = 8;

// // condations

// // =====================

// // day = 1;
// // day = 2;
// // day = 6;

// // if (day === 1) console.log("Monday");
// // else if (day === 2) console.log("Tuesday");
// // else if (day === 3) console.log("Wednesday");
// // else if (day === 4) console.log("Thursday");
// // else if (day === 5) console.log("Friday");
// // else if (day === 6) console.log("Saturday");
// // else if (day === 7) console.log("Sunday");

// // =====================
// //  switch case

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Fuck OFF");
// }

// ====================
// Loops

// we have a multiple type of Loops
//  for
//  while
//  do-while
//  for-in
//  for-of

// ======== FOR - LOOP ===========
// Syntax

// for (initialisation ; condition ; end-code){
//     statements - code
// }

// for (let Call = 1; Call <= 10; Call++) {
//   console.log("ON", Call);
// }

// for (let Num = 10; Num >= 0; Num--) {
//   console.log("OFF", Num);
// }

// Exam

// const MaritalPreparation = () => {
//   let RepeatedPreparations = 5;
//   for (
//     RepeatedPreparations;
//     RepeatedPreparations <= 200;
//     RepeatedPreparations++
//   ) {
//     if (RepeatedPreparations % 2 === 0) {
//       console.log("Here", RepeatedPreparations);
//     }
//   }
// };

// MaritalPreparation();

// ===========================
// while-loop
// Syntax
// while (condition){
//     statments- code
// }

// let Preparation = 0;

// // Here, it will count
// // endlessly
// // while (Preparation <= 200) {
// //   console.log("ON", Preparation);
// // }

// while (Preparation <= 100) {
//   console.log("ON", Preparation);
//   Preparation++;
// }

// ===========================
// Do-while-loop
// Syntax
// do {
//   statements - code;
// } while (condition);

// let Index = 1;

// do {
//   console.log("Open", Index);
//   Index++;
// } while (Index <= 5);

// ===================23===================

// Conditions

// if-else
// switch-case

// const info = [
//   { name: "Liam", age: 2, yearBirth: "12/03/2024", gmail: "liam@gmail.com" },
//   { name: "Emma", age: 7, yearBirth: "08/07/2019", gmail: "emma@gmail.com" },
//   { name: "Noah", age: 15, yearBirth: "15/11/2010", gmail: "noah@gmail.com" },
//   { name: "Mike", age: 30, yearBirth: "14/02/2004", gmail: "mike@gmail.com" },
// ];

// // console.log(info[0].age);

// const filtering = (age) => {
//   if (age <= 3) {
//     return "Baby";
//   } else if (age <= 10) {
//     return "Child";
//   } else if (age <= 18) {
//     return "Teenager";
//   } else if (age >= 20) {
//     return "Adult";
//   } else {
//     return "Go Home Sleep !";
//   }
// };

// console.log(`${info[0].name} => ${filtering(info[0].age)}`);
// console.log(`${info[1].name} => ${filtering(info[1].age)}`);
// console.log(`${info[2].name} => ${filtering(info[2].age)}`);
// console.log(`${info[3].name} => ${filtering(info[3].age)}`);
// // console.log(filtering(info[0].age));
// // console.log(filtering(info[1].age));
// // console.log(filtering(info[2].age));

// // ======== switch-case =============

// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
// }

// ======================================

// 🟢 Problem 1 – Movie Theater Ticket (Conditions)

const users = [
  { name: "Liam", age: 2, yearBirth: "12/03/2024", gmail: "liam@gmail.com" },
  { name: "Emma", age: 7, yearBirth: "08/07/2019", gmail: "emma@gmail.com" },
  { name: "Noah", age: 15, yearBirth: "15/11/2010", gmail: "noah@gmail.com" },
  { name: "Mike", age: 30, yearBirth: "14/02/2004", gmail: "mike@gmail.com" },
];

// console.log(users[0].age);

// const ticketPrices = {
//   Baby: "Free",
//   Child: 40,
//   Teenager: 70,
//   Adult: 100,
// };

// const determineCategory = (age) => {
//   if (age <= 3) {
//     return "Baby";
//   } else if (age <= 10) {
//     return "Child";
//   } else if (age <= 15) {
//     return "Teenager";
//   } else if (age <= 19) {
//     return "Adult";
//   }
// };

// determineCategory(users[0].age);

// const determineTicketPrice = (category) => {
//   if (category === "Baby") {
//     console.log(ticketPrices.Baby);
//   } else if (category === "Child") {
//     console.log(ticketPrices.Child);
//   } else if (category === "Teenager") {
//     console.log(ticketPrices.Teenager);
//   } else if (category === "Adult") {
//     console.log(ticketPrices.Adult);
//   }
// };

// determineTicketPrice(determineCategory(users[0].age));
// determineTicketPrice(determineCategory(users[1].age));
// determineTicketPrice(determineCategory(users[2].age));
// determineTicketPrice(determineCategory(users[3].age));

// 📊 Grade: 85/100 ⭐⭐⭐⭐⭐
// ==============================

// 🟣 Problem – Coffee Shop Menu (Switch)

let choice = 2;
// choice = 20;

let Price = {
  Espresso: 20,
  Cappuccino: 30,
  Latte: 35,
  HotChocolate: 25,
  Tea: 15,
};
const CustomerChoice = (coffeType) => {
  switch (coffeType) {
    case 1:
      return "Espresso";
      break;
    case 2:
      return "Cappuccino";
      break;
    case 3:
      return "Hot Chocolate";
      break;
    case 4:
      return "Tea";
    default:
      return `Invalid  ${choice} choice. Please select a drink from the menu.`;
  }
};

// ______________________________________________________

// Problem: CustomerChoice uses console.log
//  which only prints text instead of passing data,
// leaving welcomeCustomer with nothing to read.Solution:
//  Change console.log to return in your switch statement so the coffee name
// flows directly into your next function
// ______________________________________________________
// const CustomerChoice = (coffeeType) => {
//   switch (coffeeType) {
//     case 1:
//       console.log("Espresso");
//       break;
//     case 2:
//       console.log("Cappuccino");
//       break;
//     case 3:
//       console.log("Latte");
//       break;
//     case 4:
//       console.log("Hot Chocolate");
//       break;
//     case 5:
//       console.log("Tea");
//       break;
//     default:
//       console.log("Invalid choice. Please select a drink from the menu.");
//   }
// };

CustomerChoice(choice);

const welcomeCustomer = (choiceUser) => {
  if (choiceUser === "Espresso") {
    return `Welcome to Cofe Somatrit ${CustomerChoice(choice)}  => ${Price.Espresso}$`;
  } else if (choiceUser === "Cappuccino") {
    return `Welcome to Cofe Somatrit ${CustomerChoice(choice)} => ${Price.Cappuccino}$`;
  } else if (choiceUser === "Latte") {
    return `Welcome to Cofe Somatrit ${CustomerChoice(choice)} => ${Price.Latte}$`;
  } else if (choiceUser === "Hot Chocolate") {
    return `Welcome to Cofe Somatrit ${CustomerChoice(choice)} => ${Price.HotChocolate}$`;
  } else if (choiceUser === "Tea") {
    return `Welecome to Cofe Somatrit ${CustomerChoice(choice)}=> ${Price.Tea}$`;
  } else {
    return `${CustomerChoice(choice)}`;
  }
};

console.log(welcomeCustomer(CustomerChoice(choice)));
// let name = "Welcome to Cofe"; test

const Output = (num1) => {
  const output = num1;
  const Words = num1.split(" ");
  const firdWord = Words[0];

  return firdWord;
};

// console.log(Output(welcomeCustomer(CustomerChoice(choice))));

const takeWelcome = (Item) => {
  if (Item === "Welcome") {
    return "Thank you for your order, enjoy your Latte!";
  } else if (Item === "Invalid") {
    return "Please try again.";
  }
};
console.log(takeWelcome(Output(welcomeCustomer(CustomerChoice(choice)))));

// const output = welcomeCustomer(CustomerChoice(choice));
// console.log(output);

// const Words = output.split(" ");
// console.log(Words);

// let firdWord = Words[0];
// console.log(Words[0]);

// const friendlyMessage = (done) => {
//   if (done.inde === "Welecome") {
//     return "Thank you for your order, enjoy your Latte!";
//   }
// };

// _______________test_split_________________;
// let sentence = "Welecome to Cofe";
// let Words = sentence.split(" ");
// let firdWord = Words[0];

// console.log(Words);
// console.log(firdWord);
// welcomeCustomer
// ===============================

// 🏆 Overall Grade

// 91/100 ⭐⭐⭐⭐⭐
