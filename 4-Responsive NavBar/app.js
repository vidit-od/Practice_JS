const btn = document.getElementById("button")
const links = document.querySelector(".links")
const tab= "closed"
btn.addEventListener("click",function(){
  links.classList.toggle("show-links")
  btn.classList.toggle("rotate")

})