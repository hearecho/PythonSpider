# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class DataItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass

class testItem(scrapy.Item):
    tags = scrapy.Field()
    author = scrapy.Field()
    detail = scrapy.Field()
    quote = scrapy.Field()

class BiliItem(scrapy.Item):
    url = scrapy.Field()
    size = scrapy.Field()
    title = scrapy.Field()

class ProxyItem(scrapy.Item):
    ip = scrapy.Field()
    port = scrapy.Field()
    protocol = scrapy.Field()
    connectTime = scrapy.Field()


class InfoItem(scrapy.Item):
    timestamp = scrapy.Field()
    mid = scrapy.Field()
