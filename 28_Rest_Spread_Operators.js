// // function func() {
// //     console.log(arguments);

// //     arguments.foreach((item, index) => {
// //         console.log(item)
// //     });
// const args = [1,2,3,4,5];
// const args2 = [6,7,8];


// const func = (...rest)=>{////////////////////REST

//     return rest.reduce((ac,item)=>{
//         return ac + item;
//     },0);
// };
// console.log(func(...args, ...args2)); ///////////////////SPREAD

// console.log(Math.max(...args,...args2 ))