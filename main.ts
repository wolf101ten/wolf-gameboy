input.onButtonPressed(Button.A, function () {
    if (ChatPlace) {
        SendMessage = true
        SendMessage = false
    } else if (Ingame) {
    	
    } else {
    	
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
        basic.showString("" + (WolfVersionNumber))
        basic.showString("Or up to 1.0")
        radio.setGroup(47)
        basic.showString("Messages are sent in bits...")
        basic.showString("Remember to keep track of the bits.")
        ChatPlace = true
        radio.sendString("A MicroBit Running Wolf OS G Version:")
        radio.sendString("" + (WolfVersionNumber))
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
    basic.showString("ChatOnline")
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
let SendMessage = false
let ChatPlace = false
let Ingame = false
let WolfVersionNumber = 0
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
