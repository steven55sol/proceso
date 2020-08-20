function startTime() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let btn = document.getElementById("btn");
    //Add a zero in front of numbers<10
    min = checkTime(min);
    sec = checkTime(sec);
    let clock = document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    let time = setTimeout(function(){ startTime() }, 500);
   /* 
    if(hr === 00 || hr == 12 || hr == 0 && min <= 59){
        btn.style.display="block";
    }
    */
}

function checkTime(i) {
    if (i < 9) {
        i = "0" + i;
    }
    return i;
}

startTime();
