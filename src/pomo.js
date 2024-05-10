let timer;
let minutes=25;
let seconds=0;
let isPause=false;
const playButton=document.getElementById("play-btn")
const resetButton=document.getElementById("reset-btn");
function startTimer(){
    timer = setInterval(updateTimer,1000);
}
function updateTimer(){
    const timeElement=document.getElementById("time");
    timeElement.textContent=formatTime(minutes,seconds);
    if(seconds === 0 && minutes === 0)
    {   clearInterval(timer);
        alert("Time for a break!")
    }
    else if(!isPause){
        if(seconds>0){
        seconds--;
        }
        else{
        seconds=59;
        minutes--;
        }
    }
}
function formatTime(minutes,seconds){
    return `${String(minutes).padStart(2,0)} : ${String(seconds).padStart(2,0)}`;
}
function pauseToResume(){
    isPause = !isPause;
    if(isPause){
        clearInterval(timer);
        playButton.src="/public/resume.png";
    }
    else{
        startTimer();
        playButton.src="/public/pause.png";
    }
}
function resetTimer(){
    clearInterval(timer);
    minutes=25;
    seconds=0;
    const timeElement=document.getElementById("time");
    timeElement.textContent=formatTime(minutes,seconds);
    isPause=false;
    pauseToResume();
}
function shortBreak(){
        clearInterval(timer);
        const clock=document.getElementById("clockCircle");
        clock.style.backgroundColor = "rgb(238, 87, 87)";
        minutes=5;
        seconds=0;
        const timeElement=document.getElementById("time");
        timeElement.textContent = formatTime(minutes,seconds);
        playButton.src="/public/resume.png"
        //startTimer();
}
function longBreak(){

        clearInterval(timer);
        const clock=document.getElementById("clockCircle");
        clock.style.backgroundColor = "rgb(238, 87, 87)";
        clearInterval(timer);
        minutes=15;
        seconds=0;
        const timeElement=document.getElementById("time");
        timeElement.textContent = formatTime(minutes,seconds);
        startTimer();
}
function pomodoro(){
        const clock=document.getElementById("clockCircle");
        clock.style.backgroundColor = "#373434";
        clearInterval(timer);
        resetTimer();

}
playButton.addEventListener("click",pauseToResume);
resetButton.addEventListener("click",resetTimer);

startTimer();