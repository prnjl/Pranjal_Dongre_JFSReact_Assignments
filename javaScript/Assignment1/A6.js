

document.write("***********");

var n=["Hello" , "World" , "in", "a" ,"frame"];

function fun1(n) {
    for(var i=0; i<=n.length ; i++){
       document.write("* "+n[i] +" *");
    }
}
fun1(n);
document.write("********");