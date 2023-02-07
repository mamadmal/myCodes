import serial
import serial.tools.list_ports

ports = serial.tools.list_ports.comports()
print(ports)
portsList = []

for onePort in ports:
    portsList.append(str(onePort))
    print(str(onePort))

ser = serial.Serial(input("enter  COM: "))
print(ser.name)  

s = ser.readline()
while True:
     packet = ser.readline()
     packetFlo = packet.decode().rstrip("b'\n'")
     packetFlo = float(packetFlo)
     packetCel = (packetFlo - 32.00) * 5.00 / 9.00
     print("%.2f"%packetCel)