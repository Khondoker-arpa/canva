const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");

const img = document.getElementById("art")
const desc = document.getElementById("desc")
const price = document.getElementById("price")


div1.addEventListener('click',function(){
   

    img.src = "images/1.jpg";
    desc.innerText = "First-Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil quisquam animi, reiciendis saepe sapiente earum ex quos? Nostrum nesciunt dolor asperiores at aperiam omnis."
    price.innerText = '750$'
})
div2.addEventListener('click',function(){
    img.src = "images/2.jpg";
    desc.innerText = "Second-Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil quisquam animi, reiciendis saepe sapiente earum ex quos? Nostrum nesciunt dolor asperiores at aperiam omnis."
    price.innerText = '550$'
})
 
div3.addEventListener('click',function(){
    img.src = "images/3.jpg";
    desc.innerText = "Third-Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil quisquam animi, reiciendis saepe sapiente earum ex quos? Nostrum nesciunt dolor asperiores at aperiam omnis."
    price.innerText = '330$'
}) 
