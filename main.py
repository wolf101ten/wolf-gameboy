def on_button_pressed_a():
    global SendMessage, Game1A
    if ChatPlace:
        SendMessage = True
        SendMessage = False
    elif Ingame:
        if Game1A:
            pass
        elif Game2A:
            pass
    else:
        Game1A = True
        Game1()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Ingame, ChatPlace
    if Ingame:
        Menu()
        Ingame = False
        ChatPlace = False
    else:
        Ingame = True
        basic.show_string("Wolf Chat")
        basic.show_string("Chat to MicroBits running: Wolf OS G Lite Version:")
        basic.show_string("" + str((WolfVersionNumber)))
        basic.show_string("Or up to 1.0")
        radio.set_group(47)
        basic.show_string("Messages are sent in bits...")
        basic.show_string("Remember to keep track of the bits.")
        ChatPlace = True
        radio.send_string("A MicroBit Running Wolf OS G Version:")
        radio.send_string("" + str((WolfVersionNumber)))
        radio.send_string("Is online!")
        ChatPlacefunction()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    if ChatPlace:
        basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def ChatPlacefunction():
    CodeCheck = 0
    basic.show_string("Chat Online")
    basic.show_leds("""
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        """)
    if CodeCheck == 1 and SendMessage:
        basic.show_string(".a")
    if CodeCheck == 2 and SendMessage:
        basic.show_string(".b")
    if CodeCheck == 3 and SendMessage:
        basic.show_string(".c")
    if CodeCheck == 4 and SendMessage:
        basic.show_string(".d")
    if CodeCheck == 5 and SendMessage:
        basic.show_string(".e")
    if CodeCheck == 6 and SendMessage:
        basic.show_string(".f")
    if CodeCheck == 7 and SendMessage:
        basic.show_string(".g")
    if CodeCheck == 8 and SendMessage:
        basic.show_string(".h")
    if CodeCheck == 9 and SendMessage:
        basic.show_string(".i")
    if CodeCheck == 10 and SendMessage:
        basic.show_string(".j")
    if CodeCheck == 11 and SendMessage:
        basic.show_string(".k")
    if CodeCheck == 12 and SendMessage:
        basic.show_string(".l")
    if CodeCheck == 13 and SendMessage:
        basic.show_string(".m")
    if CodeCheck == 14 and SendMessage:
        basic.show_string(".n")
    if CodeCheck == 15 and SendMessage:
        basic.show_string(".o")
    if CodeCheck == 16 and SendMessage:
        basic.show_string(".p")
    if CodeCheck == 17 and SendMessage:
        basic.show_string(".q")
    if CodeCheck == 18 and SendMessage:
        basic.show_string(".r")
    if CodeCheck == 19 and SendMessage:
        basic.show_string(".s")
    if CodeCheck == 20 and SendMessage:
        basic.show_string(".t")
    if CodeCheck == 21 and SendMessage:
        basic.show_string(".u")
    if CodeCheck == 22 and SendMessage:
        basic.show_string(".v")
    if CodeCheck == 23 and SendMessage:
        basic.show_string(".w")
    if CodeCheck == 24 and SendMessage:
        basic.show_string(".x")
    if CodeCheck == 25 and SendMessage:
        basic.show_string(".y")
    if CodeCheck == 26 and SendMessage:
        basic.show_string(".z")
    if CodeCheck == 27 and SendMessage:
        radio.send_string("-space-")
    if CodeCheck == 1 and SendMessage:
        radio.send_string("A")
    if CodeCheck == 2 and SendMessage:
        radio.send_string("B")
    if CodeCheck == 3 and SendMessage:
        radio.send_string("C")
    if CodeCheck == 4 and SendMessage:
        radio.send_string("D")
    if CodeCheck == 5 and SendMessage:
        radio.send_string("E")
    if CodeCheck == 6 and SendMessage:
        radio.send_string("F")
    if CodeCheck == 7 and SendMessage:
        radio.send_string("G")
    if CodeCheck == 8 and SendMessage:
        radio.send_string("H")
    if CodeCheck == 9 and SendMessage:
        radio.send_string("I")
    if CodeCheck == 10 and SendMessage:
        radio.send_string("J")
    if CodeCheck == 11 and SendMessage:
        radio.send_string("K")
    if CodeCheck == 12 and SendMessage:
        radio.send_string("L")
    if CodeCheck == 13 and SendMessage:
        radio.send_string("M")
    if CodeCheck == 14 and SendMessage:
        radio.send_string("N")
    if CodeCheck == 15 and SendMessage:
        radio.send_string("O")
    if CodeCheck == 16 and SendMessage:
        radio.send_string("P")
    if CodeCheck == 17 and SendMessage:
        radio.send_string("Q")
    if CodeCheck == 18 and SendMessage:
        radio.send_string("R")
    if CodeCheck == 19 and SendMessage:
        radio.send_string("S")
    if CodeCheck == 20 and SendMessage:
        radio.send_string("T")
    if CodeCheck == 21 and SendMessage:
        radio.send_string("U")
    if CodeCheck == 22 and SendMessage:
        radio.send_string("V")
    if CodeCheck == 23 and SendMessage:
        radio.send_string("W")
    if CodeCheck == 24 and SendMessage:
        radio.send_string("X")
    if CodeCheck == 25 and SendMessage:
        radio.send_string("Y")
    if CodeCheck == 26 and SendMessage:
        radio.send_string("Z")
    if CodeCheck == 27 and SendMessage:
        radio.send_string("*space*")

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def Menu():
    while not (Ingame):
        basic.show_leds("""
            . . # . .
            . # # . .
            # . # . .
            . . # . .
            # # # # #
            """)
        basic.pause(500)
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
        basic.pause(500)
        basic.show_leds("""
            . # # . .
            # . . # .
            . . # . .
            . # . . .
            # # # # .
            """)
        basic.pause(500)
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
        basic.pause(500)
def Game1():
    global Alive
    

    if Game1A:
        Highscore_GameA = 0
        basic.show_string("Snake")
        basic.show_string("Your Highscore is:")
        basic.show_string("" + str((Highscore_GameA)))
        Alive = True
        while Alive:
            pass
SendMessage = False
ChatPlace = False
Ingame = False
WolfVersionNumber = 0
Game1A = False
Game2A = False
Alive = False
Alive = False
Game2A = False
Game1A = False
WolfVersionNumber = 0.1
snake = 0
Ingame = False
ChatPlace = False
for index in range(randint(1, 10)):
    basic.show_leds("""
        . . # . .
        . # . # .
        # . . . .
        . # . # .
        . . # . .
        """)
    basic.pause(200)
    basic.show_leds("""
        . . # . .
        . # . # .
        # . . . #
        . # . . .
        . . # . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . . . .
        """)
    basic.pause(200)
    basic.show_leds("""
        . . # . .
        . # . # .
        # . . . #
        . . . # .
        . . # . .
        """)
    basic.pause(200)
    basic.show_leds("""
        . . # . .
        . # . # .
        . . . . #
        . # . # .
        . . # . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . # . .
        . . . # .
        # . . . #
        . # . # .
        . . # . .
        """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        """)
    basic.pause(200)
    basic.show_leds("""
        . . # . .
        . # . . .
        # . . . #
        . # . # .
        . . # . .
        """)
    basic.pause(200)
for index2 in range(randint(3, 5)):
    basic.show_leds("""
        # # . # #
        # # . # #
        . . . . .
        # # . # #
        # # . # #
        """)
    basic.pause(500)
    basic.show_leds("""
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        """)
    basic.pause(500)
basic.clear_screen()
basic.show_string("Starting,")
basic.show_string("Wolf OS G Lite")
basic.show_string("GameBoy Edition")
basic.show_string("Doing a quick code check")
Menu()

def on_forever():
    pass
basic.forever(on_forever)
