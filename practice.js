
//VARIABLES 


var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var rstBtn = document.getElementById("rst");
var rstBtn = document.getElementById("rst");
var inputValue = document.querySelector("input");
var playTo = document.querySelector("p span");

var p1DisP = document.querySelector("#p1DisP");
p1Scr = 0;

var p2DisP = document.querySelector("#p2DisP");
p2Scr = 0;

stop = false;
winScr = 5;


//PLAYER ONE


p1Btn.addEventListener("click", function() {
    if (!stop  && inputValue.value > 0 ) {
      p1Scr++;
      if (p1Scr === winScr) {
        p1DisP.classList.add("winner");
         stop = true;
      }
      p1DisP.textContent = p1Scr;
    }
});




//PLAYER TWO 


p2Btn.addEventListener("click", function () {
     if (!stop  && inputValue.value > 0) {
        p2Scr++;
        if (p2Scr === winScr) {
          p2DisP.classList.add("winner");
        stop = true;
        }
        p2DisP.innerHTML = p2Scr;
     }
});


// RESET BUTTON 


rstBtn.addEventListener("click", function () {
    reset();
    inputValue.value = "";

});

//RESET FUNCTION

function reset() {
    p1Scr = 0;
    p2Scr = 0;
    p1DisP.textContent = 0;
    p2DisP.innerHTML = 0;
    p1DisP.classList.remove("winner");
    p2DisP.classList.remove("winner");
    stop = false;
    
    

}


//INPUT VALUE

inputValue.addEventListener("change", function(){
    winScr = Number(inputValue.value);

  if (inputValue.value > 0) {
    playTo.textContent = inputValue.value;
  }
    reset();
});