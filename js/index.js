// local storge ----------------------------------------------------------

let btnMood = document.querySelector("#btn-mood");
let boody = document.querySelector("body");

// Check If There's Local Storage mood Option
let mood= localStorage.getItem('mood_option');

// If There's mood Item In Local Storage
if(mood != null){
    if(mood === "light"){
        btnMood.innerHTML = '<i class="fa-solid fa-moon" data-mood="dark"></i>';
    }else{
        boody.classList.add("dark");
        btnMood.innerHTML = '<i class="fa-solid fa-sun" data-mood="light"></i>';
    }
}

//------------------------------------------------------------------------------------------------------
// S dark mood
btnMood.addEventListener("click", (e)=>{
    if(boody.classList.contains("dark")){
        boody.classList.remove("dark");
        btnMood.innerHTML = '<i class="fa-solid fa-moon" data-mood="dark"></i>';
        // Set Color On Local Storage
        localStorage.setItem('mood_option', "light");
    } else{
        boody.classList.add("dark");
        btnMood.innerHTML = '<i class="fa-solid fa-sun" data-mood="light"></i>';
        // Set Color On Local Storage
        localStorage.setItem('mood_option', "dark");
    }
})
// E dark mood

//------------------------------------------------------------------------------------------------------
// drop down mneu

let dropDown = document.querySelector(".drop-down");
dropDown.addEventListener("click", (e) => {

    document.querySelector(".header ul .list").classList.toggle("listDown");

    if(dropDown.dataset.open === "false") {

        document.querySelector(".drop-down svg").classList.remove("fa-angle-down");
        document.querySelector(".drop-down svg").classList.add("fa-angle-up");
        
        dropDown.dataset.open = "true"
    }
    else{

        document.querySelector(".drop-down svg").classList.add("fa-angle-down");
        document.querySelector(".drop-down svg").classList.remove("fa-angle-up");

        dropDown.dataset.open = "false"

    }
})

//------------------------------------------------------------------------------------------------------
// تعبة القلب عند النقر ع زر المفضله
let favoriteIcon = document.querySelectorAll(".icon .proFavorite-icon");

    favoriteIcon.forEach(icon => {

        icon.addEventListener("click", (e) => {

            // تمنع من الانتقال للرابط
            e.preventDefault();

            if (e.target.dataset.favorite != "true"){
                e.target.innerHTML = '<i class="fa-solid fa-heart"></i>';
                e.target.dataset.favorite = "true";
            } else {
                e.target.innerHTML = '<i class="fa-regular fa-heart"></i>';
                e.target.dataset.favorite = "false"
    
            }
        })
    
    })

//------------------------------------------------------------------------------------------------------
// زيادة عداد السلة عند الضغط على السلة

let countOfNavBasketIcon = document.querySelector(".navBasket-icon .count");
let proBasketIcon = document.querySelectorAll(".proBasket-icon");

proBasketIcon.forEach(icon => {

    icon.addEventListener("click", (e) => {

        // تمنع من الانتقال للرابط
        e.preventDefault();

        // تحويل العداد الى رقم صحيح لزيادة 
        let count = parseInt(countOfNavBasketIcon.innerHTML);
        count += 1;
        countOfNavBasketIcon.innerHTML= count

    })
})


// S category 

let categorys = document.querySelectorAll(".categories .category li");

categorys.forEach(li => {
    
    li.addEventListener("click", (e) => {

        
        handleActive(e);

        var colProducts = document.querySelectorAll(".categories .body-section .prudectes")

        switch (e.target.dataset.categorynum) {

            case "1":
                colProducts.forEach(col => {
                    col.innerHTML = creatProductCard("طاولة","imgs/products/1.png")
                })
                break;
            case "2":
                colProducts.forEach(col => {
                    col.innerHTML = creatProductCard("كرسي","imgs/products/5.png")
                })
                break;
            case "3":
                colProducts.forEach(col => {
                    col.innerHTML = creatProductCard("سرير","imgs/products/11.png")
                })
                break;
            case "4":
                colProducts.forEach(col => {
                    col.innerHTML = creatProductCard("دولاب","imgs/products/8.png")
                })
                break;
            case "5":
                colProducts.forEach(col => {
                    col.innerHTML = creatProductCard("كنب","imgs/products/7.png")
                })
                break;
        }

    })
})







//------------------------------------------------------------------------------------------------------
// Function of creat product card 
function creatProductCard(name, img){
    var productCard = `<div class="product-card">
    <div class="header-card">
        <img src="${img}" alt="">
        <div class="info">
            <h4 class="name-product"> ${name}</h4>
            <p class="kind-product">${name}</p>
                <ul class="colors-product">
                <li class="four" data-color=""></li>
                <li class="one" data-color=""></li>
                <li class="two" data-color=""></li>
                <li class="three" data-color=""></li>
            </ul>
            <ul class="stars-product">
                <i class="fa-solid fa-star full"></i>
                <i class="fa-solid fa-star full"></i>
                <i class="fa-solid fa-star full"></i>
                <i class="fa-solid fa-star half"></i>
                <i class="fa-solid fa-star"></i>
            </ul>
        </div>
    </div>
    <div class="footer-card">
        <div class="price-product">
            <span >100ر.س</span>
        </div>
        <div class="icon">
            <div class="proBasket-icon shake-left-right"><i class="fa-solid fa-basket-shopping"></i></div>
            <div class="proFavorite-icon shake-left-right" data-favorite="false"><i class="fa-regular fa-heart"></i></div>
        </div>
    </div>
</div>
<div class="product-card">
    <div class="header-card">
        <img src="${img}" alt="">
        <div class="info">
            <h4 class="name-product"> ${name}</h4>
            <p class="kind-product">${name}</p>
            <ul class="colors-product">
                <li class="four" data-color=""></li>
                <li class="one" data-color=""></li>
                <li class="two" data-color=""></li>
                <li class="three" data-color=""></li>
            </ul>
            <ul class="stars-product">
                <i class="fa-solid fa-star full"></i>
                <i class="fa-solid fa-star full"></i>
                <i class="fa-solid fa-star full"></i>
                <i class="fa-solid fa-star half"></i>
                <i class="fa-solid fa-star"></i>
            </ul>
        </div>
    </div>
    <div class="footer-card">
        <div class="price-product">
            <span >100ر.س</span>
        </div>
        <div class="icon">
            <a href=""><i class="fa-solid fa-basket-shopping"></i></a>
            <a href=""><i class="fa-solid fa-heart"></i></a>
        </div>
    </div>
</div>`
    return productCard
}

//------------------------------------------------------------------------------------------------------
// Function handle Active stat
function handleActive(ev){

    ev.target.parentElement.querySelectorAll(".active").forEach( element => {

        // Remove Active Class From All Childrens
        element.classList.remove("active");
    });

    // Add Active Class On Self
    ev.target.classList.add("active");
}




