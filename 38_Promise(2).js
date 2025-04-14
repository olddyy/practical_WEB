//Promise

// const getPromise = (time, isResolve = true) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isResolve) {
//                 resolve(time);
//             } else {
//                 reject(new Error("Ошибка"));
//             }
//         }, time);
//     });
// };
// Promise.all([//Ошибка
//     getPromise(1000), 
//     getPromise(2000, false), 
//     getPromise(2500)
// ])
// Promise.allSettled([//1000/Ошибка/2500
//     getPromise(1000), 
//     getPromise(2000, false), 
//     getPromise(2500)
// ])
// Promise.race([ // 1000
//     getPromise(1000), 
//     getPromise(2000, false), 
//     getPromise(2500)
// ])
// Promise.any([ //2500
//     getPromise(1000, false), 
//     getPromise(2000, false), 
//     getPromise(2500)
// ])
// .then((data) => console.log(data))
// .catch((error) => console.log(error));


//  Promise.resolve()
//  Promise.reject()


//////////////////

// const getNumber = (number) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(number);
//         }, 1500);
//     });
// };

// const printNumber = async (number) => {
//     const result = await getNumber(number);
//     return result;
    // return new Promise((resolve) => {
    //     getNumber(number).then(result => {
    //         resolve(result)
    //     });
    // });
// };

// printNumber(250).then((data)=> console.log(data))