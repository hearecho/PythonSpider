#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/2 17:14
# @Author  : hearecho
# @Site    : 
# @File    : TestPlot.py
# @Software: PyCharm

import matplotlib.pyplot as plt

x = [i for i in range(5)]
y = [i**2 for i in range(5)]

plt.bar(range(len(y)),y)
plt.show()