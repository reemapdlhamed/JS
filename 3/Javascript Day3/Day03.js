
/*********************************************************
 * 
 *  Language Objects (built-in classes in javascript)
 *  Javascript is Object-based Language
 * 
 */

//-------------- String Class-------------------------




//class String
 let myName=new String("Eman ITI instructor");  //new ClassName(constructor)

 let courseName="JS";
//typeof and constructor.name


//different between "" ans new String();   wrapping
// "1,2,3,4,5".split(",");
//1- warpping of premitive insde object new String("1,2,3,4,5")
//2- call split 
//3- ; destroy the object


//comparison == between 2 string objects   --> valueOf method
// new String("ali").valueOf()==new String("ali").valueOf() //true
// new String("ali")==new String("ali") //false
// new String("ali").valueOf()=="ali"; //true


// for documentation https://devdocs.io/

//length ,toLowerCase() , toUpperCase()
//indexOf , lastIndexOf  //email
//substring, substr, split
//replace     // regular Expressions  --> search (match)


//-->   functions chaining
// courseName.toUpperCase().indexOf("A");
//  let resultUpper=courseName.toUpperCase();
// let searchingIndex=resultUpper.indexOf("A");

//search i --> indexOf("i")
let resultLower=myName.toLowerCase(); "eman iti instructor"
let index=resultLower.indexOf("i")

// index=myName.toLowerCase().indexOf("i");



//courseName.split(" ")[0].toLowerCase().indexOf("a")

//assignment   switch charcter case

let result="";

for(let i=0;i<myName.length;i++)
{
    if(myName[i].toLowerCase()==myName[i])// i=0 "a"=="a"
    {
        // result=result+myName[i].toUpperCase();
        result+=myName[i].toUpperCase();
    }
    else
    {
        result+= myName[i].toLowerCase();

    }
}
// console.log(result);









//------------
// -- Number Class-------------------------
// let number=new Number(22.456);
//define object and using the methods
// Number.MAX_SAFE_INTEGER
//type conversion
// Number("33")

//--------------- Boolean -----------------
//type conversion
new Boolean(""); //as object 
Boolean("");//as function
//-------------- Math Class---------------------------
//mathimatical operation
// Math.floor(Math.random()*10);

//-------------- Date Class----------------------------
let nowDate=new Date();

//-------------- Array Class---------------------------
//-----------------------------------------------------
//definition   [] or new Array()
let grades=[2,1,4,6,2,7];  //shortCut
let scores=new Array();

let mixed=["mona",2,true,new String("hello")];

//datatypes
// scores.constructor.name //Array --> object
// grades.constructor.name //Array --> object


//cahnge values

//for loops  --> forEach, for loop, for in (in operator) , for of 
// for(let i=0;grades.length;i++){}
// for(let i in grades){ grades[i]}
// for(let item of grades){item }

// for(let i=0;i<grades.length;i++){console.log(i,grades[i]);}
// console.log("*********************************");
for(let i in grades)
{
    // console.log(i,grades[i]);
}
//in is operator
// console.log("*********************************");
for(let item of grades)
{
    // console.log(item);
}
//grades.forEach();

// numberArray.forEach((item,index)=>{
//     console.log(index,item);
// })



//sparse array (Bad array type --> delete operator(reserved word) )
//delete sparesArray---> forbidden
// let sparesArray=new Array(40)//(40) [empty × 40]
// sparesArray[0]=1;
// sparesArray[4]=2;
// sparesArray[100]=100;//[empty × 100, 100]
// grades[100]=100; (101) [10, empty × 99, 100]
//  for(let i=0;i<sparesArray.length;i++){
//       console.log(sparesArray[i]);  //let number;//undefined
//  }
//  for(let i in sparesArray){ 
//     console.log(sparesArray[i]);
//     }


//fill method
// let newArray=new Array(4).fill(0);
// array's methods push, pop, shift,unshift,splice,slice,concat,reduce and map

//grades.push(3);
//grades.push(4,6,8,7,9);  
//grades.pop() //9   length--;
//grades.unshift(99)
//grades.shift();
//grades.splice(1);
// grades.splice(1,0,66,5)// [10, 66,5, 3, 4, 6, 8, 7, 9]
//grades.splice(1,2); // [10, 6, 8, 7, 9] 


//eval with join --> forbidden never use eval in your code
// eval(grades.join("+"));
let numberArray=[3,1,55,88,50,20];

function filter(item)  //input item  //predicate
{
        return item>10;
}


function filterArray(array,conditionFunction) //callBack function
{                           //function expression
                            // conditionFunction=filter
                            // conditionFunction=item=>item<10

            let result=[];
            for( i in array)
            {
                if(conditionFunction(array[i],i,array))
                result.push(array[i])
            }
            return result;
}



//testing
// console.log(filterArray(numberArray,filter));
// filterArray(numberArray,(item)=> item<10); //anonymouse function
// numberArray.filter((item,index)=>item>10&&index==1)








// numberArray.filter(item=>item>50);//arrow function  anynmouse
// numberArray.filter(function(item){return item>50}); //anymouse Function
//filter method  (which takes a callBack Function)

//sort method   (which takes a callBack Function)

// numberArray.sort((a,b)=>{
//     console.log(a,b);
//     if(a>b) return 1;
//     else if (a<b) return -1;
//     else return 0;
// });
//function sort(a,b)   there are many sorting algorithms use this basic functionality to sort any array
// {
//     if(a>b) return 1;
//     else if (a<b) return -1;
//     else return 0;
// }

// const words = ['spray', 'Limit', 'Elite', 'exuberant', 'destruction', 'present'];
// words.toLowerCase();
// words.sort((a,b)=>  
// {
    // a=a.toLowerCase();
    // b=b.toLowerCase();
//     if(a>b) return 1;
//     else if (a<b) return -1;
//     else return 0;
// });

numberArray.forEach((item,index)=>{
    console.log(index,item);
})



//********* */ 2-Dimentional Array  --> search for 

/***********  
 * Note : arguments is Array-Like!!!what is that means?
 */

// function testing()
// {
//     // console.log(arguments.join());
//     console.log(arguments);
// }
/***************************************************************
 * 
 *   ES6 rest and spread operators
 * 
 * 
 ***************************************************************/
//rest on function's input    ...rest



//  spread on conosle 

//spread to clone the array 

//spread to concat many arrays
// let lab1_grades=[20,10,30], lab2_grades=[40,60,00],lab3_grades=[60,38,58];


//we can use it with objects --> Object Oriented Lecture


//spread with functions sum(...array)



