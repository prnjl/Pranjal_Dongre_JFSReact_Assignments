
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
var rect1= new Rectangle(10,5);
var rect2=new Rectangle(20,15);





console.log("rect1 area is"+ rect1.area);
console.log("rect2 area is "+rect2.area);