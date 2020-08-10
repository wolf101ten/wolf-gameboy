input.onButtonPressed(Button.A, function () {
    if (ChatPlace) {
        SendMessage = true
        SendMessage = false
    } else if (Ingame) {
        if (Game1A) {
        	
        } else if (Game2A) {
        	
        }
    } else {
        Game1A = true
        Game1()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Ingame) {
        Menu()
        Ingame = false
        ChatPlace = false
    } else {
        Ingame = true
        basic.showString("Wolf Chat")
        basic.showString("Chat to MicroBits running: Wolf OS G Lite Version:")
        basic.showString("" + WolfVersionNumber)
        basic.showString("Or up to 1.0")
        radio.setGroup(47)
        basic.showString("Messages are sent in bits...")
        basic.showString("Remember to keep track of the bits.")
        ChatPlace = true
        radio.sendString("A MicroBit Running Wolf OS G Version:")
        radio.sendString("" + WolfVersionNumber)
        radio.sendString("Is online!")
        ChatPlacefunction()
    }
})
radio.onReceivedString(function (receivedString) {
    if (ChatPlace) {
        basic.showString(receivedString)
    }
})
function ChatPlacefunction () {
    let CodeCheck = 0
    basic.showString("Chat Online")
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    if (CodeCheck == 1 && SendMessage) {
        basic.showString(".a")
    }
    if (CodeCheck == 2 && SendMessage) {
        basic.showString(".b")
    }
    if (CodeCheck == 3 && SendMessage) {
        basic.showString(".c")
    }
    if (CodeCheck == 4 && SendMessage) {
        basic.showString(".d")
    }
    if (CodeCheck == 5 && SendMessage) {
        basic.showString(".e")
    }
    if (CodeCheck == 6 && SendMessage) {
        basic.showString(".f")
    }
    if (CodeCheck == 7 && SendMessage) {
        basic.showString(".g")
    }
    if (CodeCheck == 8 && SendMessage) {
        basic.showString(".h")
    }
    if (CodeCheck == 9 && SendMessage) {
        basic.showString(".i")
    }
    if (CodeCheck == 10 && SendMessage) {
        basic.showString(".j")
    }
    if (CodeCheck == 11 && SendMessage) {
        basic.showString(".k")
    }
    if (CodeCheck == 12 && SendMessage) {
        basic.showString(".l")
    }
    if (CodeCheck == 13 && SendMessage) {
        basic.showString(".m")
    }
    if (CodeCheck == 14 && SendMessage) {
        basic.showString(".n")
    }
    if (CodeCheck == 15 && SendMessage) {
        basic.showString(".o")
    }
    if (CodeCheck == 16 && SendMessage) {
        basic.showString(".p")
    }
    if (CodeCheck == 17 && SendMessage) {
        basic.showString(".q")
    }
    if (CodeCheck == 18 && SendMessage) {
        basic.showString(".r")
    }
    if (CodeCheck == 19 && SendMessage) {
        basic.showString(".s")
    }
    if (CodeCheck == 20 && SendMessage) {
        basic.showString(".t")
    }
    if (CodeCheck == 21 && SendMessage) {
        basic.showString(".u")
    }
    if (CodeCheck == 22 && SendMessage) {
        basic.showString(".v")
    }
    if (CodeCheck == 23 && SendMessage) {
        basic.showString(".w")
    }
    if (CodeCheck == 24 && SendMessage) {
        basic.showString(".x")
    }
    if (CodeCheck == 25 && SendMessage) {
        basic.showString(".y")
    }
    if (CodeCheck == 26 && SendMessage) {
        basic.showString(".z")
    }
    if (CodeCheck == 27 && SendMessage) {
        radio.sendString("-space-")
    }
    if (CodeCheck == 1 && SendMessage) {
        radio.sendString("A")
    }
    if (CodeCheck == 2 && SendMessage) {
        radio.sendString("B")
    }
    if (CodeCheck == 3 && SendMessage) {
        radio.sendString("C")
    }
    if (CodeCheck == 4 && SendMessage) {
        radio.sendString("D")
    }
    if (CodeCheck == 5 && SendMessage) {
        radio.sendString("E")
    }
    if (CodeCheck == 6 && SendMessage) {
        radio.sendString("F")
    }
    if (CodeCheck == 7 && SendMessage) {
        radio.sendString("G")
    }
    if (CodeCheck == 8 && SendMessage) {
        radio.sendString("H")
    }
    if (CodeCheck == 9 && SendMessage) {
        radio.sendString("I")
    }
    if (CodeCheck == 10 && SendMessage) {
        radio.sendString("J")
    }
    if (CodeCheck == 11 && SendMessage) {
        radio.sendString("K")
    }
    if (CodeCheck == 12 && SendMessage) {
        radio.sendString("L")
    }
    if (CodeCheck == 13 && SendMessage) {
        radio.sendString("M")
    }
    if (CodeCheck == 14 && SendMessage) {
        radio.sendString("N")
    }
    if (CodeCheck == 15 && SendMessage) {
        radio.sendString("O")
    }
    if (CodeCheck == 16 && SendMessage) {
        radio.sendString("P")
    }
    if (CodeCheck == 17 && SendMessage) {
        radio.sendString("Q")
    }
    if (CodeCheck == 18 && SendMessage) {
        radio.sendString("R")
    }
    if (CodeCheck == 19 && SendMessage) {
        radio.sendString("S")
    }
    if (CodeCheck == 20 && SendMessage) {
        radio.sendString("T")
    }
    if (CodeCheck == 21 && SendMessage) {
        radio.sendString("U")
    }
    if (CodeCheck == 22 && SendMessage) {
        radio.sendString("V")
    }
    if (CodeCheck == 23 && SendMessage) {
        radio.sendString("W")
    }
    if (CodeCheck == 24 && SendMessage) {
        radio.sendString("X")
    }
    if (CodeCheck == 25 && SendMessage) {
        radio.sendString("Y")
    }
    if (CodeCheck == 26 && SendMessage) {
        radio.sendString("Z")
    }
    if (CodeCheck == 27 && SendMessage) {
        radio.sendString("*space*")
    }
}
input.onButtonPressed(Button.B, function () {
	
})
function Menu () {
    while (!(Ingame)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # . # . .
            . . # . .
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            . # . . .
            # # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(500)
    }
}
function Game1 () {
    let Highscore_GameA: number;
if (Game1A) {
        Highscore_GameA = 0
        basic.showString("Snake")
        basic.showString("Your Highscore is:")
        basic.showString("" + Highscore_GameA)
        Alive = true
        while (Alive) {
        	
        }
    }
}
let SendMessage = false
let ChatPlace = false
let Ingame = false
let WolfVersionNumber = 0
let Game1A = false
let Game2A = false
let Alive = false
let snake = 0
Alive = false
Game2A = false
Game1A = false
WolfVersionNumber = 0.1
Ingame = false
ChatPlace = false
for (let index = 0; index < randint(1, 10); index++) {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . .
        . # . # .
        . . # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . # .
        . . # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(200)
}
for (let index = 0; index < randint(3, 5); index++) {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # . # #
        # # . # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
}
basic.clearScreen()
basic.showString("Starting,")
basic.showString("Wolf OS G Lite")
basic.showString("GameBoy Edition")
basic.showString("Doing a quick code check")
Menu()
basic.forever(function () {
	
})
