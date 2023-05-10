console.log("hi");

//Math object
// console.log(Math.random())
// console.log(Math.round(1.8))
// console.log(Math.max(1,4,3,8))

//String 

// let fullName = "Sombola Fathima"; //primitive
//Primitive converted to object when dot is used
// console.log(fullName.toUpperCase())

// let firstName = new String("Sombola") //Object

// Object literal {}
// String literal ''
// Template literal ``

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5));

// function sum(a,b){
//     let total = 0;
//     for(let value of arguments){
//         total += value;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4))

//all right values should be default prarameters
// function sum(a, b=5, c){
//     return a+b+c;
// }
// console.log(sum(5))


//GETTER SETTER

//getter -> access properties
//setter -> change or mutate properties

// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         if(typeof value !== String) {
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };