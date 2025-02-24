#include <Keyboard.h>

const int ledPin = 13;
const int button0 = 0;
const int button1 = 1;
const int button2 = 2;
const int button3 = 3;
volatile bool state0 = 0;
volatile bool state1 = 0;
volatile bool state2 = 0;
volatile bool state3 = 0;


char KEY0 = 'F';
char KEY1 = 'G';
char KEY2 = 'H';
char KEY3 = 'J';

volatile unsigned long lastIntMillis = 0;
const unsigned long debounceMillis = 50;  // increased debounce time

void setup() {
  pinMode(ledPin, OUTPUT);  
  digitalWrite(ledPin, LOW); // start with LED off
  pinMode(button0, INPUT);
  pinMode(button1, INPUT);
  pinMode(button2, INPUT);
  pinMode(button3, INPUT);

    // Ensure pins start LOW
  // digitalWrite(button0, LOW);
  // digitalWrite(button1, LOW);
  // digitalWrite(button2, LOW);
  // digitalWrite(button3, LOW);
  
  attachInterrupt(digitalPinToInterrupt(button0), isr0, HIGH);
  attachInterrupt(digitalPinToInterrupt(button1), isr1, HIGH);
  attachInterrupt(digitalPinToInterrupt(button2), isr2, HIGH);
  attachInterrupt(digitalPinToInterrupt(button3), isr3, HIGH);
}

void loop() {
  if (state0) { 
    digitalWrite(ledPin, HIGH);
    Keyboard.write(KEY0); 
    state0 = 0;
  } 
  if (state1) { 
    digitalWrite(ledPin, HIGH);
    Keyboard.write(KEY1); 
    state1 = 0;
  } 
  if (state2) { 
    digitalWrite(ledPin, HIGH);
    Keyboard.write(KEY2); 
    state2 = 0;
  } 
  if (state3) { 
    digitalWrite(ledPin, HIGH);
    Keyboard.write(KEY3); 
    state3 = 0;

  } 
  digitalWrite(ledPin, LOW);
  delay(1000);
}

void isr0() { 
  if (millis() - lastIntMillis > debounceMillis) {
    state0 = 1;
    lastIntMillis = millis();
  }
}

void isr1() { 
  if (millis() - lastIntMillis > debounceMillis) {
    state1 = 1;
    lastIntMillis = millis();
  }
}

void isr2() { 
  if (millis() - lastIntMillis > debounceMillis) {
    state2 = 1;
    lastIntMillis = millis();
  }
}

void isr3() { 
  if (millis() - lastIntMillis > debounceMillis) {
    state3 = 1;
    lastIntMillis = millis();
  }
}