var $chronometer = new Chronometer();
var $btnLeft     = document.getElementById('btnLeft');
var $btnRight    = document.getElementById('btnRight');
var $minDec      = document.getElementById('minDec');
var $minUni      = document.getElementById('minUni');
var $secDec      = document.getElementById('secDec');
var $secUni      = document.getElementById('secUni');
var $milDec      = document.getElementById('milDec');
var $milUni      = document.getElementById('milUni');
var $split       = document.getElementById('split');



function printTime() {

}

function printMinutes() {
    if($chronometer.setMinutes() <= 9){     
        console.log($chronometer.setMinutes())     
        $minDec.innerText = 0;     
        $minUni.innerText = $chronometer.setMinutes();   
    }   
        else {     
        $minDec.innerText = $chronometer.setMinutes().toString()[0]     
        $minUni.innerText = $chronometer.setMinutes().toString()[1]   
    } 
}

function printSeconds() { 
        if($chronometer.setSeconds() <= 9){     
        console.log($chronometer.setSeconds())     
        $secDec.innerText = 0;     
        $secUni.innerText = $chronometer.setSeconds();   
    }   
        else {     
        $secDec.innerText = $chronometer.setSeconds().toString()[0]     
        $secUni.innerText = $chronometer.setSeconds().toString()[1]   
    } 
}

function printMilliseconds() {

}

function printSplit() {
    return `${minDec.innerText} ${minUni.innerText}:${secDec.innerText} ${secUni.innerText}`
}

function clearSplits() {
 $split.innerHTML + ""
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {
    return `${minDec.innerText = 0} ${minUni.innerText = 0}:${secDec.innerText = 0} ${secUni.innerText = 0}`
}

// Start/Stop Button
$btnLeft.onclick = function() {
    console.log("Bottom left was clicked")
    $btnLeft.style.color = "black"
    if($btnLeft.innerText === "START") {
        $chronometer.startClick()
        $btnLeft.classList.toggle("btn.stop")
        $btnLeft.innerText = "STOP"
        $btnRight.innerText = "SPLIT"
        $btnRight.classList.toggle("btn.split")
        setInterval(() => {
            printMinutes();
            printSeconds();
        }, 1000);
    }
    else if($btnLeft.innerText === "STOP") {
        $chronometer.stopClick()
        $btnLeft.classList.toggle("btn.start")
        $btnLeft.innerText = "START"
        $btnRight.innerText = "RESET"
        $btnRight.classList.toggle("btn.reset")
        
    }
};

// Reset/Split Button
$btnRight.addEventListener('click', function () {
    if ($btnRight.innerText === "SPLIT") {
        $split.innerHTML += `<li>${printSplit()}</li>`
    } else if ($btnRight.innerText === "RESET") {
        clearSplits()
    }
} 
)
