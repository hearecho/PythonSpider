#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/7/31 20:20
# @Author  : hearecho
# @Site    : 
# @File    : aioSpider.py
# @Software: PyCharm

import asyncio
import time
import aiohttp

#运用
async def getPage(client,url):
    async with client.get(url) as resp:
        return await resp.text()
# 写入文件
# save
def save(text, i):
    with open("test/{}.html".format(i), "w+") as f:
        f.write(text)

async def WriteFile(i):
    url = "http://www.baidu.com"
    async with aiohttp.ClientSession() as client:
        #挂起请求
        print("Witting for {}".format(i))
        text = await getPage(client,url)
        # print(text)
        # save(text[:200],i)
        print("{} Writed".format(i),"Result:",text[:10])


#主程序
def aio():
    tasks = [asyncio.ensure_future(WriteFile(i)) for i in range(5)]
    loop = asyncio.get_event_loop()
    loop.run_until_complete(asyncio.wait(tasks))


if __name__ == '__main__':
    now = lambda:time.time()
    start = now()
    aio()
    end = now()
    print("共耗时{}s".format(end-start))
    pass