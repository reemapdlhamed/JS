// localStorage.setItem("user", "reem");
// localStorage.setItem("pass", "1996");  
// JSON.parse(localStorage.getItem)
// localStorage.setItem("user",JSON.stringify({

// }))
// let uName = localStorage.getItem("user");


// document.getElementsByTagName("p").innertext=`Welcome ${uName}`;
let pElement = document.querySelector("p");
let uName = JSON.parse(localStorage.getItem("login"));
pElement.textContent = `Welcome ${uName.userName}`;