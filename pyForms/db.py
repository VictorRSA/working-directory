
import pymysql.cursors
import random 
# Connect to the database
connection = pymysql.connect(host='localhost',
                             user='root',
                             password='',
                             db='lifechoices online',
                             charset='utf8mb4')
try:
    # with connection.cursor() as cursor:
        # Create a new database
        # sql = "CREATE DATABASES IF NOT EXISTS 'registration-dat;"

        # cursor.execute(sql)

    # connection is not autocommit by default. So you must commit to save
    # your changes.

    with connection.cursor() as cursor:
        # Read a single record
        sql="SHOW DATABASES;"
        # sql = "CREATE TABLE IF NOT EXIST 'flask account' ('id' int(11) NOT NULL AUTO_INCREMENT, 'First Name' VARCHAR(50) NOT NULL,'Last Name' VARCHAR(50) NOT NULL,'Password' VARCHAR(255) NOT NULL,'E-mail' VARCHAR(100) NOT NULL,'Gender' VARCHAR(10) CHECK (gender IN ('Female','Male','Other')),'Province' TEXT(25) NOT NULL PRIMARAY KEY('INT'));"
        cursor.execute(sql)
        # result = cursor.fetchone()
        # print(result)
finally:
    connection.commit()

    connection.close()