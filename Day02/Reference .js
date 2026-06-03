// const atm  = (balance ,withdrawal ) => {

//     if (withdrawal > balance ){
//         return("Insufficient funds!")
//     }
//     else if (withdrawal <= 0){
//         return ("Invalid amount!")
//     }
//     else {
//         return (`Success! Remaining balance: ${balance-withdrawal}`)
//     }
// }

// console.log(atm(100,130 ))   // Success! Remaining balance: 300// Invalid amount!

const Atm = (moneyAccount, Withdrawnfunds) => {
  if (typeof moneyAccount === "number" || typeof Withdrawnfunds === "number") {
    const TheRest = undefined;

    if (Withdrawnfunds > moneyAccount) {
      return "Insufficient funds!";
    }
    // else if (Withdrawnfunds >= 0 ){ // Because a withdrawal of 0 or negative makes no sense — you can't withdraw nothing or minus money!
    // =========note ===============
    /*I think that
                else if (Withdrawnfunds > moneyAccount)  // ← this will never run!
                won't work. I set it up so that if Withdrawnfunds is less than moneyAccount, it runs, but I don't think this will work.*/
    else if (Withdrawnfunds <= 0) {
      return "Invalid amount!";
    } else {
      return `Success! Remaining balance: ${moneyAccount - Withdrawnfunds}`;
    }
    // else if  (Withdrawnfunds > moneyAccount){
    //    TheRest = (moneyAccount - Withdrawnfunds )
    //    return (`Success! Remaining balance: ${TheRest}`)
  }
};

console.log(Atm(100, 30)); // Success! Remaining balance: 70
console.log(Atm(1000, 30)); // Success! Remaining balance: 970
console.log(Atm(99, 100)); // Insufficient funds!
console.log(Atm(10, 0)); // Invalid amount!

// Note Num 1

// Good fix! ✅ Now Problem 2 —

// You defined CheckType inside the if block but you never call it. So the function exists but never runs.

// But actually — do you even need a second function inside? You already have Atm as your function. Why not just put the conditions directly inside the if block without creating CheckType?

// Try removing CheckType and putting the conditions directly inside the if. 💪
