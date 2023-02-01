//............... simple function and call

// function hello(){
//     console.log('function called successfully');
// }

// console.log('i call the function here');
// hello();


//................. simple function and call

// function hello(){
//     console.log('function called successfully');
// }

// console.log('i call the function here '+hello());


//.................. simple function with parameter and call

// function singara(price){
//     console.log('function called successfully \n'+price);
//     console.log();
// }

// console.log('i call the function here ');
// singara(100);


//.................. function with multiple parameter and call

// function add(num1,num2){

//     var sum=num1+num2;
//     console.log(sum);
// }
// var n1=10;
// var n2=20;
// add(n1,n2);

//.................. function with return

function add(num1,num2){

    var sum=num1+num2;
    return sum;
}
var n1=10;
var n2=20;

console.log(add(n1,n2));