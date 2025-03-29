//методы call, apply, bind. Декораторы

// function printName(text, text2) {
//     console.log(this)
//     console.log(text+ text2 + this.firstName);
// }

// const user = {
//     firstName: 'Vitaliy',
// };
// printName.call(user, "Hello ", "world " );
// printName.apply(user, ["hello ", "world"]);         apply (масивы)
// let foo = printName.bind(user,"Hello ");         bind (более гибкий метод)
// foo();
// foo("world ");


// function mul(a,b){
//     console.log(a*b);

// }

// let double = mul.bind(null, 2);
// let triple = mul.bind(null, 3);

// double(9);
// triple(4);



/*********************Декораторы******************/

// let printValue = (x) => {
//     //тут что то сложное и ресурсоемкое 
//     return x * 2;
// };

// const cachingDecorator = (func) => {
//     let cache = new Map()

//     return function (x) {
//         if (cache.has(x)) {
//             console.log("cache")
//             return cache.get(x)
//         }
//         let result = func(x)
//         cache.set(x, result)
//         console.log("!cache")


//         return result;
//     };
// };

// printValue = cachingDecorator(printValue);

// console.log(printValue(2));
// console.log(printValue(2));

