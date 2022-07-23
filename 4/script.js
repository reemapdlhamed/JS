//****************************(1)*********** */
let newPage = window.open("","","width=200,height=200");
newPage.document.write(`<pre>
Lorem ipsum dolor, sit amet consect
etur adipisicing elit. Officia neque
         architecto quasi praesenti
         um quas impedit sunt incidunt, 
        officiis rerum dicta vero 
        velit minus comm
        di enim itaque blanditiis voluptates rem exer
        citationem! Lorem ipsum dolor sit amet consectetur
         adipisicing elit.
          Deserunt perspiciatis a
         speriores, aliqua
         m facilis quasi cumque inv
         entore assumenda dolores minus quam architecto 
         eligendi harum iusto suscipit rem voluptas 
         molestias ipsa beatae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque 
         ratione qui voluptate sequi exercitationem, d
         lorem provident rerum ut. Repellat commodi
          sapiente rem ipsa voluptatum deserunt totam 
         porro cumque consequuntur?
         Lorem ipsum dolor, sit amet consectet








`);
let height = newPage.screen.height;
newPage.scrollBy(0,height)


setTimeout(() => {
    newPage.close();
}, 3000);

//document.write("reem elmansy"); //it will over ride 

//*********************************(2)************************ */
console.log(document.getElementsByTagName("img")) ;
console.log(document.querySelectorAll("img"));
let firstImage=document.images[0];
console.log(firstImage);

let optionContent=document.querySelectorAll("select option");
console.log(optionContent);

let tabelTr=document.querySelectorAll("table tr td"); //=>
console.log(tabelTr);

let allId= document.querySelectorAll(".fontBlue .BGrey");
console.log(allId);

//*********************************** (4)********************** */


   


setInterval(()=>{
    let time = new Date().toLocaleString();
    document.title = time;
},1000);


 //********************************(5)************************ */
 let intervalid = 0;
function startSliding(img){
    let counter = 1;
    intervalid =  setInterval(() => {
        counter = counter<8 ? counter+1 : 1; 
        img.src = "images//"+counter+".jpg";
    }, 1000);
}
function stopSliding(){
    clearInterval(intervalid);
}
let imageSlide = document.querySelector(".start");
startSliding(imageSlide)







arr = ["dsa","dsa" ,"fds"] //arr[0]
for(let i in arr){
console.log(i);
console.log(arr[i]);

}









