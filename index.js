

// Set the date we're counting down to
var countDownDate = new Date("March 1, 2023 23:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = hours + " : "
        + minutes + " : " + seconds + "  " + "Left";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



var buttonLeft =document.getElementById('scroll-left');
var buttonRight=document.getElementById('scroll-right');
var x=document.querySelectorAll('#All-Products .content')


var l = x.length;
// console.log(l);
 var p = 0; 
 hideLeft();//hide the left button in start        
buttonLeft.onclick = function () {//if user clicks left button scroll the bar to left by 190px
    p += 500;
    x.forEach((x) => {
        x.style.transition = '4s';
        x.style.transform = `translateX(${p}px)`;
    }); 
    hideLeft();//handle the left button if necessary            
    hideRight();//handle the right button if necessary        
};

buttonRight.onclick = function () {//if user clicks right button scroll the bar to right by 190px
    p -= 500;
    x.forEach((x) => {
        x.style.transition = '4s';
        x.style.transform = `translateX(${p}px)`;
    });
    //  console.log(p, -((l - 6) * 190));
    hideLeft();//handle the left button if necessary 
    hideRight();//handle the right button if necessary  
};
function hideLeft() {//function to handle left button 
    if (p == 0) {
        buttonLeft.style.display = 'none';
    }
    else {
        buttonLeft.style.display = 'block';
    }
}
function hideRight() {//function to handle right button 
    if (p <= -((l - 7) * 190)) {
        buttonRight.style.display = 'none';
    } else {
        buttonRight.style.display = 'block';
    }
}