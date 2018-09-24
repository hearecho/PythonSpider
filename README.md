## #bilibili Api

------

**GET请求加上 请求头**

```xml
Host : api.bilibili.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36
#参数介绍
aid  视频的av号
mid vmid  用户的UID

```

#### 1.视频标签

~~~python
url = "https://api.bilibili.com/x/tag/archive/tags?aid=23947116"
#参数 aid 指的视频的aid  就是视频的av号
#结果 为json格式
~~~

​      ![结果](img/视频TAG.png)

#### 2.视频简介

~~~python
url = "https://api.bilibili.com/x/web-interface/archive/desc?aid=27348654"
#结果
~~~

![结果](img/视频简介.png)

#### 3.视频信息（硬币，收藏，分享等信息）

~~~python
url = "https://api.bilibili.com/x/web-interface/archive/stat?aid=27348654"
#结果包含 视频的aid ，观看人数，弹幕总数等等
~~~

![结果](img/视频信息.png)

#### 4.相关视频

~~~python
url = "https://api.bilibili.com/x/web-interface/archive/related?aid=27348654"
#结果包含了  相关视频的很多信息
~~~

![结果](img/相关视频.png)

#### 5.用户关注

~~~python
url = "https://api.bilibili.com/x/relation/stat?vmid=123372"
~~~

![关注](img/用户关注.png)

#### 6.用户总播放量

~~~python
url = "https://api.bilibili.com/x/space/upstat?mid=123372"
~~~

![](img/总播放量.png)

#### 7.用户信息

```python
#请求头里面最重要的 Referer  请求来源
#这个请求是 POST请求
url = "https://space.bilibili.com/ajax/member/GetInfo"
headers = {
    'Host' :"space.bilibili.com",
    'User-Agent' : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
    'Content-Type' : "application/x-www-form-urlencoded",
    #里面的 53556317  不用在意 就是可以替换 对爬取没有影响
    "Referer":"https://space.bilibili.com/53556317/"
}

#form表单
```

![](img/GetInfo.png)

#### 8.用户投稿总量

~~~python
url = "https://api.bilibili.com/x/space/navnum?mid=53556317"
~~~

#### 9.获取用户投稿列表

~~~python
url = "https://space.bilibili.com/ajax/member/getSubmitVideos?mid=4162287&pagesize=30&tid=0&page=3&keyword=&order=pubdate"
#get 请求
~~~

#### 10. 从120.92.50.146 获取视频(仅限番剧，包括付费番剧)

~~~python
#http://120.92.50.146/23moe/api/v1/BiliAnimeUrl?animeid=24588&cid=50451010&epid=232470&rnd=1534398494  工作细胞
# 请求地址:api/v1/BiliAnimeUrl
# 请求方式:Get
# 请求参数（*为必须）:
# animeid *:bilibili 番剧ID
# cid *:剧集的CID
# epid:剧集的EPID
~~~

#### 11. 获取视频实际地址

~~~python
url = "http://interface.bilibili.com/v2/playurl?cid=51255238&appkey=84956560bc028eb7&otype=json&type=&quality=64&qn=64&ts=1534399238236&sign=ed75669c4bf13af9a520fc63f5b484d7"
# cid  产生变化便可以了，其他可以不变  cid并不是视频的av号

url = "https://api.bilibili.com/x/player/playurl?avid=29478964&cid=51255238&qn=64&type=&otype=json&fnver=0&fnval=8"
#同作用不过这个avid为 视频av号
~~~

