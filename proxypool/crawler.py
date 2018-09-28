#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/28 13:24
# @Author  : hearecho
# @Site    : 
# @File    : crawler.py
# @Software: PyCharm
from lxml import etree

from .LogHnadler import Logger
from .utils import get_page
from proxypool.settings import log

class ProxyMetaclass(type):
    def __new__(cls, name, bases, attrs):
        '''
        获取类中所有的方法
        :param name:
        :param bases:
        :param attrs:
        :return:
        '''
        count = 0
        attrs['__CrawlFunc__'] = []
        for k, v in attrs.items():
            if 'crawl_' in k:
                attrs['__CrawlFunc__'].append(k)
                count += 1
        attrs['__CrawlFuncCount__'] = count
        return type.__new__(cls, name, bases, attrs)


class Crawler(object, metaclass=ProxyMetaclass):
    def get_proxies(self, callback):
        proxies = []
        for proxy in eval("self.{}()".format(callback)):
            log.logger.info("成功获取到代理:\t"+str(proxy))
            proxies.append(proxy)
        return proxies


    def crawl_daili66(self, page_count=3):
        """
        获取代理66
        :param page_count: 页码
        :return: 代理
        """
        start_url = 'http://www.66ip.cn/{}.html'
        urls = [start_url.format(page) for page in range(1, page_count + 1)]
        for url in urls:
            log.logger.info("Crawling\t"+url)
            html = etree.HTML(get_page(url))
            if len(html):
                trs = html.xpath("//div[@align='center']//table//tr")
                del trs[0]
                for tr in trs:
                    ip = tr.xpath("td[1]/text()")[0]
                    port = tr.xpath("td[2]/text()")[0]

                    yield ':'.join([ip, port])

'''
http://www.proxy360.cn/Region/China
http://www.goubanjia.com/free/gngn/index.shtml
http://www.ip181.com/
http://www.ip3366.net/free/?stype=1&page={}
http://www.kxdaili.com/ipList/{}.html#ip
https://premproxy.com/proxy-by-country/{}.htm
http://www.xroxy.com/proxylist.php?country={}
http://www.kuaidaili.com/free/inha/{}/
http://www.ip3366.net/?stype=1&page={}
http://www.89ip.cn/apijk/?&tqsl=1000&sxa=&sxb=&tta=&ports=&ktip=&cf=1
http://www.data5u.com/free/gngn/index.shtml
http://www.iphai.com/'
'''