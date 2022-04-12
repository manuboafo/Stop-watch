const Outputhours =  document.getElementById('hours');
const Outputminutes =  document.getElementById('minutes');
const Outputseconds = document.getElementById('seconds');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause')
const resetButton = document.getElementById('reset');
let hours = 00;
let minutes = 00;
let seconds = 00;
let interval;



startButton.addEventListener('click',()=>{
 clearInterval(interval);
   interval = setInterval(start, 1000);
});


pauseButton.addEventListener('click',()=>{
    clearInterval(interval);
})


resetButton.addEventListener("click", () => {
    clearInterval(interval);
  hours = "00";
  minutes = "00";
  seconds = "00";
  Outputhours.innerText = hours;
  Outputminutes.innerText = minutes;
  Outputseconds.innerText = seconds;
});

    
  
function start(){
                seconds++
                if(seconds <= 9){
                Outputseconds.innerText = '0'+ seconds; 
                }
                
                if(seconds > 9){
                Outputseconds.innerText = seconds;     
                }

                if(seconds > 59){
                    minutes++;
                    Outputminutes.innerText = '0'+ minutes;
                    Outputseconds.innerText = '00'
                    seconds = 00;
                }
                if(minutes > 9){
                    Outputminutes.innerText = minutes;
                }

                if(minutes > 59){
                    hours++;
                    Outputhours.innerText = '0'+ hours;
                    Outputminutes.innerText = '00'
                    minutes = 00;
                }
                if(hours > 9){
                    Outputhours.innerHTML = hours;
                }
        }
         



