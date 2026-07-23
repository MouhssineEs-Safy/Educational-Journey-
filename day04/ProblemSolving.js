// const UserInfo = [
//   { name: "Liam", age: 2, YearBirth: "12/03/2024", gmail: "liam@gmail.com" }, // Baby
//   { name: "Emma", age: 7, YearBirth: "08/07/2019", gmail: "emma@gmail.com" }, // Child
//   { name: "Noah", age: 15, YearBirth: "15/11/2010", gmail: "noah@gmail.com" }, // Teenager
//   { name: "Mike", age: 22, YearBirth: "14/02/2004", gmail: "mike@gmail.com" }, // Adult
//   {
//     name: "Sophia",
//     age: 1,
//     YearBirth: "21/01/2025",
//     gmail: "sophia@gmail.com",
//   }, // Baby
//   {
//     name: "Daniel",
//     age: 10,
//     YearBirth: "05/02/2016",
//     gmail: "daniel@gmail.com",
//   }, // Child

//   { name: "Sarah", age: 18, YearBirth: "17/09/2008", gmail: "sarah@gmail.com" }, // Teenager
//   { name: "John", age: 30, YearBirth: "09/11/1996", gmail: "john@gmail.com" }, // Adult
//   { name: "Ava", age: 12, YearBirth: "13/08/2014", gmail: "ava@gmail.com" }, // Child
//   {
//     name: "Robert",
//     age: 45,
//     YearBirth: "26/01/1981",
//     gmail: "robert@gmail.com",
//   }, // Adult
// ];

// // console.log("Hello");

// // // console.log(UserFiltering);
// // console.log(UserInfo[0].name);
// // // console.log(Object.values(UserFiltering[0].name));
// // // console.log(Object.keys(UserFiltering));

// // //you have to Filtering a ages  new

// // const AgeFiltering = (Filtering) => {
// //   let Baby;
// //   let Child;
// //   let Teenager;
// //   let Adult;

// //   if (Filtering >= 3) {
// //     Baby = Filtering;
// //     console.log(" Baby Done");
// //   } else if (Filtering >= 4) {
// //     Child = Filtering;
// //     console.log(" Child Done");
// //   } else if (Filtering >= 13) {
// //     Teenager = Filtering;
// //     console.log(" Teenager Done");
// //   } else if (Filtering >= 20) {
// //     Adult = Filtering;
// //     console.log(" Adult Done");
// //   }
// // };

// // AgeFiltering(UserInfo.age);

// // const ticketPrices = {
// //   Baby: 15,
// //   Child: 40,
// //   Teenager: 70,
// //   Adult: 100,
// // };

// // const FilteringPrice = (name, num1, num2) => {
// //   if (num1 <= 3) {
// //     console.log(`Hi  ${name} Here Your Ticket Prices for ${num11} $`);
// //   } else if (num1 <= 5) {
// //     console.log(`Ticket Prices for Child ${num1} $`);
// //   } else if (num1 <= 13) {
// //     console.log(`Ticket Prices for Teenager ${num1} $`);
// //   } else if (num1 <= 20) {
// //     console.log(`Ticket Prices for Adult ${num1} $`);
// //   } else {
// //     console.log("Go home and sleep");
// //   }
// // };

// // FilteringPrice(UserInfo[6].age);

// // ________________________

// let Info = [
//   { name: "Liam", age: 2, YearBirth: "12/03/2024", gmail: "liam@gmail.com" }, // Baby
//   { name: "Emma", age: 7, YearBirth: "08/07/2019", gmail: "emma@gmail.com" }, // Child
//   { name: "Noah", age: 15, YearBirth: "15/11/2010", gmail: "noah@gmail.com" }, // Teenager
//   { name: "Mike", age: 22, YearBirth: "14/02/2004", gmail: "mike@gmail.com" }, // Adult
// ];

// // here i want to take a Info age and put theme on the varible
// // let Takeage = (userage, age01) => {
// //   userage = age01;
// // };

// // console.log(Takeage(Info[0].age));
// console.log(Info[0].age);
// console.log(Info[1].age);
// console.log(Info[2].age);
// console.log(Info[3].age);

// const DetermineCategory = (user) => {
//   if (user >= 3) {
//     console.log("Baby");
//   } else if (user >= 10) {
//     console.log("Child");
//   } else if (user >= 15) {
//     console.log("Teenager");
//   } else if (user >= 20) {
//     console.log("Adult");
//   } else {
//     console.log("Go Home Sleep");
//   }
// };

// DetermineCategory(Info[0].age);
// DetermineCategory(Info[1].age);
// DetermineCategory(Info[2].age);
// DetermineCategory(Info[3].age);

// ===========================clean solution.=====================

const info = [
  { name: "Liam", age: 2, yearBirth: "12/03/2024", gmail: "liam@gmail.com" },
  { name: "Emma", age: 7, yearBirth: "08/07/2019", gmail: "emma@gmail.com" },
  { name: "Noah", age: 15, yearBirth: "15/11/2010", gmail: "noah@gmail.com" },
  { name: "Mike", age: 22, yearBirth: "14/02/2004", gmail: "mike@gmail.com" },
];

const determineCategory = (age) => {
  if (age <= 3) {
    return "Baby";
  } else if (age <= 12) {
    return "Child";
  } else if (age <= 18) {
    return "Teenager";
  } else {
    return "Adult";
  }
};

console.log(`${info[0].name} -> ${determineCategory(info[0].age)}`);
console.log(`${info[1].name} -> ${determineCategory(info[1].age)}`);
console.log(`${info[2].name} -> ${determineCategory(info[2].age)}`);
console.log(`${info[3].name} -> ${determineCategory(info[3].age)}`);
