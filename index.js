
// Calculate number of sound buttons

let buttonsNumber = document.querySelectorAll(".drum").length;
//==============================================================================

//Play Sound from keyboard

document.addEventListener("keydown", function(event){
  playDrum(event.key);
  buttonAnimation(event.key);
})
//==============================================================================

//Play Sound by click

for (let i = 0; i <= buttonsNumber; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    let buttonInnerHTML = this.innerHTML;
    playDrum(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
};
//==============================================================================

//Play Sound function

function playDrum(element){
  switch (element) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
    default: console.log(element);
  };
}
//==============================================================================

//Button Animation function

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." +  currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
}
//==============================================================================
