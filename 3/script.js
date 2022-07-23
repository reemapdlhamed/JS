//Function accept a full name string and convert each letter of 
//first world to Capital and the remaining to small (Pascal Case).
// function getName(str) {
//    let arr = str.split(" ") ;
//    let result = "";
//    for (let i = 0; i < arr.length; i++) {
//          result+= (arr[i][0].toUpperCase()+arr[i].substring(1)+ " " );
       
//    }return result ;

// }
// console.log(getName("the quick brown fox"));
//******************************************* **************/

//Function that accept a sentence and return the longest word 
//within the input
// function longestWord (sentence)
// {
//      let arr =  sentence.split(" ");
//      let result ="";
//      let count = 0;
//       for (let word of arr) {
//          if(word.length >count)
//          {
//              count= word.length;
//              result = word ; 
//          } 
//       }
//          return result; 
// }
// console.log(longestWord("Web Development Tutorial"))



//************************ ***********************************/

/*Write a JavaScript Function that returns a passed string with 
letters in alphabetical order*/ 
// function alphaOrder (str)
// {
//   let arr =  str.split("");
//    return arr.sort().join("");



// }
// console.log(alphaOrder("javascript"));
//***************** ******************************/

//- Define an array of numbers [2,1,3,2,7,2,8,4,3,6,10,9,12]
 
let numbers = [2,1,3,2,7,2,8,4,3,6,10,9,12];

// Sort them ascending then descending and print the result on 
//console as table.


// numbers.sort((a,b) =>{                 //anonymous function .
//  //return a-b            //if a less than b i t gonna e sorted in ascending order
//  return b-a           // sorted descending.
//  }  
// )
// console.table(numbers); 
// Filter numbers larger than 5 
//  let filterdNumbers =numbers.filter(function(value){
// return value >5; 
// })
// console.log(filterdNumbers);
//Display Max and Min Number
 
//  console.log(Math.max(...numbers)); 
//  console.log(Math.min(...numbers)); 
 // Use Array.from function to generate a copy from this array but 
//elements will be multiplied by 5.

 //console.log("array multiplied"+Array.from(numbers, n=>n*5));

//Remove repeated numbers from the array
let unique = numbers.filter((value,index)=>{
   // console.log(value,index);
   return  numbers.indexOf(value) == index;
})
console.log(unique );
 //Write a JavaScript function to get the month name from a 
//particular date and display the result on alert.
function years ()
{
    let date = new Date();
    let month = ["jan","feb","marc","april"];
    let monthName = month[date.getMonth()];
    alert(monthName)
    return monthName;

}console.log(years());
//********************(bonus) ******************/
/* Write JavaScript function that returns random array of numbers 
between 1:10
 Note: Take the length (should be less than 11) from user as an 
function input*/ 
// function randomNumbers (arguments){
//     let arr = [];
// let randoms= Math.floor( Math.random()*10);
// for(let i = 1;i<11;i++)
// {
//    let randomArray = arr.push(randoms[i])
// }

// return randomArray;
// }
//   console.log(randomNumbers());
  
  
function randomNumbers ()
{
    let arr = [];
    let randoms = Math.floor( Math.random()*10);
    for(i=0;i<arguments.length;i++)
    {
        arr.push(arguments[i])

    }return arr;
}
console.log(randomNumbers());



