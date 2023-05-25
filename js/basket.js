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

// -----------------------------------
// تغيير الكميه و السعر بناء عللى الازرار

document.querySelectorAll(".amount .plus").forEach(element => {
    element.addEventListener("click" ,(e) => {
        let amount = element.nextElementSibling;
        let amountNum = parseInt(amount.innerHTML);
        amountNum +=1;
        amount.innerHTML = amountNum;
        
        let price = ((element.parentElement).previousElementSibling).firstElementChild;

        let sum =((element.parentElement).nextElementSibling).firstElementChild;
        sum.innerHTML = parseFloat(price.innerHTML)*amountNum;
        
    })
})
document.querySelectorAll(".amount .minus").forEach(element => {
    element.addEventListener("click" ,(e) => {
        let amount = element.previousElementSibling;
        let amountNum = parseInt(amount.innerHTML);

        if (amountNum !=1) {
            amountNum -=1;
            amount.innerHTML = amountNum;
            
            let price = ((element.parentElement).previousElementSibling).firstElementChild;
    
            let sum =((element.parentElement).nextElementSibling).firstElementChild;
            sum.innerHTML = parseFloat(price.innerHTML)*amountNum;
        }
        
    })
})
// --------------------------------
// حساب الاجمالي
document.querySelector(".products").addEventListener("click", (e) => {
    
    let totle = 0;
    document.querySelectorAll(".sum .num").forEach(element => {

        totle += parseFloat(element.innerHTML)
    })

    document.querySelector(".totle .num").innerHTML = totle;

})

// -----------------------------------------------------------
// حذف المنتج من السلة

document.querySelectorAll(".delete").forEach(element => {

    element.addEventListener("click", (e) => {
        // console.log()
        element.parentElement.remove();
    })
})

// ---------------------------------------------------------





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