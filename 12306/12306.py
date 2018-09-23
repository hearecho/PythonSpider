#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/2/25 13:24
# @Author  : hearecho
# @Site    : 
# @File    : 12306.py
# @Software: PyCharm

#第一张图像素范围 [10~60][20-70]
#第二张图 [80-120][20-70]
#.3 [160-200][20-70]
#4 [230-280][20-70]
#5  [10~60][100-130]
#6  [80-120][100-130]
# [160-200][100-130]
# [230-280][100-130]

# 验证码图片地址 https://kyfw.12306.cn/passport/captcha/captcha-image?login_site=E&module=login&rand=sjrand
# 验证验证码的地址 "https://kyfw.12306.cn/passport/captcha/captcha-check"
import requests,os,json
cap_dist = {
    '1':'30,50,',
    '2':'100,50,',
    '3':'180,50,',
    '4':'250,50,',
    '5':'30,120,',
    '6':'100,120,',
    '7':'180,120,',
    '8':'240,120,',
}
header = {
    "Content-Type":"application/x-www-form-urlencoded; charset=utf-8",
    'X-Requested-With':'xmlHttpRequest',
    'Host':'kyfw.12306.cn',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0',
}
s = requests.Session()
s.headers.update(header)
def get_cap():
    r = s.get("https://kyfw.12306.cn/passport/captcha/captcha-image?login_site=E&module=login&rand=sjrand")
    with open('cap.png', 'wb') as f:
        f.write(r.content)
def ju_cap(value):
    data = {
        'answer':value,
        'login_site':'E',
        'rand':' sjrand',
    }
    r = s.post("https://kyfw.12306.cn/passport/captcha/captcha-check",data=data)
    # {'result_message': '验证码校验成功', 'result_code': '4'}
    return r.json()
def ju_username():
    data = {
        'appid':'otn',
        'username':'',
        'password':'',
    }
    data['username'] = input("请输入你的账号:")
    data['password'] = input("请输入你的密码:")
    r = s.post("https://kyfw.12306.cn/passport/web/login",data=data)
    print(r.text)

def login():
    data = {
        '_json-att':'',
    }

    r = s.post("https://kyfw.12306.cn/otn/login/userLogin",data=data)
    # print(r.text)
def uamtk():
    data = {
        'appid':'otn',
    }
    r = s.post("https://kyfw.12306.cn/passport/web/auth/uamtk",data=data)
    return r.json()

def uamtkclient(tk):
    data = {
        'tk':tk,
    }

    r = s.post("https://kyfw.12306.cn/otn/uamauthclient",data=data)
    print(r.text)


def get_leftticket():
    # https://kyfw.12306.cn/otn/leftTicket/init post提交
    data = {
        '_json_att':'',
        'back_train_date':'',
        'flag':'dc', #单程票还是往返票 wf
        'leftTicketDTO.from_station_name':'',
        'leftTicketDTO.to_station_name':'',
        'leftTicketDTO.train_date':'',
        'purpose_code':'', #    ADULT  or 0X00
    }

    r = s.post('https://kyfw.12306.cn/otn/leftTicket/init',data=data)
    print(r.text)

if __name__ == "__main__":
    get_cap()
    # os.open('cap.png',os.O_RDONLY)
    print("请选出图片的序号:")
    value_cap = ''
    for i in input():
        value_cap += cap_dist.get(i, '')
    cap = ju_cap(value_cap)

    while(True):
        if cap['result_code'] == str(4):
            print("验证成功")
            break
        else:
            print(cap['result_message'])
            get_cap()
            print("请选出图片的序号:")
            value_cap = ''
            for i in input():
                value_cap += cap_dist.get(i, '')
            cap = ju_cap(value_cap)

    # print(cap['result_code'])
    ju_username()
    login()
    tk = uamtk()
    tk = tk['newapptk']
    uamtkclient(tk)
    get_leftticket()
    # r = s.get("https://kyfw.12306.cn/otn/index/initMy12306")
    # print(r.text)