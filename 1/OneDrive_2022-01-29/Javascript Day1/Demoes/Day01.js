/****************  Day01 Javascript Core ********************/
// console.log("External Script")

/************************************************************
 * 
 *  DevTools in the browser will be your friend in the next
 *  few days   
 * 
 * press F12 on any browser to open it (work on console tab)
 * 
 */
//vs code and live server extension 

/**************** ES5  Types, values and variables **********/
   
/**   ES5 varaibles Declarations
 * define varibales with var keyword  (Global variable through entire script and the following scripts)
 * -->without var keyword is forbidden 
 */




// naming rules for variables (case senstive- starts with _ , $ , or letters)

/*primitive data types **/

//--------------  1- number
 var number=2.3;  //Global
 number=0xff;
 var myName="eman";
 
// console.log("Number:",number,"Name: ",myName);
// console.log("Number :"+number+" Name: "+myName); 
//call the variable with case-sensetivity

//typeof operator 

//override variable names with different data types?!

//what if the variable inisde another script?!


// try to call number variable from another script (before and after the current script).



//--------------- 2- string  immutable  ES5 --> " and ' , ES6 ---> `(backtick) which is better
var myName="Mona";
var courseName='studying js in \'ITI\' JS hhhhhhhhhhhhhhhhhhhhhhhhhhhhh\
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ';  //\ EScape caharachter
// console.log(myName,courseName);

//*************************** ES6  string  Backtick
var studentData=` My name is ${myName}
Iam an ITI Instructor  my Salary is ${number*5}
I Live in Mansoura`;
console.log(studentData);

//---------------- 3- boolean
var flag=true;

//---------------- 4- undefined 
var firstName;

//---------------- 5- null 
var student=null;

//null==undefined --> true;  (check only values that means language mmanipulate both data types as empty variables)
//null===undefined--> false (check value and data type)

// ******************* do we have array type in Javascript ????

var grades=[20,50,40,10,"eman",true];


//loops
for(var i=0;i<grades.length;i++)
{
    console.log(grades[i]);
}
// console.table(grades);
// console.log(i,"i");

// if(true)
// {
//     var myScore=900; //this varibale is global varible through entire script
// }


/*****************************  Hoisting Problem with var keyword
 *  in ES5   
 ********************************************/

//look at hoisting.html file


//operators in lab

/*******************************************************
 * 
 * ES6  Block Scoping let and const declarations (never use var)
 * ES5 has no blocks other than function block!!
 */


//look at hoisting.html file


/************************** Lecture 2******************************
 * 
 * Errors in Javascript will stop JS Interpreter , debugger
 * 
 */




/////Operators
