// Классы

// class MyClass {
//     isAdmin = false;
//     constructor(name){
//         this.name = name
//         this.isAdmin = true
//     }
//     method1() {
//         console.log("Hello");
//     }
//     method2(){
//         console.log("hello")
//     }
//     get printName() {
//         return this.name
//     }
// }


// new MyClass();
// console.log(typeof MyClass)


// let user1 = new MyClass('Vitaliy')
// console.log(user1)

// user1.method1();
// console.log(user1)


// class Animal { 
//     static printName = "это класс дя создания животного"
//     static method() {
//         console.log("это код метода класса")
//     }
//     constructor(name) {
//         this.name = name
//         this.speed = 0
//     }

//     run(speed) {
//         this.speed = speed
//         console.log(`${this.name} бежит со скоростью ${this.speed}`)
//     }

//     stop() {
//         this.speed = 0;
//         console.log("Мы остановили животное");
//     }
// }
// class Rabbit extends Animal {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }
//     hide() {
//         console.log("Я спрятался")
//     }
//     stop() {
//         super.stop()//вызывает срабатываение родителського метода
//         this.hide()
//         console.log(`мой возраст ${this.age}`
//         );
//     }
// }

// const rabbit = new Rabbit("Кролик", 10);
// rabbit.stop();
// console.log(rabbit);
// Rabbit.method();




/*Example*/

// class CoffeeMaachine {
//     _waterAmount = 0;//свойство используеться исключительно внутри данного класса
//     #coffeeCounter = 0//свойство становиться "приватным" и вызвать его из-вне нельзя
//     constructor (power){
//         this.power = power;
//     }
//     set addWater(value){
//          this._waterAmount += value;
//     }
//     get waterAmount() {
//         return this._waterAmount
//     }
//     createCoffe() {
//         if(this._waterAmount >= 200){
//             this._waterAmount -= 200
//             console.log("Мы создали чашку кофе")
//         } else {
//             console.log("Извините, но вода зкончилась :(")
//         }
//     }
//     coffeeCounter () {
//         this.#coffeeCounter +=1;
    
//         console.log(`всего чашек кофе ${this.#coffeeCounter}`)
//     }
// }


// const coffeeMaachine = new CoffeeMaachine (100);
// console.log(coffeeMaachine.waterAmount);
// coffeeMaachine.addWater = 1000;
// console.log(coffeeMaachine.waterAmount);

// coffeeMaachine.coffeeCounter()
// coffeeMaachine.coffeeCounter()
// coffeeMaachine.coffeeCounter()
// coffeeMaachine.coffeeCounter()
// coffeeMaachine.coffeeCounter()
// coffeeMaachine.coffeeCounter()
// coffeeMaachine.coffeeCounter()




// console.log(coffeeMaachine)
 