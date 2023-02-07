import serial

serialport = serial.Serial()
portSe = input("select the port: COM")
if portSe.startswith("COM" + portSe):
    portSe = "COM" + str(portSe)
    print(portSe)

serialport.port = portSe

while True:
    print(portSe.readline())
