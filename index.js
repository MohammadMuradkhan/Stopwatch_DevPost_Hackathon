const btn = document.querySelector(".btn");
const clock_status = document.querySelector(".status");
const clock = document.querySelector(".clock");

let flag = 0;
let intervalId;
let startTime;
let endTime;
clock_status.addEventListener("click",()=>{
    if(flag===0){
        startTime = new Date();
        intervalId = setInterval(()=>{
            clock_status.innerHTML = "stop";
            clock.style.backgroundColor="green";
            const now = new Date();
            const diff = now-startTime; // in milliseconds
            clock.innerHTML = diff;
            const hours = Math.floor(diff/(1000*60*60));
            const minutes = Math.floor((diff%(1000*60*60))/(1000*60));
            const seconds = Math.floor((diff%(1000*60))/1000);
            const milliseconds = diff%1000;
            clock.innerHTML = `${hours}hrs:${minutes}mins:${seconds}secs:${milliseconds}ms`;
        }, 100);
        flag=1;
    }
    else{
        clearInterval(intervalId);
        clock.style.backgroundColor="rgb(0, 138, 236)";
        endTime =new Date();

        const totalDiff = endTime - startTime;

        const hours = Math.floor(totalDiff / (1000 * 60 * 60));
        const minutes = Math.floor((totalDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((totalDiff % (1000 * 60)) / 1000);
        clock.innerHTML = `Time Elapsed: ${hours}hrs:${minutes}mins:${seconds}secs`;
        clock_status.innerHTML = "start again";

        flag=0; 
    }
})
    

