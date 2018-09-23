#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/27 17:20
# @Author  : hearecho
# @Site    : 
# @File    : QueueStudy.py
# @Software: PyCharm

'''
    Python队列学习:
    python queue模块有三种队列:
    1、python queue模块的FIFO队列先进先出。
    2、LIFO类似于堆。即先进后出。
    3、还有一种是优先级队列级别越低越先出来。

    针对这三种队列分别有三个构造函数:
    1、class Queue.Queue(maxsize) FIFO
    2、class Queue.LifoQueue(maxsize) LIFO
    3、class Queue.PriorityQueue(maxsize) 优先级队列

    介绍一下此包中的常用方法:

    Queue.qsize() 返回队列的大小
    Queue.empty() 如果队列为空，返回True,反之False
    Queue.full() 如果队列满了，返回True,反之False
    Queue.full 与 maxsize 大小对应
    Queue.get([block[, timeout]])获取队列，timeout等待时间
    Queue.get_nowait() 相当Queue.get(False)
    非阻塞 Queue.put(item) 写入队列，timeout等待时间
    Queue.put_nowait(item) 相当Queue.put(item, False)
    Queue.task_done() 在完成一项工作之后，Queue.task_done()函数向任务已经完成的队列发送一个信号
    Queue.join() 实际上意味着等到队列为空，再执行别的操作

'''

import queue

import threading
import time
import random

q = queue.Queue()
NUM_WORKERS = 3

def doJob(job, worktype):
    time.sleep(random.random() * 3)
    print("doing",job," worktype ",worktype)

class MyThread(threading.Thread):

    def __init__(self,input,worktype):
        self._jobq = input
        self._work_type = worktype
        threading.Thread.__init__(self)

    def run(self):
        while True:
            if self._jobq.qsize() >0:
                self._process_job(self._jobq.get(),self._work_type)
            else:
                break

    def _process_job(self, job, worktype):
        doJob(job, worktype)


if __name__ == '__main__':
    print("begain*****")
    for i in range(NUM_WORKERS*2):
        q.put(i)
    print("job qsize",q.qsize())

    for x in range(NUM_WORKERS):
        MyThread(q,x).start()