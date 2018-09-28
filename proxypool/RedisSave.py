#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/9/28 13:47
# @Author  : hearecho
# @Site    : 
# @File    : RedisSave.py
# @Software: PyCharm
import redis
from proxypool.settings import REDIS_HOST, REDIS_PORT, REDIS_PASSWORD, REDIS_KEY
from proxypool.settings import MAX_SCORE, MIN_SCORE, INITIAL_SCORE
from random import choice
import re

'''
    储存代理到redis数据库
'''
class SaveData(object):
    def __init__(self,host=REDIS_HOST, port=REDIS_PORT):
        self.db = redis.StrictRedis(host=host,port=port)
        pass

    def add(self,proxy,score=INITIAL_SCORE):
        if not re.match('\d+\.\d+\.\d+\.\d+\:\d+', proxy):
            print('illegal proxy',str(proxy),'del')
            return
        if not self.db.zscore(REDIS_KEY, proxy):
            return self.db.zadd(REDIS_KEY, score, proxy)

    def random(self):
        '''
        随机获取代理
        :return:
        '''
        result = self.db.zrangebyscore(REDIS_KEY, MAX_SCORE, MAX_SCORE)
        if len(result):
            return choice(result)
        else:
            result = self.db.zrevrange(REDIS_KEY, 0, 50)
            if len(result):
                return choice(result)

    def decrease(self, proxy):
        """
        代理值减一分，小于最小值则删除
        :param proxy: 代理
        :return: 修改后的代理分数
        """
        score = self.db.zscore(REDIS_KEY, proxy)
        if score and score > MIN_SCORE:
            print('代理', proxy, '当前分数', score, '减1')
            return self.db.zincrby(REDIS_KEY, proxy, -1)
        else:
            print('代理', proxy, '当前分数', score, '移除')
            return self.db.zrem(REDIS_KEY, proxy)

    def exists(self, proxy):
        """
        判断是否存在
        :param proxy: 代理
        :return: 是否存在
        """
        return not self.db.zscore(REDIS_KEY, proxy) == None

    def max(self, proxy):
        """
        将代理设置为MAX_SCORE
        :param proxy: 代理
        :return: 设置结果
        """
        print('代理', proxy, '可用，设置为', MAX_SCORE)
        return self.db.zadd(REDIS_KEY, MAX_SCORE, proxy)

    def count(self):
        """
        获取数量
        :return: 数量
        """
        return self.db.zcard(REDIS_KEY)

    def all(self):
        """
        获取全部代理
        :return: 全部代理列表
        """
        return self.db.zrangebyscore(REDIS_KEY, MIN_SCORE, MAX_SCORE)

    def batch(self, start, stop):
        """
        批量获取
        :param start: 开始索引
        :param stop: 结束索引
        :return: 代理列表
        """
        return self.db.zrevrange(REDIS_KEY, start, stop - 1)


if __name__ == '__main__':
    conn = SaveData()
    result = conn.batch(1,10)
    print(result)