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
let nums = document.querySelectorAll(".stats .num") ;
let statsSection = document.querySelector(".stats") ;
let spansProg = document.querySelectorAll(".progress span")
let skillSection = document.querySelector(".skills") ;
let started = false ;  
window.onscroll = function() {
    if( window.scrollY >= statsSection.offsetTop - 100 ){
        if(!started){
            nums.forEach((num) => startCount(num)) ; 
        }
        started = true ;
    } 
    if( window.scrollY >= skillSection.offsetTop ){
        spansProg.forEach((span) => {
            span.style.width = span.dataset.width ; 
        })
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
}
