let bodyObject = document.querySelector("body");
let btn = document.querySelector("input[value='get']");
let catalogTable = document.createElement("table");
// console.log(catalogTable);

let allCDS = [];

btn.addEventListener("click", async function () {
let ajaxObject = new XMLHttpRequest();
ajaxObject.open("get","https://node-monge-iti-project.herokuapp.com/cataloges");    //xml

ajaxObject.send();
ajaxObject.onerror = function (error) {
console.log(error)
}

ajaxObject.onreadystatechange = function () {
if (this.readyState == 4) {
if (this.status == 200) {
console.log(typeof this.response);


parser = new DOMParser();
xmlData = parser.parseFromString(this.response, "text/xml");
console.log(xmlData);
allCDS = xmlData.querySelectorAll("CD");

var table =
`<th>Title</th>
<th>Arist</th>
<th>Country</th>
<th>Price</th>
<th>Year</th>`;

for (let i = 0; i < allCDS.length; i++) {
let priceVal = allCDS[i].querySelector("PRICE").textContent;
// console.log(priceVal);
let tdStyle = function () {
if (priceVal > 10) return '<td style="background-color: gray;">';
else return '<td style="background-color: pink;">';
};

table += `<tr> 
<td>${
allCDS[i].querySelector("TITLE").textContent
}</td>
<td>${
allCDS[i].querySelector("ARTIST").textContent
}</td>
<td>${
allCDS[i].querySelector("COUNTRY").textContent
}</td>
${tdStyle()}${
allCDS[i].querySelector("PRICE").textContent
}</td>
<td>${
allCDS[i].querySelector("YEAR").textContent
}</td>
</tr>`;
}

document.getElementById("demo").innerHTML = table;
}
}
};
});
