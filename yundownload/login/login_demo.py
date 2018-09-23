#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/8/22 10:35
# @Author  : hearecho
# @Site    : 
# @File    : login_demo.py
# @Software: PyCharm
import time
import requests
import json
import random
import re
import execjs
import rsa
import base64
from spider.yundownload.utils.tools import dealjson,encodeURIComponent,decodeURIComponent
from spider.yundownload.utils import headers,tools
headers = {
    "Accept": "application/json, text/javascript, text/html, */*; q=0.01",
    "Accept-Encoding":"gzip, deflate, sdch",
    "Accept-Language":"en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2",
    "Referer":"http://pan.baidu.com/disk/home",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36",
    "Connection": "keep-alive",
    "Cookie":"BAIDUID=66DC8B36952B718AABE5A67DF89E71E7:FG=1; HOSUPPORT=1; "
}

class login():
    def __init__(self):
        print("****** LOGIN INIT ******")
        self.ss = requests.Session()
        self.ss.headers.update(headers)
        self.gid = self.__getgid()
        self.callback = self.__getcallback()
        self.traceid = self.__gettraceid()
        self.ppui_logintime = self.__getlogintime()
        self.username = input("请输入你的账户名:")
        self.password = input("请输入密码:")
        self.codestring=""
        self.verifycode=""
        self.token = ""
        self.rsakey = ""
        self.pubkey = ""
        print("****** INIT COMPLETE ******")

    '''
        @:param method url message **kwags
        kwags = {"message":"","data":""}
        
    '''
    def __requests(self,method,url,**kwargs):
        method = method.lower()
        message = kwargs.get("message","")
        data = kwargs.get("data","")
        headers = kwargs.get("headers",{})
        if method == "get":
            resp = self.ss.get(url,headers=headers)
        elif method == "post":
            resp = self.ss.post(url,data=data,headers=headers)
        print("process is : {} status: {}\n cookies:{}".format(message,resp.status_code,resp.cookies))
        return resp


    def __gettoken(self):
        url = "https://passport.baidu.com/v2/api/?getapi" \
              "&tpl=netdisk&subpro=netdisk_web&apiver=v3&tt=1534671677774&class=login" \
              "&gid={}" \
              "&loginversion=v4&logintype=basicLogin&traceid=".format(self.gid)
        resp = self.__requests("get",url,message="getroken")
        resp_json = dealjson(resp.text)
        self.token = resp_json["data"]["token"]


    def __getgid(self):
        str = '''
                function () {
                    return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                        var t = 16 * Math.random() | 0, n = "x" == e ? t : 3 & t | 8;
                        return n.toString(16)
                    }).toUpperCase()
                }()
            '''
        self.gid = execjs.eval(str)


    def __getcodestring(self):
        url = "https://passport.baidu.com/v2/api/?logincheck" \
              "&token={}&tpl=netdisk&subpro=netdisk_web" \
              "&apiver=v3&tt={}&sub_source=leadsetpwd&username={}&loginversion=v4&" \
              "dv=tk0.078943677163224151534837494155%40oom0WCB10~5kqEJ2tAGephDJXLrtnoFyGLFzJy6FpAIKe35kIZB1oyLk0lA8ii5tGhD47" \
              "8oreLFehDrtf-FeXeOZJlDatd68iZn1BlBzilB14EBmbror~vr4tnFeXorehLntXL7Fn3O4~WCKrEn1IZBDpfB10~5kqEJ2tAGephDJXLrtno" \
              "FyGLFzJy6FpAIKe35kIZAkqzLk0lA8ii5tGhD478oreLFehDrtf-FeXeOZJlDatd68iZn14lnzi_pm0-ln14z5kBEn1oZnDBECuXRNKxdNuJW" \
              "6uJlLkMxn8ilnkoEn14bBD4EJ2tAGephDJXLrtnoFyGLFzJy6FpAIKe3Lq__CllN~lwZ5fSChwmiB8il5kIxums7uEi51qzAk4-ByIzny2ZB" \
              "y0lnk2eBDrynkMynyo~nk2eno__zmqBD4E5D2x5k2lBDIEny2Z5k2~B1qEBDqxBmibAD0i5k2lBy0EADIy&traceid=".format(self.token,int(round(time.time() * 1000)),self.username)
        resp = self.__requests("get",url,message="getcodestring")
        # print(resp.url)
        resp_json = dealjson(resp.text)
        # print(resp_json)
        self.codestring = resp_json["data"]["codeString"]


    def __saveimg(self):
        url = "https://passport.baidu.com/cgi-bin/genimage?{}".format(self.codestring)
        resp = self.__requests("get",url,message="save verifyimg")
        with open("cerify.jpg","wb") as f:
            f.write(resp.content)
        #输入验证码内容
        self.verifycode = input("请输入验证码内容:")

    def __screctpw(self):
        pub = rsa.PublicKey.load_pkcs1_openssl_pem(self.pubkey.encode('utf-8'))
        encript_passwd = rsa.encrypt(self.password.encode('utf-8'), pub)
        self.password =  base64.b64encode(encript_passwd).decode('utf-8')


    def __getlogintime(self):
        logintime = random.randint(10000, 99999)
        # print(logintime)
        return logintime

    def __getpubkey(self):
        url = "https://passport.baidu.com/v2/getpublickey?" \
              "token={}&tpl=netdisk&subpro=netdisk_web&apiver=v3&tt={}&gid={}&loginversion=v4&traceid=" \
              "".format(self.token,int(round(time.time() * 1000)),self.gid)
        resp = self.__requests("get",url,message="getpubkey")
        # print(resp.text)
        resp_json = dealjson(resp.text)
        self.pubkey = resp_json["pubkey"]
        self.rsakey = resp_json["key"]


    def __gettraceid(self):
        traceid = "CA9C8801"
        seed = "1234567890abcdefghijklmnopqrstuvwxyz"
        sa = []
        for i in range(8):
            sa.append(random.choice(seed))
        traceid = ''.join(sa).upper()
        # print(traceid)
        return traceid

    def __getcallback(self):
        str = '''
                "bd__cbs__"+Math.floor(2147483648 * Math.random()).toString(36)
            '''
        callback = execjs.eval(str)
        return callback

    def __checkverifycode(self):
        self.verifycode = encodeURIComponent(self.verifycode)
        url = "https://passport.baidu.com/v2/?checkvcode&" \
              "token={}&tpl=netdisk&subpro=netdisk_web&apiver=v3&" \
              "tt={}&verifycode={}&loginversion=v4&" \
              "codestring={}&traceid=&callback={}".format(self.token,int(round(time.time() * 1000)),self.verifycode,self.codestring,self.callback)
        resp = self.__requests("get",url,message="checkverifycode")
        print(resp.text)
        return resp.text

    #还是失败了
    def __getpanpsc(self):
        url = "https://pan.baidu.com/disk/home?errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0&traceid="
        headers={
            'Referer':'Referer	https://pan.baidu.com/',
            'Cookie':'BAIDUID=04C8CEAA74D195A5903BA518B470E9AA:FG=1; PANPSC=10485993439899182047%3AiK4yoDyp7Ltt5gPHJlSjfSOAoXNFwReXTw3oScwlIJCCdpPoY78V5b1DTur%2BOjgbfmTzsKPDskMtTix0oqwCXY5cDi%2BktIG6uSWwQbsTqptUMSLhYBPCxRose%2F5XgyZWOy6S0zDqC6X99sx6EOtRkB9F%2Bkn7S3aWsasZRGYV%2BX0jhVtXWkSx1x5YBe4hJ8cctc28GlohrjfB%2FEeRK93c9SOFW1daRLHXHlgF7iEnxxy1zbwaWiGuN4O7ZNTbbdFs; BDUSS=TZuZjY0dHJmZ3U4R082TWszRElTR0dXfnhCZHdCM05MNVFHTFZ3dUd4aWJ3NlZiQVFBQUFBJCQAAAAAAAAAAAEAAADbbss6xq~B99fPyasAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJs2flubNn5bd; SCRC=6712431d5c6b71b7ebe3b70709dec34b; STOKEN=95d8748c126a41447a475026b0e9aeeb2c53fea402aa825358dcefd18e7eed31'
        }
        resp = self.__requests("get",url,headers=headers)
        with open("cookies.bg","a+") as f:
            for cookie in resp.cookies:
                f.write(cookie.name+"="+cookie.value)
                f.write("; \n")

        print(resp.cookies)

    def __setform(self):
        form = {
            "staticpage": "https://pan.baidu.com/res/static/thirdparty/pass_v3_jump.html",
            "charset": "UTF-8",
            "token": "",
            "tpl": "netdisk",
            "subpro": "netdisk_web",
            "apiver": "v3",
            "tt": "",
            "codestring": "",
            "verifycode": "",
            "safeflg": 0,
            "u": "https://pan.baidu.com/disk/home",
            "isPhone": "",
            "detect": "1",
            "gid": "",
            "quick_user": "0",
            "logintype": "basicLogin",
            "logLoginType": "pc_loginBasic",
            "idc": "",
            "loginmerge": "true",
            "foreignusername": "",
            "username": "",
            "password": "",
            "mem_pass": "on",
            "rsakey": "",
            "crypttype": "12",
            "ppui_logintime": "",
            "countrycode": "",
            "fp_uid": "",
            "fp_info": "",
            "loginversion": "v4",
            "dv": "tk0.078943677163224151534837494155@oom0WCB10~5kqEJ2tAGephDJXLrtnoFyGLFzJy6FpAIKe35"
                  "kIZB1oyLk0lA8ii5tGhD478oreLFehDrtf-FeXeOZJlDatd68iZn1BlBzilB14EBmbror~vr4tnFeXo"
                  "rehLntXL7Fn3O4~WCKrEn1IZBDpfB10~5kqEJ2tAGephDJXLrtnoFyGLFzJy6FpAIKe35kIZAkqzLk0l"
                  "A8ii5tGhD478oreLFehDrtf-FeXeOZJlDatd68iZn14lnzi_pm0-ln14z5kBEn1oZnDBECuXRNKxdNuJW6"
                  "uJlLkMxn8ilnkoEn14bBD4EJ2tAGephDJXLrtnoFyGLFzJy6FpAIKe3LqCllN~lwZ5fSChwmiB8il5kIxu"
                  "ms7uEi51qzAk4-ByIzny2ZBy0lnk2eBDrynkMynyo~nk2enozmqBD4E5D2x5k2lBDIEny2Z5k2~B1qEBD"
                  "qxBmibAD0i5k2lBy0EADIy",
            "traceid": "",
            "callback": "parent.bdpcbs8ofoob",
        }
        form["token"] = self.token
        form["gid"] = self.gid
        form["codestring"] = self.codestring
        form["verifycode"] = decodeURIComponent(self.verifycode)
        form["rsakey"] = self.rsakey
        form["ppui_logintime"] = self.ppui_logintime
        form["traceid"] = self.traceid
        form["password"] = self.password
        form["username"] = self.username
        form["tt"] = int(round(time.time() * 1000))
        return form

    def __savecookie(self):
        # cookies = {cookie.name : cookie.value for cookie in self.cookies }
        with open("cookies.bg","a+") as f:
            for cookie in self.cookies:
                f.write(cookie.name+"="+cookie.value)
                f.write("; ")
            f.write("BAIDUID=04C8CEAA74D195A5903BA518B470E9AA:FG=1;")
            # f.write(str(cookies))
            # f.write("\n")

    def __get_list(self):
        path = input("请输入路径:/*")
        encode_path = tools.encodeURIComponent(path)
        url = 'http://pan.baidu.com/api/list?dir={}' \
              '&num=100&order=time&desc=0&clienttype=0' \
              '&showempty=0&web=1&page=1'.format(encode_path)
        resp = self.__requests("get",url,message="getfilelist")

        print(resp.apparent_encoding)
        resp.encoding = resp.apparent_encoding
        resu_json = resp.json()
        print(json.dumps(resu_json, indent=2))
    #调用接口

    def __home(self):
        url = "https://pan.baidu.com/disk/home"
        resp = self.__requests("get",url)
        resp.encoding = resp.apparent_encoding
        print(resp)

    def login(self):
        '''
        var href = decodeURIComponent("https:\/\/pan.baidu.com\/res\/static\/thirdparty\/pass_v3_jump.html")+"?"
        var accounts = '&accounts='
        href += "err_no=0&callback=parent.bd__pcbs__occc1l&codeString=&userName=15346010075&phoneNumber=&mail=&hao123
        Param=UnFNRzFzYjBvd05FSkxhRk5zVm0xcWVXNDROM05sYkhOQ1ZXRmpjVmRRWm0xLWRVNDVlbmxhYlVaeFMxWmlRVkZCUVVGQkpDUUFBQUFBQUFBQUFBRUFBQURiYnNzNnhxfkI5OWZQeWFzQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFJVWJmbHVGRzM1YmRY&
        u=https://pan.baidu.com/disk/home&tpl=netdisk&secstate=&gotourl=&authtoken=&loginproxy=&resetpwd=&vcodetype=&lstr=&ltoken=&bckv=1
        &bcsync=YIvkZoaszoZTnGza7gtpUrPED6NMBC2yoc%2Feld2yw%2BEQKO5Tt9mDvZCG8SSg6aDngVhV12tcyMxnfRQCYNr9CsqzaEGKa6yKbTklZGR4wo8%2FVip6BSH1%2FZBScwHtB71UDXwA6aQxNgZ%2FBDzoqnye1371LWPr5D%2FPi1Yz5Z5rPfBGexwR0XG9IBDnxd85ziSmzYbFLVjTCffd%2BuSeSie%2BXX1ZGnKyzNQx6aZ%2F6oyfXP9Wv0Cbye70u%2BlCUOby1QiZStabLB90JflWsfWGVPHHPJwO8p7bG1vzbpzLMwrrw37h4IWeeQMt5uMF0crqD8kyoAgyJMUlyMetomcpumUamA%3D%3D&bcchecksum=3859271240&code=&bdToken=&realnameswitch=&setpwdswitch=&bctime=1534991237&bdstoken=&authsid=&jumpset=&appealurl=&realnameverifyemail=0&traceid=&realnameauthsid="+accounts;
        return href;
        :return:
        '''
        pass
    def test(self):
        self.__gettoken()
        self.__getcodestring()
        self.__getpubkey()
        if self.codestring != "":
            self.__saveimg()
            self.__checkverifycode()

        # print(self.pubkey,"\n",self.rsakey)
        self.__screctpw()
        # print(self.password)

        while True:
            form = self.__setform()
            print(form["verifycode"])
            url = "https://passport.baidu.com/v2/api/?login"
            resp = self.__requests("post", url, message="first login", data=form)
            errno = re.search(r'err_no=(\d+)', resp.text).group(1)
            if errno in ("257","3","6"):
                print(errno)
                t = re.search('codeString=(.+?)&', resp.text)
                self.codestring = t.group(1) if t else ""
                self.__saveimg()
                text = self.__checkverifycode()
            elif errno == "0":
                print(resp.text)
                # js = re.search(r'href \+= "(.*?)"',resp.text).group(1)
                #
                # print(js)
                # href = "https://pan.baidu.com/res/static/thirdparty/pass_v3_jump.html"+"?"+js+"&accounts="
                # resp = self.__requests("get",href)

                print(resp.cookies)
                self.cookies = resp.cookies
                self.__savecookie()
                break






