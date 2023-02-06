    var friendsAge=[11,21,45,17,14];
    var picnicfee=[500,2000,4000,"free","free"];
    
    var vowels=['a','e','i','o','u'];
    var naikas=['mahi','opu'];
    console.log(friendsAge);
    console.log(vowels);
    console.log(picnicfee);
    picnicfee[0]='free';
    console.log(picnicfee);
    console.log(typeof(picnicfee));
    console.log(typeof(picnicfee[3]));
    console.log(typeof(picnicfee[2]));
    // array length
    console.log(picnicfee.length);
    // index of
    console.log("index of :"+picnicfee.indexOf(2000));
    console.log("index of :"+picnicfee.indexOf("100"));
    picnicfee.push(69,96);
    console.log("push  last :"+ picnicfee);
    // picnicfee.pop();
    var v1=picnicfee.pop();
    console.log("pop  :"+ picnicfee);
    console.log("pop's item  :"+ v1);
    // add in first
    picnicfee.unshift(1000);
    console.log("push 1st  :"+ picnicfee);
    
    // Add to a specified location
    picnicfee.splice(2, 0, 500,200);
    // 1st is where i add,second is how much dld after adding position 3rd is what i will add
    console.log("push in  :"+ picnicfee);

    // pop from first
    picnicfee.shift();
    console.log("pop first  :"+ picnicfee);

    // pop by index
    picnicfee.splice(1, 2); 
    // Starting at index position 1, remove two elements 
    console.log("pop first  :"+ picnicfee);

    // ..........................array include(),concat,slice .................
    const arr1=[10,20,25,30,40,50]
    const arr2=["a","b","c","d","e","f"]
    console.log("\nchecking element in array: "+arr1.includes(20));
    const arr3=arr1.concat(arr2);
    console.log("\n concat elements of two array: "+arr3);
    
    const arr4=arr3.slice(4,8);
    console.log("\n slice some elements from a array: "+arr4);