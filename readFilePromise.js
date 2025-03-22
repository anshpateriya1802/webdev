let fs=require('fs');
// using traditional callback method
// fs.readFile("a.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Error reading file...");
//         return;
        
//     }
//     console.log(data);
// });

function reading(){
    return new Promise((resolve)=>{
        fs.readFile("a.txt","utf-8",(err,data)=>{
            if(err){
                resolve("DATA NOT FOUND...");
            }
            resolve(data);
        });

    })
}
reading().then((x)=>{
    console.log("FILE READ"+x);
    
})