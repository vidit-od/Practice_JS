const openbtn=document.getElementById("open-btn")
const slide=document.getElementById("slidebar")
openbtn.addEventListener("click",function(){
    if(slide.classList.contains("slide")==true){
        slide.style.animation="slide-out 1s"
        slide.style.transition="all 1s"
        slide.classList.toggle("slide")
    }
    else{   
        slide.classList.toggle("slide")
    }
    openbtn.classList.toggle("clicked")
})
