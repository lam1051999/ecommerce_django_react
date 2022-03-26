# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class EcommerceCrawlerItem(scrapy.Item):
    # define the fields for your item here like:
    id = scrapy.Field()
    name = scrapy.Field()
    price = scrapy.Field()
    old_price = scrapy.Field()
    images = scrapy.Field()
    type = scrapy.Field()

    
