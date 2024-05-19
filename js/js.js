var minus="assets/images/icon-minus.svg";
var plus ="assets/images/icon-plus.svg";
var div=document.querySelectorAll(`.q`);
div.forEach((ele)=>{
    var Try =ele.querySelector(`p`);
    var question=ele.querySelector(`.h2`);
    var button=ele.querySelector(`.click`);
    Try.style.display="none";
button.src=plus;
    button.addEventListener(`click`,()=>{
        if(Try.style.display==="none") {Try.style.display="block";
            ;button.src=minus;
    }else{Try.style.display="none";button.src=plus}
    });
    question.addEventListener(`click`,()=>{
        if(Try.style.display==="none") {Try.style.display="block";
                
            ;button.src=minus;
    }else{Try.style.display="none";button.src=plus}})
})
