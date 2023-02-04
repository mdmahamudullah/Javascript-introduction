var shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:2,
    pen:20
}

// var penCount=shoppingCart.pen;
// console.log(penCount);
// var penCount=shoppingCart['pen'];
// console.log(penCount);
// var p1='mouse'
// var mouseCount=shoppingCart[p1];
// console.log(mouseCount);

var keys= Object.keys(shoppingCart);
console.log(keys);
var values=Object.values(shoppingCart);
console.log(values);

for(var i=0;i<keys.length;i++){
    console.log(keys[i]+" : "+values[i]);
}

for(var propertyName in shoppingCart){
    const value=shoppingCart[propertyName];
    console.log(propertyName,value);
}
