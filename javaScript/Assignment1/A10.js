
//function if febonancci series
function fibo(n) {
    let n1=1;
    let n2=2;
    let nextTerm;

    document.write("fibonancci series: ");

    for (let i=1; i<=n ; i++){
        document.write(n1+ "\n");
        
        nextTerm=n1+n2;
        n1=n2;
        n2=nextTerm
    }


}
var n=parseInt(prompt("enter the number of tearm:"));
fibo(n);