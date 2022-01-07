var day_list=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

var small_time=document.getElementsByClassName("time_small")[0];
var big_time=document.getElementsByClassName("time_big")[0];
var day=document.getElementsByClassName("day")[0];

var d=new Date();
small_time.innerHTML=d.getHours()+":"+d.getMinutes();
big_time.innerHTML=d.getHours()+":"+d.getMinutes();
day.innerHTML=day_list[d.getDay()]

var chat=document.getElementsByClassName("chat")[0];
var new_screen=document.getElementsByClassName("time_day")[0];
var img=document.getElementsByClassName("images")[0];
var screen2=document.getElementsByClassName("screen2")[0];
var next_screen=document.createElement("div"); 
var next_screen2=document.createElement("div");
var msg1=document.createElement("div");
var msg2=document.createElement("div"); 
var msg3=document.createElement("div");
msg1.textContent="C";
msg2.textContent="Java";
msg3.textContent="Python";


var v=0;
chat.addEventListener("click",myfun);
function myfun(){
    if(v===0){
    chat.style.color="red";
    new_screen.replaceWith(next_screen)
    next_screen.classList.add("screen3")
    next_screen.append(msg1)
    next_screen.append(msg2)
    next_screen.append(msg3)
    document.querySelector(".clock").style.pointerEvents="none"
    v=2 
}
   else if(v==1){
       next_screen2.replaceWith(next_screen);
       next_screen.classList.add("screen3")
       next_screen.append(msg1)
       next_screen.append(msg2)
       next_screen.append(msg3)
       v=2 
   }
   else{
    next_screen.replaceWith(new_screen); 
    chat.style.color="white";
    document.querySelector(".clock").style.pointerEvents="auto";
    v=0;
   }
}
msg1.addEventListener("click",function(){
    myfun1(0)
});
msg2.addEventListener("click",function(){
    myfun1(1)
});
msg3.addEventListener("click",function(){ 
    myfun1(2)
});

function myfun1(val){
    next_screen.replaceWith(next_screen2)
    next_screen2.classList.add("screen4")
    next_screen2.style.padding="8px"
    next_screen2.style.fontSize="13px"
    if(val==0){
    next_screen2.innerHTML="C is the mother of all programming language and it is a structure based language."
    }
    else if(val==1){
        next_screen2.innerHTML="Java is a strongly typed object oriented programming language and its very powerful";
    }
    else{
        next_screen2.innerHTML="Python is a interpreted based language and its easy to learn and its the best developing language"
    }
    v=1;
}
var v1=0;
var home=document.getElementsByClassName("time_day")[0];
var clockContent=document.createElement('div')
let loadingzero = (time) => {
    if (time <= 9) {
      return "0" + time;
    } else {
      return time;
    }
  };

function timer()
{
    if(v1==0)
    {
        clockContent.setAttribute("class","timer")
        document.querySelector(".clock").style.border="2px solid gray";
        document.querySelector(".clock").style.borderRadius="20px";
            
            
            
            document.querySelector(".chat").style.pointerEvents="none"
            document.querySelector(".music").style.pointerEvents="none"
            clockContent.id = "clock-item";
    clockContent.innerHTML = `
      <center>
      <h1 class="timer">
          <span id="min">00</span>
          <span id="sec">00</span>
          <span id="m-sec">00</span>
      </h1>
      <div id="clock-icons">
          <a id="reset-btn" onclick="start()"><i class="fa fa-refresh" aria-hidden="true"></i></a>
          <a id="stop-btn" onclick="stop()"><i class="fa fa-pause" aria-hidden="true"></i></a>
          <a id="start-btn" onclick="reset()"><i class="fa fa-square" aria-hidden="true"></i></a>
        </div></center>
      `;
   // mainContent.appendChild(clockContent);
   document.querySelector(".time_day").replaceWith(clockContent)




   
      document.querySelector("#min").innerText = "00";
      document.querySelector("#sec").innerText = "00";
      document.querySelector("#m-sec").innerText = "00";
        v1=1
    }
    else if(v1==1)
    {
        document.querySelector(".clock").style.border="none";
        document.querySelector(".clock").style.borderRadius="20px";
        document.querySelector(".timer").replaceWith(home)
        document.querySelector(".chat").style.pointerEvents="auto"
        document.querySelector(".music").style.pointerEvents="auto"
        v1=0
    }
}
let count = 0;
let minutes = 0;
let seconds = 0;
let interval = 0;
let milliseconds = 0;
let timerRunning = false;
let startTimer = () => {
    count++;
    minutes = Math.floor(count / 100 / 60);
    seconds = Math.floor(count / 100 - minutes * 60);
    milliseconds = Math.floor(count - seconds * 100 - minutes * 6000);

    document.querySelector("#min").innerText = loadingzero(minutes);
    document.querySelector("#sec").innerText = loadingzero(seconds);
    document.querySelector("#m-sec").innerText = loadingzero(milliseconds);
  };
let startBtn = document.querySelector("#start-btn");
function start(){

  if (!timerRunning) {
    interval = setInterval(startTimer,10); // start the timer
    timerRunning = true;
  }
}

// when clicking stop button
let stoptBtn = document.querySelector("#stop-btn");
let s=0;
function stop () {
    clearInterval(interval);
  if(s==0)
  {
      timerRunning=true;
      start();
      s=1;
  }
  else if(s==1)
  {
      timerRunning=false;
      start();
      s=0;
  }
}

// when clicking reset button

let resetBtn = document.querySelector("#reset-btn");
function reset(){
  clearInterval(interval);
   count = 0;
   minutes = 0;
   seconds = 0;
   interval = 0;
   milliseconds = 0;
   timerRunning = false;
   document.querySelector("#min").innerText = "00";
   document.querySelector("#sec").innerText = "00";
   document.querySelector("#m-sec").innerText = "00";
};

var v01=0;
var home2=document.getElementsByClassName("time_day")[0];
var musicContent=document.createElement('div')

function music()
{
    if(v01==0)
    {
        musicContent.setAttribute("class","song")
        document.querySelector(".music").style.border="2px solid gray";
        document.querySelector(".music").style.borderRadius="20px";
            
            
            
            document.querySelector(".chat").style.pointerEvents="none"
            document.querySelector(".clock").style.pointerEvents="none"
            document.querySelector(".images").style.marginTop="0px"
            document.querySelector(".clock").style.marginTop="0px"
            document.querySelector(".chat").style.marginTop="0px"
            document.querySelector(".music").style.marginTop="0px"
            musicContent.id = "clock-item";
   musicContent.innerHTML = `
      <center>
      <div id="my-play">
               <audio controls style="width: 170px;"></audio>
    </div>
           <div onclick="musicOne()">Emotion<span>................</span>3:17</div>
           <div onclick="musictwo()">I really like you<span>..</span>3:24</div>
           <div onclick="musicthree()">Gimmie Love<span>........</span>3:22</div>
           <div onclick="musicfour()">All That<span>....................</span>4:36</div>
           <div onclick="musicfive()">Boy Problems<span>......</span>3:42</div>
        </center>
      `;
   // mainContent.appendChild(clockContent);
   document.querySelector(".time_day").replaceWith(musicContent)
        v01=1
    }
    else if(v01==1)
    {
        document.querySelector(".clock").style.marginTop="30px"
            document.querySelector(".chat").style.marginTop="30px"
            document.querySelector(".music").style.marginTop="30px"
        document.querySelector(".images").style.marginTop="30px"
        document.querySelector(".music").style.border="none";
        document.querySelector(".music").style.borderRadius="20px";
        document.querySelector(".song").replaceWith(home2)
        document.querySelector(".chat").style.pointerEvents="auto"
        document.querySelector(".clock").style.pointerEvents="auto"
        v01=0
    }
}
function musicOne(){
    var one = 'Get Low Furious 7 Dillon Francis DJ Snake (englishsongs.wapkiz.com).mp3'
    var play = document.getElementById("my-play");
    play.innerHTML = `<audio controls class="my-play">
                    <source src="${one}">
                 </audio>`
}
function musictwo(){
    var two = 'Alan Walker, Sabrina Carpenter & Farruko - On My Way.mp3'
    var play = document.getElementById("my-play");
    play.innerHTML = `<audio controls class="my-play">
                    <source src="${two}">
                 </audio>`
}
function musicthree(){
    var three = 'Alan Walker - Faded.mp3'
    var play = document.getElementById("my-play");
    play.innerHTML = `<audio controls class="my-play">
                    <source src="${three}">
                 </audio>`
}
function musicfour(){
    var four = 'Alan Walker, K-391 & Emelie Hollow - Lily.mp3'
    var play = document.getElementById("my-play");
    play.innerHTML = `<audio controls class="my-play">
                    <source src="${four}">
                 </audio>`
}
function musicfive(){
    var five = 'Major Lazer & DJ Snake - Lean On (feat. MØ) (Official).mp3'
    var play = document.getElementById("my-play");
    play.innerHTML = `<audio controls class="my-play">
                    <source src="${five}">
                 </audio>`
}