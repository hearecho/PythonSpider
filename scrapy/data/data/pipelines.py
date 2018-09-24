# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html

'''
    数据管道清理，只需要实现process_item方法
    class DataPipeline(object):
        def process_item(self, item, spider):
            return item
'''
from scrapy.exceptions import DropItem
import pymongo
'''
处理信息用的管道
'''
class FilterPipeline(object):

    def __init__(self):
        self.key = "艺术"

    # 过滤 艺术
    def process_time(self,item,spider):
        if self.key not in item["tags"]:
            return item
        else:
            return DropItem(item)

'''
    存储到 mongodb
'''

class SaveMongoPipeline(object):
    def __init__(self,mongo_uri,mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls,crawler):
        return cls(
            mongo_uri=crawler.settings.get("MONGO_URI"),
            mongo_db=crawler.settings.get("MONGO_DB")
        )

    def open_spider(self,spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def process_item(self,item,spider):
        name = item.__class__.__name__
        self.db[name].insert(dict(item))
        return item

    def close_spider(self,spider):
        self.client.close()





