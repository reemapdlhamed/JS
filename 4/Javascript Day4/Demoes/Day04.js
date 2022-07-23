
// eval and join("+");
// eval(numbers.join("+")) //eval is forbidden
// let numbers=[1,2,3,4,5];
// numbers.join("+"); 
// arguments array-like
// function sum()  //sum(1,2,3,4)   
// {
//         //console.log(arguments);//for loop ==>  +=
//         // return eval(arguments.join("+"));
//         //sort , filter, splice   copy from argumnets
//         let array=Array.from(arguments);
//         console.log(array,"array");
//         // let result=0;
//         // for(i in arguments)
//         // result+=arguments[i];
//         // return result;
//         return eval(array.join("+"));
        
// }
function sum(userName,...array)  //sum(1,2,3,4)   
{
       console.log(userName,array); 
        
}
// sum(i1=1,i2=2,i3=3)   sum(1,2)
//--------------------------- ES6
//--------------------------- rest operator ...array
//rest on function's input    ...rest




//--------------------------- spread operator  ...spread
// let numbers=[3,2,1,5,6];
// ...spread
// spread on conosle 

//spread to clone the array 

// //spread to concat many arrays
// let lab1_grades=[20,10,30], lab2_grades=[40,60,00],lab3_grades=[60,38,58];
// let grades=[...lab1_grades,...lab2_grades,...lab3_grades];


//spread with functions sum(...array)


// variables datatYpes primitives
//Fnctions --> clousers 
//LangageObjects
//BOM , DOM  --> HTML
/************************************************
  * 
  *  Browsers Object  BOM   , Document Objects DOM 
  *  Events
  */
//engine --> html -drwa --> creation of objects in memory
//image --> IMAGEHTML  -> memoery  --> js --> objects(IMAGEHTML)
 /************************************************
  *  Section 1 : BOM
  * 
  * Window is the Parent Object  for all DOM Objects
  *******************************************************/
 //this keyword location in the previous lectures ???!


 // window object properties
 //----- location, navigator, history, document (which contains all DOM elements)----/
 //----- properties --> name(very important),innerWidth,innerHight,outerWidth.... etc
 //----- methods --> open, alert, prompt , confirm, scrollBy , scrollTo , moveBy ....etc

 //---------------- open
//  let smallWinodw=open("","small window","left=100,top=100,width=320,height=320");
//  w.moveBy(30,30)

//open a small existing window , try to write on it from parent
//  let smallWindow=open("smallwindow.html","","width=300,height=300,left=40,top=40");
//small.parent.name
//small.moveBy()
//small.scrollBy()
//close and closed  window.closed window.close()
// setInterval--> scrolling

// not used theses days (exixting libraries using divs)


//location object
//navigator object

//this keyword 





//------------------ Timers   ASYNC tASKS  (Anonymouse Functions)


// setInterval(callBackfunction,time);   time ms  1000-> 1 second
// setTimeout(callBackfunction,time); //only one time
// function testing(){}
// setInterval(testing,1000);
// let timerId=setInterval(function(){
//   console.log("HI");
// },1000);


// clearInterval(timerId);

// let timerId=setTimeout(()=>{
//   //start exam
//   console.log("out");
// },3000);

// clearTimeout(timerID);

//location--> child --> window --> toString()--> Object 
//Array  --> Object --> toString();
//String  --> Objcet --> toString();
//premitives --> 2.toString();  Number


/**********************************************
        Section 2 DOM Document Object Model Standard
        to talk to HTML elements
*/




