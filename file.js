const fs = require("fs");

//sync
//fs.writeFileSync('./test.txt','Hey there');

//Async
//fs.writeFile('./test.txt',"Hello world",(err)=>{});


//sync read will return value
// const result=fs.readFileSync("./contact.txt","utf-8");
// console.log(result);


//Async expect callback
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// })

//fs.appendFileSync("./test.txt","Hurrayyy!!\n");

//fs.copyFileSync("./test.txt","./copy.txt");
fs.unlinkSync("./copy.txt");

//Javascript does not allow file handling
//Whereas node js allow file handling