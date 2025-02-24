#include <Arduino.h>
#include <Keyboard.h>
/*
BP_IRM1=D0/RX
BP_IRM2=D1/TX
TTL_BOITIER=D2/SDA
*/
/* actif a l'etat bas */
#define BP_IRM1 0
#define BP_IRM2 1
#define TTL_BOITIER 2

// declaration variable
int val = 0;
unsigned long int rebond_BP_IRM1 = 0UL;
int rebond_BP_IRM1_etat = 0;
unsigned long int rebond_BP_IRM2 = 0UL;
int rebond_BP_IRM2_etat = 0;
unsigned long int rebond_TTL_BOITIER = 0UL;
int rebond_TTL_BOITIER_etat = 0;
unsigned long int rebond_duree = 100UL;
unsigned long currentMillis = 0UL;
long delta_Millis = 0L;

// declaration fonction
void test_entree(void);
void analyse(void);
void anti_rebond(void);

// description fonction
void anti_rebond(void) {
  if (rebond_BP_IRM1_etat >= 1) {
    delta_Millis = rebond_BP_IRM1 - currentMillis;
    if ((delta_Millis) <= 0L) {
      rebond_BP_IRM1_etat = 0;
    }
  }
  if (rebond_BP_IRM2_etat >= 1) {

    delta_Millis = rebond_BP_IRM2 - currentMillis;
    if ((delta_Millis) <= 0L) {
      rebond_BP_IRM2_etat = 0;
    }
  }
  if (rebond_TTL_BOITIER_etat > 0) {
    delta_Millis = rebond_TTL_BOITIER - currentMillis;
    if ((delta_Millis) <= 0L) {
      rebond_TTL_BOITIER_etat = 0;
    }
  }
}

void test_entree() {
  // init val=0
  val = 0;
  // on teste les 3 entrees et on renvoie pour analyse
  // test de TTL_BOITIER poids faible : 1
  if (digitalRead(TTL_BOITIER) == LOW) {
    val = val + 1;
  }
  if (digitalRead(BP_IRM1) == LOW) {
    val = val + 2;
  }
  if (digitalRead(BP_IRM2) == LOW) {
    val = val + 4;
  }
}

void analyse() {
  // on analyse les appuies et on envoie le y
  // Keyboard.print('4');
  if ((val & 4) == 4) {

    if (rebond_BP_IRM2_etat <= 0) {
      // BP_IRM2 appuy on envoie le caractre : y
      // Serial.println('4');
      Keyboard.print('b');
      rebond_BP_IRM2 = currentMillis + rebond_duree;
      rebond_BP_IRM2_etat = 1;
    }
  }

  if ((val & 2) == 2) {
    // BP_IRM1 appuy on envoie le caractre : b
    // Keyboard.print('b');
    if (rebond_BP_IRM1_etat <= 0) {
      // BP_IRM2 appuy on envoie le caractre : y
      // Serial.println('2');
      Keyboard.print('y');
      rebond_BP_IRM1 = currentMillis + rebond_duree;
      rebond_BP_IRM1_etat = 1;
    }
  }
  if ((val & 1) == 1) {
    if (rebond_TTL_BOITIER_etat <= 0) {
      // TTL_BOITIER appuy on envoie le caractre : s
      // Serial.println('1');
      Keyboard.print('t');
      rebond_TTL_BOITIER = currentMillis + rebond_duree;
      rebond_TTL_BOITIER_etat = 1;
    }
  }
}

void setup() {
  // Serial.begin(9600);
  // initialize the digital pin as an output.
  // Pin 13 has an LED connected on most Arduino boards:
  pinMode(13, OUTPUT);
  // les 3 entrees BP_IRM1 BP_IRM2 TTL_BOITIER en pullup haut

  pinMode(BP_IRM1, INPUT_PULLUP);
  pinMode(BP_IRM2, INPUT_PULLUP);
  pinMode(TTL_BOITIER, INPUT_PULLUP);
  Keyboard.begin();  // declaration du clavier
  //*********
}
void loop() {
  //Serial.println("Hello world!");
  //delay(20); // wait for a second
  //digitalWrite(13, HIGH); // set the LED on
  //delay(20); // wait for a second
  //digitalWrite(13, LOW); // set the LED off
  //******************
  test_entree();
  currentMillis = millis();
  anti_rebond();
  analyse();
}
