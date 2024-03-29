int analogInput = 1;
float Vout = 0.000;
float Vin = 0.00;
float R1 = 100000.000; // resistance of R1 (100K) 
float R2 = 10000.000; // resistance of R2 (10K) 
int val = 0;

void setup(){
   pinMode(analogInput, INPUT); //assigning the input port
   Serial.begin(9600); //BaudRate
}
void loop(){
   
   val = analogRead(analogInput);//reads the analog input
   Vout = (val * 5.000) / 1024.000; // formula for calculating voltage out i.e. V+, here 5.00
   Vin = Vout / (R2/(R1+R2)); // formula for calculating voltage in i.e. GND
   if (Vin<0.09)//condition 
   {
     Vin=0.00;//statement to quash undesired reading !
  } 
Serial.print("\t Voltage of the given source = \n");
Serial.print(Vin);
delay(2000); //for maintaining the speed of the output in serial moniter
}
