// const firstName = "Mouhssine";
// const lastName = "Es-Safy";
// const age = 21 ;
// const Moroccan = false ;

// console.log(typeof(firstName));
// console.log(firstName);

// console.log(typeof(lastName));
// console.log(lastName);

// console.log(typeof(age));
// console.log(age);

// console.log(typeof(Moroccan));
// console.log(Moroccan);

// let num = 5
// let num1= "5"

// console.log(num == num1)
// console.log(num === num1)

let result = 0;
for (let i = 1; i <= 5; i++) {
  result += i;
}
console.log(result);


//===========================================

const { id } = useParams();
const location = useLocation();

function FestivalDetail() { // TODO: use useParams to get id and useLocation to check pathname 
return ( <div> {/* display conditionally */} 
 useLocation.pathname.includes('/festival/')
</div> ); }


// =======================================




// conditions 

import { useCallback } from "react"

// const age = 24;

// if (age == 23){
// if (age != 23){
// if (age >= 23){
// if (age <= 23){

// ==
// !=
// >
// >=
// <
// <=

// if (age <= 23){
    
//     console.log("Okey !")
// }

// ----------- => IF <=------------------------

// const Gender = "male"

// if (Gender == "male"){
//     console.log(`Hi ${Gender}`)

// }else  if (Gender == "fmale" ){
//     console.log(`Hi ${Gender}`)
// }
// else{
//     console.log("Fuck You")
// }


// let UserName = "Jhon"
// var age = 24 

// const ID =  245353

// // function (name + " Hello" ){
    
// //     age 
// // }


// UserName = "Max"
// age = 21





// ----------- =>  callback<=------------------------

function SayDone (){
    console.log("Pizza is ready!  🍕")
}
function orderPizza(){
    console.log("Ordering Pizza ...")
    callback() 
}

orderPizza(SayDone)