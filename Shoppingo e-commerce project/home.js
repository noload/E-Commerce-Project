//welcome 
const welcome=document.getElementById('welcome');
welcome.addEventListener('mouseenter',function(){
    welcome.classList.add('hoverme');
});
welcome.addEventListener('mouseout',function(){
    welcome.classList.remove('hoverme')
});

//middle

function mouseEnter(li) {
    li.classList.add('hoverme')
   
}
function mouseOut(li) {
    li.classList.remove('hoverme')
  
}


function mouseHover(li){
    li.classList.add('hoverSection2')
}
function mouseLeave(li){
    li.classList.remove('hoverSection2')
}