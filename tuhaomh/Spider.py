#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/27 14:30
# @Author  : hearecho
# @Site    : 
# @File    : Spider.py
# @Software: PyCharm
'''
    @:param
        did:漫画的id
        sid:章节id
        iid:章节第几页 1 ==> 000.jpg
'''

import requests

if __name__ == '__main__':
    url = "https://www.tohomh.com/action/play/read?did=11016&sid=253&iid="
    for i in range(1,30):
        url_deal = url+str(i)
        r = requests.get(url_deal).json()
        Code = r["Code"]
        if Code == "":
            break
        print("https://manhua.wzlzs.com"+Code)