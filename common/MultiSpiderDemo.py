#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/27 17:58
# @Author  : hearecho
# @Site    : 
# @File    : MultiSpiderDemo.py
# @Software: PyCharm
import requests
import threading,queue,time

_Data = []
FILE_LOCK = threading.Lock()
SHARE_Q = queue.Queue()
_WORKER_THREAD_NUM = 3

class MyThred(threading.Thread):
    def __init__(self,func):
        super(MyThred,self).__init__()
        self.func = func

    def run(self):
        self.func()


def worker():
    pass

