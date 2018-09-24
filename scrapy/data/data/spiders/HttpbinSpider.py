#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/23 21:00
# @Author  : hearecho
# @Site    : 
# @File    : HttpbinSpider.py
# @Software: PyCharm
import scrapy

class HttpbinSpider(scrapy.Spider):

    name = "httpbin"

    allowed_domains = [
        "httpbin.org"
    ]

    start_urls = [
        "http://www.httpbin.org/get"
    ]

    def parse(self, response):
        self.logger.debug(response.text)
