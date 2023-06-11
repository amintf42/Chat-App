// users search
const searchbar = document.querySelector(".users .search input") ;
const searchbtn = document.querySelector(".users .search button");


searchbtn.onclick = ()=>{
    searchbar.classList.toggle("active");
   searchbar.focus();
   searchbtn.classList.toggle("active");
}