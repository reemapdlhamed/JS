
			let bodyObject = document.querySelector("body");
			let divObject =document.createElement("div");

			function addingDiv(value) 
			{
				divObject = document.createElement("div");
				divObject.classList.add(value);
				bodyObject.append(divObject);
			}
addingDiv("red");
addingDiv("blue");
addingDiv("green");



divObject=document.querySelectorAll("div"); //to handle ..
//NodeList(3) [div.red, div.blue, div.green] //like array.


for (let i = 0; i < divObject.length; i++) {
	divObject[i].addEventListener("click", coping);      //handle  (event,function)
}

function coping(event) {
	let copy = event.target.cloneNode(true);   //.arget => to access ,,,,,
	bodyObject.append(copy);
   copy.addEventListener("click", copy);
	event.target.removeEventListener("click", coping); // for one time.
}