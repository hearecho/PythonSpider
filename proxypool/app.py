#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/28 16:14
# @Author  : hearecho
# @Site    : 
# @File    : app.py
# @Software: PyCharm
'''
    使用轻量级的Flask
    实现 随机获取代理
'''

from flask import Flask,g
from proxypool.RedisSave import SaveData

__all__ = ["app"]
app = Flask(__name__)

def get_conn():
    if not hasattr(g,"redis"):
        g.redis = SaveData()

    return g.redis

@app.route("/random")
def get_proxy():
    conn = get_conn()
    return conn.random()

if __name__ == '__main__':
    app.run()