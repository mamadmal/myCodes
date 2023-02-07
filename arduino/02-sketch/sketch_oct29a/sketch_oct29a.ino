int PW = 9;
void setup()
{
  pinMode(PW, OUTPUT);
}

void loop() {
  for (int i = 0; i < 256; i += 1){
    analogWrite(PW,i);
    
  }
}
