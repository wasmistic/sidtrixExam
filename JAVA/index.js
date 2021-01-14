const right=document.querySelector('.rightone');
const soom=document.querySelector('.soom');
const mg= document.querySelector('.mg');
const webShop = document.querySelector('.webshop');
const faCheck = document.querySelector('.box');
const lust = document.querySelectorAll('.list')
const login = document.querySelector('.log')
const collaborate = document.querySelector('.trans')

tone.addEventListener('click',myFun)
function myFun(){
    soom.classList.add('active');
    right.classList.add('color');
};

window.ondblclick = function(show){
    if(show.target!==right || show.target!==soom){
        tone.style.background=' #0b0b0c';
        soom.style.display='none'
    }
};
mg.addEventListener('click',myBar)
function myBar(){
    webShop.classList.add('shop');
};

window.onclick = function(event){
    if(event.target!==mg){
        webShop.style.display='none';
    }
};

var list = document.querySelector('ul');
list.addEventListener('click',function(level){
   if (level.target.tagName ==='li'){
       level.target.classList.toggle('checked');
   }
   
},false);

var width=100;
var fift=50;
var difference = 20;
var interval=0;

function increase(){
    clearInterval(interval)
    interval=setInterval(expand,20)
}

function expand(){
   var body= document.getElementById('body');
    if(body.style.width<200){
        width = width + difference;
        body.style.width= width +"%";
        var result =  body.style.width=width +"%";
        document.querySelector('.percent').innerHTML=result;
    }
    else{
        clearInterval(interval)
    }
};

function decrease(){
    clearInterval(interval)
    interval=setInterval(shrink,20)
}

function shrink(){
   var body= document.getElementById('body');
    if(body.style.width>100){
        width -=difference;
     var result =  body.style.width=width +"%";
    document.querySelector('.percent').innerHTML=result;
    }
    else{
        clearInterval(interval)
    }
};

function liftTo(){
    clearInterval(interval)
    interval=setInterval(shrinkTo,20)
}

function shrinkTo(){
   var body= document.getElementById('body');
    if(body.style.width<100){
        body.style.width=width +"%";
        var result = body.style.width=width +"%";
        document.querySelector('.percent').innerHTML=result;
    }
    else{
        clearInterval(interval)
    }
};
function fift(){
    clearInterval(interval)
    interval=setInterval(shrinkfift,20)
}

function shrinkfift(){
   var body= document.getElementById('body');
    if(body.style.width>100){
        width-=50;
        body.style.width=width +"%";
        var result =  body.style.width=width +"%";
        document.querySelector('.percent').innerHTML=result;
    }
    else{
        clearInterval(interval)
    }
};
function riseTwo(){
    clearInterval(interval)
    interval=setInterval(expandTwo,20)
}

function expandTwo(){
   var body= document.getElementById('body');
    if(body.style.width<200){
        width +=100;
        body.style.width=width +"%";
        var result =  body.style.width=width +"%";
        document.querySelector('.percent').innerHTML=result;
    }
    else{
        clearInterval(interval)
    }
};

var inputValue = document.getElementById('input');
function myValue(){
    var percentValue = decrease().value;
    inputValue.innerHTML = percentValue;
    inputValue.style.textAlign="center";
    inputValue.style.color="#0fafe9";
};
/*
function zoomTo(){
    var house = document.getElementById('body');
    var subZoom = parseInt(house.style.subZoom) + 100 +'%';
    house.style.subZoom=zoom;
    return false;
};
function zoomFift(){
    var house = document.getElementById('body');
    var subZoom = parseInt(house.style.subZoom) + 50 +'%';
    house.style.subZoom=zoom;
    return false;
};
function zoomTwo(){
    var house = document.getElementById('body');
    var subZoom = parseInt(house.style.subZoom) +200 +'%';
    house.style.subZoom=zoom;
    return false;
};


function zoomOut(){
    var house = document.getElementById('body');
    var subZoom = parseInt(house.style.subZoom) - 10 +'%';
    house.style.subZoom=zoom;
    return false;
};

const input = document.getElementById('input')
 function myInput(){
    var value1= zoomIn().value;
     input.innerText=value1;
 };
 function myInput(){
    var value2= zoomOut().value;
     input.innerText=value2;
 };
 function myInput(){
    var value3= zoomTo().value;
     input.innerText=value3
 };
 function myInput(){
    var value4= zoomFift().value;
     input.innerText=value4;
 };
 function myInput(){
    var value5= zoomTwo().value;
     input.innerText=value5;
 };*/







 

 
 





