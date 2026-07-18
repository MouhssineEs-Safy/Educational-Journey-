let a = 5;
let b = 1;

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// 1 ) => Conditions

// if-else

// let age = 10;

// if (age <= 3) {
//   console.log("Baby");
// } else if (age <= 12) {
//   console.log("Child");
// } else if (age <= 18) {
//   console.log("Teenager");
// } else {
//   console.log("Adult !");
// }

// let day = 1;

// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } else if (day === 3) {
//   console.log("Wednesday");
// } else if (day === 4) {
//   console.log("Thursday");
// } else if (day === 5) {
//   console.log("Friday");
// } else if (day === 6) {
//   console.log("Saturday");
// } else if (day === 7) {
//   console.log("Sunday");
// } else {
//   console.log("Invalid day");
// }

// switch-case

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
