#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/27 14:56
# @Author  : hearecho
# @Site    : 
# @File    : get_did.py
# @Software: PyCharm

import requests
from requests_html import HTMLSession

'''

    did in html;
    使用bs验证
'''
headers = {
    'User-Agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
}
if __name__ == '__main__':
    req = HTMLSession()
    req.headers.update(headers)
    name = input("请输入搜索漫画的英文拼音:")
    resp = req.get("https://www.tohomh.com/{}/".format(name))
    links = resp.html.xpath("//ul[@id='detail-list-select-1']//li/a/@href")
    print(len(links))
    for link in links:
        print(link)
    # for link in resp.html.links:
    #     print(link)