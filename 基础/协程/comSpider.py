#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/7/31 20:57
# @Author  : hearecho
# @Site    : 
# @File    : comSpider.py
# @Software: PyCharm

import requests
import time

def save(text,i):
    with open("test/{}.html".format(i),"w+") as f:
        f.write(text)

if __name__ == '__main__':
    now = lambda : time.time()
    start = now()
    url = "http://www.baidu.com"
    for i in range(5):
        print("Witting for {}".format(i))
        text = requests.get(url).text[:200]
        # save(text,i)
        print("{} Writed".format(i), "Result:", text[:10])
    end = now()
    print("共耗时{}s".format(end - start))