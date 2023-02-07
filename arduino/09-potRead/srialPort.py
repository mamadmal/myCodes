import serial

ser = serial.Serial('COM10')
print(ser.name)  

while True:
    packet = ser.readline() 
    packetT = packet.decode('utf').strip(" ''''\n'''' ")
    packetInt = int(float(packetT))
    packetFlo = float(int(packetInt))
    pakM = (packetFlo - 32.0) * 5 / 9
    print(pakM)
         
