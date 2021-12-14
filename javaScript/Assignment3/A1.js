
//creating class and constructorS
class Rectangle{
    constructor(height , width){
        this.height= height;
        this.width=width;
    }
}

//creating instances using new
var rect1= new Rectangle(10,5);
var rect2=new Rectangle(20,15);

//getting values
console.log("rect1 heigth is"+ rect1.height);
console.log("rect1 width is "+rect1.width);

console.log("rect2 heigth is"+ rect2.height);
console.log("rect2 width is "+rect2.width);



console.log("updated values:");
//updating new value
rect1.height=30;
rect1.width=15;


console.log("rect1 heigth is"+ rect1.height);
console.log("rect1 width is "+rect1.width);