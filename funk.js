//Part 1
// function maxOfTwoNumbers(x, y) {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }

//   }
  
//   console.log(maxOfTwoNumbers(3, 9));

//Part 2
// function maxOfThreeNumbers(x, y, z) {
//     if (x >= y) {
//       return x;
//     } else if ( x >= z){
//       return y;
//     }
//     else{
//         return z;
//     }
// }

// console.log(maxOfThreeNumbers(12, 8, 7));

//Part 3

//  function isCharAVowel(letter) {
//     if (letter === "a" ) {
//         return true;
//      } else if (letter === "e" ) {
//         return true;
    
//      } else if (letter === "i" ) {
//         return true;
    
//      } else if (letter === "o" ) {
//         return true;
    
//      } else if (letter === "u" ) {
//         return true;
    
//     }else{
//         return false;
//     }


// }
// console.log(isCharAVowel("b"))

//Part 4

// const sumArray = function(arr){
//     let sum = 0;
//    for( let i= 0; i < arr.length; i++){
//         sum +=arr[i];
// }
// return sum;
// };

// console.log(sumArray([2,4,5]));

//Part 5
// let solve =1;
// function multiplyArray(arr){
//     for(let i =0; i < arr.length; i++){
//     solve *=arr[i];
// }

// return solve;
// };

// console.log(multiplyArray([2,4,5]));

//Part 6

// const numArgs = function(){
//     return arguments.length;

// };
// console.log(numArgs(1,"red", "blue",9))



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

//Every
//Part 1
// const result= nums.every(isGreater);

// function isGreater(item){
//     return item > 0
// }
// console.log(result);

//Part 2
// const result= panagram.every(isGreater);

// function isGreater(item){
//     return item.length < 8;
// }
// console.log(result);

//Filter
//Part 1
// const result = nums.filter(lesser);
    
// function lesser(items){
//  return items < 4;
// }
// console.log(result);

//Part 2
//  const result = panagram.filter(even);
//  function even(items){
//     return items.length % 2 === 0;
//  }
//  console.log(result);
        
//Find
//Part 1
// const result= nums.find((look) => look === 5);
        
    
// console.log(result);
// const result= nums.find(look)
//     function look(items){
//        return items === 5;
// }
    
// console.log(result);

//Part 2

// const result = panagram.find((look)=> look.length === 5);

// console.log(result);

//Find index
//Part 1
// const result = nums.findIndex(byThree);
// function byThree(items){
//     return items === 3;
// }
//console.log(result);
//Part2

// const result = panagram.findIndex(charsTwo);
// function charsTwo(items){
//     return items.length < 2;
// }
//  console.log(result);

//For Each
//Part 1
// nums.forEach((multi) => console.log(multi*3));
//Part 2
// panagram.forEach((punc)=> console.log(punc+'!'));
//Map
//Part 1
// const hundo =nums.map(function(item){
//     return item * 100;
// })
// console.log(hundo);
//Part 2
// const upper= panagram.map(function(item){
//             return item.toUpperCase()
// });
// console.log(upper);

//Some
//Part 1
// const divd = nums.some(function(item){
//     return item /7
// });
//     console.log(divd);
//Part 2
//     const char = panagram.some(function(item){
//     return item = "a"
// });
//     console.log(char);

