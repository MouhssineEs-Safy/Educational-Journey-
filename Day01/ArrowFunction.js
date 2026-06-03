//const randomNum = Math.random() *10

// console.log(randomNum) // we don t want this number like this

// Math.floor(randomNum)

// console.log(Math.ceil(randomNum))
//const Num = Math.ceil(randomNum)
//console.log(Num)

//if (Num == 1){
//  console.log("One")
//}
//else if (Num <= 5){
//  console.log("Less Then Five")
//}
//else {
//  console.log("More Than Five")
//}

//===================  Functions ======================

/*function CheckNum (){
    const RndNum = Math.random() *100
    const Num1 = Math.ceil(RndNum)
    console.log(Num1)

    if(Num1 == 1){
        console.log("One")
    }
    else if (Num1 <= 50){
        console.log("Less Than Fifty")
    }
    else if (Num1 > 50){
        console.log("More Than Fifty")
    }
}

//CheckNum()// Here you Have to Call The function
//CheckNum()//Now you've learned how to  Defining A Function calling a Function 
*/
//=================== Function Parameters =====================

/*function CallNum (num){

    if(num ==1){
        console.log("One")
    }
    else if (num <= 15){
        console.log("Less Than 15 !")
    }
    else {
        console.log("More than 15 !")
    }

}


CallNum(1)
CallNum(16)
CallNum(59)*/

//=================== Return Statement  =====================

/*function CallNum (num = 6){

    if(num ==1){
        return("One")
    }
    else if (num <= 15){
        return("Less Than 15 !")
    }
    else {
        return("More than 15 !")
    }
}

console.log(CallNum(19))*/

//===================  Scope  =====================

function CallNum(num = 6) {
  const MyName = "Mouhssine";

  return MyName;
}

console.log(CallNum()); // Mouhssine

//===================  Arrow Function  =====================

const ArrowFunction = (age) => {
  console.log("Hello World !");
};

ArrowFunction();

