import mariadb
import sys

try:
    conn = mariadb.connect(
    user="root",
    password="1379",
    host="localhost",
    database="temp")
    print("you coonected, bitch!")
except mariadb.Error as e:
    print("ohhh, NO!")
    sys.exit(1)
cur = conn.cursor()

tempDB0 = [(2)]

for x in range(4):
    tempDB0 = tempDB0[0] + x
    tempDB0 = [(tempDB0)]
    cur.execute("INSERT INTO data0 (a) VALUES (%s)",tempDB0)
    x = ++x 
    
 

conn.commit() 
print(f"Last Inserted ID: {cur.lastrowid}")
    
conn.close()