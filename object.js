var shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:2,
    pen:20
}

var penCount=shoppingCart.pen;
console.log(penCount);
var penCount=shoppingCart['pen'];
console.log(penCount);
var p1='mouse'
var mouseCount=shoppingCart[p1];
console.log(mouseCount);

var properties= Object.keys(shoppingCart);
console.log(properties);
var values=Object.values(shoppingCart);
console.log(values);