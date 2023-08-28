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





// فنكشن تعديل الكلاس (سيكيت على كل العناصر--------------------------------------------

// handle selected 
function handleSelected(ev){

    ev.target.parentElement.querySelectorAll(".selected").forEach(element => {

          // Remove selected Class From All Childrens
        element.classList.remove("selected");

    });

      // Add Active Class On Self
    ev.target.classList.add("selected");
}
//-------------------------------------------------------------------