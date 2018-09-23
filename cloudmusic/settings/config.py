#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/18 16:18
# @Author  : hearecho
# @Site    : 
# @File    : config.py
# @Software: PyCharm

from datetime import datetime
import random
import hashlib
import base64
from cryptography.hazmat.primitives.ciphers import (
    Cipher, algorithms, modes
)
from cryptography.hazmat.backends import default_backend

#http://m10.music.126.net/20170818163020/2c1f83e520ebe83f7e3c5e6e923780c5/ymusic/0c7a/32ef/3c84/645cf5efdc3542728cbc98c5e7eee90c.mp3
headers = {
    'Host':'m10.music.126.net',
    'Referer':'https://music.163.com/',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
}

def aes(text, sec_key):
    backend = default_backend()
    pad = 16 - len(text) % 16
    text = text + pad * chr(pad)
    cipher = Cipher(
        algorithms.AES(sec_key.encode('utf-8')),
        modes.CBC(b'0102030405060708'),
        backend=backend
    )
    encryptor = cipher.encryptor()
    ciphertext = encryptor.update(text.encode('utf-8')) + encryptor.finalize()
    ciphertext = base64.b64encode(ciphertext)
    return ciphertext

#/20170818163020
def setTimeUrlPattern():
    time = datetime.now()
    strTime = time.strftime("%Y%m%d%H%M%S")
    # print(strTime)
    return strTime

#2c1f83e520ebe83f7e3c5e6e923780c5
def setScrect():
    m = hashlib.md5(str(random.randint(0,999)).encode('utf-8'))
    # print(m.hexdigest())
    return m.hexdigest()

def createParams(page=1):
    if page == 1:
        text = (
            '{rid:"", offset:"0", total:"true", limit:"20", csrf_token:""}'
        )
    else:
        offset = str((page-1)*20)
        text = (
            '{rid:"", offset:"{}", total:"{}", limit:"20", '
            'csrf_token:""}'.format(offset, 'false')
        )
    nonce = '0CoJUm6Qyw8W8jud'
    nonce2 = 16 * 'F'
    encText = aes(
        aes(text, nonce).decode("utf-8"), nonce2
    )
    return encText

if __name__ == '__main__':
    # setTimeUrlPattern()
    # setScrect()
    print(createParams())
