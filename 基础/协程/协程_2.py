#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/7/29 17:32
# @Author  : hearecho
# @Site    : 
# @File    : 协程_2.py
# @Software: PyCharm

'''
    当我们将 coroutine 对象传递给 run_until_complete() 方法的时候，
    实际上它进行了一个操作就是将 coroutine 封装成了 task 对象
'''

import asyncio


# 定义一个协程
async def exevute(x):
    print("Number:", x)
    return x


if __name__ == "__main__":
    # coroutine  是一个协程对象，不能直接运行
    coroutine = exevute(1)


    print('Coroutine:', coroutine)
    print('After calling execute')

    # 创建事件循环
    loop = asyncio.get_event_loop()
    #创建 task  将 coroutine 对象转化为了 task 对象
    task = loop.create_task(coroutine)
    #此时任务启动
    print('Task:', task)
    # 将任务 注册到 事件循环中
    loop.run_until_complete(task)
    #此时 任务结束
    print('Task:', task)
    print('After calling loop')



# 运行结果 应该为:
'''
    After calling execute
    Task: <Task pending coro=<exevute() running at F:/爬虫/spider/基础/协程/协程_2.py:18>>
    Number: 1
    Task: <Task finished coro=<exevute() done, defined at F:/爬虫/spider/基础/协程/协程_2.py:18> result=1>
    After calling loop 

'''