#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/7/30 10:23
# @Author  : hearecho
# @Site    : 
# @File    : 协程_4.py
# @Software: PyCharm
'''
    一、协程 在网络请求，IO操作 有很大的优势
    二、异步协程 要有挂起的操作  使用 await
        await 后面后面的对象必须是如下格式之一:
        1.一个原生 coroutine 对象。
        2.一个由 types.coroutine() 修饰的生成器，这个生成器可以返回 coroutine 对象。
        3.一个包含 __await 方法的对象返回的一个迭代器。
    三、实现网络请求异步 还需要 aiohttp 异步请求，不然时间消耗基本不变 pip install aiohtpp
        官方文档:https://aiohttp.readthedocs.io/
    本文件 做一次对比
    测试结果 相差 6倍左右
'''

import asyncio
import requests
import time
import aiohttp

# 使用aiohttp 实现异步请求
async def aioget(client,url):
    async with client.get(url) as response:
        return await response.json()

#存储程序
async def save(status,i):
    with open("test/{}.json".format(i), "w+",encoding='utf-8') as f:
        f.write(str(status))

#主函数
async def aiorequest(i):
    url = 'https://api.bilibili.com/x/player/pagelist?aid=' + str(i)
    print('Waiting for', url)
    async with aiohttp.ClientSession() as client:
        # 挂起请求 操作
        status = await aioget(client,url)
        #挂起写入文件的操作
        await save(status,i)
        # 不挂起 的速度 在运行将近100次的情况下  是 慢了0.3s  差别不大
        # with open("test/{}.json".format(i), "w+", encoding='utf-8') as f:
        #     f.write(str(status))
        #IO操作
        print('Get response from', url, "Json", status['code'])

# async 创建一个 async 对象
async def get(url):
    return requests.get(url).json()

async def request():
    url = "http://www.baidu.com"
    print('Waiting for', url)
    status = await get(url)
    print('Get response from', url,"Json",status)


#异步请求耗时
def TestAsync():
    start = time.time()

    tasks = [asyncio.ensure_future(aiorequest(i)) for i in range(27960015,27960100)]

    loop = asyncio.get_event_loop()
    loop.run_until_complete(asyncio.wait(tasks))

    end = time.time()
    print('Async Cost time:', end - start)
    return end - start

# 一般请求耗时
def TestCommon():
    start = time.time()
    urls = ['https://api.bilibili.com/x/player/pagelist?aid=' + str(i) for i in range(27960015,27960100)]
    for url in urls:
        print('Waiting for', url)
        status = requests.get(url).json()
        with open("test/{}.json".format(url.split("=")[1]),"w+",encoding='utf-8') as f:
            f.write(str(status))
        print('Get response from', url,"Json",status['code'])
    end = time.time()
    print('CommonReq Cost time:', end - start)
    return end - start

if __name__ == "__main__":
    AsyncTime = TestAsync()
    # CommonTime = TestCommon()
    # print("速度相差{}倍".format(CommonTime/AsyncTime))