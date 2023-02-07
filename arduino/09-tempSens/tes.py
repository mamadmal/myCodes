import mariadb

conn = mariadb.connect(
        user="root",
        host="127.0.0.1",
        database="temp")
print("coonected to database.")

cur = conn.cursor()