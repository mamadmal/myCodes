int data;
int sen = A0;

void setup() 
{
  Serial.begin(9600);
}

void loop() 
{
  data = analogRead(sen);
  Serial.println(data);
  delay(200);
}
