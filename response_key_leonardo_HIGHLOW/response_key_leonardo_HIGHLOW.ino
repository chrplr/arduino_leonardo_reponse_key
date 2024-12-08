// code to detect when pin 7 of Arduino Leonardo is connected to GND
//
// Time-stamp: <2024-10-09 christophe@pallier.org>

// #include <Keyboard.h>

#if ARDUINO > 10605
#include <Keyboard.h>
#endif


const int ledPin = 13;
const int button = 7;  // pin 7 is an interrupt on the Leonardo (not the UNO!)
volatile bool toggleValue = 0;
volatile bool intFlag = 1;

bool sent = 0;
char KEY = 'F';

// debouncing
volatile unsigned long lastIntMillis = 0;
volatile unsigned long debounceMillis = 10;

void setup() {
  pinMode(ledPin, OUTPUT);  
  digitalWrite(ledPin, LOW); //start with LED off to save power
  pinMode(button, INPUT_PULLUP);  // this is the pin connected to the button switch
  attachInterrupt(digitalPinToInterrupt(button), isr, FALLING); //isr is the Interrupt Service Routine that will be called when the button is pressed
}

void loop() {
  if (toggleValue) { 
    digitalWrite(ledPin, HIGH);
      if (!sent) {
        Keyboard.write(KEY); 
        sent =1;
      }
    } 
  else { 
    digitalWrite(ledPin, LOW); 
    sent = 0;
  } 
}

void isr(){ // interrupt service routine
  if(millis() - lastIntMillis > debounceMillis){
    toggleValue = !toggleValue;
    intFlag = 0;
    lastIntMillis = millis(); //record time of interrupt
  }
}
