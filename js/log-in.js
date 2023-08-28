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
// ----------------------------------------
// اخفاء وإظهار كلمة السر
let hide = document.querySelector(".hide");
let pass = document.querySelector("#pass");

hide.addEventListener("click", (e)=>{

    if(pass.type == "password"){
        pass.type = "text"
        hide.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
    }
    else{
        pass.type = "password"
        hide.innerHTML = '<i class="fa-regular fa-eye"></i>'
    }
})

// ---------------------------------
// التاكد من ملء الحقول
let btn = document.querySelector(".main-btn");

btn.addEventListener("click", (e) =>{
    
    document.querySelectorAll(".left input").forEach(input=>{

        if(input.value.length <= 0){
            btn.firstElementChild.innerHTML = "* الرجاء تعبئة جميع الحقول بشكل الصحيح"
            // تمنع من الانتقال للرابط
            e.preventDefault(); // this will prevent the link from navigating to its href
            // e.stopPropagation(); // this will stop the event from propagating to other elements
            // your code here
        }
        
    })
})