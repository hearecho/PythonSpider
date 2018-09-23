#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/2 10:14
# @Author  : hearecho
# @Site    : 
# @File    : 多线程.py
# @Software: PyCharm

'''
    Python 中，进行多线程编程的模块有两个：thread 和 threading。
    其中，thread 是低级模块，threading 是高级模块，对 thread 进行了封装

'''
from threading import Thread,current_thread

def thread_test(name):
    print("thread {} is running...".format(current_thread().name))
    print("hello",name)
    print("thread {} is endded".format(current_thread().name))


if __name__ == '__main__':
    print("thread {} is running...".format(current_thread().name))
    print("helloWorld")
    # 创建一个线程
    t= Thread(target=thread_test,args=("test",),name="TestThread")
    # 执行线程
    t.start()
    #等到线程终止
    print("Before join() Thread {} Alive: {}".format(t.name,t.is_alive()))
    # join函数使得主线程等到子线程结束时才退出。
    t.join()
    print("After join() Thread {} Alive: {}".format(t.name, t.is_alive()))
    # current_thread 用于返回当前线程的实例。
    print("thread {} is endded".format(current_thread().name))
