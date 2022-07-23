
$.ajax({
    url:"http://localhost:80/departments",
    method:"get",
    success(data){
        console.log(data)
    },
    error(err){
        console.log(err);
    }
});//end of call

$.ajax({
    url:"http://localhost:80/departments",
    method:"post",
    contentType:"application/json",
    data:JSON.stringify({id:9,name:"Testing9"}),
    success(data){
        console.log(data)
    },
    error(err){
        console.log(err);
    }
});//end of call

