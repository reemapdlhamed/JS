import { Car } from "./carModel.js";

export class FlyingCar extends Car{
constructor( model, year,canFly){
super(model,year);    
this.canFly=canFly;
}

toString(){
 return super.toString()+ "  i can fly "+ this.canFly;
}


}