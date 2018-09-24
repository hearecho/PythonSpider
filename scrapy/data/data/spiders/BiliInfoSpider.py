#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/24 13:08
# @Author  : hearecho
# @Site    : 
# @File    : BiliInfoSpider.py
# @Software: PyCharm

from scrapy import Spider,FormRequest,Request
import json
from data.items import InfoItem
class BiliInfoSpider(Spider):
    name = "info"

    def start_requests(self):
        url = "https://space.bilibili.com/ajax/member/GetInfo"
        data = {
            "mid":"",
            "csrf":"578fcf3bca4387ff58c87f70040785e8",
        }
        for mid in range(1,10000):
            data["mid"] = str(mid)
            yield FormRequest(url=url,formdata=data,callback=self.parse)

    def parse(self, response):
        info = json.loads(response.text)
        if info["status"]:
            data = info["data"]
            try:
                item = InfoItem()
                item["timestamp"] = data["regtime"]
                item["mid"] = data["mid"]
                yield item
            except Exception as e:
                self.logger.error("出错"+str(repr(e)))