void setup() 
{
  for(int i = 4; i < 10;i++)
  {
    pinMode(i,OUTPUT);
  }
}

void loop() 
{
 turnOn();
 delay(800);
 turnOff();
 delay(800);
 s1();
 delay(800);
 s2();
 delay(800);

}


void turnOn()
{
  for(int k = 4; k < 10; k++)
  {
    digitalWrite(k,1);
  }
}

void turnOff()
{
  for(int k = 4; k < 10; k++)
  {
    digitalWrite(k,0);
  }
  delay(500);
}

void s1()
{
  turnOn();
  delay(250);
  for(int i = 4; i < 10 ; i++)
  {
    digitalWrite(i,0);
    delay(250);
  }
}
void s2()
{
 for(int i = 9; i > 3 ; i--)
 {
   digitalWrite(i,1);
   delay(250);
 }
}
