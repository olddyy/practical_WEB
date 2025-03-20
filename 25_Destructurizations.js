// // Деструктуризация масивов и обьектов

// // const arr = ["Vitaliy", "Pavel"];

// // const [name1, name2,] = arr;// new Set(arr)=arr
// // const name2=arr[1];//

// // console.log(name1, name2)




// // const arr = ["Vitaliy", "Pavel","Kolya","Olya","Petya"];
// // const [name1, name2, ... otherNames] = arr;
// // console.log(name1, name2, otherNames)




// // const arr = ["Vitaliy", "Pavel","OLya"];
// // const [name1, name2, name3 = "otherNames"] = arr;
// // console.log(name1, name2, name3)







// //Диструктуризация обьектов

// const user = {
//     name: "Vitaliy",
//     age: 30,
//     isMarried: true,
//     country: "Ukraine",
//     street: {
//         name: "Molodegnaya"
//     },
// };

// // const age = 69;

// // const {name,age:age2} = user
// const { name, age, street: {name: streetName} } = user;
// console.log(name, age, streetName)







//Функции \



// const anyFunk = ({ name, age, isMaried, country }) => {
//     console.log(name, age, isMaried, country)
// };
// const params = {
//     name: "Vitaliy",
//     age: 30,
//     isMaried: true,
//     country: 'Ukraine',
// };

// anyFunk(params)  