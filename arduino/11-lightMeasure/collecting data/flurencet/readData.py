import serial
import serial.tools.list_ports

import mariadb


conn = mariadb.connect(
        user="root",
        host="127.0.0.1",
        database="ldrFor")
print("coonected to database.")

cur = conn.cursor()


ports = serial.tools.list_ports.comports()
print(ports)
portsList = []

for onePort in ports:
    portsList.append(str(onePort))
    print(str(onePort))

stport = str(onePort)
strport = stport.rstrip(" - Arduino Micro")

ser = serial.Serial(strport)
se = ser.readline()

while True:
    se = ser.readline()
    se = se.decode().rstrip("b'\r\n'")
    se = str(se)
    print(se)
    
    database = [(se)]
    cur.execute("INSERT INTO felurencet (data) VALUES (%s)",database)
    conn.commit()
    print(f"Data added to DB, Last Inserted ID: {cur.lastrowid}") 
