// show and hide password
let pswrdfiled = document.querySelector("form input[type='password']") ;
let toggleBtn =  document.querySelector(".form .field i");

toggleBtn.addEventListener("click" , ()=>{
    if(pswrdfiled.type == "password"){
        pswrdfiled.type = "text";
        toggleBtn.classList.add("active");
    }else{
        pswrdfiled.type = "password";
        toggleBtn.classList.remove("active");
    }
});

// users search
let searchbar = document.querySelector(".users .search input") ;
let searchbtn = document.querySelector(".users .search button");

searchbtn.onclick = ()=>{
    // searchbar.classList.toggle("active")
    alert("slm")
}