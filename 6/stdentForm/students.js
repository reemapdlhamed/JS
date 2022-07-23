//add button
let addButton=document.querySelector("input[type=button]");

let studentNameTextBox=document.querySelector("input[name=studentName]");
let studentGradeTextBox=document.querySelector("input[name=studentGrade]");
// let radioDepartments=document.querySelector("input[name=Department]:checked");
let studentsTable=document.createElement("table");
document.body.append(studentsTable);
let studentArr=[];
// let gradeArr=[];

// let sortedArr=[];

//span
let studentSpanHint=document.querySelector("#nameError");
let studentDouplecatedSpan=document.querySelector("span#namedouplecated");
let studentRangeSpan=document.querySelector("#gardeError");
let studentGradeSpan=document.querySelector("#gardeError");


//Filter
const Filteroptions =document.querySelector("select#filter");
Filteroptions.addEventListener("change",function(){
    const tableRows = [...studentsTable.children];
    if (this.value === "success") {
      for (let i = 0; i < tableRows.length; i++) {
        if (tableRows[i].children[1].innerText > 60) {
          tableRows[i].style.display = "table-row";
        } else {
          tableRows[i].style.display = "none";
        }
      }
    } else if (this.value === "fail") {
      for (let i = 0; i < tableRows.length; i++) {
        if (tableRows[i].children[1].innerText < 60) {
          tableRows[i].style.display = "table-row";
        } else {
          tableRows[i].style.display = "none";
        }
      }
    } else {
      for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].style.display = "table-row";
      }
    }
});



//sort
const sortSelect = document.querySelector("select#sort");
sortSelect.addEventListener("change", function () {
    const tableRows = [...studentsTable.children];
    studentsTable.innerHTML = "";
  
    if (this.value === "name") {
      tableRows.sort((a, b) =>
        a.children[0].innerText > b.children[0].innerText ? 1 : -1
      );
      console.log(tableRows);
      studentsTable.append(...tableRows);
    } else {
      tableRows.sort((a, b) => a.children[1].innerText - b.children[1].innerText);
      console.log(tableRows);
      studentsTable.append(...tableRows);
    }
  });
  



function createTD(value)
{
    let tdObject=document.createElement("td");
    tdObject.innerText=value;//studentNameTextBox.value;
    return tdObject;
}


function startsWithCapital(word){
    return word.charAt(0) === word.charAt(0).toUpperCase();
}


function gradeFunction(val){
return (val > 100 || val < -1);
}


function stringCase(words){
    let newArray=[];
    let wordsArray=words.toLowerCase().split(" ");
    //let eachWord="";
    
    console.log(wordsArray);
     for(let i=0;i<wordsArray.length;i++){
    //console.log(wordsArray[i]);
    newArray[i]=wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
    //console.log(newArray[i]);
    //console.log(eachWord[0]);
    }
    return newArray.join(' ');
    }



    
    studentNameTextBox.onblur=()=>studentSpanHint.style.visibility="hidden";
    // studentGradeTextBox.onblur=()=>studentDouplecatedSpan.style.visibility="hidden";
    studentGradeTextBox.onblur=()=>studentRangeSpan.style.visibility="hidden";
                                   


//console.log(startsWithCapital("mmar F"));
// let department=document.querySelector("input[name=Department]:checked").value;


studentGradeTextBox.addEventListener("keypress",function(event){
    if(!isNaN(event.key)){
       // console.log(event.key);
       studentGradeSpan.style.visibility="hidden";

    }else{
        event.preventDefault();
        studentGradeSpan.style.visibility="visible";  
    } 
});//keypress----grades



studentNameTextBox.addEventListener("keypress",function(event){
    if(isNaN(event.key)){
       // console.log(event.key);
       studentSpanHint.style.visibility="hidden";

    }else{
        event.preventDefault();
        studentSpanHint.style.visibility="visible";  
    } 
});//keypress----Name


addButton.addEventListener("click",function(event){
    event.preventDefault();
    let trObject=document.createElement("tr");
    let capitalNameString="";
    let nameValue=studentNameTextBox.value;
    let gradeVal=studentGradeTextBox.value;   
    let department=document.querySelector("input[name=Department]:checked").value;  


    
   if (gradeVal==""||gradeVal > 100 || gradeVal < -1)studentRangeSpan.style.visibility="visible";
   if (nameValue==""||nameValue==null)studentSpanHint.style.visibility="visible";
   else if (gradeVal==""||gradeVal > 100 || gradeVal < -1)studentRangeSpan.style.visibility="visible";
   else{
          studentDouplecatedSpan.style.visibility='hidden';

       if(!startsWithCapital(nameValue)||startsWithCapital(nameValue)){
        capitalNameString= stringCase(nameValue);
        if(studentArr.includes(capitalNameString)){
           studentDouplecatedSpan.style.visibility="visible";
          }else{
        //gradeArr.push(gradeVal);      
        studentArr.push(capitalNameString);
        trObject.classList.add(department);
        let tdObject=createTD(capitalNameString);
        trObject.append(tdObject);
        
   //grade
   tdObject=createTD(studentGradeTextBox.value);

   trObject.append(tdObject);
   
    //delete
    deleteButton=document.createElement("button");
    deleteButton.innerText="DELETE";
    tdObject=document.createElement("td");
    tdObject.append(deleteButton);
    trObject.append(tdObject);

      }
      }  
      }


      deleteButton.onclick=function(){
        // this-->   --? tr
        // trObject.remove();
        let studentNameVal=this.parentElement.parentElement.childNodes[0].innerText; 
        studentArr.splice(studentArr.indexOf(studentNameVal));
        this.parentElement.parentElement.remove();

       // console.log(studentNameVal);
       
        //console.log(studentArr.indexOf(studentNameVal));
        // this.closest("tr").remove()
        //studentArr.pop(capitalNameString);
    }
    studentsTable.append(trObject); 
   

});//add student recored


