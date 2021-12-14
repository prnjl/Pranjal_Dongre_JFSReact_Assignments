var year=prompt("Enter Year: ");
year = parseInt(year);
var howManyYear=prompt("enter  till how many years: ");

function isLeapYear(year, howManyYear) {
    
    for(var i=0; i<=howManyYear; i++){
         year=year+i;
         if((year%4==0 && year%100!=0) || year%400==0){
             console.log(year +" is leap year");
         }
         else{ 
             console.log(year+" is not leap year");
         }
    }
}
console.log(isLeapYear(year,howManyYear));



