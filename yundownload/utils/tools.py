#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/18 19:18
# @Author  : hearecho
# @Site    : 
# @File    : tools.py
# @Software: PyCharm
from urllib import parse
import json
# parse url encodeURIComponent
#编码
def encodeURIComponent(decode_str):
    encode_str = parse.quote(decode_str)
    return encode_str

#解码
def decodeURIComponent(encode_str):
    decode_str = parse.unquote(encode_str)
    return decode_str


#处理返回的json数据,并显示
def dealjson(text):
    # dealed_json = text.replace(" ","").replace("\'","\"")
    dealed_json = text.replace("\'", "\"")
    dealed_json = json.loads(dealed_json)
    # print(json.dumps(dealed_json,indent=2))
    return dealed_json


