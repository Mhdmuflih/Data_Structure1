// Fibonacci Sequence
// -------------------------
// function fibonacci(n){
//     const fib = [0,1];
//     for(let i=2 ; i<n ; i++){
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib
// }

// console.log(fibonacci(2));   //[0,1]
// console.log(fibonacci(3));   //[0,1,1]
// console.log(fibonacci(7));   //[0,1,1,2,3,5,8]

// // Time complexity = Big-O = O(n) (Linear Time Complexity)


// that point value only here using in Recursion
// -------------------------
// const fibonacci = (n)=>{
//     if(n<2){
//         return n
//     }
//     return fibonacci(n-1) + fibonacci(n-2)
// }

// console.log(fibonacci(3));


// =============================================================================

// Factorial Of a Number
// -------------------------
// function factorial(n){
//     let result = 1;
//     for(let i=2 ; i<=n ; i++){
//         result = result * i
//     }
//     return result
// }

// console.log(factorial(0));   //1
// console.log(factorial(1));   //1
// console.log(factorial(5));   //120

// // Time Complexity = Bit-O = O(n) (Linear Time Complexity)


// recursive of Factorial of a number
// -------------------------
// const recursiveFactorial = (n)=>{
//     if(n === 0 ){
//         return 1;
//     }else{
//         return n * recursiveFactorial(n-1);
//     }
// }
// console.log(recursiveFactorial(5));

// // here the Time Complexity  = Big-O = O(n) (Linear Time Complexity)


// =============================================================================

//Prime Number
// -------------------------
// function isPrime(n){
//     if(n<2){
//         return false;
//     }
//     for(let i=2 ; i<n ; i++){
//         if(n%i === 0){
//             return false;
//         }
//     }
//     return true
// }

// console.log(isPrime(1));    //false
// console.log(isPrime(5));    //true
// console.log(isPrime(8));    //false

// // Time Complexity = Big-O = O(n) (Linear Time Complexity)

/* Time complexity change in here */
// -------------------------
// function isPrime(n){
//     if(n<2){
//         return false;
//     }
//     for(let i=2 ; i<= Math.sqrt(n) ; i++){
//         if(n%i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(3));    //true

// // Time Complexity = Big-O = O(sqrt(n)) (here chagne that time complexity)


// =============================================================================

// Power Of Two
// -------------------------
// function isPowerOfTwo(n){
//     if(n<1){
//         return false;
//     }
//     while(n>1){
//         if(n%2 !== 0){
//             return false;
//         }
//         n = n / 2
//     }
//     return true;
// }

// console.log(isPowerOfTwo(2));    //true
// console.log(isPowerOfTwo(5));    //false

// // Time complexity = Big-O = O(logn) (here input size reduce by half that's way choos this time complexity)


// =============================================================================

// linearSearch searching for a target element in a Array
// -------------------------
// function linearSearch(arr,target){
//     for(let i=0 ; i<arr.length ; i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// let arr = [1,2,3,4,5,3,54];
// let target = 5
// console.log(linearSearch(arr,target));

// // time Complexity = Big-O = O(n) (Linear Time Complexity)


// =============================================================================

//Binary Search
// -------------------------
// const binarySearch = (arr,target)=>{
//     let first = 0;
//     let last = arr.length - 1
//     while(first <= last){
//         let mid = Math.floor((first+last)/2);
//         if(target === arr[mid]){
//             return mid
//         }
//         if(target <= arr[mid]){
//             last = mid - 1
//         } else {
//             first = mid + 1
//         }
//     }
//     return -1
// }

// const arr = [1,2,3,4,5,6,7,8,9,10];
// const target = 8

// console.log(binarySearch(arr,target));

// // Time Complexity = Big-O = O(logn) (leasted loop)


// =============================================================================

// binary search using recursion.
// -------------------------
// const binarySearch = (arr, target, first = 0, last = arr.length - 1) => {
//     if (first > last) {
//         return -1;
//     }
//     const mid = Math.floor((first + last)/2);
//     if (arr[mid] === target) {
//         return mid;
//     } else if (target < arr[mid]) {
//         return binarySearch(arr, target, first, mid - 1);
//     }else {
//         return binarySearch(arr, target, mid + 1, last );
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let target = 8;
// console.log(binarySearch(arr, target))

// // Time Complexity = Big-O = O(logn)

// String in binary Search using recursion
// -------------------------
// let string = ['abi','baz','devid','devis','dravid','sachin','xavier'];
// let target = "dravid";

// const binarySearch = (string, target, first = 0, last = string.length - 1)=>{
//     if(first>last){
//         return -1;
//     }
//     let mid = Math.floor((first + last)/2);
//     if(target === string[mid]){
//         return mid;
//     }else if(target < string[mid]){
//         return binarySearch( string, target, first, mid - 1 );
//     }else{
//         return binarySearch( string, target , mid + 1, last );
//     }
// }
// console.log(binarySearch(string,target))

// // Time Complexity = Big-O = O(logn)


// =============================================================================

//sum of array
// -------------------------
// function sumOfArray(arr){
//     let sum = 0;
//     for(let i=0 ; i<arr.length ; i++){
//         sum += arr[i]
//     }
//     return sum
// }
// let arr = [1,2,3,4,5]
// console.log(sumOfArray(arr));

// sum of Array using Recursion
// -------------------------
// function sumOfArray(arr,index = 0){
//     if(index === arr.length){
//         return 0
//     }
//     return arr[index] + sumOfArray(arr,index + 1)
// }
// let arr = [1,2,3,4,5]
// console.log(sumOfArray(arr));


// =============================================================================

// change string characters
// -------------------------
// function change(str){
//     let s = str.split("")
//     let len = s.length - 1
//     let temp = s[len];
//     s[len] = s[0];
//     s[0] = temp

//     return s.join('');
// }
// let str = 'shan';
// console.log(change(str));


// =============================================================================


// let arr = [1,3,5,7,9]
// let target = 11
// // expecter out put tru or false
// function check(arr,target){
//     let left = 0;
//     let
// }

// console.log(check(arr,target));

// // console.log();
// // 271


class Node {
    constructor(Value){
        this.Value = Value;
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('its is empty');
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}