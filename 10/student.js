let divObject = document.querySelector(".container");
let tableObject = document.createElement("table");
let tableHead = document.createElement("thead");
let tableBody =document.createElement("tbody");
tableObject.style.border = 'solid 1px black';




tableObject.append(tableHead);
tableObject.append(tableBody);
divObject.append(tableObject);

async function getStudents (){
    let response = await fetch("https://node-monge-iti-project.herokuapp.com/students")
    let students= await response.json();
    //console.log(students);

    let trObject=document.createElement("tr");
    let thObjrct=document.createElement("th");
    thObjrct.innerText="Name";
    trObject.append(thObjrct);
    thObjrct=document.createElement("th");
    thObjrct.innerText="Department";
    trObject.append(thObjrct);
    thObjrct=document.createElement("th");
    trObject.append(thObjrct);
    thObjrct.innerText="Update";
    thObjrct=document.createElement("th");
    trObject.append(thObjrct)
    thObjrct.innerText="Delete";
    tableObject.append(trObject)



for(let i=0;i<students.length;i++)
{


 for (let i = 0; i < students.length; i++) {
    // console.log(students[i]);
    //name:-
    trObject = document.createElement("tr");
    let tdObject = document.createElement("td");
    tdObject.innerText = students[i]["Name"];
    trObject.append(tdObject);
    
    //department:-
    tdObject = document.createElement("td");
    tdObject.innerText = students[i]["Department"]["Name"];
    trObject.append(tdObject);
    tableObject.append(trObject);


    //update:-
    let anchorObject = document.createElement("a");
    anchorObject.innerText = "Update";
    anchorObject.href = "editStudent.html";
    tdObject = document.createElement("td");
        tdObject.append(anchorObject);
        trObject.append(tdObject);

    //]Delete:-
    anchorObject = document.createElement("a");
    anchorObject.innerText = "Delete";
    anchorObject.href = "#"; 
    let response = await fetch ("https://node-monge-iti-project.herokuapp.com/students")
    {
        method:"delete";
        
        
    }
    tdObject = document.createElement("td");
        tdObject.append(anchorObject);
        trObject.append(tdObject);
        tableObject.append(trObject);








}

}
}
getStudents();














