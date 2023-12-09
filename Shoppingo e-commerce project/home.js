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



const img =document.querySelector(".img");

async function getData() {
    const proContainer = document.querySelector(".pro-container")
    let res_data = await fetch("https://dummyjson.com/products");
    let jsonData = await res_data.json();
    let index=0;
    while (jsonData["products"]) {
        
        const product1=jsonData["products"][index]
    
    proContainer.innerHTML+=`<div class="pro" onclick="singleProductDetail(${product1.id})">

    <img  src=${product1.images[0]} alt="" srcset="">
    <div class="des">
        <span>${product1.brand}</span>
        <h5>${product1.title}</h5>
        <div class="star">
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bx-star'></i>
            <i>${product1.rating}</i>
        </div>
        <h4>$${product1.price}</h4>
    </div>`

    index++
    }
    
}

async function getSpecificData(category1) {
    
    const pro = document.querySelector(".pro-container")
    let res_data = await fetch("https://dummyjson.com/products");
    let jsonData = await res_data.json();
    let index=0;
    while (jsonData["products"]) {
        
    const product1=jsonData["products"][index]
    const cate=product1.category;
    
    if(cate.includes(category1)){
        pro.innerHTML+=`<div class="pro" onclick="singleProductDetail(${product1.id})">

    <img  src=${product1.images[0]} alt="" srcset="">
    <div class="des">
        <span>${product1.brand}</span>
        <h5>${product1.title}</h5>
        <div class="star">
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bx-star'></i>
            <i>${product1.rating}</i>
        </div>
        <h4>$${product1.price}</h4>
    </div>`
    }
    

    index++
    }
 
}

const inputSearch = document.querySelector("#search input");
function specificData(){
    const pro1 = document.querySelector(".pro-container")
      const  category1 =inputSearch.value;
      console.log(category1);
      pro1.innerHTML="";
      getSpecificData(category1);      

}

getData();

function singleProductDetail(id){
    const ProductId=id;
    window.location.href = "sProduct.html?id=" + encodeURIComponent(ProductId);
    // console.log(ProductId);
    
}

// specificData();