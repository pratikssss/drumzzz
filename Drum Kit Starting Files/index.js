
document.addEventListener("keydown", function (event) {
    makesound(event.key);
    buttonanimation(event.key);
})
for (var i = 0; i <= document.querySelectorAll(".drum").length; i++) {
    console.log(i);
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerhtml = this.innerHTML;
        makesound(buttoninnerhtml);
        buttonanimation(buttoninnerhtml);
    });
}
function makesound(buttoninnerhtml) {
    if (buttoninnerhtml === "w") {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        console.log(i);
    }
    else if (buttoninnerhtml === "a") {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    else if (buttoninnerhtml === "s") {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();

    }
    else if (buttoninnerhtml === "d") {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    else if (buttoninnerhtml === "j") {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    } else if (buttoninnerhtml === "k") {
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    } else if (buttoninnerhtml === "l") {
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
}
function buttonanimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    var delayInMilliseconds = 100; //1 second

    setTimeout(function () {
        activebutton.classList.remove("pressed");
        //your code to be executed after 1 second
    }, delayInMilliseconds);
}