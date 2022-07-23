let userName = document.getElementsByTagName("input")[0];
// console.log(userName);
let userPass = document.getElementsByTagName("input")[1];
let btnSubmit = document.getElementById("btn");

localStorage.setItem("login",JSON.stringify({userName:"reem",password:"1996"}));
let uName = JSON.parse(localStorage.getItem("login"));

btnSubmit.addEventListener("click",function(event){
    event.preventDefault();     //=>to stop loading .
    //console.log(userPass.value);
if (userName.value==uName.userName && userPass.value==uName.password)
{
 window.location.replace("form.html");
 
}
else {
     console.log("there is an error reenter your data");
    //let spanObject = document.getElementsByTagName("span").innerText="hi";
    //spanObject.innerText="Sorry this is invalid inputs ..nice to  meet you!";
}
 })

