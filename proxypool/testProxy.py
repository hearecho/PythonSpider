#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/28 14:20
# @Author  : hearecho
# @Site    : 
# @File    : testProxy.py
# @Software: PyCharm

import asyncio
import aiohttp
import time
import sys


from proxypool.RedisSave import SaveData
from proxypool.settings import *


class TestProxy(object):
    '''

    '''
    def __init__(self):
        self.redis = SaveData()

    async def test_single_proxy(self, proxy):
        """
        测试单个代理,使用异步aiohttp  进行请求，加快
        :param proxy:
        :return:
        """
        conn = aiohttp.TCPConnector(verify_ssl=False)
        async with aiohttp.ClientSession(connector=conn) as session:
            try:
                if isinstance(proxy, bytes):
                    proxy = proxy.decode('utf-8')
                real_proxy = 'http://' + proxy
                # print('正在测试', proxy)
                log.logger.info('正在测试:\t'+str(proxy))
                async with session.get(TEST_URL, proxy=real_proxy, timeout=5, allow_redirects=False) as response:
                    if response.status in VALID_STATUS_CODES:
                        self.redis.max(proxy)
                        # print('代理可用', proxy)
                        log.logger.info('代理可用\t'+str(proxy))
                    else:
                        self.redis.decrease(proxy)
                        log.logger.info('请求响应码不合法 \t'+str(response.status)+'IP:\t'+str(proxy))
                        # print('请求响应码不合法 ', response.status, 'IP', proxy)
            except Exception as e:
                self.redis.decrease(proxy)
                # print('代理请求失败', proxy)
                log.logger.error('代理请求失败\t'+str(proxy))

    def run(self):
        """
        测试主函数
        :return:
        """
        # print('测试器开始运行')
        log.logger.info('测试器开始运行')
        try:
            count = self.redis.count()
            # print('当前剩余', count, '个代理')
            log.logger.info('当前剩余'+str(count)+'个代理')
            for i in range(0, count, BATCH_TEST_SIZE):
                start = i
                stop = min(i + BATCH_TEST_SIZE, count)
                # print('正在测试第', start + 1, '-', stop, '个代理')
                log.logger.info('正在测试第'+str(start + 1)+ '-'+str(stop)+'个代理')
                test_proxies = self.redis.batch(start, stop)
                loop = asyncio.get_event_loop()
                tasks = [self.test_single_proxy(proxy) for proxy in test_proxies]
                loop.run_until_complete(asyncio.wait(tasks))
                sys.stdout.flush()
                time.sleep(5)
        except Exception as e:
            # print('测试器发生错误', e.args)
            log.logger.error('测试器发生错误'+str(e.args))