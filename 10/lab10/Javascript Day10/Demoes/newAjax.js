let divObjectResult=document.querySelector("div.result");
document.querySelector("input[value='load() GET']")
        .addEventListener("click",async function(){

                    // fetch("http://localhost:80/departments")
                    // .then(response=> response.json() )
                    // .then(data => console.log(data))
                    // .catch(error=>console.log(error));

                    //get
                let response=await  fetch("http://localhost:80/departments");
                let data =await response.json();
                console.log(data,typeof data);
               //post --> insert
                // let response=await  fetch("http://localhost:80/departments",{
                //     method:"post",
                //     body:JSON.stringify({id:8,name:"testing2"}),
                //     headers:{"Content-Type":"application/json"}
                // });
                // let data =await response.json();
                // console.log(data,typeof data);


                //put
                // let response=await  fetch("http://localhost:80/departments",{
                //     method:"put",
                //     body:JSON.stringify({id:8,name:"testing8"}),
                //     headers:{"Content-Type":"application/json"}
                // });
                // let data =await response.json();
                // console.log(data,typeof data);

                //delete
                // let response=await  fetch("http://localhost:80/departments",{
                //     method:"delete",
                //     body:JSON.stringify({id:8}),
                //     headers:{"Content-Type":"application/json"}
                // });
                // let data =await response.json();
                // console.log(data,typeof data);







        });//ajax ferct get