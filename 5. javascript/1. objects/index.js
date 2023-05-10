console.log("hi");

// let rectangle = {
//     length:10,
//     breadth:20
// }

//Functions are OBJECTS

//Primities copied by their value
//References copied by their address/referance

//Iterating throgh Objects
//for-of (Objects)
// for(let key in rectangle){
//     console.log(key, rectangle[key])
// }

// for (const [key, value] of Object.entries(object)) {
//     console.log(`${key}: ${value}`);
// }

// for (let key of Object.entries(rectangle)) {
//     console.log(key);
// }


//for-in (iterables)-maps, arrays (which have index)


//Check if property is present in Object
// if('length' in rectangle)
//     console.log('present')



//object create
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

//factory function 

// function createRectangle(len, bre) {

//     const rectangle = {
//         length: len,
//         breadth:bre ,

//         draw() {
//             console.log('drawing rectangle');
//             // console.log(length+ " "+breadth);  // Error bcoz-notinitialized
//             console.log(this.length+ " "+this.breadth);
//         }
//     };
//     return rectangle;
// }

// let rectangleObj1 = createRectangle(5, 4);
// rectangleObj1.draw();
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }

// //object creation using constrcutor function
// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);












// let Rectangle1 = new Function(
//     'length', 'breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw= function() {
//     console.log('drawing');
// }`);

// //object creation using Rectangle1
// let rect = new Rectangle1(2,3);
















// let a = { value: 10};
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);


// let a = 10;
// function inc(a) {
//     a++;
// }
// inc(a);
// console.log(a);


// let a = {value:10 };
// function inc(a) {
//     a.value++;
// }
// inc(a);
// console.log(a.value);



//object - colone #1 - Iteration
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);s



//Object Cloning #2 - Assign
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

//Object Cloning #3 - spread
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);

// src.a++;

// console.log(dest);





