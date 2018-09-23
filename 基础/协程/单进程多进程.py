#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/7/30 16:29
# @Author  : hearecho
# @Site    : 
# @File    : 单进程多进程.py
# @Software: PyCharm

'''
    测试单进程和多进程时间
    1.单进程就是最简单的程序
    2.多进程 由于在windows 平台的缘故 所以使用跨平台的 多进程库 multiprocessing
'''

import requests
import time
import multiprocessing


# 单进程
def request():
    start = time.time()
    for _ in range(100):
        url = 'http://www.baidu.com'
        print('Waiting for', url)
        result = requests.get(url).status_code
        print('Get response from', url, 'Result:', result)
    end = time.time()
    print('Single Cost time:', end - start)

#多进程
def request1(_):

    url = 'http://www.baidu.com'
    print('Waiting for', url)
    result = requests.get(url).status_code
    print('Get response from', url, 'Result:', result)

def multirequest():
    start = time.time()
    # 得到 cpu核心数
    cpu_count = multiprocessing.cpu_count()
    print('Cpu count:', cpu_count)

    #创建 线程池大小 为 cpu核心数
    pool = multiprocessing.Pool(cpu_count)
    pool.map(request1, range(100))

    end = time.time()
    print('Multi Cost time:', end - start)

if __name__ == "__main__":
    request()
    multirequest()



