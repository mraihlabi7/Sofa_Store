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
// تعديل المعلومات ----------------------------------------------------------
let edit = document.querySelector(".edit");
let save = document.querySelector(".save");
let cancel = document.querySelector(".cancel");

// لحفظ المعلومات قبل التعديل
let oldName = "";
let oldEmaill = "";
let oldUserName = "";
let oldAddress = "";
let oldPass = "";
let oldPassCom = "";
let oldPhoneOne = "";
let oldPhonTwo = "";
let oldCard = "";

// حدث التعديل
edit.addEventListener("click" , (e) => {
    // حفظ المعلومات قبل التعديل
    oldName = fName.value;
    oldEmaill = emaill.value;
    oldUserName = userName.value;
    oldAddress = address.value;
    oldPass =  pass.value;
    oldPassCom = passCom.value;
    oldPhoneOne = phoneOne.value;
    oldPhonTwo = phoneTwo.value;
    oldCard = card.value;

    // اخفاء واظهار بعض الازرار
    edit.style.display = "none";
    save.style.display = "block";
    cancel.style.display = "block";
    
    document.querySelectorAll(".profile .information > div input").forEach(input => {
        input.disabled = false;
    })
})

// حدث الضغط على حفظ
save.addEventListener("click" , (e) => {

    // لحفظ حالة اذا فيه خطاء ولا لا
    let foundError = false;

    document.querySelectorAll(".information > div input").forEach(input=>{
        if(input.value.length <= 0){
            foundError = true;
        }
        
        else if(input.classList.contains("error")){
            foundError = true;
        }
    })

    if(foundError == false){
        edit.style.display = "block";
        save.style.display = "none";
        cancel.style.display = "none";
        
        document.querySelectorAll(".profile .information > div input").forEach(input => {
            input.disabled = true;
        })
    }
    else{
        save.nextElementSibling.innerHTML = "* الرجاء تعبئة والتاكد من جميع الحقول"
    }
})

// حدث الالغاء
cancel.addEventListener("click" , (e) => {

    fName.value = oldName;
    userName.value = oldUserName;
    emaill.value = oldEmaill;
    pass.value = oldPass;
    passCom.value = oldPassCom;
    address.value = oldAddress;
    phoneOne.value = oldPhoneOne;
    phoneTwo.value = oldPhonTwo;
    card.value = oldCard;

    edit.style.display = "block";
    save.style.display = "none";
    cancel.style.display = "none";

    document.querySelectorAll(".profile .information > div input").forEach(input => {
        input.disabled = true;
        input.classList.remove("error")
    })
    document.querySelectorAll(".information > div .message-error").forEach( messageError => {
        messageError.innerHTML = "";
    })

})

// التاكد من الحقول

let fName = document.querySelector("#full-name");
let emaill = document.querySelector("#email");
let userName = document.querySelector("#user-name");
let pass = document.querySelector("#pass");
let passCom = document.querySelector("#passCom");
let address = document.querySelector("#address");
let phoneOne = document.querySelector("#phoneOne");
let phoneTwo = document.querySelector("#phoneTwo");
let card = document.querySelector("#card");
let btn = document.querySelector(".main-btn");

let emaillRe = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.])$/
let userNameRe = /^[a-z0-9_-]{3,16}$/
let arabicRe = /[\u0600-\u06FF a-z]/g

fName.addEventListener("input", (e) =>{

    let x = arabicRe.test(fName.value);
    if( x == true ){
        fName.classList.remove("error");
        fName.nextElementSibling.innerHTML = null
    }
    else{
        fName.classList.add("error")
        fName.nextElementSibling.innerHTML = "الرجاء كتابة الاسم الرباعي بشكل صحيح"
    }
})
emaill.addEventListener("input", (e) =>{

    let x = emaillRe.test(emaill.value);
    if( x == true ){
        emaill.classList.remove("error");
        emaill.nextElementSibling.innerHTML = null
    }
    else{
        emaill.classList.add("error")
        emaill.nextElementSibling.innerHTML = "يجب ان يحتوي الإيميل على ('.'و'@')"
    }
})

userName.addEventListener("input", (e) =>{

    let x = userNameRe.test(userName.value);
    if( x == true ){
        userName.classList.remove("error");
        userName.nextElementSibling.innerHTML = null
    }
    else{
        userName.classList.add("error")
        userName.nextElementSibling.innerHTML = "يجب ان يكون من 3ال16 خانه يسمح (الحروف,الأرقام, -, _)"
    }
})

pass.addEventListener("input", (e) => {
    if(pass.value.length < 8 ){
        pass.classList.add("error");
        pass.nextElementSibling.innerHTML = "يجب ان تتكون من 8 خانات ف اكثر"
    }
    else{
        pass.classList.remove("error");
        pass.nextElementSibling.innerHTML = null
    }
})

passCom.addEventListener("input", (e) => {

    if(pass.value != passCom.value){
        passCom.classList.add("error");
        passCom.nextElementSibling.innerHTML = "يجب ان تتطابق كلمات المرور"
        pass.classList.add("error");
        pass.nextElementSibling.innerHTML = "يجب ان تتطابق كلمات المرور"
    }
    else{
        passCom.classList.remove("error");
        passCom.nextElementSibling.innerHTML = null
        pass.classList.remove("error");
        pass.nextElementSibling.innerHTML = null
    }
})