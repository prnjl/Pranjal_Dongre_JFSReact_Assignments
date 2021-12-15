class nextFibonacci{
    constructor(previousNo, currentNo) {
        this.previousNo = previousNo;
        this.currentNo = currentNo;
      }
      next(n) {
        let a = (n * (1 + Math.sqrt(5))) / 2.0;
        return Math.round(a);
      }
    }
    
    var w= new NextFibonacci();
    let n = 5;
    console.log(w.next(n));