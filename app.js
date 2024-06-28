Shery.makeMagnet(".nav i, .left .btn button");

Shery.mouseFollower(".main")

function lovebtn() {
  var icon = document.querySelector(".left .btn i");
  var a = 0;
  icon.addEventListener("click", function () {
    if (a === 0) {
      icon.style.color = "Red";
      a = 1;
    } else {
      icon.style.color = "";
      a = 0;
    }
  });
}

lovebtn();
