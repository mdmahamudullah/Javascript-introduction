// console.log(5>6);
// console.log(7>6);
// console.log(6==6);
console.log(6!=6);
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
var graduate=false;
var salary=50000;
var car=true;

if(graduate==true || salary>=50000 && car==true){
    console.log('eso prem kori na ');
}
else if(graduate===true && salary>=50000 || car==true){
    console.log('gari nai tao cholo polai jai');
}
else{
    console.log('chakrita ami pabona bela sunso');
}
var pass=true;
var math=80;
var code=90;

if(pass==true){
    if(math>=80){
        console.log('mathe A+ ');
    }
    else{console.log('jomlo na mathe');}
    if(code>=80){
        console.log('codea tumi sera ');
    }
    else{console.log('jomlo na codea');}
}

else{
    console.log('chakrita ami pabona bela sunso');
}

var math=70;
var code=90;
if(pass==true){
    if(math>=80){
        console.log('mathe A+ ');
    }
    else if(math==70){
        console.log('mathe motamuti ');
    }
    else{console.log('jomlo na mathe');}
    if(code>=80){
        console.log('codea tumi sera ');
    }
    else{console.log('jomlo na codea');}
}

else{
    console.log('chakrita ami pabona bela sunso');
}

var pass=false;
var math=80;
var code=90;

if(pass==true){
    if(math>=80){
        console.log('mathe A+ ');
    }
    else{console.log('jomlo na mathe');}
    if(code>=80){
        console.log('codea tumi sera ');
    }
    else{console.log('jomlo na codea');}
}

else{
    console.log('chakrita ami pabona bela sunso');
}