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
    console.log("index of :"+picnicfee.indexOf("free"));
    console.log("index of :"+picnicfee.indexOf("100"));
