/************************************************
  * 
  *  Object Oriented Javascript
  * 
  */

// Object Based  , Language Objects, DOM , BOM
//userDefined Objects
//Array   ""+[]  --> [].toString()+""   [],,,,,,]
//window.toString(),obj,  --> Object -> [object Object]

/*********************************
 * 
 *  Anonymouse Object  -> object that contains information on run time
 */
 
//---------------------define empty object  
let object={};  
//--------------------- what about parent object 
//constructr.name , toString() and typeof 


//---------------------- Object properties
// let instructor={
//     age:20,
//     hasDrivingLic:true,
//     friends:["Mirah","Mahmoud"],
//     fullName:{firstName:"eman",lastName:"barakat"},
//     "no of childs":2
// };

//---------------------- How to call properties   1- . 2- [] 
// . [] setters and getters
// instructor.age;
// instructor["age"];

//non existing properties   undefined

//---------------------looping
// for(key in instructor)
// console.log(key,instructor[key]);

// Object.keys(instructor);
// Object.entries(instructor)

//------------------------ add and remove properties  on run time

// instructor.location="EGYPT";
//delete instructor.age;
//instructot["FBAccount"]="xxx@gmail.com"
// delete instructot["FBAccount"]

//const ------------- Object.freez();
// const child={name:"Mirah",age:7};
// Object.freeze(child);  Object.freez( child.fullName);

//-------------------------- Member functions  es5 and es6
// let age=100;
let instructor={
    age:20,
    hasDrivingLic:true,
    friends:["Mirah","Mahmoud"],
    fullName:{firstName:"eman",lastName:"barakat"},
    "no of childs":2,
    //es5
    getFullName:function(){  //this -- pointer to object calling
        return `${this.fullName.firstName} ${this.fullName.lastName}`;
    },
    //ES6
    getData(){
        console.log("Data");
    },
    toString(){
        return 'Child toString()';
    }

};

//------------------ calling
instructor.getFullName();
instructor["getFullName"]();

//------------------ this?  and arrow functions

//------------------ add and remove on run time
// instructor.canRun=function(){console.log("Yes");}
// delete instructor.canRun;
//----------------- for in , in vs hasOwnProperty  , Object.keys() 
for(key in instructor)  //querySelectorAll()
{
    // if(typeof instructor[key]!="function")
    // console.log(key,instructor[key]);

}


//------------------ ES 6 Object.freeze() and const


/******************************************************




/****************************************************
 * 
 *  Where wecan use Arrow function   ???
 */
 function interval(){
    console.log(this);
    this.speed+=10;
}
let car={model:"Picanto",
        year:2020,
        speed:0,
        move(){
            
            // console.log(this);
            setInterval(()=>{
                this.speed+=10;
            },1000)
        }
}



// var video={
// 	title:"ES6",
// 	tags:["js","jquery","es5"],
// 	showTags:function(){
// 		this.tags.forEach(function(tag){
// 		console.log(this.title,tag)//this referes to window object
// 				          })//end of forEach;
// 		 }//end of showTags
// 	  }
// video.showTags();


/*************************************************
 *   spread Operators
 */
//why don't use var or this with variables
 
 
 //spraed operor with objects
 //clone objects {...obj}
 //concat objects {...obj1,...obj2}




/*******************************************
 * ES5 Classes  --> construcor function + new
 * 
 */

//-------------------- call it as a function and as a Class!!!! (Number class)
const Student=function (id=-1,name="")//class
{
    // if(this.constructor.name=="Window")  //all as a function
    // throw new Error("Its' a class");

    // if(this.constructor.name="Student")  //all as amn Object
    // throw new Error("Abstract Class");
    
    // console.log("Can't call function it's a constructor function");

console.log(this.constructor.name);
    //public 
    this.name=name;
   //private
   var id=id;            //clousers
   
   //getter
   this.getID=function(){
       return id;
   }
   //setter
   this.setID=function(value){ id=value}
   this.toString=function(){
       return `${this.name} ${id}`
   }

}


//create
let studentObject=new Student(2,"eman");

studentObject["age"]=33;
studentObject.canRun=function(){};

let studentObject2=new Student();

/**
 * class Person{
 * 
 *  Person(){
 * }
 * 
 * Person(id){}
 * Person(id,name){}
 * 
 * }
 * 
 * 
 */




/**************************************************
 * 
 *      ES6 Classes
 * 
 */

class Person{

    //ES10 private -> 
    #id;
    
    constructor(id=-1,name=""){
        this.#id=id;
        this.name=name
        
    }
    
    getData(){
        // this.age=90;
     console.log(this.#id,this.name);   
    }

    //setter
    // setID(value){
    //     this.#id=value;
    // }
    // //getter
    // getID(){return this.#id;}

    get ID(){return this.#id;}
    set ID(value){ this.#id=value;}



    toString(){
        return '';
    }


}


//create 
let person=new Person(2,"eman");


let persons=[];
persons.push(new Person(1,"eman"));
persons.push(new Person(3,"mona"));
persons.push(new Person(2,"ahmed"));

console.table(persons);
persons.sort((a,b)=>{   //first,last
    if(a.fname>b.fname) return 1;
    else if(a.fname<b.fname) return -1;
    else 
    {
        if(a.lname>b.lname) return 1;
        else if(a.lname<b.lname) return -1;
        else return 0;

    }
})
console.table(persons);













