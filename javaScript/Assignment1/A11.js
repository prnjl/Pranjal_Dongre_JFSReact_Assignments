//generate random array

function getUserArray(myArray, arraySize) {
    for(i=0; i<arraySize; i++){
        myArray[i] = window.prompt("Enter " + i + " value for array");
    }  
}

var arraysize = window.prompt("Enter array size : ");
var myarray = new Array(arraysize);
getUserArray(myarray, arraysize);
console.log("Array is: " + myarray);
console.log("Reverse Array is: " + myarray.reverse());

// function randomArray(arrSize) {
//     for(let i=0; i<arrSize; i++){
//         randomArray.push(Math.random());
//     }
    
// }

// var n=prompt("enter array size: ");

// var arr=[];
// randomArray(arr);
// document.write("generated array "+arr +"\n");

// var reversedAarry=arr.revrse();

// document.write("reversed array :"+ reversedAarry);