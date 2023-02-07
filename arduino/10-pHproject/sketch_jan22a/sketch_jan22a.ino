int base;
int elec;

void setup() 
{
  Serial.begin(9600);
  
}

void loop() 
{
 base = analogRead(A0);
 elec = analogRead(A1);
 Serial.println(base);
 Serial.println(elec);
 delay(1000);
}
