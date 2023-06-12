// let user = {
//     name: "Tom",
//     age: 26,
//     display(){
//         console.log(this.name, this.age);
//     },
//     move(place){
//         console.log(this.name, "goes to", place);
//     }
// };
// user.display();
// user.move("the shop");



// const prop1 = "name";
// const prop2 = "age";
// let tom = {
//     [prop1]: "Tom",
//     [prop2]: "25",
//     display(){
//         console.log(this.name, this.age)
//     },
//     move(place){
//         console.log(this.name, "goes to", place, "because he almost", this.age)
//     }
// };
// tom.display();
// tom.move("to the theatre");


// function createObj(propName,propValue ) {
//     return{
//         [propName]: [propValue],
//         print(){
//             console.log(`${propName}: ${propValue}`);
//         }
//     };
// }
// let person =createObj("name", "Tom");
// person.print();

// let book =createObj("title", "Book of magic");
// book.print();


// function getSalary(status){
//     if(status==="senior")return 1500;
//     else return 500;
// }
// const name = "Ivan";
// const age = 28;
// const status = "senior";
// const person = { name: name, age: age, salary: getSalary(status)};
// console.log(person);



//  Get the window of browser
// const move = (place) => { console.log(this.name, "goes to", place); console.log(this);};
// const name = "Bob"
// const person = { name, move}
// person.move("cinema")


// var country = {
//     name: "Russia",
//     language: "Русский, Russian",
//     capital:{
//         name: "Moscow",
//         population: 13_097_539,
//         birthYear: 1147
//     }
// };

// console.log(`Capital of ${country.name} is ${country.capital.name}.`);
// console.log(`Population of ${country["capital"]["name"]} is ${country.capital.population}`);
// console.log(`${country.capital.name} is the Greatest city. I was born in ${country.capital.birthYear}!`)



// var country = {
//     name: "Switzerland",
//     languages: ["doutch", "french", "italian"],
//     capital:{
//         name: "Bern",
//         population: 126598
//     },
//     cities: [
//         { name: "Czurich", population: 378884},
//         { name: "Gheneva", population: 188634},
//         { name: "Bazel", population: 164937}
//     ]
// };
// document.write("<h3>Official languages in Switzerland</h3>");
// for(var i = 0; i < country.languages.length; i++)
//     document.write(country.languages[i] + "<br/>");
// document.write("<h3>Cities of the Switzerland</h3>");
// for(var i =0; i < country.cities.length; i++)
//     document.write(country.cities[i].name + "<br/>");


// const tom ={name: "Tom", age: 25};
// const bob = Object.assign({tom});
// bob.name = "Bob";
// bob.age = 45;

// console.log(`object tom. Name: ${tom.name} Age: ${tom.age}`);
// console.log(`Object bob. Name: ${bob.name} Age:${bob.age} `);



// const bob = {name: "Bob", company:{title: "Yandex"}};
// const tom = Object.assign({}, bob);
// tom.name = "Tom";
// tom.company.title = "Himself";
// console.log(tom.name);
// console.log(tom.company.title);

// function disemvowel(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const chars = str.split('');
//   const filteredChars = chars.filter(char => !vowels.includes(char.toLowerCase()));
//   const result = filteredChars.join("");
//   return result;
// }



// disemvowel = str => str.replace(/[aeiou]/gi,'');
// const str = "This website is for losers LOL!";
// const result =  disemvowel(str);
// console.log(result);

// const tom = {
//   name: "Tom",
//   age: 29,
//   print(){
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// };
// for(const prop  of Object.keys(tom)){
//   const value = tom[prop];
//   console.log(prop,value);
// }




// function reverseString(str){
//   return str.split("").reverse().join("")
// }

// function reverseWords(str) {
//   // Разбиваем строку на массив слов
//   var wordsArray = str.split(' ');

//   // Проходимся по каждому слову и переворачиваем его
//   for (var i = 0; i < wordsArray.length; i++) {
//     var word = wordsArray[i];
//     var reversedWord = '';
//     for (var j = word.length - 1; j >= 0; j--) {
//       reversedWord += word[j];
//     }
//     wordsArray[i] = reversedWord;
//   }

//   // Склеиваем слова обратно в строку и возвращаем результат
//   return wordsArray.join(' ');
// }

// function reverseWords(str) {
//   return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
// }
// // Пример использования
// var str = 'о этот дивный ипрекрасный мир';
// var reversedStr = reverseWords(str);
// console.log(reversedStr); // 'ро тэто йнвид и сяркерпный рим'

// function createPhoneNumber(numbers){
//     var phoneNumber = numbers.join("");
//     var areaCode = phoneNumber.substring(0,3);
//     var firstPart = phoneNumber.substring(3,6);
//     var secondPart = phoneNumber.substring(6,10);
//     return `(${areaCode}) ${firstPart}-${secondPart}`;
// }

// var numbers = [1,2,3,4,5,6,7,8,9,0];
// var formated = createPhoneNumber(numbers);
// console.log(formated);

// function createPhoneNumber(numbers){
//     return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }
// var numbers = [1,2,3,4,5,6,7,8,9,0];
// var formated = createPhoneNumber(numbers);
// console.log(formated);

// function maxNumber(num){
//     let numStr = num.toString();
//     let numArr = numStr.split("");
//     numArr.sort(function(a,b){return b-a});
//     let maxNumStr = numArr.join("");
//     return parseInt(maxNumStr);
// }

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
// }

// console.log(descendingOrder(12345));

// function createUser(pName, pAge){
//     return{
//         name: pName,
//         age: pAge,
//         displayInfo: function() {
//             document.write("Name:<br/> " +  this.name + " Age: " + this.age + "<br/><br/><br/><br/>");
//         },
//         driveCar: function(car){
//             document.write(this.name + " driving car " + car.name + "<br/>")
//         } 

//     };
// };

// function createCar(cName, cAge){
//     return{
//     name: cName,
//     age: cAge
//     };
// };

// var tom = createUser("Tom", 26);
// tom.displayInfo();
// var bently = createCar("Bentley", 2023);
// tom.driveCar(bently);


// function User(pName, pAge){
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function(){
//         document.write("Name: " +  this.name + "<br/>" + " Age: " + this.age + "<br/>")
//     };
// };

// User.prototype.hello = function(){
//     document.write(this.name + " says: 'Hello!'<br/>")
// };
// User.prototype.maxAge = 110;
// User.prototype.answerHello = function(){
//     document.write(this.name + " says: 'Hi! How are you?'<br/>")
// }

// function Car(cName, cAge){
//     this.name = cName;
//     this.age = cAge;
//     this.getCarInfo = function(){
//         document.write("Model: " + this.name + "<br/>" + "Age" + this.age + "<br/>")
//     }; 
// };

// var ivan = new User("Ivan", 28);
// ivan.hello();
// var daria = new User('Daria', 30);
// daria.answerHello();
// console.log(ivan.maxAge);
// console.log(daria.maxAge);
// var tesla = new Car("Tesla", 2023);
// ivan.driveCar(tesla);

// function User(pName, pAge) {
//     this.name = pName;
//     var age = pAge;
//     this.displayInfo = function () {
//         document.write("Name: " + this.name + ";<br/> Age: " + age + (";<br/>"));
//     };
//     this.getAge = function () {
//         return age;
//     };
//     this.setAge = function (_age) {
//         if (typeof age === "number" && age > 0 && age < 100) {
//             age = _age;
//         } else {
//             console.log("Error");
//         };
//     };
// };
// var ivan = new User("Ivan", 28);
// console.log(ivan.age);
// console.log(ivan.getAge());
// ivan.setAge(101);
// console.log(ivan.getAge());
// ivan.setAge("101");
// console.log(ivan.getAge());


//---------------------------------Функция как объект. Методы call и apply.--------------------------------------

// var square = new Function('n', 'return n * n;');
// console.log(square(5));

// function add(x, y){
//     return x+y;
// };
// var result = add.call(this, 3, 8);
// console.log(result);

// function User(name, age){
//     this.name = name;
//     this.age = age;
// };
// var ivan = new User("Ivan", 28);
// function display(){
//     console.log("Your name: " + this.name)
// };
// display.call(ivan);

// function add(x,y){
//     return x+ y;
// };
// var result = add.call(null, 3, 8);
// console.log(result);

// function add(x,y){
//     return x+y; 
// };
// var result = add.apply(null, [3,5]);
// console.log(result);

// ------------------------------------------Наследование------------------------------------------------------

// function User(name, age){
//     this.name = name;
//     this.age = age;
//     this.go = function(){document.write(this.name + " go <br/>");};
//     this.displayInfo = function(){
//         document.write("Name: " + this.name + ";<br/> age: " + this.age + "<br/>");
//     };
// };
// User.prototype.maxAge = 100;

// function Employee(name, age, comp){
//     User.call(this, name, age);
//     this.comp = comp;
//     this.displayInfo = function(){
//         document.write("Name: " + this.name + ";<br/> age: " + this.age + ";<br/> company: " + this.comp + "<br/>"); 
//     };
// };
// Employee.prototype =Object.create(User.prototype);

// var ivan = new User("Ivan", 28);
// var daria = new User("Daria", 30);
// var bill = new Employee("Bill", 32, "Google");
// ivan.go();
// bill.go();
// ivan.displayInfo();
// console.log(bill.maxAge);
// bill.displayInfo();
// console.log(bill.age);
// document.write(bill.age);

//--------------------------------------Ключевое слово this-----------------------------------------------------

// function foo(){
//     console.log(this.bar)
// };

// var o1 = {bar: "Bar1"};
// var o2 = {bar: "Bar2"};
// var o3 = {bar: "Bar3"};

// var bar = "Bar4";
// foo();
// var func = foo.bind(o3);
// func();

// const person = {
//     name: "Ivan",
//     hello(){
//         console.log("Hello");
//         let say =()=> console.log(`My name is ${this.name}`);
//         say();
//     }
// };
// person.hello();


// const school = {
//     title: "Oxford",
//     courses: ["Js", "Java", "C#"],
//     printCourses: function(){
//         this.courses.forEach((course)=>console.log(this.title, course))
//     }
// }
// school.printCourses();


//------------------------------------------------Деструктуризация-----------------------------------------------
