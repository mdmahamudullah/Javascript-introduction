console.log(9);//output show
// variables rule    >>>>
// variable always start with latter
// variable can contain number with it
// variable don't allow symbol except underscore
// keywords  can't be variable.

// number variables
var price=5;
var quantity=50;
var total=250;
console.log(total);//output show
// string in variable
var address="Dhaka";
var area='Dhanmondi';
console.log(area);
console.log(address);
// boolian variable
var statu=true;
console.log(statu);

//arithmetic operations
var first=10;
var second=20;
console.log(first+second);
var result1=first+second;
var result2=first-second;
var result3=first*second;
var result4=first/second;
var result5=first%second;
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
// override variable
console.log('override variable');
first=first+10;
console.log(first);
console.log(first+10);//this is not override
first += 30;
console.log(first);
// adding or deducting by 1
first++;
console.log(first);
first--;
console.log(first);
// add string

var firstName="mahamud"
var secondName="hamza"
var v1="10";
var v2="20";
var v3=30;
console.log(firstName,secondName);
console.log(firstName+secondName);
console.log(firstName+ " "+secondName);
console.log(firstName+ " and and "+secondName);
console.log(v1+v2);
console.log(v1+v3);

v1=parseInt(v1);
console.log(v1+v3);

// types of
console.log(typeof(firstName),typeof(v1));

// float
var v4=0.1;
var v5=0.2;
var res=v4+v5;
console.log(res);
console.log(parseFloat(res));
console.log(res.toFixed(3));
console.log(parseFloat(res.toFixed(3)));

// practice problems
// Gets user input


// Uses user input to print out information
var price1 =100;
var price2=30;
console.log("change is:"+(price1-price2));
