gameScreen = document.getElementById("gameScreen")
let counter = 0
let currentIndex = 0
let round = 0
acceptableLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let words = [
    "ABOUT", "BEACH", "CHAIR", "DAILY", "EARLY",
    "FABLE", "GLASS", "HAPPY", "IMAGE", "JOLLY",
    "KNIFE", "LIGHT", "MAGIC", "NOBLE", "OCEAN",
    "PAINT", "QUICK", "RIVER", "SHAPE", "TABLE",
    "UNDER", "VOICE", "WATCH", "XENON", "YACHT",
    "ZEBRA", "ABUSE", "ADMIT", "AGENT", "ARISE",
    "BAKER", "CABLE", "DANCE", "EAGER", "EIGHT",
    "FACET", "GAMER", "HAUNT", "INDEX", "JUDGE",
    "LABEL", "MAPLE", "NAVAL", "OFFER", "PLACE",
    "QUOTE", "RULER", "SALAD", "TIGER", "USUAL"
]


let chosenWord = words[Math.floor(Math.random() * words.length)]

let layer0 = document.getElementById("l0")
let layer1 = document.getElementById("l1")
let layer2 = document.getElementById("l2")
run()

function run() {
    for (let i = 0; i < 6; i++) {
        roundDiv = document.createElement("div")
        roundDiv.id = "Round" + i
        gameScreen.appendChild(roundDiv)
        roundDiv.classList.add("RoundDiv")

        for (let j = 0; j < 5; j++) {
            letterDiv = document.createElement("div")
            letterDiv.id = counter
            letterDiv.classList.add("LetterDiv")
            roundDiv.appendChild(letterDiv)
            counter ++ 
        }
    }


let layers = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], 
["A", "S", "D", "F", "G", "H", "J", "K", "L"], 
["Z", "X", "C", "V", "B", "N", "M"]]

for (let i = 0; i < layers.length; i++) {
    for (let j = 0; j < layers[i].length; j ++) {

        let characterDiv = document.createElement("div")
        let characterText = document.createElement("h1")
        characterDiv.classList = "characterDiv"
        characterDiv.id = layers[i][j]
        characterText.innerHTML = layers[i][j]
        characterDiv.appendChild(characterText)

        if (i === 0) {
            layer0.appendChild(characterDiv)
        } 
        if (i === 1) {
            layer1.appendChild(characterDiv)
        }
        if (i === 2) {
            layer2.appendChild(characterDiv)
        }
    }
}


}





document.addEventListener("keydown", function(event) {
    event.preventDefault()
    let currentCharacter = event.key
    if (currentCharacter.length <= 1) {
        currentCharacter = currentCharacter.toUpperCase()
    }

    if (round == 0) {
        limit = 5
    } else if (round == 1) {
        limit = 10
    } else if (round == 2) {
        limit = 15
    } else if (round == 3) {
        limit = 20
    } else if (round == 4) {
        limit = 25
    } else if (round == 5) {
        limit = 30
    }
    
    if (currentIndex > (limit - 5)) {
        if (currentCharacter == "Backspace") {
            currentIndex = currentIndex - 1
            let index = document.getElementById(currentIndex)
            index.innerHTML = ""
        }
    }

    if (currentCharacter == "Enter") {
        if (currentIndex == limit) {
            correct = 0
            for (let i = 0; i < 5; i++) {
                currentDiv = document.getElementById(i + (limit - 5))
                inputtedLetter = currentDiv.getElementsByTagName("h2")[0].innerHTML
                keyboardLetter = document.getElementById(inputtedLetter)
             
                if (chosenWord[i] == inputtedLetter) {
                    correct ++
                    currentDiv.style.backgroundColor = "#51E885"
                    keyboardLetter.style.backgroundColor = "#51E885"
                } else if (chosenWord.includes(inputtedLetter)) {
                    currentDiv.style.backgroundColor = "#fcba03"
                    keyboardLetter.style.backgroundColor = "#fcba03"
                } else {
                    currentDiv.style.backgroundColor = "grey"
                    keyboardLetter.style.backgroundColor = "grey"
                }

                
            }
            if (correct == 5) {
                console.log("YOU WON!")
                return
            }

            round ++
        }
    }
     
    if (acceptableLetters.indexOf(currentCharacter) >= 0) {
        if (currentIndex < limit) {
            let index = document.getElementById(currentIndex)
            letterDisplay = document.createElement("h2") 
            letterDisplay.innerHTML = currentCharacter
            index.appendChild(letterDisplay)

            currentIndex ++ 
        }
            
    }
});