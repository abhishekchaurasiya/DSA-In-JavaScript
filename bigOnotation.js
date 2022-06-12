
//write a program to add numbers from 1 to n
let n = 500

//naive technique
let sum = 0

for (let i = 1; i <= n; i++) {
    sum = sum + 1
}

// console.log(sum)

//time complexity = O(n) // also known as Big O notation

// improved technique

let BetterSum = (n * (n + 1)) / 2
// console.log(BetterSum)

//time complexity = O(1) 

//space complexity

//swap two numbers a and b

let a = 23
let b = 78
// a = 78  b = 23
temp = a //temp = 23
a = b // a = 78

// Space complexity ==> Total space taken by the algorithm with respect to the input size 
//analysis of space ==> n(array size) + 20 +1  ==> n+11 space complexity O(n)


// In array access of an elemetn time complexty is O(1)
// add element in end of the array O(1)  array.push(1)
// remove element fromend of the array O(1)  array.pop(1)


// Insertion in begining in the array
// (operation performend) insertion O(1) + rearengement of index O(n) 
// total time complexity of insertion in begining of the array is O(n)

// Insertion in the middle of the array 
// time complexity O(n)

// Exmple find if 6 is present in an array 

// Best case input 

let array = [1, 3, 4, 6, 3, 5, 6, 7, 8]

// 0=> 3, 1=>4

var msg = "element is not present";
for (var i = 0; i < array.length; i++) {
    if (array[i] == 5) {
        msg = "element is present"
        break;
    }
}

// console.log(msg)

// best case time complexity of seraching an element O(1) Omega

// average case arrary 1, 3, 4, 6, 3, 5, 6, 7, 8 avg time complexity O(n) that notation

// Worst case time complexity O(n)  big oh notation

// quicksort worst as O(n2)  avg case O(nlogn)

// console.log(msg.i)

// Object 

var obj = {};  // time complexity O(1);

obj.fname = "abhishek";  // Object.key ==> insertion O(1) constant
obj.lname = "chaurasiya"
obj.age = 25;
obj.designation = "full stack developer"

// access time complexity O(1)
console.log(obj.fname + " " + obj['fname'])

// deletion time complexity is also O(1)

// searching tie complexity in Object is O(n)
// if any key have value 25

// time complexity of Object.keys is O(n)
// console.log(Object.keys(obj))

// time complexity of Object.values is O(n)
// console.log(Object.value(obj))

// time complexity of Object.entries is O(n)
// console.log(Object.entries(obj))







