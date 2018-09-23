#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/18 19:23
# @Author  : hearecho
# @Site    : 
# @File    : get_list.py
# @Software: PyCharm

import requests
from spider.yundownload.utils import headers,tools
import json
import time


def get_list():
    path = input("请输入路径:/*")
    encode_path = tools.encodeURIComponent(path)
    url = 'http://pan.baidu.com/api/list?dir={}' \
          '&num=100&order=time&desc=0&clienttype=0' \
          '&showempty=0&web=1&page=1'.format(encode_path)
    resp = requests.get(url,headers=headers.setheaders())
    print(resp.apparent_encoding)
    resp.encoding = resp.apparent_encoding
    resu_json = resp.json()
    print(json.dumps(resu_json,indent=2))

def get_item(fs_id):
    timestamp = int(time.time())
    fidlist = tools.encodeURIComponent("[{}]".format(fs_id))
    url = "http://pan.baidu.com/api/download?" \
          "sign=IVB6GC7Y665X6pNpiZz293vavj6qLsrdOFQtaJ8z4RNAUXReoQrjZA==" \
          "&timestamp={}" \
          "&fidlist={}".format(timestamp,fidlist)
    resp = requests.get(url,headers=headers.setheaders())
    resu_json = resp.json()
    print(json.dumps(resu_json, indent=2))
    print(url)


if __name__ == '__main__':
    get_list()