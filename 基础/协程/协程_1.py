#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/7/29 17:09
# @Author  : hearecho
# @Site    : 
# @File    : 协程_1.py
# @Software: PyCharm

# 最简单的协程
#
import asyncio

#定义一个协程
async  def exevute(x):
    print("Number:",x)


if __name__ == "__main__":
    # coroutine  是一个协程对象，不能直接运行
    coroutine = exevute(1)

    print('Coroutine:', coroutine)
    print('After calling execute')

    # 创建事件循环
    loop = asyncio.get_event_loop()
    #将协程注册在时间循环中，然后才会运行
    loop.run_until_complete(coroutine)
    print('After calling loop')

#运行结果 应该为:
'''
    Coroutine: <coroutine object exevute at 0x00000287B0077780>
    After calling execute
    Number: 1
    After calling loop 
    
'''