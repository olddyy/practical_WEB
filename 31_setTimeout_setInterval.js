//Планирование setTimeout & setInterval         

// const printHello = (text) => {
//     console.log(text)
// }

// window.setTimeout(printHello, 6000, "Hello World")
// setTimeout(() => {
//     printHello("Hello World #2")
// }, 2000);


//Асинронный код даже с 0-левой задержкой виполняется после синхроных операций
// setTimeout(printHello, 0, "Hello World")
// console.log(123)


// let timerId = setTimeout (printHello, 4000, "hello");
// clearTimeout(timerId);
// console.log(timerId);  


//  let timerId = setInterval (printHello, 4000, "hello");//цикличний запуск функции


//лучше чем setInterval
// const costomSetInerval = (func, interval, ...params) => {
//     setTimeout(()=> {
//         func(...params);
//         costomSetInerval(func,interval,...params);
//     },interval);
// };

// costomSetInerval(printHello, 1000, "hello");