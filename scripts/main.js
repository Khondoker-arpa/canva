const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");

const img = document.getElementById("art")
const desc = document.getElementById("desc")
const price = document.getElementById("price")
const free = document.getElementById("free")
const express = document.getElementById("express")
const shipping = document.getElementById("shipping")
const total = document.getElementById("total")


free.addEventListener('click',function(){


 
    shipping.innerText = "0";
    updateTotal()

})

express.addEventListener('click',function(){

    
    shipping.innerText = "30";
    updateTotal()
})
function updateTotal(){
     
   
    const shippingCharg = parseInt( shipping.innerText)
    const productPrice = parseInt(price.innerText)

    const totalPrice = shippingCharg + productPrice;

    total.innerText = totalPrice;

}


div1.addEventListener('click',function(){
   
    // changing image
    img.src = "images/1.jpg";
    // changing Description
    desc.innerText = "First-Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil quisquam animi, reiciendis saepe sapiente earum ex quos? Nostrum nesciunt dolor asperiores at aperiam omnis."
    // changing price
    price.innerText = '750$'
    // changing total price
    updateTotal()
   

})
div2.addEventListener('click',function(){
    img.src = "images/2.jpg";
    desc.innerText = "Second-Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil quisquam animi, reiciendis saepe sapiente earum ex quos? Nostrum nesciunt dolor asperiores at aperiam omnis."
    price.innerText = '550$'
    updateTotal()
})
 
div3.addEventListener('click',function(){
    img.src = "images/3.jpg";
    desc.innerText = "Third-Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil quisquam animi, reiciendis saepe sapiente earum ex quos? Nostrum nesciunt dolor asperiores at aperiam omnis."
    price.innerText = '330$'
    updateTotal()
}) 
 