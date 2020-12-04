//grabing the flakes and elemetns
//let flake = document.getElementById('flake');
let container = document.getElementById('container');
let hour = 23;
let minute = 59;
let second = 59;

setInterval(() => {
let christmas = new Date(2020,12,25,17,00);
let today = new Date();

let daysLeft = christmas.getDate() - today.getDate() -1;
let hoursLeft = hour - (today.getHours() - christmas.getHours());
let minutesLeft = minute - today.getMinutes();
let secondsLeft = second - today.getSeconds();

document.getElementById('day').innerHTML = daysLeft +" : ";
document.getElementById('hour').innerHTML = hoursLeft+" : ";
document.getElementById('minute').innerHTML=minutesLeft+" : ";
document.getElementById('second').innerHTML = secondsLeft;

console.log(daysLeft+ " "+hoursLeft +" " +minutesLeft + " " +secondsLeft);

}, 1000);


function makeFlakes(){
    let flake = document.createElement('img');
    let dimen = Math.floor(Math.random()*24+10)+'px';
    flake.setAttribute('src', "./Images/flake.png");
    flake.classList.add('flake');
    flake.style.opacity = Math.random();
    flake.style.height =dimen;
    flake.style.width =dimen;

    flake.style.left=Math.random()*window.innerWidth+'px';
    container.appendChild(flake);

    setTimeout(function(){
        flake.remove();
    },6500)

}
setInterval(makeFlakes, 200);

//now making the timer///




// let day = document.getElementById('day');
// let hour = document.getElementById('hour');
// let minutes = document.getElementById('minute');
// let second = document.getElementById('second');