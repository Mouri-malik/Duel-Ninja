let buttonJeux = document.getElementById("buttonJeux");
let container = document.getElementById("container");
let displaySharigan = document.getElementById("displaySharigan");

function changehref(){
  buttonJeux.href = "jeux.html"
  buttonJeux.click()
}



function functionJeux(){

    container.style.display = "none"
    displaySharigan.style.display = "inherit"
    setTimeout(function(){ changehref(); }, 3000);
  }

buttonJeux.addEventListener("click" ,functionJeux , false);
