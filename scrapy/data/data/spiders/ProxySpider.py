#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/24 12:49
# @Author  : hearecho
# @Site    : 
# @File    : ProxySpider.py
# @Software: PyCharm

'''
    获取免费代理,创建代理池
    url = http://www.xicidaili.com/nn
'''
from scrapy import Request,Spider

class ProxySpider(Spider):
    name = "proxy"

    allowed_domains = [
        "xicidaili.com"
    ]

    start_urls = [
        "http://www.xicidaili.com/nn/1",
        "http://www.xicidaili.com/nn/2",
        "http://www.xicidaili.com/nn/3",
    ]

    def parse(self, response):
        lists = response.css("#ip_list")
        pass