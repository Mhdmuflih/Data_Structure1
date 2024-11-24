// const array = [1,2,3,4,'manu'];
// array.push(5);
// array.shift();
// array.pop();
// array.pop();
// array.unshift('manu');
// console.log(array)

// // for(let i=0 ; i<array.length ; i++) {
// //     console.log(array[i])
// // }
// for(let arr in array) {
//     console.log(arr)
// }

// const obj = {
//     name: "manu",
//     age: 22,
//     address: "calicut",
//     fullName: function () {
//         console.log(this.name);
//     }
// }

// obj.name = 'muflih';
// console.log(obj['name']);
// obj.fullName();

// console.log(Object.entries(obj))

// const arr = [2,2,3,4,3,5,1];
// const set = new Set(arr);
// console.log(set);
// console.log(set.has(8));
// set.delete(4);
// console.log(set);

// ---------------------------------------

// function fibonacci(n) {
//     let result = [0,1];
//     for(let i=2 ; i<n ; i++) {
//         result[i] = result[i-1] + result[i-2];
//     }
//     return result;
// }

// console.log(fibonacci(8))

// function RecFibonacci(n) {
//     if(n<2) {
//         return n;
//     }
//     return RecFibonacci(n - 1) + RecFibonacci(n - 2);
// }

// console.log(RecFibonacci(3))

// function Factorial(n) {
//     let result = 1;
//     for(let i=2 ; i<=n ; i++) {
//         result *= i
//     }
//     return result;
// }

// console.log(Factorial(5));

// function RecFactorial(n) {
//     if(n === 0) {
//         return 1;
//     }
//     return n * RecFactorial(n-1);
// }

// console.log(RecFactorial(5))

// function isPrime(n) {
//     if(n < 2){
//         return false;
//     }

//     for(let i=2 ; i<n ; i++) {
//         if(n%i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(2))

// function isPowerOfTwo(n) {
//     if(n<1) {
//         return false;
//     }

//     while(n>1) {
//         if(n%2 !== 0) {
//             return false;
//         }
//         n = n / 2;
//     }
//     return true;
// }

// console.log(isPowerOfTwo(4))


// linearSearch

// function linearSearch(arr, target) {
//     for(let i=0 ; i<arr.length ; i++) {
//         if(arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// let arr = [15,23,52,5,6,3];
// let target = 52;
// console.log(linearSearch(arr , target));

// binarysearch

// function binarySearch(arr , target) {
//     let first = 0 ;
//     let last = arr.length - 1;
//     while(first<=last) {
//         let mid = Math.floor((first + last) / 2);
//         if(arr[mid] === target){
//             return mid
//         }
//         if(target <= arr[mid]) {
//             last = mid - 1
//         }else {
//             first = mid + 1
//         }
//     }
//     return -1;
// }

// let arr = [1,2,3,4,5,6,7];
// let target = 5;
// console.log(binarySearch(arr , target))

// function RecBinarySearch(arr , target , first = 0 , last = arr.length - 1) {
//     if(first > last) {
//         return -1
//     }

//     const mid = Math.floor((first + last) / 2);
//     if(arr[mid] === target) {
//         return mid
//     }else if(target <= arr[mid]) {
//         return RecBinarySearch(arr , target , first , mid - 1);
//     }else {
//         return RecBinarySearch(arr , target , mid + 1 , last);
//     }
// }

// let arr = [2,3,4,5,6,7,8];
// let target = 7;
// console.log(RecBinarySearch(arr , target));


// function sumOfArray(arr) {
//     let sum = 0;
//     for(let i=0 ; i<arr.length ; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let arr = [1,2,3,4];
// console.log(sumOfArray(arr));


// function RecSumofArray(arr , index = 0) {
//     if(index === arr.length){
//         return 0;
//     }else {
//         return arr[index] += RecSumofArray(arr , index + 1)
//     }
// }

// let arr = [1,2,3,4];
// console.log(RecSumofArray(arr));




