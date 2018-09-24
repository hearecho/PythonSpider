#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/23 9:02
# @Author  : hearecho
# @Site    : 
# @File    : testSpider.py
# @Software: PyCharm

'''
    testSpiser
    @url: http://lab.scrapyd.cn

'''
import scrapy
from data.items import testItem

class mingyan(scrapy.Spider):  # 需要继承scrapy.Spider类


    name = "mingyan"  # 定义蜘蛛名
    allowed_domains = ['lab.scrapyd.cn']
    # 直接定义starturls  不用重写 startrequests方法 但是解析方法名字必须位 parse
    start_urls=[
        'http://lab.scrapyd.cn/page/1/',
    ]

    # def start_requests(self):  # 由此方法通过下面链接爬取页面
    #
    #     # 定义爬取的链接
    #     urls = [
    #         'http://lab.scrapyd.cn/page/1/',
    #     ]
    #     for url in urls:
    #         yield scrapy.Request(url=url, callback=self.parse)  # 爬取到的页面如何处理？提交给parse方法处理


    def parse(self, response):
        '''
        start_requests已经爬取到页面，那如何提取我们想要的内容呢？那就可以在这个方法里面定义。
        这里的话，并木有定义，只是简单的把页面做了一个保存，并没有涉及提取我们想要的数据，后面会慢慢说到
        也就是用xpath、正则、或是css进行相应提取，这个例子就是让你看看scrapy运行的流程：
        1、定义链接；
        2、通过链接爬取（下载）页面；
        3、定义规则，然后提取数据；
        就是这么个流程，似不似很简单呀？
        '''

        minyans = response.css("div.quote")
        next_url = response.css("li.next > a::attr(href)").extract()

        if len(next_url) != 0:
            yield scrapy.Request(url=next_url[0],callback=self.parse)

        for minyan in minyans:
            item = testItem()
            item["tags"] = minyan.css(".tags > .tag::text").extract()
            item["detail"] = minyan.css("span > a::attr(href)").extract_first()
            item["quote"] = minyan.css(".text::text").extract_first()
            item["author"] = ",".join(item["tags"])

            yield item


