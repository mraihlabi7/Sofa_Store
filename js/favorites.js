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