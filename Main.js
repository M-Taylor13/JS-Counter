const parentBody = document.getElementById("visClock");
createText();
let myClock = new Clock();
const clkTxt = document.getElementById('clockText');
const resetButton = document.getElementById('rButton');
console.log(resetButton);


intervalSec = setInterval(Update, 1000);
function Update(){
    //console.log(myClock.TimeOutput());
    myClock.Tick();
    clkTxt.innerText = `${myClock.TimeOutput()}`;
}
function createText(){
    let para = document.createElement('p');
    let node = document.createTextNode("00:00:00");
    para.appendChild(node);
    para.setAttribute("id", "clockText");

    parentBody.appendChild(para);
}

resetButton.addEventListener("click", buttonRst);
function buttonRst(){
    myClock.Reset();
    clkTxt.innerText = `${myClock.TimeOutput()}`;
}
