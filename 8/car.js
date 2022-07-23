//*****************************************(2) **************************/
// class Engine {
//     static #count=0 //private static count.
//     constructor(source) //function => runing after the instance .
//     { 
//         Engine.#count++;
//         if (new.target.name=="Engine")  //making my class Abstract.
//         {
//             throw new Error ('this is abstract class');

//         }
//         this.source=source;
       

//  }
//  static getcount(){return Engine .#count;}
 
// }



class Engine {
    static #count = 0;

    constructor(source) {
        Engine.#count++;
        if (new.target === Engine) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }

        this.source = source;
    }

    static getCount() { return Engine.#count; }

}
class Car extends Engine {

    //     let i = document.createElement("img")
    // undefined
    // i.src = "images//car1.png"
    // 'images//car1.png'
    // document.body.append(i)
    // undefined

    #carImage;
    constructor(source, top, left) {
        super(source);
        this.top = top;
        this.left = left;

        this.#carImage = document.createElement("img");
        this.#carImage.src = source;
        this.#carImage.style.position = "absolute";
        this.#carImage.style.top = top + "px";
        this.#carImage.style.left = left + "px";
        this.#carImage.style.width="100px";
        document.body.append(this.#carImage);
    }

    // calcArea() {
    //     return this.height * this.width;
    // }

    // set lang(lang) {
    //     this.language = lang.toUpperCase();
    // }

    set Top(top) {
        this.top = top;
        this.#carImage.style.top = this.top + "px";
    }

    set Left(left) {
        this.left = left;
        this.#carImage.style.left = this.left + "px";
    }

    moveLeft() {
        this.left -= 10;
        this.#carImage.style.left = this.left + "px";
        this.#carImage.style.transform = "rotate(0deg)";
    }

    moveRight() {
        this.left += 10;
        this.#carImage.style.left = this.left + "px";
        this.#carImage.style.transform = "rotate(180deg)";
    }

    
    moveCar(direction) {
        let offsetX = 0;

        let id;
        id = setInterval(() => {
            switch (direction) {
                case "right":
                    {
                        if (this.left < window.innerWidth - this.#carImage.width - 5) {
                            // this.#carImage.style.transform = `translateX(${offsetX}px)`;
                            this.moveRight();
                            break;

                        }
                        else {
                            clearInterval(id);
                            break;
                        }
                    }

                case "left":
                    {
                        if (this.left > 0) {
                            // this.#carImage.style.transform = `translateX(${offsetX}px)`;
                            this.moveLeft();
                            break;

                        }
                        else {
                            clearInterval(id);
                            break;
                        }
                    }
     

                default:
                    clearInterval(id);
            }

        }, 50);


    }

    moveAround() {

        let goLeft = true, goUp = false, goRight = false, goDown = false;
        let xTime = 20, yTime = 40;
        let id;
        let c = 0;

        id = setInterval(() => {
            if (goLeft) {
                this.moveLeft();
                c++;
                if (c >= xTime) {
                    goLeft = false;
                    goDown = true;
                    c = 0;
                }
            
            }
            else if (goRight) {
                this.moveRight();
                c++;
                if (c >= xTime) {
                    goRight = false;
                    goUp = true;
                    c = 0;
                }
            }
        
            
            else {
                clearInterval(id);
            }



        }, 50)

    }
    //{"border":"10px","width":"200px"}
    ChangeStyle(cssStyleObj) {

        //for(let i in x)
        // console.log(i,x[i])

        for (let i in cssStyleObj) {
            this.#carImage.setAttribute(i, cssStyleObj[i]);
        }

    }
}