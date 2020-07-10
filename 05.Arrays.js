var arr = [2,3,4,5,2,"ABC","XYZ"]

// Similar to the lists in python
// Not necessary to have all elements of the same datatype
// Nested lists are also allowed

console.log(arr)

// Indexing can also be done similarly to that of string
console.log(arr[2])

// Arrays are also mutable in JS
arr[5] = 100
console.log(arr)

// Multi-Dimensional Arrays - Array of Array
var arr1 = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr1)
console.log(arr1[2])
console.log(arr1[1][1])

// Manipulating Arrays
// With Push and Pop Function
arr.pop()
arr.push(3,2,0)     //name.push(value, value)  u can pass any number of values
console.log(arr)

//shift() - Remove element from first
arr.shift()
console.log(arr)

//unshift() - Add element at the begining
arr.unshift(-5)
console.log(arr)