var sekundyHand = document.querySelector('.sekundy'),
    minutyHand = document.querySelector('.minuty'),
    godzinyHand = document.querySelector('.godziny');


var setupClock = function ()
{
  var now = new Date();
  var sek = now.getSeconds();//0-59
  var min = now.getMinutes();//...
  var godz = now.getHours();//0-23

  sekundyHand.style.transform = "rotate("+Math.floor(360*sek/60)+"deg)";
  minutyHand.style.transform = "rotate("+Math.floor(360*min/60)+"deg)";
  godzinyHand.style.transform = "rotate("+Math.floor(360*(godz%12)/12)+"deg)";

//sekundyHand.style.animation = '-' + sek + 's';
  //minutyHand.style.animation = '-' + min + 's';
  //godzinyHand.style.animation = '-' + godz  + 's';
}
setInterval(setupClock,500);
