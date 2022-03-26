from ..items import EcommerceCrawlerItem
import scrapy
from scrapy import Request
from urllib.parse import urljoin
import uuid

# from ..items import TutorialItem

class OntopSpider(scrapy.Spider):
    name = 'ontopspider'
    start_urls = [
        'https://ontop.com.vn/ao-khoac-local-brand-re-ontop',
        'https://ontop.com.vn/ao-khoac-local-brand-re-ontop?q=collections:1896591&page=2&view=grid',
        'https://ontop.com.vn/ao-khoac-local-brand-re-ontop?q=collections:1896591&page=3&view=grid',
        'https://ontop.com.vn/ao-thun-local-brand',
        'https://ontop.com.vn/ao-thun-local-brand?q=collections:1873452&page=2&view=grid',
        'https://ontop.com.vn/ao-thun-local-brand?q=collections:1873452&page=3&view=grid',
        'https://ontop.com.vn/ao-thun-local-brand?q=collections:1873452&page=4&view=grid',
        'https://ontop.com.vn/ao-hoodie-local-brand-chinh-hang-ontop',
        'https://ontop.com.vn/local-brand-gia-re-phu-kien-ontop',
        'https://ontop.com.vn/ao-so-mi-local-brand-ontop',
        'https://ontop.com.vn/quan-local-brand',
        'https://ontop.com.vn/vi-local-brand-gia-re',
    ]
    types_dict = {
        0: ['ao-khoac-local-brand-re-ontop', 'Jackets & Coats'],
        1: ['ao-thun-local-brand', 'Polos & T-Shirts'],
        2: ['ao-hoodie-local-brand-chinh-hang-ontop', 'Hoodie & Sweater'],
        3: ['local-brand-gia-re-phu-kien-ontop', 'Accessories'],
        4: ['ao-so-mi-local-brand-ontop', 'Shirts'],
        5: ['quan-local-brand', 'Shorts & Jeans'],
        6: ['vi-local-brand-gia-re', 'Wallets']
    }

    def parse(self, response):
        for key in self.types_dict.keys():
            if self.types_dict[key][0] in response.url:
                custom_type = key

        for quote in response.css('div.evo-product-block-item'):
            yield Request(urljoin('https://ontop.com.vn/', quote.css('h3.product-item-name a::attr(href)').get()), self.parse_item, meta={'type': custom_type})

    def parse_item(self, response):
        item = EcommerceCrawlerItem()

        def process_none(ele):
            return ele.strip() if ele is not None else ele
        def process_price(ele):
            ele = process_none(ele)
            if ele is None:
                return ele
            if ele == '':
                return None
            return int(ele[:-1].replace(".", ""))


        name = response.css('div.details-product h1.title-head b::text').get()
        name = process_none(name)
        price = response.css('span.product-price::text').get()
        price = process_price(price)
        old_price = response.css('del.product-price-old::text').get()
        old_price = process_price(old_price)
        images = response.css('div.fixs img::attr(data-image)').getall()
        # type 0: ao khoac, 1: ao thun, 2: hoodie/sweater, 3: phu kien, 4: ao so mi, 5: quan, 6: vi 

        item['id'] = str(uuid.uuid4())
        item['name'] = name 
        item['price'] = price
        item['old_price'] = old_price
        item['images'] = images
        item['type'] = response.meta.get('type')

        yield item