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

// -----------------------------------
// تغيير السعر بناء ع اللون و اضافء كلاس سلكت للعنصر المختار-----------------------------------

document.querySelectorAll(".color span").forEach(span => {
    span.addEventListener("click", (e) => {

        handleSelected(e);

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
let favorite = document.querySelector(".favorite");
favorite.onclick = () =>{
    if (favorite.dataset.favorite != "true"){
        favorite.innerHTML = '<i class="fa-solid fa-heart shake-left-right"></i>';
        favorite.dataset.favorite = "true";
    } else {
        favorite.innerHTML = '<i class="fa-regular fa-heart shake-left-right"></i>';
        favorite.dataset.favorite = "false"
        
    }
    
}
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
