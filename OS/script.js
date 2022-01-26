let taskbar = document.getElementsByClassName("mtask")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let fold = document.getElementsByClassName("fold")[0]
let xp = document.getElementsByClassName("xp")[0]
let terminal = document.getElementsByClassName("term")[0]
let termi = document.getElementsByClassName("termi")[0]

taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
});
fold.addEventListener("click", ()=>{
    if(xp.style.bottom == "70px"){
        xp.style.bottom = "-655px"
    }
    else{
        xp.style.bottom = "70px"
    }
});
terminal.addEventListener("click", ()=>{
    if(termi.style.bottom == "70px"){
        termi.style.bottom = "-655px"
    }
    else{
        termi.style.bottom = "70px"
    }
});
termi.addEventListener("click", ()=>{
    if(termi.style.bottom == "70px"){
        termi.style.bottom = "-655px"
    }
    else{
        termi.style.bottom = "70px"
    }
});
xp.addEventListener("click", ()=>{
    if(xp.style.bottom == "70px"){
        xp.style.bottom = "-655px"
    }
    else{
        xp.style.bottom = "70px"
    }
});