let seconds = 0 ;
let minutes = 0 ;
let hours = 0 ;
let millisec = 0;
let appendmillisec = document.querySelector("#millisec") ;
let appendseconds = document.querySelector("#seconds") ;
let appendminutes = document.querySelector("#minutes") ;
let appendhours = document.querySelector("#hours") ;

let startbtn = document.querySelector(".start") ;
let stopbtn = document.querySelector(".stop") ;

let resetbtn = document.querySelector(".reset") ;

let interval = null ;

const starttimer = () =>{
    millisec++ ;
        if(millisec === 100){
        millisec = 0 ;
   seconds++ ;
        }
 
        if(seconds === 60){
            seconds = 0 ;
            minutes ++ ;
        }
        if(minutes === 60){
            minutes = 0 ;
            hours++ 

        }
        if(millisec < 10) {
            appendmillisec.innerText = "0" + millisec ;
        }  
        else{
            appendmillisec.innerText = millisec ;
        } 
        if(seconds < 10) {
            appendseconds.innerText = "0" + seconds ;
        }  
        else{
            appendseconds.innerText = seconds ;
        }            
        if(minutes < 10) {
            appendminutes.innerText = "0" + minutes ;
        }  
        else{
            appendseconds.innerText = minutes ;
        }  
        if(hours < 10) {
            appendhours.innerText = "0" + hours ;
        }  
        else{
            appendseconds.innerText = hours ;
        }    } 
       startbtn.addEventListener("click" , () => {
        if(!interval){
            interval = setInterval(starttimer , 10) ;
        }
       } ) ;
       
       stopbtn.addEventListener("click" , ()=>{
        clearInterval(interval) ;
        interval = null ;
       }) ;
       resetbtn.addEventListener("click" , ()=> {
        clearInterval(interval) ;
        millisec = 0 ;
        seconds = 0 ;
        minutes = 0 ;
        hours = 0 ;
        appendmillisec.innerText = "00" ;
        appendseconds.innerText = "00" ;
         appendminutes.innerText = "00" ;
          appendhours.innerText = "00" ;
       }) ;

