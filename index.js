for (var i=0;i<7;i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function () {

        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    })    
}


document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound (key) {
    switch (key) {
        case "w":
            var audi=new Audio('sounds/tom-1.mp3');
            audi.play();
            break;
        case "a":
            var audi=new Audio('sounds/tom-2.mp3');
            audi.play();
        case "s":
            var audi=new Audio('sounds/tom-3.mp3');
            audi.play();
        case "d":
            var audi=new Audio('sounds/tom-4.mp3');
            audi.play();
        case "j":
            var audi=new Audio('sounds/snare.mp3');
            audi.play();
        case "k":
            var audi=new Audio('sounds/crash.mp3');
            audi.play();
        case "k":
            var audi=new Audio('sounds/kick-bass.mp3');
            audi.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton= document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);

}