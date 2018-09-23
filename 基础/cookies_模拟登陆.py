#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/2/3 13:02
# @Author  : hearecho
# @Site    : 
# @File    : cookies_模拟登陆.py
# @Software: PyCharm

#目标学校教务处

import requests

s = requests.Session()
# http://sso.jwc.whut.edu.cn/Certification//login.do
data = {
    'userName':'0121608920212',
    'systemld':'',
    'type':'',
    "password":'',
    'xmlmsg':'',
}

def keep_session(data):
    url = "http://sso.jwc.whut.edu.cn/Certification//login.do"
    r = s.post(url,data=data)

    print(r.headers)
    print(r.cookies)
    print(r.text)

if __name__ == "__main__":
    data['password'] = input("请输入密码:")

    keep_session(data)
    r = s.get("http://202.114.90.180/Score/")
    print(r.status_code)
    # print(r.cookies)
    print(r.headers)
    print(r.text)