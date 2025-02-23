// const array = [1,2,3,4,5]

// array.push(6) Добавляем элемент в конец списка 
// array.unshift(0) Добавляем элемент в начало списка 
// array.pop() - Удаляем последний элемент списка 
// array.shift() Удаляем первый элемент списка

// array.splice(2,1,)
// console.log(array)//[1, 2, 4, 5]

// console.log(array.splice(2,1))//4


// array.splice(2,1, 10,11)
// console.log(array)//[1, 2, 10, 11]



// const newArray = array.slice(1, 3)
// console.log(newArray)




// const array1 = [1,2,3,4,5]
// const array2 = [6,7]
// const array3 = [8,9]



// const newArray = array1.concat(array2, array3,[10,11])
// console.log(newArray)

/////////////////////////////////////////////

// const array = [1,2,3,4,5]

// array.forEach((item, index, ar)=>{
//     console.log(item, index, ar);
// } )





// const array = [1,2,3,4,5]
// const result = array.indexOf(4);
// console.log(result)// 3
// const result2 = array.indexOf('d');
// console.log(result2)// -1


// const array = [1,2,3,4,5]
// console.log(array.lastIndexOf(1))//0



// const array = [
//      { name: "Vasia", id: 1}, 
//     { name: "Kolya", id: 2}, 
//     { name: "Vitalik", id: 1,} 
//     ]

//     const result = array.filter((item) => item.id === 1); 
//     console.log(result);



// const array = [1,2,3,4,5]


// const result = array.filter((item) => item >2); 
//  console.log(result);//[3, 4, 5]


/************************************************************************ */

// const array = [1,2,3,4,5]

// const result = array.map((item)=> item*2)
// console.log(result)//[2, 4, 6, 8, 10]




// const array = [1,14,2,15,13,35]

// const result = array.sort((a,b) => a -  b); 
// console.log(result)






// const array = [1,14,2,15,13,35]
// const result = array.reverse(); 
// console.log(result)//(6) [35, 13, 15, 2, 14, 1]




// const array = [1,14,2,15,13,35]

// const stringResult = array.join(" + ")
// console.log(stringResult)//1 + 14 + 2 + 15 + 13 + 35




// const array = [1, 2, 11, 4, 32, 6, 7, 44];

// const stringResult = array.join(" + ");

// console.log(stringResult);
// let result = stringResult
//     .split(" + ")
//     .map((item) => Number(item))
//     .filter((item) => item > 10);
// console.log(result);



// const array = [1, 2, 11, 4, 32, 6, 7, 44];

// const result = array.reduce((acc, item, index, arr ) => {
//     return acc + item;
// }); 

// console.log(result)//107