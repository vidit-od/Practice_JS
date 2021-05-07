const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn =document.getElementById("btn");
const color1 = document.querySelector(".colour1");
const color2 = document.querySelector(".colour2");
const color3 = document.querySelector(".colour3");
const color4 = document.querySelector(".colour4");
const color5 = document.querySelector(".colour5");
const color6 = document.querySelector(".colour6");

const lock1 =document.getElementById("lock1");
const lock2 =document.getElementById("lock2");
const lock3 =document.getElementById("lock3");
const lock4 =document.getElementById("lock4");
const lock5 =document.getElementById("lock5");
const lock6 =document.getElementById("lock6");

let flipper1="unlocked";
let flipper2="unlocked";
let flipper3="unlocked";
let flipper4="unlocked";
let flipper5="unlocked";
let flipper6="unlocked";

btn.addEventListener("click",function(){
    let found= finder();
    if(flipper1=="unlocked"){
    document.getElementById("one").style.backgroundColor=found;
    color1.textContent=found;
    }
    if(flipper2=="unlocked"){
    found= finder();
    document.getElementById("two").style.backgroundColor=found;
    color2.textContent=found;
    }
    if(flipper3=="unlocked"){
    found= finder();
    document.getElementById("three").style.backgroundColor=found;
    color3.textContent=found;
    }
    if(flipper4=="unlocked"){
    found= finder();
    document.getElementById("four").style.backgroundColor=found;
    color4.textContent=found;
    }
    if(flipper5=="unlocked"){
    found= finder();
    document.getElementById("five").style.backgroundColor=found;
    color5.textContent=found;
    }
    if(flipper6=="unlocked"){
    found= finder();
    document.getElementById("six").style.backgroundColor=found;
    color6.textContent=found;
    }

});

lock1.addEventListener("click",function(){
    if(flipper1 == "unlocked"){
        flipper1= "locked";
        document.querySelector("#lock1").textContent="unlock";
    }
    else{
        flipper1="unlocked"
        document.querySelector("#lock1").textContent="lock";
    }
})
lock2.addEventListener("click",function(){
    if(flipper2 == "unlocked"){
        flipper2= "locked";
        document.querySelector("#lock2").textContent="unlock";
    }
    else{
        flipper2="unlocked"
        document.querySelector("#lock2").textContent="lock";
    };
})
lock3.addEventListener("click",function(){
    if(flipper3 == "unlocked"){
        flipper3= "locked";
        document.querySelector("#lock3").textContent="unlock";
    }
    else{
        flipper3="unlocked";
        document.querySelector("#lock3").textContent="lock";

    }
})
lock4.addEventListener("click",function(){
    if(flipper4 == "unlocked"){
        flipper4= "locked";
        document.querySelector("#lock4").textContent="unlock";
    }
    else{
        flipper4="unlocked"
        document.querySelector("#lock4").textContent="lock";
    }
})
lock5.addEventListener("click",function(){
    if(flipper5 == "unlocked"){
        flipper5= "locked";
        document.querySelector("#lock5").textContent="unlock";
    }
    else{
        flipper5="unlocked";
        document.querySelector("#lock5").textContent="lock";
    }
})
lock6.addEventListener("click",function(){
    if(flipper6 == "unlocked"){
        flipper6= "locked";
        document.querySelector("#lock6").textContent="unlock";
    }
    else{
        flipper6="unlocked"
        document.querySelector("#lock6").textContent="lock";
    }
})

function finder(){
    let Hexcode="#"
    for(let i=0;i<6;i++){
        Hexcode += hex[Math.floor(Math.random()*15)];
    }
    return Hexcode;
}