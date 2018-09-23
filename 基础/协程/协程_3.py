#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/7/29 18:07
# @Author  : hearecho
# @Site    : 
# @File    : 协程_3.py
# @Software: PyCharm

# 给 task 绑定 回调方法
import asyncio
import requests

async def request():
    url = 'https://www.baidu.com'
    status = requests.get(url)
    return status

def callback(task):
    #接收参数 是task 对象
    print('Status:', task.result())
def TestCallBack():
    coroutine = request()
    # 定义一个 任务 转换对象
    task = asyncio.ensure_future(coroutine)
    task.add_done_callback(callback)
    print('Task:', task)
    # 定义事件循环,将任务注册
    loop = asyncio.get_event_loop()
    loop.run_until_complete(task)
    print('Task:', task)


def MultiTask():
    #创建了一个列表
    tasks = [asyncio.ensure_future(request()) for _ in range(5)]
    print('Tasks:', tasks)

    loop = asyncio.get_event_loop()
    # 列表首先传递给了 asyncio 的 wait() 方法
    # 发起 五个任务
    loop.run_until_complete(asyncio.wait(tasks))

    for task in tasks:
        print('Task Result:', task.result())
if __name__ == "__main__":
    TestCallBack()
    MultiTask()


'''
    结果:
    TestCallBack():
    Task: <Task pending coro=<request() running at F:/爬虫/spider/基础/协程/协程_3.py:13> cb=[callback() at F:/爬虫/spider/基础/协程/协程_3.py:18]>
    Status: <Response [200]>
    Task: <Task finished coro=<request() done, defined at F:/爬虫/spider/基础/协程/协程_3.py:13> result=<Response [200]>>
    
    MultiTask():
    Tasks: [<Task pending coro=<request() running at F:/爬虫/spider/基础/协程/协程_3.py:13>>, <Task pending coro=<request() running at F:/爬虫/spider/基础/协程/协程_3.py:13>>, <Task pending coro=<request() running at F:/爬虫/spider/基础/协程/协程_3.py:13>>, <Task pending coro=<request() running at F:/爬虫/spider/基础/协程/协程_3.py:13>>, <Task pending coro=<request() running at F:/爬虫/spider/基础/协程/协程_3.py:13>>]
    Task Result: <Response [200]>
    Task Result: <Response [200]>
    Task Result: <Response [200]>
    Task Result: <Response [200]>
    Task Result: <Response [200]>
'''