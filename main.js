// Playing Keys
// key1 = document.querySelector("#key1")
// key2 = document.querySelector("#key2")
// key3 = document.querySelector("#key3")
// key4 = document.querySelector("#key4")
// key5 = document.querySelector("#key5")
// key6 = document.querySelector("#key6")
// key7 = document.querySelector("#key7")
// key8 = document.querySelector("#key8")

const keys = document.querySelectorAll(".keys")

function selectKey() {
    var keyname = this.getAttribute("id")
    console.log(keyname)
}

function playKey() {
    var keyname = this.getAttribute("id")
    var filename = "audio/" + keyname + "_.mp3";
    var audio = new Audio(filename);
    audio.play()
};

// for each works like a for loopasdfjsal;
keys.forEach(key => {
    key.addEventListener("click", function(event) {
        var keyname = event.target.getAttribute("id")
        var filename = "audio/" + keyname + "_.mp3";
        var audio = new Audio(filename);
        audio.play()
    })
});

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
