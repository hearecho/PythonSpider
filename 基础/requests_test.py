#练习网站 http://httpbin.org
#时间 2018/1/13

import requests
import json

url = "http://httpbin.org/"
#get
def __get():
    r = requests.get("http://httpbin.org/get")
    #添加参数
    payload = {'key1':'value1','key2':'value2'}
    r = requests.get("http://httpbin.org/get",params=payload)
    print(r.url)
    print(r.text)
def __getjson():
    r = requests.get("http://httpbin.org/get")
    print(r.text)
    print(r.json())#解析json文件

def __getraw():#或许响应套接字
    #使用raw方法
    pass

def __put():
    r = requests.put("http://httpbin.org/put")
    pass

def __delete():
    r = requests.delete("http://httpbin.org/delete")
    pass

def __head():
    r = requests.head("http://httpbin.org/get")
    print(r.headers)

def __options():
    r = requests.options("http://httpbin.org/get")
    print(r)

#post
def __post():
    payload = {'key1':'value1','key2':'value2'}
    r = requests.post("http://httpbin.org/post",data=payload)
    print(r.text)

def __postjson():
    payload = {'key1':'value1','key2':'value2'}
    r = requests.post("http://httpbin.org/post",data = json.dumps(payload))
    print(r.text)

def __postfile():
    files = {'file':open("a.json",'rb')}
    r = requests.post("http://httpbin.org/post",files=files)
    # with open("a.txt",'rb') as f:
    #     r = requests.post("http://httpbin.org/post",data=f)
    print(r.text)

#cookies
def __getcookies():
    r = requests.get(url)
    print(r.cookies)

def __setcookies():
    cookies = dict(cookies_are='working')
    r = requests.get(url+"cookies",cookies=cookies)
    print(r.text)

#会话对象
def __Session():
    s = requests.Session()
    s.get(url+"cookies/set/sessioncookie/123456789")#第一次请求设置了cookies
    r = s.get(url+"cookies")#第二次获得了cookies 用于登陆一类的
    print(r.text)

#验证证书 SSL
def __SSL():
    try:
        r = requests.get('https://www.12306.cn/mormhweb/',verify=True)
        print("12306网站 当 verify为True时 状态码为"+str(r.status_code))
    except Exception as e:
        print("当 verify为True时SSL出错")
    finally:
        r = requests.get("https://github.com",verify=True)
        print('github当 verify为True时 状态码为'+str(r.status_code))
        r = requests.get('https://www.12306.cn/mormhweb/', verify=False)
        print("12306网站 当 verify为False时 状态码为" + str(r.status_code))

if __name__ == "__main__":
    #get
    # __get()
    # __getjson()
    #post
    # __post()#post到form表单
    # __postjson()#post json 表单序列化
    # __postfile()#post 上传文件
    #cookies
    # __getcookies()
    # __setcookies()
    #session
    # __Session()
    __SSL()



