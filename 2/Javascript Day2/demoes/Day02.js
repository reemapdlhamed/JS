/*********************** Day2 Javascript  Functions in Javascript *************************/
// var numbers=[2,1,3,4,7];

// for(let i=0;i<numbers.length;i++)
// {
//     console.log(i,numbers[i]);
// }

// // console.log("i : ",i);


// if(true)
// {
//     let age=20;
// }
// // console.log(age);





// //----------------------- ES6  Vraiable declarations with let and const??
// // console.log(studentName);

// let studentName="Ahmed";
// studentName="Eman";

// let studentAge;
// console.log(studentAge);


// const studentId=1;

// studentId=9;


/*****************************
 * ES5 functional scoping language
 * ES6 Block scoping language
 */


//---------------------- 1- Function Declaration ----------------------

//-------  1- No-input and No return
function instructorData()
{
    console.log("Instructor");
}

//calling
// instructorData();

// typeof function???

// typeof logger//function

//-------  2- No-input with return value
// function instructorData()
// {
//     let age=20, name="eman";
//     console.log("Hi mearn Stack Students")
//         return "Instructor";     `age ${age} name ${name}`;
//         // return [age,name]
// }

// let result=instructorData();   // let result="instructor"

// console.log(result);

// let result=logger();  //calling after creation

//-------  3- with input and return value -------------- 

// function instructorData(id,userName)
// {
//     return ` id : ${id} , name : ${userName}`;
// }
//calling

// let result=instructorData(2,"ali"); // id=2, userName="ali"
// console.log(result);


// console.log(instructorData(3,"mona"));

//-----> call the functions with too many inputs
// let result=instructorData(2,"ali",3,4,5,6,7,8); // id=2, userName="ali"
// console.log(result);

//-----> call the functions with too few inputs
// let result=instructorData(2); 
// console.log(result);

//-------   4- how it works with variables without var
//Global Varibale --> script
// var userAge=90;
// var userData="data";
// instructorData(3,"NESMAAAAA"); //hiosing
// function instructorData(id,userName) // is, userName are local variables
// {
    // console.log(userAge,userData);
    // var  userAge=30;   //local variable inside function block
    // let  userAge=30;   //local variable inside function block
   // userEmail="test@gmail.com"; //Global Varibale ouside function
    // console.log(id,userName);
    
    // console.log(userAge);
    // return ` id : ${id} , name : ${userName}`;
// }


// instructorData(2,"mona");
// var id=5;
// console.log(id);
// console.log(userAge);
// console.log(userEmail);


//------------------------------------------ES6
//---------------let and const //local varibales //best practice


// ----------- function declarations are hoisted in Javascript
//call the function before declaration line ??? will work!



//ES5 functional scoping language with var
//ES6 block scoping language with let and const 

// //variables in script var , let and const are global

// function printStudentData(studentName)   //local
// {
//     //hositing let var const
//        // let age=20; const id=1; var department="Mearn";   local
//        //globa on scriot after calling without var 
// }





//function input parameters confusion for students local and global

// let id=3;


// function studentData()
// {
//     console.log(id, " Information");
// }


// studentData();





//-----> arguments-> array-like built-in varaibale which exists inside any function's block 
// function sum()
// {
//     //built-in object Argumrnts --> Array-Like 
//     // console.log(arguments);
//     // let result=0;
//     // for(let i=0;i<arguments.length;i++)
//     // result+=arguments[i]

//     // return result;


// }
// sum(1,2,3,4); // caretion of arguments inside function [1,2,3,4]
// console.log(arguments);


/*********************************************************
 * ES6 --> Default parameter values
 * 
 *********************************************************/
 
// function studentData(id=1,userName="") //let id, userName=""
// {
//     // if(userName==undefined) userName=""
//     // if(id==undefined) id=1
//     // console.log(arguments);
//     // console.log(id,userName);
// }




//defualt parameters will not be included in arguments
//if not called in function inputs


//---------------------- 2- Function Expressions with var, let and const ----------------------
//OO JS
// const studentData=function(id,userName)
// {
//     console.log(id,userName);
//     return "HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII";
// }
// studentData(2,"ahmed");

//---------------------- 3-  ES6 Arrow Functions ----------------------
/*********************************************************
 * Arrow functions Is an ES6  featuer and only used with function expressions 
 *  Except --> arguments
 *********************************************************/
//----- 1- ip=>op
// let logger=()=>"Eman"; // function logger(){return "Eman"}
// let logger=(id,userName="x")=>`Eman : ${id} ${userName}` ; // function logger(){return "Eman"}

// let logger=(id,userName="x")=>{
// //some code 
//     console.log(arguments);
//     return `Eman : ${id} ${userName}`;
// } ; 

//  let result=logger(3);
//----- 2- no input and no return


//----- 3- many lines of code


//----- 4- default parameters  and local varibles allow

//----- 5- has no arguments variables not allowed


//---------------------- 4-  Anonymouse Functions ----------------------
//---------------------- 5- IIFE Immidialtely invoked Functions


/************************* Js built-in functions *************/

//------------------------parseInt
// parseInt("33");// 33 as a number
// parseInt("33eman");// 33 as a number
// parseInt("eman33");// NaN

//parseFloat

//Number
// Number("33");  //33 as number
//Number("33eman"); //NaN
//Number("eman33"); //NaN

//+ operator 
/********************* ES 9  + type conversion  **************/
//let number="33" 
//+number --> will return 33 number datatype
//isNaN();
//isNaN("eman") true;
//isNaN(22) false;
//dialoges (alert, prompt, and confirm)
//alert is the most famouse function otherwise websites use  library dialoges

//prompt 2 variabes summition








