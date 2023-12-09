const urlParams = new URLSearchParams(window.location.search);
// Get the value of the 'data' parameter
const id = urlParams.get('id');



async function getSingleProduct() {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    const proDetails=document.getElementById("pro-details");
    proDetails.innerHTML=`<div class="single-pro-img">
    <img src=${data.thumbnail} height="300px" width="100%" id="mainImg" alt="">

    <div class="small-img-grp">
        <div class="sm-img-col">
            <img src=${data.images[0]} height="150px" width="100%" class="small-img" srcset="">
        </div>
        <div class="sm-img-col">
            <img src=${data.images[1]} height="150px" width="100%" class="small-img" srcset="">
        </div>
        <div class="sm-img-col">
            <img src=${data.images[2]} height="150px" width="100%" class="small-img" srcset="">
        </div>
        <div class="sm-img-col">
            <img src=${data.images[3]} height="150px" width="100%" class="small-img" srcset="">
        </div>
    </div>
</div>

<div class="single-pro-details">
    <h6>Home / ${data.category}</h6>
    <h4>${data.title}</h4>
    <h2>Price : $${data.price}</h2>
    <input type="number" value="1">
    <button class="normal">Add to Cart</button>
    <h4>Product Details</h4>
    <span>${data.description}</span>
</div>
`
let main;
let mainImg=document.getElementById("mainImg");
    let smImg=document.getElementsByClassName("small-img");
    smImg[0].onclick = function () {
        main=mainImg.src;
        mainImg.src=smImg[0].src;
        smImg[0].src=main;
       
    }
    smImg[1].onclick = function () {
        main=mainImg.src;
        mainImg.src=smImg[1].src;
        smImg[1].src=main;
    }
    smImg[2].onclick = function () {
        main=mainImg.src;
        mainImg.src=smImg[2].src;
        smImg[2].src=main;
    }
    smImg[3].onclick = function () {
        main=mainImg.src;
        mainImg.src=smImg[3].src;
        smImg[3].src=main;
    }

}




getSingleProduct();