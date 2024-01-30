let body=document.getElementById("body");

function themeChange(){
    body.classList.toggle('dark-theme');
   
}
// ----------------------------------------------------------------------------------
let colorspalette=document.getElementById("palette");
let colordetail=document.getElementById("color-detail");
let themetoggle=document.querySelector(".colors");

colorspalette.addEventListener("click",()=>{
    colordetail.style.display="block";
})

let circlecolors=document.querySelectorAll(".fa-circle");
function change(){
    circlecolors.forEach((btn) => {
    btn.onclick=()=>{
    let colors=btn.style.color;
    document.querySelector(":root").style.setProperty("--secandaryColor",colors);
    colordetail.style.display="none";
}
    });
}

//   --------------------------------------------------------------------------------------------

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(var(--secandaryColor) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;












var tablinks=document.getElementsByClassName("tab-links");
var tabcontent=document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcont of tabcontent){
        tabcont.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


let sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}