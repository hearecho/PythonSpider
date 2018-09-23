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


class mingyan(scrapy.Spider):  # 需要继承scrapy.Spider类


    name = "mingyan"  # 定义蜘蛛名

    # 直接定义starturls  不用重写 startrequests方法 但是解析方法名字必须位 parse
    # start_urls=[
    #     'http://lab.scrapyd.cn/page/1/',
    #      'http://lab.scrapyd.cn/page/2/',
    # ]
    #
    def start_requests(self):  # 由此方法通过下面链接爬取页面

        # 定义爬取的链接
        urls = [
            'http://lab.scrapyd.cn/page/1/',
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)  # 爬取到的页面如何处理？提交给parse方法处理


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
            tags = minyan.css(".tags > .tag::text").extract()
            detail = minyan.css("span > a::attr(href)").extract_first()
            quote = minyan.css(".text::text").extract_first()
            author = ",".join(tags)
            if len(tags) == 0:
                tags = ["无名氏"]
            filename = "{}.txt".format(tags[0])
            with open(filename,"a+") as f:
                f.write(quote+"\n")
                f.write("详情:"+detail+"\n")
                f.write("标签:"+author+"\n"+"*********"+"\n")

        # page = response.url.split("/")[-2]  # 根据上面的链接提取分页,如：/page/1/，提取到的就是：1
        # filename = 'mingyan-%s.html' % page  # 拼接文件名，如果是第一页，最终文件名便是：mingyan-1.html
        # with open(filename, 'wb') as f:  # python文件操作，不多说了；
        #     f.write(response.body)  # 刚才下载的页面去哪里了？response.body就代表了刚才下载的页面！
        # self.log('保存文件: %s' % filename)  # 打个日志

