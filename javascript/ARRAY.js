// ARRAY DECLARATION 
const arr = [1,2,3,4,5]//array declare in square brackets 
console.log(arr)

const arr1 = new Array('india','japan','korea','russia')// ANOTHER WAY TO DECLARE ARRAY  
// console.log(arr1)
// console.log(arr1.length)

// console.log(arr1[3]) // to access element of array by index vlaue

// ARRAY METHODS 
// arr.push(5) // to add element in array at last
// console.log(arr)

// console.log(arr.pop()) // it remove the last element in the array and give remove elememt as ouput
// console.log(arr)

// console.log(arr.unshift(4,6)) 
// /*it add element at starting of array NOTE: it do not give the the array itself it give the length of new array after adding  elemnt */

// console.log(arr)
// console.log(arr.shift())// are use to delete the ushift element from begning
// console.log(arr.shift())
// console.log(arr)
//console.log(arr.indexOf(4)) return the index of element

// console.log(arr.includes(4))// it give result in TRUE OR FALSE if value is exist

// const newstring = arr.join()// convert the array into string
// console.log( typeof newstring)


// SPLICE AND SLICE

// console.log("A",arr)
// console.log("B",arr.slice(1,3));
// console.log(arr);

// console.log("c",arr.splice(1,3))/*it seperate the slice array(including ending index element)
//                                  from the original array and original array change and
//                                  give only rest element */
// console.log(arr)

const arr2= new Array('paris','london','china')
console.log(arr2)
// const firstconcate = arr1.concat(arr2)
// console.log(firstconcate);

 const secondconcat = [...arr1,...arr2]; // SPREAD OPERATOR add two array 
// console.log(secondconcat);

console.log(Array.from("HARSH"))// convert string into array
//console.log(Array.isArray(arr2))

let n1 =11
let n2=33
let n3=22
console.log(Array.of(n1,n2,n3))
