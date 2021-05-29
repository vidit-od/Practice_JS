let date=document.getElementById("date")
date.innerHTML=String(new Date()).slice(3,-40)

const btn=document.querySelector(".nav-toggle")
const nav_container=document.querySelector(".links-container")
const nav_links=document.querySelector(".links")

btn.addEventListener("click",function(){
    const container_height=nav_container.getBoundingClientRect().height
    const links_height=nav_links.getBoundingClientRect().height
    if(container_height==0){
        nav_container.style.height=`${links_height}px`
    }
    else{
        nav_container.style.height="0px"
    }
})
const nav=document.getElementById("nav");
const top_link=document.querySelector(".top-link")
window.addEventListener("scroll",function(){
    if(window.pageYOffset >nav.getBoundingClientRect().height){
        nav.classList.add("fixed-nav")
    }
    else{
        nav.classList.remove("fixed-nav")
    }
    if(window.pageYOffset>500){
        top_link.classList.add("show-link")
    }
    else{
        top_link.classList.remove("show-link")
    }
})