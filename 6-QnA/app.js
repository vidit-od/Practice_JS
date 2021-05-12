// const btn = document.querySelectorAll(".question-btn");

// btn.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//     const a=e.currentTarget.parentElement.parentElement
//     a.classList.toggle("show-text")
//     e.currentTarget.classList.toggle("rotate")
//     })
// })


const questions=document.querySelectorAll(".questions")

questions.forEach(function(question){
    const btn = question.querySelector(".question-btn")
    btn.addEventListener('click',function(){
        if(btn.classList.contains("rotate")==true){
            question.querySelector(".questions-answer").style.animation="done 1s"
        }
        btn.classList.toggle("rotate")
        questions.forEach(function(item){
            if(item!=question){
                item.classList.remove("show-text")
                const other_btns=item.querySelector(".question-btn")
                other_btns.classList.remove("rotate")
            }
        question.classList.toggle("show-text")
        })
    })
})