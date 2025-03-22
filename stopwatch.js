let ctr=0;
function stopwatch(){
    document.querySelectorAll("h1")[1].innerHTML=ctr;

    ctr+=1;
}
function callback(){
setInterval(stopwatch,1000);
}