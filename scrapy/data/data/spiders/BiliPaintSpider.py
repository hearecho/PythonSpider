#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/23 22:06
# @Author  : hearecho
# @Site    : 
# @File    : BiliPaintSpider.py
# @Software: PyCharm
import scrapy
from data.items import BiliItem
import json
from urllib.parse import urlencode

class BiliSpider(scrapy.Spider):
    name = "bili"
    MAX_PAGE = 100
    def start_requests(self):
        data = {"page_num":{},"page_size":20}
        baseUrl = "https://api.vc.bilibili.com/link_draw/v2/Doc/list?category=all&type=hot&"
        for page in range(0,self.MAX_PAGE+1):
            data["page_num"] = page
            params = urlencode(data)
            url = baseUrl+params
            yield scrapy.Request(url=url,callback=self.parse)


    def parse(self, response):
        data = json.loads(response.text)
        for item in data.get("data").get("items"):
            pictures = item.get("item").get("pictures")
            for picture in pictures:
                img = BiliItem()
                img["url"] = picture.get("img_src")
                img["size"] = picture.get("img_size")
                yield img


