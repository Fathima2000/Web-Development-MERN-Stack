//Adding in array
// let numbers = [1,4,5,7];
// console.log(numbers);
// //end -> push
// //beginning -> unshift
// //middle -> splice

//deleting array
// let arr = [1,2,3,4];
// let arr1 = arr;
// arr = [] // Not recommeded to use this
// console.log(arr);
// console.log(arr1);
// arr.length=0;
// arr.splice(0,arr.length);

//REMOVING ELEMENT
// let numbers = [1,2,3,4,5,6,7];
// //end
// numbers.pop();
// //beginning
// numbers.shift();
// //middle
// numbers.splice(2, 1);
// console.log(numbers);


// //Searching
// console.log(numbers);
// console.log(numbers.indexOf(9));
// //we want to check if a number exist in an array
// if(numbers.indexOf(4) != -1) 
//     console.log("present");
// console.log(numbers.includes(7));
// console.log(numbers.indexOf(4, 2) );
// let courses = [
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];
//console.log(courses);
//console.log( courses.includes( {no:1, naam:'Love'} ) );
// let course =  courses.find(course => course.naam === 'Kilvish');
// function(course) {
//     return course.naam === 'Love';
// }
// console.log(course);

//Combining + Slicing - arrays
// let arr1 = [1,2,3];
// let arr2 = [5,6,2];
// let combinedArr = arr1.concat(arr2);
// console.log(combinedArr);
// console.log(combinedArr.slice(2,4))
// console.log(combinedArr.slice(2))
//homework
// combining & splicing on Objects
//spread
// let arr1 = [1,2,3];
// let arr2 = [5,6,2];
// let combinedArr = [...arr1,'hi',...arr2]
// console.log(combinedArr)

//sorting
// let arr = [4,100,3,1,70];
// console.log(arr.sort())
// arr.sort((a,b)=>a-b)
// console.log(arr)
//if a-b(3-4) is negative a-I, b-II
//if a-b(4-3) is positive b-I, a-II

let numbers = [10,20,30,40,50];
const joined = numbers.join(',');
console.log(joined);