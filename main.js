// show and hide password
const pswrdfiled = document.querySelector("form input[type='password']") ;
const toggleBtn =  document.querySelector(".form .field i");
// users search
const searchbar = document.querySelector(".users .search input") ;
const searchbtn = document.querySelector(".users .search button");

toggleBtn.addEventListener("click" , ()=>{
    if(pswrdfiled.type == "password"){
        pswrdfiled.type = "text";
        toggleBtn.classList.add("activer");
    }else{
        pswrdfiled.type = "password";
        toggleBtn.classList.remove("activer");
    }
});



searchbtn.onclick = ()=>{
    // searchbar.classList.toggle("active")
    alert("slm")
}