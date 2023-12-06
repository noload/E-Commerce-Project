// Hamburgur menu

const bar=document.querySelector('#bar');
const nav = document.getElementById('navbar');
let close=document.getElementById('close');
if(bar){
    
    bar.addEventListener("click",()=>{
        nav.classList.add('show');
    })
    
    
    
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove("show");
    })
}