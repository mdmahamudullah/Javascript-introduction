// practice-1
var fruits=['apple','banana','orange'];
// find index of banana
console.log("index of banana :"+fruits.indexOf("banana"));
// replace banana by mango
fruits.splice(1, 1, "mango");
console.log(fruits);
// remove orange
fruits.pop();
console.log(fruits);
// add watermelon
fruits.push("watermelon");
console.log(fruits);

var i = 0;
for (i=0; i<5; i++){};
console.log(i);