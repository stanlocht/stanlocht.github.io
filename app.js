var element = document.querySelector(".door");
var doorIsOpen = false;


element.addEventListener("click", toggleDoor);

function goInside() {
  if (doorIsOpen) {
    location.href='inside.html';
  }
}

function toggleDoor() {
  element.classList.toggle("doorOpen");

  // weird fix to make sure you can only go inside when door is open
  if (doorIsOpen) {
    doorIsOpen = !doorIsOpen;
  } else {
    setTimeout(function(){
      doorIsOpen = !doorIsOpen;
    }, 1000);
  }

  if (doorIsOpen) {
    $(".smoke1").fadeIn(2500);
    $(".smoke2").fadeIn(1500);
  } else {
    $(".smoke2").fadeOut(1500);
    $(".smoke1").fadeOut(2500);
  }
}

$( document ).ready(function() {
  window.scrollTo(window.innerWidth/ 2, 0);
});

