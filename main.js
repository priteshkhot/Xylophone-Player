const keys = document.querySelectorAll(".keys"); // makes a list of all 8 keys
const about = document.querySelector(".about"); // About button to give info aabout which keys to press

const numKeys = keys.length;
const infoKeys = ["A", "S", "D", "F", "H", "J", "K", "L"]; // Keys that can be pressed
var aboutFlag = false; // Will use this to to check if keys are displayed

// just for testing
function selectKey() {
    var keyname = this.getAttribute("id");
    console.log(keyname);
}

// foreach works like a for loop;
keys.forEach(key => {
    key.addEventListener("click", function(event) {
        var keyname = event.target.getAttribute("id") // I have named the audio files the same as their id
        var filename = "audio/" + keyname + "_.mp3";
        var audio = new Audio(filename);
        audio.play();
    })
});

// About key/Toggle and see the keyboard keys to play xylophone
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

// Keyboard buttons to play xylophone
document.addEventListener("keydown", function (event) {
    btnToggle(event.key);
    makeSound(event.key);
})

document.addEventListener("keyup", function (event) {
    btnToggle(event.key);
})

// Corrresponding buttons will be shown active when you press through Keyboard
function btnToggle(key) {
    let activeKey = document.querySelector("." + key);
    activeKey.classList.toggle('active');
}

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

        case "h":
            var audio = new Audio('audio/key5_.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('audio/key6_.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('audio/key7_.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('audio/key8_.mp3');
            audio.play();
            break;

        default:
            break;
    }
}

// Dark mode/Light mode
const darkBtn = document.querySelector("#darkmode")
const lightBtn = document.querySelector("#lightmode")
const mainBody = document.querySelector("body")

darkBtn.addEventListener("click", ()=> {
    mainBody.setAttribute("class", "dark");
    darkBtn.style.display = "none";
    lightBtn.style.display = "inline-flex"
    keys.forEach(key =>
        key.classList.remove("add-border")
    );
});

lightBtn.addEventListener("click", ()=> {
    mainBody.setAttribute("class", "light");
    lightBtn.style.display = "none";
    darkBtn.style.display = "inline-flex";
    keys.forEach(key =>
        key.classList.add("add-border")
    );
});
