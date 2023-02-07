char read;
int RE;

void setup() 
{
  Serial.begin(9600);
}

void loop() 
{
 while(Serial.available())
 {
   read = Serial.read();
   if (read == '1')
   {     
     RE = analogRead(A0);
     Serial.println(RE);
     
   }
   else if (read == '2')
   {
     Serial.end();
   }
 }
 delay(1000);
}
