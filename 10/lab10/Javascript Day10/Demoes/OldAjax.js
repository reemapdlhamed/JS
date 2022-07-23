let divObjectResult=document.querySelector("div.result");
document.querySelector("input[value='load() GET']")
        .addEventListener("click",function(){

           let  ajaxObject=new XMLHttpRequest();
          //  ajaxObject.open("get","http://localhost:80")//test
          //  ajaxObject.open("get","http://localhost:80/home")//html
          //  ajaxObject.open("get","http://localhost:80/studentsXML")//xml
           ajaxObject.open("get","http://localhost:80/departments")//JSON
           ajaxObject.send();

           ajaxObject.onerror=function(error){
                console.log(error);
           }
          ajaxObject.onreadystatechange=function(){
               // console.log(this.readyState);
               if(this.readyState==4)
               {
                   if(this.status==200)
                   {
                         console.log(typeof this.response);
                         // divObjectResult.textContent=this.response;//text
                         //  divObjectResult.innerHTML=this.response;//text
                         //xml 
                         //  parser=new DOMParser();
                         //  xmlData= parser.parseFromString(this.response,"text/xml");
                         //  let studentsTags=xmlData.querySelectorAll("student");
                         //  for(let i=0;i<studentsTags.length;i++)
                         //  {
                         //        console.log(   studentsTags[i].getAttribute("id"));
                         //        console.log(studentsTags[i].querySelector("name").textContent)
                         //        console.log(studentsTags[i].querySelector("department").textContent)
                         //  }

                         JSON
                         let departments=JSON.parse(this.response);
                         for(let department of departments)
                         {
                              console.log(department._id,department.Name);
                         }
                   }
               }
          }
        });//loadget 

// Insert 
document.querySelector("input[value='load() POST']")
        .addEventListener("click",function(){
          let  ajaxObject=new XMLHttpRequest();
           ajaxObject.open("post","http://localhost:80/departments")//JSON
           ajaxObject.setRequestHeader("Content-Type", "application/json");
          //documentation --> id,name
           ajaxObject.send(JSON.stringify({id:4,name:"Mobile"}));
           
          
           ajaxObject.onreadystatechange=function(){
               if(this.readyState==4)
               {
                    if(this.status==200)
                    {
                         console.log(this.response);
                    }
               }
               
          }//readystate



        });//post to add deprtment

// //Insert
// let depratmentId=document.querySelector("input[name=departmentId]");
// let departmentName=document.querySelector("input[name=departmentName]");
// document.querySelector("input[value='save Department']")
//         .addEventListener("click",function(){
//           let  ajaxObject=new XMLHttpRequest();
//            ajaxObject.open("post","http://localhost:80/departments")//JSON
//            ajaxObject.setRequestHeader("Content-Type", "application/json");
//           //documentation --> id,name

//           // {id,name}
//           console.log(departmentName.value,depratmentId);
//            ajaxObject.send(JSON.stringify({id:depratmentId.value,name:departmentName.value}));
           
          
//            ajaxObject.onreadystatechange=function(){
//                if(this.readyState==4)
//                {
//                     if(this.status==200)
//                     {
//                          console.log(this.response);
//                     }
//                }
               
//           }//readystate



//         });//post to add deprtment



// //Update
// let depratmentId=document.querySelector("input[name=departmentId]");
// let departmentName=document.querySelector("input[name=departmentName]");
// document.querySelector("input[value='save Department']")
//         .addEventListener("click",function(){
//           let  ajaxObject=new XMLHttpRequest();
//            ajaxObject.open("put","http://localhost:80/departments")//JSON
//            ajaxObject.setRequestHeader("Content-Type", "application/json");
//           //documentation --> id,name

//           // {id,name}
//           console.log(departmentName.value,depratmentId);
//            ajaxObject.send(JSON.stringify({id:depratmentId.value,name:departmentName.value}));
           
          
//            ajaxObject.onreadystatechange=function(){
//                if(this.readyState==4)
//                {
//                     if(this.status==200)
//                     {
//                          console.log(this.response);
//                     }
//                }
               
//           }//readystate



//         });//put to add deprtment



//delete
let depratmentId=document.querySelector("input[name=departmentId]");
let departmentName=document.querySelector("input[name=departmentName]");
document.querySelector("input[value='save Department']")
        .addEventListener("click",function(){
          let  ajaxObject=new XMLHttpRequest();
           ajaxObject.open("delete","http://localhost:80/departments")//JSON
           ajaxObject.setRequestHeader("Content-Type", "application/json");
          //documentation --> id,name

          // {id,name}
          console.log(departmentName.value,depratmentId);
           ajaxObject.send(JSON.stringify({id:depratmentId.value}));
           
          
           ajaxObject.onreadystatechange=function(){
               if(this.readyState==4)
               {
                    if(this.status==200)
                    {
                         console.log(this.response);
                    }
               }
               
          }//readystate



        });//put to add deprtment








