#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/9 10:41
# @Author  : hearecho
# @Site    : 
# @File    : getVideoInfo.py
# @Software: PyCharm
'''
    获取b站视频的信息
    http://api.bilibili.com/view?id=23478787&page=2&appkey=8e9fc618fbd41e28
    @:param id 视频的av号

    实现思路: 1.通过getVideoInfo获取到 cid  当然里面也含有很多其他的信息
'''

import requests
import json

'''
    获取视频封面 cid  等等信息
'''
def getVideoInfo(id,page=1):
    url = "http://api.bilibili.com/view?id={}&page={}&appkey=8e9fc618fbd41e28".format(id,page)
    r = requests.get(url)
    # r.encoding = r.apparent_encoding
    # print(r.encoding)
    # print(json.dumps(r.json(),indent=2,ensure_ascii=False))
    print(r.json()["cid"])
    return r.json()["cid"]
'''
    https://interface.bilibili.com/v2/playurl?cid=54403683&appkey=84956560bc028eb7&otype=json&type=&quality=16&qn=16&sign=f1b985ed01e8370fbbc237cfcb0a77c4
    获取视频链接
'''
def getVideoFlvUrl(cid):
    url = "https://interface.bilibili.com/v2/playurl?cid={}&appkey=84956560bc028eb7&otype=json&type=&quality=16&qn=16&sign=f1b985ed01e8370fbbc237cfcb0a77c4".format(cid)
    r = requests.get(url)
    print(r.status_code)
    # print(json.dumps(r.json(), indent=2, ensure_ascii=False))
    print(r.json()["durl"][0]["url"])
    return r.json()["durl"][0]["url"]

def getVideo(url):
    headers = {
        "Origin":"http://player.bilibili.com",
        "Referer":"http://player.bilibili.com/player.html?aid=31144005&cid=54403683&page=1",
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36",
    }
    r = requests.get(url,headers=headers)
    with open("test.flv","wb") as f:
        f.write(r.content)
if __name__ == '__main__':
    cid =  getVideoInfo(31144005,1)

    url = getVideoFlvUrl(cid)

    # getVideo(url)




