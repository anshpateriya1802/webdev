// using callbacks , printing hi after 1 sec and hello after 3 sec and hello there after 5 sec, due to this there comes nested callbacks.


// function callbackHell(){
//     console.log("Start");
//     setTimeout(()=>{
//         console.log("HI");
//         setTimeout(()=>{
//             console.log("HELLO");
            
//             setTimeout(()=>{
//                 console.log("HELLO THERE");
                

//             },5000)
//         },3000)
//     },1000)
// }
// callbackHell();



// Now to solve the problem of nested callbacks we use promises

function promisified(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));

}
promisified(1000).then(function(){
    console.log("HI");
})
promisified(3000).then(function(){
    console.log("HELLO");
})
promisified(5000).then(function(){
    console.log("HELLO THERE");
})
  