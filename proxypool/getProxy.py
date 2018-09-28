#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/28 14:31
# @Author  : hearecho
# @Site    : 
# @File    : getProxy.py
# @Software: PyCharm
from proxypool.testProxy import TestProxy
from proxypool.RedisSave import SaveData
from proxypool.crawler import Crawler
from proxypool.settings import *
import sys


class GetProxy(object):
    def __init__(self):
        self.redis = SaveData()
        self.crawler = Crawler()

    def is_over_threshold(self):
        """
        判断是否达到了代理池限制
        """
        if self.redis.count() >= POOL_UPPER_THRESHOLD:
            return True
        else:
            return False

    def run(self):
        log.logger.info("获取器开始执行")
        if not self.is_over_threshold():
            for callback_label in range(self.crawler.__CrawlFuncCount__):
                callback = self.crawler.__CrawlFunc__[callback_label]
                # 获取代理
                proxies = self.crawler.get_proxies(callback)
                sys.stdout.flush()
                for proxy in proxies:
                    self.redis.add(proxy)

if __name__ == '__main__':
    main = GetProxy()
    main.run()