import time
import psycopg2
from ecommerce_backend.settings import DATABASES 


def check_for_connection():
    is_connected = False

    while not is_connected:
        try:
            mydb = psycopg2.connect(
                    host = DATABASES['default']['HOST'],
                    database = DATABASES['default']['NAME'],
                    user = DATABASES['default']['USER'],
                    password = DATABASES['default']['PASSWORD'],
                    port = 5432
                )
            is_connected = True
        except (Exception, psycopg2.DatabaseError) as error:
            is_connected = False
            time.sleep(1)
    
check_for_connection()