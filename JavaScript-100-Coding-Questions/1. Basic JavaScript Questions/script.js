// Q.1 Sum Of Two Number

// function sum(num1,num2) {
//      let c = 0;
//      c = num1 + num2;
//      return c;
// }

// let a = parseInt(prompt(`Enter First Number:`));
// let b = parseInt(prompt(`Enter Second Number:`));

// let result = sum(a,b);

// console.log(`Sum of ${a} + ${b} = ${result}`);

// -----------------------------------------------------------------------

// Q.2  Check Weather The Number is Prime Or Not

    // function IsPrime(num){
    
    //     // check weather Number is less than 0
    //     if(num<=1){
    //       return false;
    //     }

    //     let i = 2;
    //     let isPrime = true;

    //     // check division of every number less than num with our num
    //     while(i<num){ 

    //         if(num%i===0){
    //             isPrime = false;
    //             break;
    //         };

    //         i++;
    //     }

    //     if(isPrime){
    //         console.log(`Given number ${num} is a Prime Number`);
    //     }else{
    //         console.log(`Given number ${num} is Not a Prime Number`);
    //     }

    // }

    // let number = parseInt(prompt(`Enter Your Number :`));
    // IsPrime(number);


// Q.3 Fibonacci Series 

// function fibonacciSeries(limit){
    
//     if(limit<0){
//         console.log(` Fibonacci Series of Negative numbers are not defined`);
//         return;
//     }

//     let arr = [];
//     let a = 0;
//     let b = 1;
//     let next;

//     while (a <= limit){
//         arr.push(a);
//         next = a + b;
//         a = b;
//         b = next;
//     }

//     return arr;

// }

// const limit = parseInt(prompt(`Enter a limit :`));
// let result = fibonacciSeries(limit);
// console.log(`Fibonacci Series Upto ${limit} is ${result}`);


// Q.4 Reverse a String

// function reverseString(str){

//     let reversed = '';

//     for(let i = str.length-1; i >= 0; i--){
//         reversed += str[i];
        
//     }

//     return reversed;
// }

// const string = prompt(`Enter a String:`);
// let result = reverseString(string);
// console.log(`Reversed string is ${result}`);

// Q.5 Palindrome Check of string

// function IsPalindrome(str){
//  let reverse='';

//  for (let i = str.length-1; i>=0; i--){

//     reverse += str[i];

//  }

//  if(reverse === str){
//     return true;
//  }else{
//     return false;
//  }

// }

// console.log(IsPalindrome("racecar"))
// console.log(IsPalindrome("hello"));



// Q.6 Find Max of array

// function findMax(arr){

//     let max = arr[0];

//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }

//     return max;
// }

// console.log(findMax([-1,-3,-7,-2]));

// Q.6 Find Min of array

// function findMin(arr){

//     let min = arr[0];

//     for(let i=1; i<arr.length;i++){

//         if(arr[i]<min){
//             min = arr[i];
//         };
//     }

//     return min;
// }

// console.log(findMin([-1,-3,-7,-2]));

// -------------------------------------------------------------

// Q.7 Count Vovels in A String

// function countVowels(str){

//     let count = 0;

//     for (let i=0; i<str.length; i++){
//         let char = str[i];

//         if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'||
//             char==='A'||char==='E'||char==='I'||char==='O'||char==='U')
//         {
//             count++;
//         }

//     }
//     return count;
// }


// let inputString='abc def ghi';
// console.log( 'number of Vovels are ',countVowels(inputString));

// ------------------------------------------------------------------------

// Q.8 




