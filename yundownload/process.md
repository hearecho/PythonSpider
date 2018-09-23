# 云盘登陆过程

### 一、账号密码登陆(使用的Charles抓包)

> 最终提交的login表单
>
> 变化的参数有: token、tt（时间戳）、codestring、gid、password、verifycode（验证码）、rsakey、ppui_logintime、fp_uid、fp_info、dv(可以使用固定值)、traceid 

| staticpage      | https://pan.baidu.com/res/static/thirdparty/pass_v3_jump.html |
| --------------- | ------------------------------------------------------------ |
| charset         | UTF-8                                                        |
| token           | 2be0a9a2353f226ee90fd162ea8cd4d7                             |
| tpl             | netdisk                                                      |
| subpro          | netdisk_web                                                  |
| apiver          | v3                                                           |
| tt              | 1534837566088                                                |
| codestring      |                                                              |
| safeflg         | 0                                                            |
| u               | https://pan.baidu.com/disk/home                              |
| isPhone         |                                                              |
| detect          | 1                                                            |
| gid             | 5FAD4CF-31C3-433A-BCDF-8A62D84ED7A0                          |
| quick_user      | 0                                                            |
| logintype       | basicLogin                                                   |
| logLoginType    | pc_loginBasic                                                |
| idc             |                                                              |
| loginmerge      | true                                                         |
| foreignusername |                                                              |
| username        | 15346010075                                                  |
| password        | Sc8gms5L/qc8bL6QX11EBikTCuYLEMkyIfW5NsKvfiDRXEW+bX4KBXgBOH8tWg7T/Bylztdp2YWDK4ZF6Y9CjwCOU5vQ0fOs38YvaSOneNazvGe1bfrlVyhz/PmI0Wo+sVpX8iJnNO8+32B9k/YBZjnDT4qETL1F1go+H4+FNOI= |
| mem_pass        | on                                                           |
| rsakey          | z5LqVM77LBxAS2LkPvTxyScREIlWlTW9                             |
| crypttype       | 12                                                           |
| ppui_logintime  | 72134                                                        |
| countrycode     |                                                              |
| fp_uid          |                                                              |
| fp_info         |                                                              |
| loginversion    | v4                                                           |
| dv              | tk0.078943677163224151534837494155@oom0WCB10~5kqEJ2tAGephDJXLrtnoFyGLFzJy6FpAIKe35kIZB1oyLk0lA8ii5tGhD478oreLFehDrtf-FeXeOZJlDatd68iZn1BlBzilB14EBmbror~vr4tnFeXorehLntXL7Fn3O4~WCKrEn1IZBDpfB10~5kqEJ2tAGephDJXLrtnoFyGLFzJy6FpAIKe35kIZAkqzLk0lA8ii5tGhD478oreLFehDrtf-FeXeOZJlDatd68iZn14lnzi_pm0-ln14z5kBEn1oZnDBECuXRNKxdNuJW6uJlLkMxn8ilnkoEn14bBD4EJ2tAGephDJXLrtnoFyGLFzJy6FpAIKe3Lq__CllN~lwZ5fSChwmiB8il5kIxums7uEi51qzAk4-ByIzny2ZBy0lnk2eBDrynkMynyo~nk2eno__zmqBD4E5D2x5k2lBDIEny2Z5k2~B1qEBDqxBmibAD0i5k2lBy0EADIy |
| traceid         | CA9C8801                                                     |
| callback        | parent.bd__pcbs__8ofoob                                      |

#####  1.获取token 

~~~python
url = "https://passport.baidu.com/v2/api/?getapi" \
          "&tpl=netdisk&subpro=netdisk_web&apiver=v3&tt=1534671677774&class=login" \
          "&gid=8C76369-A7DD-43A8-9042-F32ACCDD8D4A" \
          "&loginversion=v4&logintype=basicLogin&traceid=&callback=bd__cbs__qdl3s1"
~~~

> 参数有 tpl 、subpro、apiver、tt、class、gid、loginversion、logintype、traceid、callback
>
> 其中gid、traceid、callback可以不添加，这是由服务器js文件产生的；其中callback会为请求返回的内容添加一个头，使得还要处理才能进行提取json内容；通过搜索，gid和callback都是通过返回的js文件生成的；<https://ss0.bdstatic.com/5LMZfyabBhJ3otebn9fN2DJv/passApi/js/loginv4_tangram_6f7f026.js>
>
> 看不懂js可以使用psexecjs或者pyv8

~~~js
#get gid
function () {
     return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          var t = 16 * Math.random() | 0, n = "x" == e ? t : 3 & t | 8;
          return n.toString(16)
 }).toUpperCase()}
#get callback bd__cbs__ 这部分不会发生变化
"bd__cbs__"+Math.floor(2147483648 * Math.random()).toString(36)
~~~

> 请求头:
>
> | Key             | Value                                                        |
> | --------------- | ------------------------------------------------------------ |
> | Connection      | keep-alive                                                   |
> | User-Agent      | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36 |
> | Accept          | */*                                                          |
> | Referer         | https://pan.baidu.com/                                       |
> | Accept-Encoding | gzip, deflate, br                                            |
> | Accept-Language | zh-CN,zh;q=0.9,en;q=0.8                                      |
> | Cookie          | BAIDUID=65924E354F4074E3C20045FC06DE3A54:FG=1                |
> | Host            | passport.baidu.com                                           |

> 返回内容:
>
> ~~~json
> #带有callback参数
> bd__cbs__goucir({
> 	"errInfo": {
> 		"no": "0"
> 	},
> 	"data": {
> 		"rememberedUserName": "",
> 		"codeString": "",
> 		"token": "2be0a9a2353f226ee90fd162ea8cd4d7",
> 		"cookie": "1",
> 		"usernametype": "",
> 		"spLogin": "rate",
> 		"disable": "",
> 		"loginrecord": {
> 			'email': [],
> 			'phone': []
> 		}
> 	},
> 	"traceid": ""
> })
> ~~~
>
> ~~~json
> #不带有callback参数
> {
> 	"errInfo": {
> 		"no": "0"
> 	},
> 	"data": {
> 		"rememberedUserName": "",
> 		"codeString": "",
> 		"token": "2be0a9a2353f226ee90fd162ea8cd4d7",
> 		"cookie": "1",
> 		"usernametype": "",
> 		"spLogin": "rate",
> 		"disable": "",
> 		"loginrecord": {
> 			'email': [],
> 			'phone': []
> 		}
> 	},
> 	"traceid": ""
> }
> ~~~

##### 2.获取codestring

> 有时候如果没有验证码的存在不会有这个值，但是这个值是在一个请求返回的参数，同时是请求获取验证码的参数;
>
> 请求头中的dv参数可以不用管，就用一固定的就可以了，然后callback最好也不用加，理由同上

~~~python
url = "https://passport.baidu.com/v2/api/?logincheck&token=2be0a9a2353f226ee90fd162ea8cd4d7&tpl=netdisk&subpro=netdisk_web&apiver=v3&tt=1534837563450&sub_source=leadsetpwd&username=15346010075&loginversion=v4&dv=tk0.078943677163224151534837494155%40oom0WCB10~5kqEJ2tAGephDJXLrtnoFyGLFzJy6FpAIKe35kIZB1oyLk0lA8ii5tGhD478oreLFehDrtf-FeXeOZJlDatd68iZn1BlBzilB14EBmbror~vr4tnFeXorehLntXL7Fn3O4~WCKrEn1IZBDpfB10~5kqEJ2tAGephDJXLrtnoFyGLFzJy6FpAIKe35kIZAkqzLk0lA8ii5tGhD478oreLFehDrtf-FeXeOZJlDatd68iZn14lnzi_pm0-ln14z5kBEn1oZnDBECuXRNKxdNuJW6uJlLkMxn8ilnkoEn14bBD4EJ2tAGephDJXLrtnoFyGLFzJy6FpAIKe3Lq__CllN~lwZ5fSChwmiB8il5kIxums7uEi51qzAk4-ByIzny2ZBy0lnk2eBDrynkMynyo~nk2eno__zmqBD4E5D2x5k2lBDIEny2Z5k2~B1qEBDqxBmibAD0i5k2lBy0EADIy&traceid=&callback=bd__cbs__rtw64u"
~~~

##### 3.获取verifycode

> <https://passport.baidu.com/cgi-bin/genimage?tcGa407c19d4cb0c13302e015f14301687f3ee2430713017e50>验证码示例链接，codestring直接加在后面

##### 5.获取traceid

> 是js文件生成的代码，emmmm，代码量有点多，等会研究下

##### 6.获取ppui_logintime

> 前端js代码生成，当前时间和初始时间之间的插值，可以使用随机数在一个范围内部产生；
>
> 比如72134，在10000-99999之间吧，随便差不多就行；

~~~js
timeSpan = (new Date).getTime() - e.initTime
~~~

##### 7.获取rsakey

> 通过搜索发现是一个请求的返回值；
>
> 请求参数中 callback可以不要

~~~python
url = "https://passport.baidu.com/v2/getpublickey?token=2be0a9a2353f226ee90fd162ea8cd4d7&tpl=netdisk&subpro=netdisk_web&apiver=v3&tt=1534837563451&gid=5FAD4CF-31C3-433A-BCDF-8A62D84ED7A0&loginversion=v4&traceid=&callback=bd__cbs__ujfm07"
~~~

~~~json
bd__cbs__ujfm07({
	"errno": '0',
	"msg": '',
	"pubkey": '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD4YbFsoADZz\/6IIAUprgQAzyXC\nBXtdAISF5FcQ3W3gRx87Gw8An91Hjq7B1OvbiJzhL\/lfaWZK7Kij7LvXt3Q5E7F8\n7r69omLviUCH9XZMDQ52OoO9t2OjVw4NjmqWgeEMOa9I9AD2W2339L4scJuWsdEH\ndf2ieLWDRTUVG\/gkRQIDAQAB\n-----END PUBLIC KEY-----\n',
	"key": 'z5LqVM77LBxAS2LkPvTxyScREIlWlTW9',
	"traceid": ""
})
#其中的key就是我们需要的 rsakey
~~~

##### 8.获取fp_info&fp_uid

> 我这次试验这两个参数都是不用有的,emmm
>
> 这两个参数也是通过js文件产生的，所以是可以使用固定值的

##### 9.获取password，rsa加密

> 是通过rsa加密，对密码进行加密的；大多数网站都是通过通过rsa网站加密；

~~~python
def encript_password(self, password, pubkey):
        pub = rsa.PublicKey.load_pkcs1_openssl_pem(pubkey.encode('utf-8'))
        encript_passwd = rsa.encrypt(password.encode('utf-8'), pub)
        return base64.b64encode(encript_passwd).decode('utf-8')
~~~

#####  10.登陆

> 将上述的值加进表单中，然后提交登陆；

~~~python
url = "https://passport.baidu.com/v2/api/?login"
Cookie = "BAIDUID=65924E354F4074E3C20045FC06DE3A54:FG=1; HOSUPPORT=1; HISTORY=e95067aee7e0; UBI=fi_PncwhpxZ%7ETaKASM91jHODz421piEgTNHc5N1t7fWFXqjeKAb2hE-28BQsIkeTyYP2gdn9FsdJkKNFhE0"
~~~

| staticpage      | https://pan.baidu.com/res/static/thirdparty/pass_v3_jump.html |
| --------------- | ------------------------------------------------------------ |
| charset         | UTF-8                                                        |
| token           | 132648b7d6fa12581bcba9b2f9bc6322                             |
| tpl             | netdisk                                                      |
| subpro          | netdisk_web                                                  |
| apiver          | v3                                                           |
| tt              | 1534904206313                                                |
| codestring      | tcGdb07c1134d6fc1a90288150f44013b313ba2430749047f3b          |
| safeflg         | 0                                                            |
| u               | https://pan.baidu.com/disk/home                              |
| isPhone         |                                                              |
| detect          | 1                                                            |
| gid             | A9594B8-4864-4D66-A431-CFCB6E25EDD7                          |
| quick_user      | 0                                                            |
| logintype       | basicLogin                                                   |
| logLoginType    | pc_loginBasic                                                |
| idc             |                                                              |
| loginmerge      | true                                                         |
| foreignusername |                                                              |
| username        | 15346010075                                                  |
| password        | wJHgexcgjIlnNdo2yEd4/pnYGrx5rMxHhmOvUAxRsVAUUVXWEy1EnBJAN62hmcyl9CUVMXZqZ90ll2phKLNWcaxrgLj1GblwMXwOu0esy0UQXzZbd+EFwAIj2htcdZP1Q10cOdGkxX4mIPhtjVlhAMPWjioiTHemMdDtpNdBEIk= |
| verifycode      | 偏偏                                                         |
| mem_pass        | on                                                           |
| rsakey          | gHubzGzQyXBXAyg9HhyTyZdWvwXmr8zl                             |
| crypttype       | 12                                                           |
| ppui_logintime  | 29071                                                        |
| countrycode     |                                                              |
| fp_uid          |                                                              |
| fp_info         |                                                              |
| loginversion    | v4                                                           |
| dv              | tk0.162015645659532971534904177369@wwv0Nx914x0kqd8nsCpurhF8wNtsAEHepNH~8eJHrCBGu30kn~9kqgNk4jC6yy0sphFQK6EtuNHuhFtsbzHuwuLU8jFSsYJ6y-Aen-AWyj91Qd9m-tEtx2tQsAHuwEtuhNAswNKHA3LQxPOGtd9FLeAFrb914x0kqd8nsCpurhF8wNtsAEHepNH~8eJHrCBGu30kn~AFEuNk4jC6yy0sphFQK6EtuNHuhFtsbzHuwuLU8jFSsYJ6y-AeBuAHy_ov0LwCFnj0knUC6ye9FBz02yx9kndAkBu0kE-9Ftd8nsCpurhF8wNtsAEHepNHUJiO~p3L389OUKaOQrzOWyxAkEd919g0k4jCFnu0sphFQK6EtuNHuhFtsbzHuwyBHAeKUwjJ2y_xee7Iey-K9NOhyvi96yj0kBgCvlKody01nU91q-AFBzAFBuCFte91Q~9FteAkQyAkn~Ae9UCE__ivn72pzL29f0jwyBGgZBSsaJ2tZBUwY0j-uOSp3JS3ZJGE_Bvp9FtdCFnd9F4-ARy~9FBd9FQj9my-9kDy0knx91qd9F4e9RyxA19_ |
| vcodefrom       | checkuname                                                   |
| traceid         | FF86ED01                                                     |
| callback        | parent.bd__pcbs__f94fdf                                      |

##### 后续 Cookies，账号密码现在登陆直接出错，emmm，算是学习了下思路，现在只能用cookie了

> PANPSC：存在于
>
> ~~~python
> url = "https://pan.baidu.com/disk/home?errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0&traceid="
> #cookie 如下
> ~~~
>
> | BAIDUID                                  | 04C8CEAA74D195A5903BA518B470E9AA:FG=1                        |
> | ---------------------------------------- | ------------------------------------------------------------ |
> | pan_login_way                            | 1                                                            |
> | PANWEB                                   | 1                                                            |
> | cflag                                    | 15%3A3                                                       |
> | Hm_lvt_7a3960b6f067eb0085b7f96ff5e660b0  | 1534992157                                                   |
> | Hm_lpvt_7a3960b6f067eb0085b7f96ff5e660b0 | 1534994015                                                   |
> | PANPSC                                   | 1680894570186455926%3AiK4yoDyp7LuRnAAi9D7B4SOAoXNFwReXTw3oScwlIJCCdpPoY78V5b1DTur%2BOjgbfmTzsKPDskMtTix0oqwCXY5cDi%2BktIG6uSWwQbsTqptUMSLhYBPCxRose%2F5XgyZWOy6S0zDqC6X99sx6EOtRkB9F%2Bkn7S3aWsasZRGYV%2BX0jhVtXWkSx1x5YBe4hJ8cctc28GlohrjfB%2FEeRK93c9SOFW1daRLHXHlgF7iEnxxy1zbwaWiGuN4O7ZNTbbdFs |
> | STOKEN                                   | 2ba212b1c15dd317d5bfabd5ddb505b64f4c06e1c8faf90cea013c18fdaf0dcf |
> | SCRC                                     | 5e977dc06b50fb84fab7cf1419534b50                             |
> | BDUSS                                    | hIQkd1OEVpdk5wMEhhZ2tCYU9sVExsdmdmS3JHemgxejdiNzlHWFd2dzh3S1ZiQVFBQUFBJCQAAAAAAAAAAAEAAADbbss6xq~B99fPyasAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwzfls8M35bS3 |
>
> 