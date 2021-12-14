//creating class and constructorS
class Rectangle{
    constructor(height , width){
        this.height= height;
        this.width=width;
    }
     get area(){
         return this.width*this.height;
     }
}



//creating instances using new
var rect1= new Rectangle(4,5);


rect1.hieght=50;

console.log("rect1 area is "+ rect1.area);

//answer is reamin 20 only because in like no. 18 the spelling of height is wrong 