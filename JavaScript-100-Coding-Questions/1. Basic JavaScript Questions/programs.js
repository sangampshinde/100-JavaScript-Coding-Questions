//Q.1 Write a function to add two numbers.

// function add(num1, num2){
//     let sum;
//     sum = num1 + num2;
//     return sum;
//   }
  
//   let result = add(10,20);
//   console.log(`Sum of Two Numbers:`,result);

// -------------------------------------------------------------------------------


//Q.2 Write a function that checks whether a given number is prime.

// function IsPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     let i = 2;
//     let isPrime = true;

//     while (i * i <= num) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//         i++; 
//     }

//     if (isPrime) {
//         console.log(`The given number is prime:`, num);
//     } else {
//         console.log(`The given number is not prime:`, num);
// }

// }
// const number = parseInt(prompt('Enter a number:'));
// IsPrime(number)

// ----------------------------------------------------------------------------------------
// Q.3 factorial of the number

// function Factorial(num) {
//     if (num < 0) {
//       console.log(`factorial of Negative Number is Not Posssible`);
//       return;
//     }
//     let factorial = 1;

//     for (let i = 1; i <= num; i++) {
//       factorial *= i;
//     }

//     return factorial;
//   }
  
//   const Number = parseInt(prompt('Enter your number'));
  
//   let result = Factorial(Number);
  
//   console.log(`Factorial of Number ${Number}is ${result}`);


// ------------------------------------------------------------------------------------
  
// Q.4 Fibonacci Series
// Generate the Fibonacci series up to a given number.

// const limit = parseInt(prompt(`Enter limit for Fibonacci series:`));



/* -function take input of limit
   -then generate fibonacci series 
   -return fibonacci series */

// function FibonacciSeries(limit){

//     if(limit<0){
//         console,log(`fibonacci series of nagetaive number is not defined`)
//         return;
//     }

//     let arr = [];
//     let a=0;
//     let b=1;

//     while ( a <= limit ) {
//         arr.push(a);
//         let next = a + b;
//         a = b;
//         b = next;
//     }

//     return arr;
// }

// let result = FibonacciSeries(limit);

// console.log(`fibonacci series of ${limit} is ${result}`);

// -----------------------------------------------------------------------------

// Q.5 Reverse a String
// Write a function that reverses a given string.


// function reverseString(str){

//    let reversed = '';
//    for( let i = str.length-1; i>=0; i--)
//    {
//       reversed +=str[i];
//    }
//    return reversed;
// }

// let userInput = prompt('Enter any string:');
// let result = reverseString(userInput);

// console.log(result)

// ------------------------------------------------------

// Q.6 Palindrome Check
//Write a function to check if a string is a palindrome. 


// function isPalindrome(str){
//    let lowerCase="";

//    for(let i=0; i<str.length; i++){
//       lowerCase += str[i].toLowerCase();
//    };

//    let start = 0;
//    let end = str.length-1;

//    while(start<end){
//       if(lowerCase[start]!=lowerCase[end]){
//          return false;
//       }
//       start++;
//       end--;
//    }
// return true;
// }

// console.log(isPalindrome("Level"));  
// console.log(isPalindrome("madam"));

// -------------------------------------------------------















  
  