 export class car {
    constructor(model,year){
        this.model=model;
        this.year=year;
    }
    toString(){
        return `this Car model : ${this.model} and its year is : ${this.year}`;
    }
}