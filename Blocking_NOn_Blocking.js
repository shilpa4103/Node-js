const fs=require("fs");


//sync will block the other users
//OUTPUT for sync
// 1
// Hello worldHurrayyy!!
// Hurrayyy!!
// 2

console.log(1);

// const result=fs.readFile("./test.txt","utf-8");
// console.log(result);

fs.readFile("./contact.txt","utf-8",(err,result)=>{
         if(err){
             console.log("Error",err);
         }
         else{
         console.log(result);
        }
    })

console.log(2);

//Async non blocking allows others to complete its task
//Output
// 1
// 2
// Shilpa:123456789