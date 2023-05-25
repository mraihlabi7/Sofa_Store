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