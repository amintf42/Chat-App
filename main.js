// show and hide password
const pswrdfiled = document.querySelector("form input[type='password']") ;
const toggleBtn =  document.querySelector(".form .field i");


toggleBtn.addEventListener("click" , ()=>{
    if(pswrdfiled.type == "password"){
        pswrdfiled.type = "text";
        toggleBtn.classList.add("activer");
    }else{
        pswrdfiled.type = "password";
        toggleBtn.classList.remove("activer");
    }
});


