const keys = document.querySelectorAll(".keys"); // makes a list of all 8 keys
const about = document.querySelector(".about"); // About button to give info aabout which keys to press

const numKeys = keys.length;
const infoKeys = ["A", "S", "D", "F", "J", "K", "L", ";"]; // Keys that can be pressed
var aboutFlag = false; // Will use this to to check if keys are displayed

// just for testing
function selectKey() {
    var keyname = this.getAttribute("id");
    console.log(keyname);
}

// for each works like a for loop;
keys.forEach(key => {
    key.addEventListener("click", function(event) {
        var keyname = event.target.getAttribute("id") // I have named the audio files the same as their id
        var filename = "audio/" + keyname + "_.mp3";
        var audio = new Audio(filename);
        audio.play()
    })
});

about.addEventListener("click", () => {
    if (aboutFlag == false) {
        for (let i = 0; i < numKeys; i++) {
        keys[i].innerHTML = "<p>" + infoKeys[i] + "</p>"
        // adding the key in paragraph element so I can highlight it
        }
        aboutFlag = true;
    } else {
        for (let i = 0; i < numKeys; i++) {
        keys[i].innerHTML = ""
        }
        aboutFlag = false;
    }
    
})

document.addEventListener("keydown", function (event) {
    makeSound(event.key)
})


function makeSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio('audio/key1_.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('audio/key2_.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('audio/key3_.mp3');
            audio.play();
            break;
        
        case "f":
            var audio = new Audio('audio/key4_.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('audio/key5_.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('audio/key6_.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('audio/key7_.mp3');
            audio.play();
            break;

        case ";":
            var audio = new Audio('audio/key8_.mp3');
            audio.play();
            break;

        default:
            break;
    }
}

// Dark mode/Lightmode
const darkBtn = document.querySelector("#darkmode")
const lightBtn = document.querySelector("#lightmode")
const mainBody = document.querySelector("body")

darkBtn.addEventListener("click", ()=>
    mainBody.setAttribute("class", "dark")
)

lightBtn.addEventListener("click", ()=>
    mainBody.setAttribute("class", "light")
)
