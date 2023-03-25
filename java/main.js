//start of show and hide subscribe
var subscribe = document.querySelector(".subscribe");
var closeMark = document.querySelector("#close-mark")

closeMark.addEventListener('click' , () =>{
    subscribe.style.display="none";
} )
function loading(){
    subscribe.style.display = "block";
}
setTimeout(() => {
    loading();
}, 3000,);
subscribe.addEventListener('click' , fat =>{
    if(fat.target === document.querySelector(".subscribe")){
        subscribe.style.display="none";
    }
})
//end of show and hide subscribe

//start of menue bars
let barsIcon = document.getElementById("bars");
let menueBck = document.getElementById("menue-bck");
let menueClose = document.getElementById("menue-close");


barsIcon.addEventListener('click' ,function(){
    menueBck.style.display = "block"
})
menueClose.addEventListener('click' ,function(){
    menueBck.style.display = "none"
})

menueBck.addEventListener('click' , tom =>{
    if(tom.target === document.getElementById("menue-bck")){
        menueBck.style.display = "none";
    }
});
//end of menue bars

// start of menue toggle

let pluse = document.getElementsByClassName("mo");
let pluseMenue = document.getElementsByClassName("lister2-ul");
let icon = document.getElementsByClassName("icon");


for (let i = 0; i < pluse.length; i++) {
    pluse[i].addEventListener('click' , () => {
    
        if(parseInt(pluseMenue[i].style.height) != pluseMenue[i].scrollHeight){
            pluseMenue[i].style.height = pluseMenue[i].scrollHeight + "px";
            icon[i].classList.remove('fa-plus');
            icon[i].classList.add('fa-minus');
        }
        else{
            pluseMenue[i].style.height = "0px";
            icon[i].classList.remove('fa-minus');
            icon[i].classList.add('fa-plus');
        }
        for(let j=0 ; j<pluseMenue.length ; j++){
            if(j!==i){
                pluseMenue[j].style.height = "0px";
                icon[j].classList.remove("fa-minus");
                icon[j].classList.add("fa-plus");
            }
        }
    })    
}
// end of menue toggle



let menueTab = document.getElementsByClassName("menue-li");
let table = document.getElementsByClassName("menue2");
let icondown = document.getElementsByClassName("icondown");


for (let i = 0; i < menueTab.length; i++) {
    menueTab[i].addEventListener('click' , () => {
    
        if(parseInt(table[i].style.height) != table[i].scrollHeight){
            table[i].style.height = table[i].scrollHeight + "px";
            icondown[i].classList.remove('fa-caret-left');
            icondown[i].classList.add('fa-caret-down');
        }
        else{
            table[i].style.height = "0px";
            icondown[i].classList.remove('fa-caret-down');
            icondown[i].classList.add('fa-caret-left');
        }
        for(let j=0 ; j<table.length ; j++){
            if(j!==i){
                table[j].style.height = "0px";
                icondown[j].classList.remove("fa-caret-down");
                icondown[j].classList.add("fa-caret-left");
            }
        }
    })    
}

// start of dress code

let down = document.getElementsByClassName("down");
let category2 = document.getElementsByClassName("category2-ul");
let icon2 = document.getElementsByClassName("icon2");


for (let i = 0; i < down.length; i++) {
    down[i].addEventListener('click' , () => {
    
        if(parseInt(category2[i].style.height) != category2[i].scrollHeight){
            category2[i].style.height = category2[i].scrollHeight + "px";
            icon2[i].classList.remove('fa-plus');
            icon2[i].classList.add('fa-minus');
        }
        else{
            category2[i].style.height = "0px";
            icon2[i].classList.remove('fa-minus');
            icon2[i].classList.add('fa-plus');
        }
        for(let j=0 ; j<category2.length ; j++){
            if(j!==i){
                category2[j].style.height = "0px";
                icon2[j].classList.remove("fa-minus");
                icon2[j].classList.add("fa-plus");
            }
        }
    })    
}

// categoury
let lose = document.getElementById("closer");
let showen = document.getElementById("showen");
let cat = document.querySelector(".leftSec");
let dark = document.querySelector(".dark");

console.log(dark)

showen.addEventListener('click' ,function(){
    dark.style.display = "block"
})

lose.addEventListener('click' ,function(){
    dark.style.display = "none"
})

dark.addEventListener('click' , tom =>{
    if(tom.target === document.querySelector(".dark")){
        dark.style.display = "none";
    }
});


// slide show
// array to contain slid img
var i = 0;
var slider = ["images/blog-1.jpg" ,"images/blog-2.jpg" , "images/blog-3.jpg" , "images/blog-4.jpg"];
var slide = document.querySelector("#imog");


// the fun for slide show
// expration function

var slideShow = function(){
    slide.setAttribute('src' , slider[i]);
    if(i < slider.length-1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("slideShow()" , 2000);
}

slideShow();