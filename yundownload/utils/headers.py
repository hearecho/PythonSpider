#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/18 19:23
# @Author  : hearecho
# @Site    : 
# @File    : headers.py
# @Software: PyCharm

#设置获取列表的请求头
def setheaders():
    headers = {
        'Host':'pan.baidu.com',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
        'Referer':'https://pan.baidu.com/disk/home?',
        'Cookie':"BAIDUID=04C8CEAA74D195A5903BA518B470E9AA:FG=1; "
                 # "pan_login_way=1; PANWEB=1; "
                 # "Hm_lvt_7a3960b6f067eb0085b7f96ff5e660b0=1534992157; "
                 # "cflag=15%3A3; "
                 # "Hm_lpvt_7a3960b6f067eb0085b7f96ff5e660b0=1534997313; "
                 "BDUSS=TZuZjY0dHJmZ3U4R082TWszRElTR0dXfnhCZHdCM05MNVFHTFZ3dUd4aWJ3NlZiQVFBQUFBJCQAAAAAAAAAAAEAAADbbss6xq~B99fPyasAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJs2flubNn5bd; SCRC=6712431d5c6b71b7ebe3b70709dec34b; "
                 # "STOKEN=95d8748c126a41447a475026b0e9aeeb2c53fea402aa825358dcefd18e7eed31; "
                 "PANPSC=10277142913582477364%3AWaz2A%2F7j1vW6%2BfV%2B0DTz8en90oj%2BY%2FIsBxx%2F%2BBJrjH9Gm5pcivL1%2Fdyo1iLbDekOSrvFsiwiy%2BF5NqOMJJaHcC%2B3V%2FXnuPv5wW3bk5Zv5j7XG9GmBZpeFcwcVuRerGYPP9MHvdN9SJgfRfpJ%2B0t2lnIZCBNQUjeRePth2nAgN8k7LpLTMOoLpW1RXDZJ9BU%2BVb5kimJikYSkEbsIcVb99A%3D%3D",
    }
    #从cookies备份中 取出cookies
    with open("../login/cookies.bg","r") as f:
        cookies = f.readlines()
        cookie = cookies[-1].strip("\n")
        headers["Cookie"] = cookie
        # print(cookie)
    print(headers)
    return headers

if __name__ == '__main__':
    setheaders()