import time
import psycopg2
from ecommerce_crawler.settings import POSTGRES_HOST, POSTGRES_DBNAME, POSTGRES_USER, POSTGRES_PASSWD, PORT

def check_for_connection():
    is_connected = False

    while not is_connected:
        try:
            mydb = psycopg2.connect(
                    host = POSTGRES_HOST,
                    database = POSTGRES_DBNAME,
                    user = POSTGRES_USER,
                    password = POSTGRES_PASSWD,
                    port = PORT
                )
            mycursor = mydb.cursor()
            mycursor.execute("select 1 from Products")
            mycursor.execute("select 1 from Categories")
            is_connected = True
        except (Exception, psycopg2.DatabaseError) as error:
            is_connected = False
            time.sleep(1)
    
check_for_connection()