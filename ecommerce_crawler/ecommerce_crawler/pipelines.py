# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import psycopg2
import datetime
import pytz

class EcommerceCrawlerPipeline:
    def __init__(self, mycursor, mydb):
        self.mydb = mydb
        self.mycursor = mycursor
        self.mycursor.execute("""insert into Categories (type_id, type_tag, type_detail, refer_image, type_url) values 
                                    (0, 'Jackets & Coats', 'Jackets & Coats ONTOP Local Brand', 'https://bizweb.dktcdn.net/100/348/395/themes/836567/assets/feature_banner_image_2.jpg?1645775449965', 'jackets-and-coats'),
                                    (1, 'Polos & T-Shirts', 'Polos & T-Shirts ONTOP Local Brand', 'https://bizweb.dktcdn.net/100/348/395/files/ao-phong-den-local-brand.jpg?v=1596186841409', 'polos-and-t-shirts'),
                                    (2, 'Hoodies & Sweaters', 'Hoodie & Sweater ONTOP Local Brand', 'https://bizweb.dktcdn.net/100/348/395/products/linhchinh2-1.jpg?v=1641234958567', 'hoodies-and-sweaters'),
                                    (3, 'Accessories', 'Accessories ONTOP Local Brand', 'https://bizweb.dktcdn.net/100/348/395/products/01-8.png?v=1625567969717', 'accessories'),
                                    (4, 'Shirts', 'Shirts ONTOP Local Brand', 'https://bizweb.dktcdn.net/thumb/grande/100/348/395/files/image2-jpeg.jpg?v=1607144099507', 'shirts'),
                                    (5, 'Shorts & Jeans', 'Shorts & Jeans ONTOP Local Brand', 'https://bizweb.dktcdn.net/100/348/395/files/quan-short-ni-da-ca-nam-local-brand-54bab9f5-a6a4-422f-9f5c-1a777ef8924f.jpg?v=1621046257397', 'shorts-and-jeans')""")

    @classmethod
    def from_settings(cls, settings):
        mydb = psycopg2.connect(
            host = settings['POSTGRES_HOST'],
            database = settings['POSTGRES_DBNAME'],
            user = settings['POSTGRES_USER'],
            password = settings['POSTGRES_PASSWD'],
            port = "5432"
        )
        mycursor = mydb.cursor()
        return cls(mycursor, mydb)
    
    def process_item(self, item, spider):
        self.store_db(item)
        return item

    def store_db(self, item):
        self.mycursor.execute("insert into Products (id, name, price, old_price, images, created_at, updated_at, size_s_total, size_s_remain, size_m_total, size_m_remain, size_l_total, size_l_remain, type_id) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", (item['id'], item['name'], item['price'], item['old_price'], item['images'], datetime.datetime.now(pytz.timezone('Asia/Ho_Chi_Minh')), datetime.datetime.now(pytz.timezone('Asia/Ho_Chi_Minh')), 100, 100, 100, 100, 100, 100, item['type']))
        self.mydb.commit()