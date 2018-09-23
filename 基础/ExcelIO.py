#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/7/29 9:49
# @Author  : hearecho
# @Site    : 
# @File    : ExcelIO.py
# @Software: PyCharm

'''
    使用openpyxl对Execl进行读写
    https://openpyxl.readthedocs.io/en/stable/tutorial.html
'''
from openpyxl import Workbook




if __name__ == "__main__":
    wb = Workbook()

    ws = wb.active


    ws.title = "test"
    ws.sheet_properties.tabColor = "1072BA"

    # for sheet in wb:
    #     print(sheet.title)
    for i in range(1,101):
        for j in range(1,101):
            ws.cell(row=i,column =j,value=i*j)

    wb.save("test.xlsx")
    pass