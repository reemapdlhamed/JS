//(1)
let bodyObject = document.querySelector("body");
//Ecma 5
 function Shape (_color){   // Abstract class contains color properety,

 if (this.constructor.name== "Shape") //global will return window
 {throw new Error ("it's a class")}
 this.color= _color;      //private
 this.draw = function(){           //member function 
     return "Can't Draw My Self";
 }

 Shape.count++;

}
Shape.count=0;
  //static property count that counts how many shapes =>NaN.
//create a Rectangle class that inherits from shape
function Rectangle (_color,_top,_left,_height,_width)   //=> class 
{
Shape.call(this,_color)   
this.top = _top;
this.left = _left;
this.height = _height;
this.width= _width;
this.draw= function(){
let myDiv = document.createElement("div");
myDiv.style.height= _height+"px";
myDiv.style.width=_width+"px";
myDiv.style.top=_top+"px";
myDiv.style.left=_left+"px";
myDiv.style.backgroundColor=_color;
bodyObject.append(myDiv);

}
}
Rectangle.prototype= Object.create(Shape.prototype,{});  //=> gaining my calss prototype equaling references not values.
Rectangle.prototype.constructor=Rectangle;
let rectangleOne = new Rectangle("red",40,40,40,40);//=> instance -> oject
rectangleOne.draw()
console.log(Shape.count);

function Circle (_color,width,height,top,left,radius)
{
    Shape.call(this,_color)
    this.width=width;
    this.height=height;
    this.top=top;
    this.left=left;
    this.radius=radius;
    this.draw=function (){
     let circleDiv = document.createElement("div");
     circleDiv.style.backgroundColor= _color;
     circleDiv.style.borderRadius = radius+"px";
     circleDiv.style.height=height+"px";
     circleDiv.style.width=width+"px";
     circleDiv.style.top=top+"px";
     circleDiv.style.left=left+"px";
     bodyObject.append(circleDiv);


    }
}
Circle.prototype=Shape.prototype;
Circle.prototype.constructor=Circle
let circleOne = new Circle("Black",50,50,50,50,50);
circleOne.draw();
console.log(Shape.count);





































