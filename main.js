//to top scroll :
let span = document.querySelector(".up") ;
window.onscroll = function() {
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show") ;
}
span.onclick = function() {
    window.scrollTo( {
        top : 0 , 
        behavior : "smooth" ,
    }
    );
};
//Increase numbers on scrolling :
let nums = document.querySelectorAll(".stats .num") ;
let statsSection = document.querySelector(".stats") ;
let started = false ;  
window.onscroll = function() {
    if( window.scrollY >= statsSection.offsetTop - 100 ){
        if(!started){
            nums.forEach((num) => startCount(num)) ; 
        }
        started = true ;
    } 
};
function startCount(el) {
    let goal = el.dataset.goal ; 
    let count = setInterval(() => {
        el.textContent++ ; 
        if(el.textContent == goal ){
            clearInterval(count) ; 
        }
    }, 2000 / goal);
} ; 
//Animite width on scrolling :
let spansProg = document.querySelectorAll(".progress span")
let skillSection = document.querySelector(".our-skills") ;
window.onscroll = function() {
    if( window.scrollY >= skillSection.offsetTop ){
        spansProg.forEach((span) => {
            span.style.width = span.dataset.width ; 
        });
    }
};

//Create CountDown timer : 
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime() ; 

let counter = setInterval(() => {
    
    //Get that moment date :
    let dateNow = new Date().getTime() ;

    //get the Date difference between now and the CountDown Date : 
    let diffDate = countDownDate - dateNow ;

    //get Time Unit : 
    let days = Math.floor( diffDate / ( 1000 * 60 * 60 * 24) );
    let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ;
    let minutes = Math.floor((diffDate % (1000 * 60 * 60 )) / (1000 * 60) ) ;
    let seconds = Math.floor((diffDate % (1000 * 60)) / 1000 ) ;
    
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days ; 
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours ;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes ;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds ; 
    if(diffDate < 0) {
        clearInterval(counter) ; 
    }
},1000); 
