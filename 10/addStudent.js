let selectDepartments = document.querySelector("select[name=departments]");
let addButton = document.querySelector("button[type=submit]");
let nameTextbox = document.querySelector("input[type=text]");

async function loadDepartments() {

    let response = await fetch("https://node-monge-iti-project.herokuapp.com/departments");
    let departments = await response.json();

    for (let dep of departments) {
        let optionObject = document.createElement("option");
        optionObject.value = dep["_id"];
        optionObject.innerText = dep["Name"]
        selectDepartments.append(optionObject);
    }
}


loadDepartments();
async function loadDepartments() {

    let response = await fetch("https://node-monge-iti-project.herokuapp.com/departments");
    let departments = await response.json();

    for (let dep of departments) {
        let optionObject = document.createElement("option");
        optionObject.value = dep["_id"];
        optionObject.innerText = dep["Name"]
        selectDepartments.append(optionObject);
       

    }
}


 window.location.href = "addStudent.html";