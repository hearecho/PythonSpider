#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/24 16:04
# @Author  : hearecho
# @Site    : 
# @File    : 抖音.py
# @Software: PyCharm
import math
import time
import execjs
url = "https://aweme.snssdk.com/aweme/v1/feed/?" \
      "type=0&max_cursor=0&min_cursor=0&count=6&volume=0.0&pull_type=0&need_relieve_aweme=0&filter_warn=0" \
      "&req_from=enter_auto&is_cold_start=0&ts=1535099318&app_type=normal&manifest_version_code=250&_rticket=1535099317712" \
      "&ac=wifi&device_id=56634018884&iid=41972475438&os_version=8.1.0" \
      "&channel=xiaomi&version_code=250&device_type=Redmi%20Note%205&language=zh" \
      "&resolution=1080*2030&openudid=b10e55ee15fb1adc&update_version_code=2502" \
      "&app_name=aweme&version_name=2.5.0&os_api=27&device_brand=xiaomi&ssmix=a&" \
      "device_platform=android&dpi=440&aid=1128&" \
      "as=a1a5bca7263b9bd18f4355&cp=c4b0b05b66f27410e1KiSm&" \
      "mas=01b76cbd22c941eef90bae54d176cbe2baacaccc2c661c8c26469c"
user_url = "https://api.amemv.com/aweme/v1/user/?user_id=70089069883&aid=1128&as=a1051eb76ef57ba91f4355&cp=e25eb754e1f5799fe1IiQq&mas=017c3750ee4f51018b78a037e542fe9edeacaccc2c668c9c8646ec"

if __name__ == '__main__':
    t = math.floor((time.time()*1000/ 1e3))
    e = hex(t).upper()
    print(e)

    pass