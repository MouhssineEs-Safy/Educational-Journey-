// // // const TestName =(name)=>{
// // //     if (name == "Mouhssine"){
// // //         console.log("Okey")
// // //     }
// // // }
// // // TestName("Mouhssine")

// // // ================ Loops ==================
// // let rounds = 5

// // // while (rounds > 0 ) {
// // //     rounds = rounds -1
// // //     console.log("Round")
// // // }

// // // do {
// // //     rounds = rounds -1
// // //     console.log("Round")
// // // } while(rounds > 0)

// // rounds++
// // rounds++

// // for (let i=0 ; i < rounds; i++){
// //     console.log("Okey")
// //     console.log(i)
// // }

// const EggHolder = 20

// // for(let i = 0 ; i <= EggHolder ; i++){
// //     console.log(`Egg ${i}`)
// // }

// for(let i = 0 ; i <= EggHolder ; i++){

//     if (i == 15){
//         break
//     }

//     console.log(`Egg ${i}`)
// }

// ==================  JavaScript Loops ========================

// Note
// I want to print "Hello" five times

// Now I'm going to use the old method
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// That old method isn't good for our 1000
// Now I'm going to use Loops

// for (let i = 1 ; i <= 5 ; i++){
//     console.log(`Hello ${i}`)
// }

// ---------------------------------------

// for (let i = 1 ; i <= 5 ; i++){
//     if ( i % 2 !==0){
//         console.log(i)
//     }
// }

const evennNumbers = 20;
for (let i = 0; i <= evennNumbers; i++) {
  if (i % 2 !== 0) continue;

  if (i == 14) {
    break;
  }

  console.log(i);
}
