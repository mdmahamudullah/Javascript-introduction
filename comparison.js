// console.log(5>6);
// console.log(7>6);
// console.log(6==6);
// console.log(6!=6);
// console.log(5<=6);
// console.log(6<=6);
console.log(7>=6);

// money1 >money2 && result1 > result2
// money1 >money2 || result1 > result2 
// money1 >money2 || result1 > result2 && hight1==hight2

var iphone=79000;
var budget=95000;

if(iphone<budget){
    console.log('i phone ami  kinum ');
}
else{
    console.log('i phone ami amneo kinum na');
}
var graduate=true;
var salary=50000;
var car=false;

if(graduate==true && salary>=50000 && car==true){
    console.log('cholo polai ');
}
else if(graduate===true && salary>=50000 || car==true){
    console.log('gari nai tao cholo polai jai');
}
else{
    console.log('chakrita ami pabona bela sunso');
}