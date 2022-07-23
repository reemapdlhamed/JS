// DOM --> HTML --> JS --> Find Something 
/*****************************************
 * do something 
 */

//innserText, innerHTML, value
// let divObject=document.querySelector("#example");
// divObject.innerHTML="<p style='background-color:yellow'>Eman</p>";
// divObject.innerText="<p style='background-color:yellow'>Eman</p>";
//value-> from elment

//find something
// let nameTextObject=document.querySelector("input[name=userName]");
//do something
// nameTextObject.value="XXX";



//setAttribute, getAttribute --> href,src,style,class, id ---etc
//atribute --> HTML tag -----> property   imgObject.src
// let imageObject=document.images[0];
// let imageSrcValue=imageObject.getAttribute("src");
// imageObject.setAttribute("src","images/2.jpg")

// let anchorObject=document.querySelector("table.bPink a");
// anchorObject.setAttribute("href","http://www.google.com")

//style  inline attribute   
// document.querySelector("table.bPink").getAttribute("style"); //inline style attribute
// document.querySelector("table.bPink").setAttribute("style","color:red");
// document.querySelector("table.bPink").style.color="yellow";
// document.querySelector("table.bPink").setAttribute("style","color:red;background-color:green")
// document.querySelector("table.bPink").style.backgroundColor="yellow"

//problem with class attribute
// document.querySelector("table.bPink").setAttribute("class","fontGreen");
//document.querySelector("table.bPink").class="fontGreen";
//classList --> moderen browser
// document.querySelector("table.bPink").classList
// document.querySelector("table.bPink").classList.remove("fontGreen")
// document.querySelector("table.bPink").classList.add("fontGreen");

/**********************************************
 *    Create Our own HTML objects: 
 *   /*  create ,insert ,delete  HTML Elements */

 //------------ create Elemnts  document.createElement(TagName) returns HTML Object
//creation of child
//  let liElementObject=document.createElement("li");
// liElementObject.innerText="ITI";
// liElementObject.classList.add("bPink");
// //parent
// let ulElementObject=document.querySelector("ul");
// ulElementObject.append(liElementObject);

//delete
// ulElementObject.removeChild(liElementObject)
// ulElementObject.remove();
 
//------------- insert the HTML from memory into the page   appendChild Method

//------------- delete Elements
//removeChild or remove-> on the same tag 

//------------- move element with cloneNode()
// document.querySelector("ol").append(liElementObject)//move
// document.querySelector("ol").append(liElementObject.cloneNode(true));





/**************************************************************
 * Section 3 : Events
 *    
 * DOM Events --> start user actions on your HTML page
 * 
 * 
 * event -> action of user clikc move keypress keyup out focus blur
listnening --> htmlObject--> eventHandler --->   oneventName
buttonObject--> onclick,onmouseover,onmouseout,onkeypress
*************************************************************/
function fireButtonClick(){ console.log("HI",this); }
//Bind the event 

//1- inline the button tag
//inside html tag onclick
//2- as property to the tag object inside javascript
let buttonObject=document.querySelector("button");

// buttonObject.onclick=fireButtonClick();//worng
// buttonObject.onclick=fireButtonClick;
// let myName="eman";
// myName="beshoy"
// buttonObject.onclick=function(){ //function expression & anynoumouse function

//     alert("Hi form JS file");
// }

// buttonObject.onclick=function(){ //function expression & anynoumouse function

//     alert("HI agian");
// }


//4- How to remove the event ?
//unbind event
// buttonObject.onclick=null;

//function name or function block

//3------ where to place ur script? ----------------/ load event
// window.onload=function(){
//     let buttonObject=document.querySelector("button");
//     buttonObject.onclick=function(){ //function expression & anynoumouse function

//         alert("Hi form JS file");
//     }
// }

//--------------------- addEventListner  //es5
// buttonObject.addEventListener("click",fireButtonClick); //+=
// buttonObject.removeEventListener("click",fireButtonClick); //-=
buttonObject.addEventListener("click",function(){


    console.log(this);  //  this--> object --> caller
    ///ROLE NUMBER ONE 
    //NEVER USE ARROW FUNCTION WITH EVENT HANDLEING
    this.innerText="STOP";
    console.log("AddeventListener");

});//click


//5------- this property inside event function ------/     


//6-------mouse over, out , move (event object)
let divObject=document.querySelector("#divBox");
divObject.addEventListener("mouseover",function(){
    // this.style.backgroundColor="pink";

    this.classList.add("bPink");

});//mouseover

divObject.addEventListener("mouseout",function(event){
    // this.style.backgroundColor="gray";
// console.log(event);

    this.classList.remove("bPink");


});//mouseout   

divObject.addEventListener("mousemove",function(event){
// console.log(event);
    this.innerText=`${event.x} : ${event.y}`;

});//movemouse




//7-------prevent Default action
let submitFormButton=document.querySelector("input[type=submit]");
submitFormButton.addEventListener("click",function(event){

    event.preventDefault();

});

//8------- validation on text Box with blure event

let  ageTextBox=document.querySelector("input[name=ageTxtBox]");
let spanErrorOfAge=document.querySelector("span")
// ageTextBox.addEventListener("blur",function(event){

//         if(isNaN(this.value))
//         spanErrorOfAge.style.visibility="visible";
//         else
//         spanErrorOfAge.style.visibility="hidden";

// });//blur
ageTextBox.addEventListener("keypress",function(event){
    // console.log(event);
    if(isNaN(event.key))
    {
        event.preventDefault();
        spanErrorOfAge.style.visibility="visible";
    }
    else
    spanErrorOfAge.style.visibility="hidden";
});//keypress




//- 9 bird assignment

