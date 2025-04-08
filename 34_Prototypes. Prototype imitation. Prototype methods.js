//Прототипное наследование 


 
// const rabit = {
//     jump: true,
// }

// const dog = {
//     run: true,
// }


// rabit.__proto__ = animal;
// dog.__proto__ = rabit;

// for (let key in dog){
//     let isOwn = dog.hasOwnProperty(key)

//     if(isOwn){
//         console.log(dog[key], key);

//     }
// }

// console.log(rabit.eat)
// console.log(dog.jump)
// console.log(dog.eat)


// const user = {
// name: "",
// age: 18,
// lvl: 1,
// coins: 0,
// };

// const admin ={
//     isAdmin: true,

// };

// admin.__proto__ = user;

// console.log(admin.age)




// const animal = {
//     eat: true,
// }
 
// function Rabbit(name) {
//     this.name = name
// }

// Rabbit.prototype = animal;

// const rabbit = Object.create(animal, {
//     jump: {
//         value: true,
//     },
// });

// console.log(Object.getPrototypeOf(rabbit))
