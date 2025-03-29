//Флаги и дискрипторы свойств
//Геттеры и сеттеры

// const user = {
//     name: "Vitaliy",
//     age: 31,
// };

// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// Object.defineProperty(user,'name', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// } );

// user.name = "Vasiliy"//false

// for (let key in user) {
//     console.log(user[key])//только age 
// }

// delete user.name;//false



// const user = {
//     name: "Vitaliy",
//     age: 31,
// };

// Object.preventExtensions(user);//не дает добавлять новые свойства

// user.country = "Ukraine";//false

// delete user.age;//true

// console.log(user)

// Object.freeze(user)//нельзя(менять,добавлять,удалять) новые свойства

// console.log(Object.isFrozen(user))//проверка на возможность изменений




/***************************Getter&Setter**************************** */

// const  user = {
//     name: 'Vitaliy',
//     secondName: "Koval",
//     age: 31,
//     get fullName () {
//         return this.name + this.secondName;
//     }, 
// };

// user.fullName = 'Eremenko Vasia';
// console.log(user.fullName)
