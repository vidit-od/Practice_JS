let counter_display=0;

const decrement=document.getElementById("decrement")
const reset=document.getElementById("reset")
const increment=document.getElementById("increment")
const display= document.querySelector("#counts")

decrement.addEventListener("click",function(){
    counter_display = counter_display -1;
    display.textContent=counter_display;
    if(counter_display<0){
    document.getElementById("counts").style.color="red";
    }
    if(counter_display==0){
        document.getElementById("counts").style.color="black";
    }
    if(counter_display>0){
        document.getElementById("counts").style.color="green";
    }
})

reset.addEventListener("click",function(){
    counter_display = 0;
    display.textContent=counter_display;
    document.getElementById("counts").style.color="black";
})

increment.addEventListener("click",function(){
    counter_display = counter_display +1;
    display.textContent=counter_display;
    if(counter_display<0){
    document.getElementById("counts").style.color="red";
    }
    if(counter_display==0){
        document.getElementById("counts").style.color="black";
    }
    if(counter_display>0){
        document.getElementById("counts").style.color="green";
    }
})