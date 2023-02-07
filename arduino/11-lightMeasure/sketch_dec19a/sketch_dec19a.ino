int lightByte;
void setup() 
{
  Serial.begin(9600);
}

void loop() 
{
  lightByte = analogRead(A0);
  Serial.println(lightByte);
  delay(1000);
}
