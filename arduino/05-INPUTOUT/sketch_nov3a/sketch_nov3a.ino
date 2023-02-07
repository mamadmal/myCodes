int led = 8;
char sts;
void setup() 
{
  Serial.begin(9600);
  pinMode(led,OUTPUT);

}

void loop() 
{
 while(Serial.available())
 {
   sts = Serial.read();
   if (sts = '1')
   {
     digitalWrite(led,1);
   }
   else 
   {
     Serial.println("inValid Number!");
   }
 }

}
