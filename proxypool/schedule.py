#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/28 14:30
# @Author  : hearecho
# @Site    : 
# @File    : schedule.py
# @Software: PyCharm
import time
from multiprocessing import Process


from proxypool.getProxy import GetProxy
from proxypool.testProxy import TestProxy
from proxypool.RedisSave import SaveData
from proxypool.settings import *
from proxypool.app import app




class Schedule():
    def schedule_tester(self, cycle=TESTER_CYCLE):
        """
        定时测试代理
        """
        tester = TestProxy()
        while True:
            tester.run()
            time.sleep(cycle)

    def schedule_getter(self, cycle=GETTER_CYCLE):
        """
        定时获取代理
        """
        getter = GetProxy()
        while True:
            log.logger.info("开始抓取代理")
            getter.run()
            time.sleep(cycle)

    def schedule_api(self):
        app.run(API_HOST,API_PORT)

    def run(self):
        log.logger.info("代理池开始运行")
        if TESTER_ENABLED:
            tester_process = Process(target=self.schedule_tester)
            tester_process.start()

        if GETTER_ENABLED:
            getter_process = Process(target=self.schedule_getter)
            getter_process.start()

        if API_ENABLED:
            api_process = Process(target=self.schedule_api())
            api_process.start()


if __name__ == '__main__':
    run = Schedule()
    run.run()