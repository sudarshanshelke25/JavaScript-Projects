// genrate random color :

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * 16);
        color += hex[random]
    }
    return color;
}

let intervalId;

const startChangingColor = function(){
    function chageBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
    if (!intervalId) {
        intervalId = setInterval(chageBgColor, 1000);
        console.log("start");
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
    console.log("stop");
}

document.querySelector('#start').addEventListener('click', startChangingColor, false);

document.querySelector('#stop').addEventListener('click', stopChangingColor, false);