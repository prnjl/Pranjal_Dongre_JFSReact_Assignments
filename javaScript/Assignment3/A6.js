var str= `({"firstName":"Pranjal", "lastName":"Mishra"})`;

var obj = eval(str);

obj.lastName="Dongre";

console.log( `${obj.firstName},${obj.lastName}`);