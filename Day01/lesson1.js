// const randomNum = Math.random () *10 ;

// // console.log(randomNum)

// const IT = Math.floor(randomNum)
// console.log(IT)
// // const IT1 = Math.ceil(randomNum)

// if (IT == 1) {
//     console.log("One");
// } else if (IT <= 5){
//     console.log("Less Than Five")
// }
// else {
//     console.log("More Than Five")
// }

// ----------- =>  Functions <=-------------------

// function checkNumber (){

//     // const caseNum = Math.random() *30 ;

//     // let Filtering = Math.floor(caseNum)

//     // console.log(Filtering)

//     // if (Filtering >= 10){

//     //     console.log("A bad point ")
//     // }
//     // else if (Filtering >=  20 ){
//     //     console.log(" A Normal point ")
//     // }
//     // else if (Filtering >= 30) {
//     //     console.log("Good point")
//     // }
//     // else{
//     //     console.log("404")
//     // }

// }

//  checkNumber ()

//  function checkNumber (IT){
//         // const randomNum = Math.random () *10 ;

//         // console.log(randomNum)

//         // const IT = Math.floor(randomNum)
//         // console.log(IT)
//         // const IT1 = Math.ceil(randomNum)

//         if (IT == 1) {
//             console.log("One");
//         } else if (IT <= 5){
//             console.log("Less Than Five")
//         }
//         else {
//             console.log("More Than Five")
//         }
//  }

// checkNumber(1)
// checkNumber(6)

// ----------- =>  Functions Parameters <=-------------------

// function HappyBirthday(){

//     const  name = "Mouhssine"
//     let age = 21
//     const years = 2027

//     age = 19  // You ll grow up someday '

//     console.log(name)
//     console.log(age)
//     console.log(years)

//     if (age >= 20){
//         console.log(`Happy Birthday ${name} ! It s a year ${years} ,You will now be ${age}`)
//     }
//     else if (age < 20){
//         console.log("You ll grow up someday ")
//     }
//     else{
//         console.log("You re lying")
//     }

//     //  function CheckAge (){

//     // }

// }

// // HappyBirthday()

// HappyBirthday()

// ==========================================================

// function CheckSpotlight (){
//     let spotlight = 0 ; //"OFF 🌑"
//     //  let spotlight = 1 ; // ON 🔆"
//     // let spotlight = 5; //'Not Yet'

//     if (spotlight == true){
//         console.log("ON 🔆")
//     }
//     else if (spotlight ==false){
//         console.log("OFF 🌑")
//     }
//     else{
//         console.log("Not Yet")
//     }

// }
// CheckSpotlight()

// =========================================================

// ----------- =>  Return Statement  <=-------------------

// =====================> Olde One <============================

// function CheckNumber(num){
//     if (num == 1){
//         console.log("01")
//     }
//     else if (num == 10){
//         console.log("Up")
//     }
//     else if  (num <= 10){
//         console.log("Less Then Ten ")
//     }
//     else if (num > 10){
//         console.log("More Than Ten")
//     }
// }

// CheckNumber(1)

// ==================Now=============================

// function CheckNumber(num) {
//   if (num == 1) {
//     return "0101";
//   } else if (num == 10) {
//     return "Up";
//   } else if (num <= 10) {
//     return "Less Then Ten ";
//   } else if (num > 10) {
//     return "More Than Ten";
//   }
// }

// // CheckNumber(1) // Nothing will be lost

// console.log(CheckNumber(9)); // But if you want to see the result, you have to   &  Important: Don't forget  = Set the settings

// ----------- =>  Scope  <=-------------------

// function CheckNumber (num = 1 ){
//     const Myname = "Max"
//     return Myname
// }

// console.log(CheckNumber())

// // ==========================================

// let Myname = "Max"

// if (true){

//      Myname = "jhon"
// }

// console.log(Myname)

// // ----------- =>  Arrow Function  <=-------------------

// const FunName = () => { //=> you can declear a function like this one this is a new mothod to create a function

// }
// FunName() //=> if you want to call function

// =======================exercice===========================

// function CheckNumber(num) {
//   if (num == 1) {
//     return "0101";
//   } else if (num == 10) {
//     return "Up";
//   } else if (num <= 10) {
//     return "Less Then Ten ";
//   } else if (num > 10) {
//     return "More Than Ten";
//   }
// }

// // CheckNumber(1) //

// function CheckCharacters (line){

//     if (line.length > 3){
//         return("More Than 3")
//     }
//     else if (line.length < 3 ){
//         return("Less Than 3")
//     }
//     else{
//         return("Equal To 3")
//     }

// }

CheckCharacters("hello");

function CheckCharacters(line) {

  if (line.length > 3) {
    return "More Than 3";
  } else if (line.length < 3) {
    return "Less Than 3";
  } else {
    return "Equal To 3";
  }
  
}

CheckCharacters("Hello");
