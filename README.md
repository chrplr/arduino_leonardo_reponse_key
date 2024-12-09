# Response key for human psychology experiments

`Time-stamp: <2024-12-09 16:28:19 christophe@pallier.org>`

In human experimental psychology, many experiments require the recording of reaction-times. Although the keyboard or the mouse buttons can be used to record manual responses, they can potentially introduce non-negligeable measurement errors ([refs](#refs))
 
The picture below shows a simple response key device based on an [Arduino Leornardo](https://docs.arduino.cc/hardware/leonardo/) microcontroller and a [Morse key](https://putikeeg.com/products/straight-key-morse).

![](response_key_arduino_leonardo_1024.jpg)

Pressing the response key closes the circuit betwen ground (`GND`) and `pin 2` (through cables connected to a [male jack to terminal block adapter](https://www.amazon.fr/Poppstar-connecteurs-Audio-connecteur-Broches/dp/B07XDMB4LR/).

The Leonardo, attached on a USB port of the computer, behaves as a keyboard: each time the Morse key is pressed, a character 'f' is sent.

Here is the code:

```C

// Detects when pin 2 of the Leonardo goes from HIGH to LOW (GND) and sends a KEYPRESS event (DOWN then UP)
// 
// Time-stamp: <2024-10-09 christophe@pallier.org>

// For debouncing, we followed the Schmitt trigger approach described at
// <https://forum.arduino.cc/t/elegant-debouncing-solution-with-software-schmitt-trigger-emulation/122724>
// The benefit of the Schmitt trigger solution (whether hardware or software-emulated) is that 
// it constantly smooths out the state change information coming from the pin rather than imposing a fixed "blackout" period
//  where the pin is ignored for a certain amount of time or, even less usefully, for a fixed number of state changes. 

#if ARDUINO > 10605
#include <Keyboard.h>
#endif

char KEY = 'f'; // character sent when the circuit is closed
const int button = 2; // pin to which the switch closing to GND is attached
const int ledPin = 13;  // this led will light up when the button is pressed

// different thresholds for detecting button-down (press) and button-up (release)
//(These may be tuned to the particular switch/button being debounced)
// the value beluw are for a putikeeg morse key
const uint8_t threshold_press = 0xa0;
const uint8_t threshold_release = 0x0f;
const int DELAY = 4; // delay within the loop

void setup() {
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);      //start with LED off to save power
  pinMode(button, INPUT_PULLUP);  // the pin connected to the button switch is set to HIGH in a high-impedance state
 }

void loop() {
  //Variables for RC-Schmitt Trigger emulator debounce algorithm
  uint8_t y_old = 0, temp = 0, keypresses = 0;
  boolean buttonPressed = false;

  //Button polling loop
  while (true) {

    //Grab pin state
    boolean pinState = PIND & (1 << 2);  //Reading pin state  directly off register (pin PD2 / digital 2)
    pinState = !pinState;                // The button grounds the pin, which is otherwise pulled high, so we flip it
                                         // to achieve TRUE = buttonpress

    //This is the "RC circuit" part of the emulator, a recursive low-pass filter of recent pin states
    //Equation: y_old = (pinState * 0.25) + (y_old * 0.75)

    //First we get (y_old * 0.75)
    temp = (y_old >> 2);  //Bitwise operation for (y_old / 4)
    y_old -= temp;        // y_old - (y_old/4) is equivalent to (y_old * 0.75)

    //Second we add (pinState * 0.25) to y_old, but only if pinState is 1 (since otherwise the product is 0)
    //Note that we are actually adding 63 rather than (1*0.25). This is because we are using a byte
    //to represent the pin state in the equation for the purpose of having sufficient resolution to
    //later apply the hysteresis of the virtual Schmitt trigger. 63 is the integer result of multiplying
    //255 (maximum 8-bit number) by 0.25.
    if (pinState) y_old += 0x3f;  //0x3f is hex for 63


    //This is the Schmitt trigger part of the algorithm. Note the hysteresis -- different thresholds for
    //detecting button-down and button-up
    //Thresholds are 240 (for a valid press) and 15 (for a valid release) [out of 255]
    //(These may be tuned to the particular switch/button being debounced)
    if ((y_old > threshold_press) && (!buttonPressed)) {  //This means a real press-down has occurred
      Keyboard.write(KEY);
      buttonPressed = true;
      digitalWrite(ledPin, HIGH);
    } else if ((y_old < threshold_release) && (buttonPressed)) {  //This means a real release has occurred
      buttonPressed = false;
      digitalWrite(ledPin, LOW);
    }

    delay(DELAY);  //The algorithm specifies that the above routine be called by a timer interrupt every
               //4-5 ms. With the default Schmitt thresholds of 0x0f (15) and 0xf0 (240), a delay of 4 ms
               //here results in a debouncing period of approximately 50 ms (it is not exact because
               //this is not a pure timing algorithm, so depending on actual bounce, the period may vary
               //somewhat
  }
}
```

You can compile and upload this sketch to the Leonardo using the [arduino software](https://www.arduino.cc/en/software) (Do not forget to select `Tools -> Board -> Leonardo` and the serial port address corresponding the the Leonardo (listed in devices))


## Limitations

* The device is seen as a keyboard. Therefore all delays due to the OS, the HID driver, the scanning of the USB port, remain present. One solution would be to measure the reaction time within the Arduino itself, and then sent it to the PC upon request (which requires to implement a dialog between the PC and the Arduino). 
* The code detects the key press, but not the key release.  So with the code above, it is not possible to measure the duration of a press.  Also, note that the arduino leonardo `keyboard.write` function immediately emits a keyup event after the keypress one. 

* The code only works for one response key (but could be modified to handle several keys)
* The threshold values and delay for the schmitt triggger algorithm may need to be tunes to the response key.

<a name="refs">References</a>

* Plant, Richard R., Nick Hammond, and Tom Whitehouse. 2003. “How Choice of Mouse May Affect Response Timing in Psychological Studies.” Behav Res Methods Instrum Comput 35 (2): 276–84.
* Shimizu, Hidemi. 2002. “Measuring Keyboard Response Delays by Comparing Keyboard and Joystick Inputs.” _Behavior Research Methods, Instruments, & Computers_ 34 (2): 250–56. https://doi.org/10.3758/BF03195452.
* Elegant debouncing solution with software Schmitt trigger <https://forum.arduino.cc/t/elegant-debouncing-solution-with-software-schmitt-trigger-emulation/122724>



