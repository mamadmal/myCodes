int red = 9;
int blue = 10;
int green = 11;
void setup()
{
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
  pinMode(11,OUTPUT);
}

void loop() 
{
  setCol(0,255,0);
  delay(1000);
  setCol(255,0,0);
  delay(1000);
  setCol(0,0,255);
  delay(1000);
}
void setCol(int r,int g,int b)
{
  analogWrite(red,r);
  analogWrite(blue,b);
  analogWrite(green,g);
}