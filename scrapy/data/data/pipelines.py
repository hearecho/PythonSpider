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
from scrapy import Request
from scrapy.pipelines.images import ImagesPipeline
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


'''
    自定义图片Pipelies
'''
class CustomImagesPipeline(ImagesPipeline):
    def file_path(self, request, response=None, info=None):
        url = request.url
        #https://i0.hdslb.com/bfs/album/67cf33ca7fbc2c34ce52fedf5f998abb34b05159.jpg
        file_name = url.split("/")[-1]
        return file_name

    def item_completed(self, results, item, info):
        image_paths = [x['path'] for ok,x in results if ok]
        if not image_paths:
            raise DropItem('Image Downloaded Failed')
        return item

    def get_media_requests(self, item, info):
        yield Request(item['url'])








