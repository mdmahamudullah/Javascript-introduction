// var number=[10,20,25,35,40,60,75,80,95,100,111];
// var len=number.length;
// for(var i=0;i<len;i++){
//     console.log(number[i]);
// }

// ..............break

// var number=[10,20,25,35,40,60,75,80,95,100,111];
// var search=112;
// var len=number.length;
// for(var i=0;i<len;i++){
//     if(number[i]==search){   
//         console.log(number[i]+" found");
//         break;
//     }
//     else if(i+1==len){
//         console.log(" not found");
//     }
// }

// ..............continue

var number=[10,20,55,35,44,60,25,80,25,100,111];
var len=number.length;
for(var i=0;i<len;i++){
    if(number[i]<=40){   
        continue;
    }
    else{
        console.log(number[i]);
    }
}