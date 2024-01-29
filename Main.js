const parentBody = document.getElementById("body");
createText();
let myClock = new Clock();
let tickTest = 0;
const clkTxt = document.getElementById('clockText');

intervalSec = setInterval(Update, 1000);
function Update(){
    //console.log(myClock.TimeOutput());
    myClock.Tick();
    ++tickTest;
    clkTxt.innerText = `${myClock.TimeOutput()} ${tickTest}`;
}
function createText(){
    let para = document.createElement('p');
    let node = document.createTextNode("00:00:00");
    para.appendChild(node);
    para.setAttribute("id", "clockText");

    parentBody.appendChild(para);
}