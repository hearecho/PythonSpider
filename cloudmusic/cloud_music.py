#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/4/6 11:12
# @Author  : hearecho
# @Site    : 
# @File    : cloud_music.py
# @Software: PyCharm
'''

https://music.163.com/weapi/v1/resource/comments/R_SO_4_608290?csrf_token=?
URL	https://music.163.com/weapi/login/token/refresh?csrf_token=11a6b7bfce7b88beab6ff720a092b9bc
'''
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import re
from bs4 import BeautifulSoup
import lxml


browser = webdriver.Chrome()

wait = WebDriverWait(browser, 5)

def excerpt(s):
    browser.get('https://search.51job.com/list/090200,000000,0000,00,9,99,python,2,1.html?lang=c&stype=&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99&companysize=99&providesalary=99&lonlat=0%2C0&radius=-1&ord_field=0&confirmdate=9&fromType=&dibiaoid=0&address=&line=&specialarea=00&from=&welfare=')
    browser.find_element_by_xpath('//*[@id="resultList"]/div[' + s + ']/p/span/a').click()
    resolve()

def resolve():
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '.tCompanyPage')))
    html = browser.page_source
    soup = BeautifulSoup(html, 'lxml')
    items = soup.select()
    for item in items:
        product = {
            '公司福利': item.select('div.tCompany_main > div:nth-child(1)').get_text().strip()
        }
        print(product)


def main():
    s = '4'
    while int(s) <= 53:
        excerpt(s)

        r = int(s) + 1
        rs = '%d' % r
        s = rs

def Spider():
    browser.get('https://search.51job.com/list/090200,000000,0000,00,9,99,python,2,1.html?lang=c&stype=&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99'
                '&companysize=99&providesalary=99&lonlat=0%2C0&radius=-1&ord_field=0&confirmdate=9&fromType=&dibiaoid=0&address=&line=&specialarea=00&from=&welfare=')
    offices = browser.find_elements_by_xpath("//p[@class='t1 ']//span//a")
    # for office in offices:
    #     office.click()
    parse(offices[0])

    pass
def parse(office):
    office.click()
    browser.switch_to.window(browser.window_handles[1])
    print(browser.title)
    elment = browser.find_elements_by_xpath("//div[@class='bmsg job_msg inbox']")


    pass
if __name__ == '__main__':
    Spider()

