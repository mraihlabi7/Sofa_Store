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
// local storge ----------------------------------------------------------

// S dark mood -----------------------------------------------------------
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
// E dark mood  -----------------------------------------------------------

// تغيير السعر بناء ع الحجم و اضافء كلاس سلكت للعنصر المختار-----------------------------------

document.querySelectorAll(".size span").forEach(span => {
    span.addEventListener("click", (e) => {

        handleSelected(e);

        document.querySelector(".price span").innerHTML = e.target.dataset.price;
    })
})
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
// -----------------------------------
// تغيير السعر بناء ع اللون و اضافء كلاس سلكت للعنصر المختار-----------------------------------

document.querySelectorAll(".color span").forEach(span => {
    span.addEventListener("click", (e) => {

        // تغيير اللون المختار
        handleSelected(e);

        // تغيير صورة المنتج بناء على اللون المختار
        document.querySelectorAll(".carousel-inner img").forEach(img => {
            img.src = span.dataset.sours;
        })

        // حطيت هذا الشرط بحيث لو مثلا بعض الاوان لها سعر مختلف ف بيكون فيه داتا ست فيها الزياده
        if(e.target.dataset.price != undefined || e.target.dataset.price != null){
            let price = parseInt(document.querySelector(".price span").innerHTML)+parseInt(e.target.dataset.price);
            document.querySelector(".price span").innerHTML = price;
        }
    })
})
// -----------------------------------
// تغيير الكميه بناء عللى الازرار

let amount = document.querySelector(".amount span");
let amountNum = parseInt(amount.innerHTML);
document.querySelector(".number .plus").addEventListener("click", (e) => {
    amountNum +=1;
    amount.innerHTML = amountNum;
})
document.querySelector(".number .minus").addEventListener("click", (e) => {
    if(amountNum != 1) {
        amountNum -=1;
        amount.innerHTML = amountNum;
    }
})
// --------------------------------
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
    console.log(icon.parentElement.parentElement.parentElement.parentElement)
    icon.addEventListener("click", (e) => {

        // تمنع من الانتقال للرابط
        e.preventDefault();

        // تحويل العداد الى رقم صحيح لزيادة 
        let count = parseInt(countOfNavBasketIcon.innerHTML);
        count += 1;
        countOfNavBasketIcon.innerHTML= count

    
    })
})
// ------------------------------------------------------------------






// فنكشن تعديل الكلاس (سيكيت على كل العناصر

// handle selected 
function handleSelected(ev){

    ev.target.parentElement.querySelectorAll(".selected").forEach(element => {

        // Remove selected Class From All Childrens
        element.classList.remove("selected");

    });

      // Add Active Class On Self
    ev.target.classList.add("selected");
}
