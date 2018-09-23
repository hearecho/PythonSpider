#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/22 12:21
# @Author  : hearecho
# @Site    : 
# @File    : test.py
# @Software: PyCharm
from spider.yundownload.login import login_demo

if __name__ == '__main__':
    login = login_demo.login()
    login.test()