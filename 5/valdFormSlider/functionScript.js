
let nameField=document.querySelector("input[name=userName]");
//console.log(nameField); 
let ageField=document.querySelector("input[name=userAge]");
// console.log(ageField); 
let gradeField=document.querySelector("input[name=userGrade]");
// console.log(gradeField);
let submitButton=document.querySelector("input[type=submit]");
//console.log(submitButton);
let targetImage=document.querySelector("#slideImage");
//console.log(targetImage);
//let nextTest=document.querySelector(".testOnclick");



let nameSpan=document.querySelector("span.nameClass");
let ageSpan=document.querySelector("span.ageClass");
let gradeSpan=document.querySelector("span.gradesClass");



// //***********(a)******** */

// let table = document.getElementsByTagName("table")[1];
// let anchor = table.getElementsByTagName("a")[0]; 
// let myAttribute = anchor.setAttribute("href","training.com");
// let text = anchor.innerHTML=("training");
// //*********(b)******* */
//  let images = document.querySelectorAll("img");//=> nodelist like array 
// for (i=0 ; i <images.length ; i++)
// {

//       document.images[i].style.border= "solid pink 2px";
// }

// //**********(c) ******/
// function findCheckboxes ()
// {
//     let boxes = document.querySelectorAll("input[type=checkbox]");
//     for (let i =0 ; i<boxes.length ; i++)
//     {
//         if (boxes[i].checked == true)
//         {
//             alert(boxes[i].value)
//         }
//     }
// }findCheckboxes();
// //****************(d)*** */
// let findingElement = document.querySelector("#example");

//  let backGround = findingElement.setAttribute("style","background: pink");

nameField.addEventListener("keypress",function(event){
    if(isNaN(event.key)){
        nameSpan.style.visibility="hidden"

    }else{
        event.preventDefault();
        nameSpan.style.visibility="visible"  
    }
    
});//keypress----Name
//var ageKeySum="";
ageField.addEventListener("keypress",function(event){
        //ageKeySum+=event.key;
        //console.log(ageKeySum);
    if(!isNaN(event.key)){
        ageSpan.style.visibility="hidden"

    }else{
        event.preventDefault();
        ageSpan.style.visibility="visible"  
    }
    
});//keypress----Age



gradeField.addEventListener("keypress",function(event){
    if(!isNaN(event.key)){
       // console.log(event.key);
        gradeSpan.style.visibility="hidden"

    }else{
        event.preventDefault();
        gradeSpan.style.visibility="visible"  
    }
    
});//keypress----Age




// submitButton.addEventListener("click",function(event){
    
    
//     event.preventDefault();
//     // console.log(+ageKeySum);
//     // if (20 < parseInt(ageField) <40) {
//     //     event.preventDefault();
//     //     ageSpan.style.visibility="visible"
//     // }
// });

submitButton.addEventListener("click",function(event){
    event.preventDefault();
    let ageVal = ageField.value;
    let gradeVal=gradeField.value;
    let nameVal=nameField.value;
    

    if (gradeVal > 100 || gradeVal < 1) gradeSpan.style.visibility="visible";
    else if (ageVal > 40 || ageVal < 20) ageSpan.style.visibility="visible";
    else if (nameVal==""||nameVal==null) nameSpan.style.visibility="visible";
    else{ alert("submitted");
     gradeSpan.style.visibility="hidden";
     ageSpan.style.visibility="hidden";
     nameSpan.style.visibility="hidden";
    }




});


var intervalId="";
var counter=1;
function startSlide(){
     //counter =1; 
     intervalId= setInterval(() => {
      
      if (counter < 8 ){
        counter++;
        targetImage.src="images//"+counter+".jpg";
         
      }else
       counter=1;
       targetImage.src="images//"+counter+".jpg";

    }, 1000);
}

function stopSlide(){
    clearInterval(intervalId);
}



function nextSlide(){
    //counter++;
    if (counter <= 8 ){
        //console.log(counter);
        
        targetImage.src="images//"+counter+".jpg";
        counter++; 
      }else
       counter=1;
}    


// nextTest.onclick=function(){
//     console.log("hello from second Function");
// }





function previousSlide(){

      if(counter>1){
        counter--;
       targetImage.src="images//"+counter+".jpg";        
    }else{
        counter=8; 
        targetImage.src="images//"+counter+".jpg";
      }
}















































//console.log(nameField.getAttribute("value"));

// var namess=document.myform.userName.value; 
// console.log(namess);


//  let nameValue=nameField.value;
//  console.log(nameValue);

//  submitButton.addEventListener("click",function(event){
//     //event.preventDefault();
//     //console.log(nameValue);
// if (nameValue==""){
//     event.preventDefault();
// }else
// console.log("it is not null");
//  });


 