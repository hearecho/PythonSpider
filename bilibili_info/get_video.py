#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/3/15 17:08
# @Author  : hearecho
# @Site    : 
# @File    : get_video.py
# @Software: PyCharm


# GET http://upos-hz-mirrorkodo.acgvideo.com/upgcxcode/40/41/33364140/33364140-1-16.mp4?e=ig8g5X10ugNcXBlqNCNEto8g5gNvNE3DN0B5tZlqNxTEto8BTrNvN05fqx6S5ahE9IMvXBvE2ENvNCImNEVEK9GVqJIwqa80WXIekXRE9IB5to8euxZM2rNcNbUVhwdVhoM1hwdVhwdVNCM=&platform=android&uipk=5&uipv=5&deadline=1521111492&gen=playurl&um_deadline=1521111492&rate=0&um_sign=330f5b2c5b238d50eb0abfdfd8fba983&dynamic=1&os=kodo&oi=974324397&upsig=132ee9269e27994c503d4dabf82ac05c HTTP/1.1
# User-Agent: Bilibili Freedoooooom/MarkII
# Connection: Close
# Host: upos-hz-mirrorkodo.acgvideo.com
# Accept-Encoding: gzip

import requests
headers = {
    'User-Agent':'Bilibili Freedoooooom/MarkII',
    'Connection':'Close',
    'Host':'upos-hz-mirrorkodo.acgvideo.com',
    'Accept-Encoding':'gzip'
}


def get_open(url):
    r = requests.get(url,headers=headers)

    # with open("test.mp4",'wb') as f:
    #     f.write(r.content)

    print(r.status_code)



if __name__ == "__main__":
    # url = "http://upos-hz-mirrorkodo.acgvideo.com/upgcxcode/40/41/33364140/33364140-1-16.mp4"
    url = "http://upos-hz-mirrorkodo.acgvideo.com/upgcxcode/40/41/33364140/33364140-1-16.mp4?" \
          "e=ig8g5X10ugNcXBlqNCNEto8g5gNvNE3DN0B5tZlqNxTEto8BTrNvN05fqx6S5ahE9IMvXBvE2ENvNCImNEVEK9GVqJIwqa80WXIekXRE9IB5to8euxZM2rNcNbUVhwdVhoM1hwdVhwdVNCM=" \
          "&platform=android&uipk=5&uipv=5&deadline=1521111492&gen=playurl&um_deadline=1521111492&rate=0&um_sign=330f5b2c5b238d50eb0abfdfd8fba983&dynamic=1" \
          "&os=kodo&oi=974324397&upsig=132ee9269e27994c503d4dabf82ac05c"
    get_open(url)