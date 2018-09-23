# 协程-异步请求

### 基础知识点

#### 1.异步协程作用

​	主要应用于IO密集型任务，而多进程是为了充分的利用cpu核心数，实现多任务同时进行。在网络爬虫下，我们发出一个请求之后，需要等待一定的时间才能得到响应，但其实在这个等待过程中，程序可以干许多其他的事情，等到响应得到之后才切换回来继续处理，这样可以充分利用 CPU 和其他资源，这就是异步协程的优势。 

#### 2.名词

1. 阻塞：程序等待某个操作完成的时间，这段时间程序无法进行其他操作，所以被称为阻塞；常见的阻塞：网络IO阻塞，磁盘IO阻塞，用户输入阻塞等等。(所以，网络爬虫是应用异步协程很好的地方)

2. 异步：不同的程序单元不需要通信协调，所以异步主要是 不相关的程序单元；例如:爬虫下载网页。调度程序调用下载程序后，即可调度其他任务，而无需与该下载任务保持通信以协调行为。不同网页的下载、保存等操作都是无关的，也无需相互通知协调。这些异步操作的完成时刻并不确定。所以**异步也是无序的；**

3. 协程：本质上是一个单线程，相对于多进程来说，无需线程上下文切换的开销，无需原子操作锁定及同步的开销，编程模型也非常简单。 

   

#### 3.概念

> 环境是 python3.6+ ，使用的是async/await 来实现协程，所以用到的是 asyncio

1. event_loop：事件循环，相当于是一个无限的循环，我们需要把函数，注册到这个循环中，满足条件后，就会调用对应的处理方法。

   ~~~python
   import asyncio
   loop = asyncio.get_event_loop()
   ~~~

2. coroutine：就是协程，指代为协程对象类型，用 async 定义一个函数，这个函数就会返回一个协程类型，不会直接执行，要放到事件循环中。

   ~~~python
   import asyncio
   async def f(x):
       print("x : ",x)
   #协程对象
   coroutine = f(1)
   print("测试函数还没有运行，仅仅是返回了协程对象")
   #创建事件循环
   loop = asyncio.get_event_loop()
   #注册函数
   print("此时协程对象注册到事件循环中")
   loop.run_until_complete(coroutine)
   print("此时函数运行完毕")
   ~~~

3. task：任务，对于协程对象的进一步封装，通过它可以查看任务的状态，以及使用回调函数；

   ~~~python
   #两种创建 task 的方式
   #1.利用 loop事件循环的 create_task的方法
   loop = asyncio.get_event_loop()
   task = loop.create_task(coroutine)
   loop.run_until_complete(task)
   #2.利用 ensure_future()
   task = asyncio.ensure_future(coroutine)
   loop = asyncio.get_event_loop()
   loop.run_until_complete(task)
   #3.可以创建多个任务，就是创建一个任务列表,asyncio 的 wait() 方法
   tasks = [asyncio.ensure_future(coroutine) for _ in range(5)]
   loop = asyncio.get_event_loop()
   loop.run_until_complete(asyncio.wait(tasks))
   #4.为任务绑定回调函数
   def callback(task):
       print("任务结果:",task.result())
   task = asyncio.ensure_future(coroutine)
   task.add_done_callback(callback)
   ~~~

4. future：代表将来执行或没有执行的任务的结果，实际上和 task 没有本质区别。 

#### 4.一个假的异步请求实例

> 异步请求的一个关键就是要有一个挂起操作，挂起操作就是使用**await**，使用 await 可以将耗时等待的操作挂起，让出控制权。当协程执行的时候遇到 await，事件循环就会将本协程挂起，转而去执行别的协程，直到其他的协程挂起或执行完毕。其中await 后面可以跟的格式：
> - *一个原生 coroutine 对象。*
> - *一个由 types.coroutine() 修饰的生成器，这个生成器可以返回 coroutine 对象。* 
> - *一个包含 __await 方法的对象返回的一个迭代器。*
> 


~~~python
'''
	这是一个假的异步请求实例，实际消耗时间，并没有减少
	支持异步操作的请求方式才可以实现真正的异步
	而 aiohttp是一个很好的库
'''
import asyncio
import requests
import time
import aiohttp
#将请求函数 定义为 coroutine对象，使其能够跟在 await 后面

async def get(url):
    return requests.get(url).status_code

async def request():
    url = "http://www.baidu.com"
    print('Waiting for', url)
    #挂起 请求操作
    status = await get(url)
    #可以添加多个挂起操作，后面存储信息也可以挂起
    print('Get response from', url,"Status",status)
    
def TestAsync():
    start = time.time()
    tasks = [asyncio.ensure_future(request()) for i in range(100)]
    loop = asyncio.get_event_loop()
    loop.run_until_complete(asyncio.wait(tasks))

    end = time.time()
    print('Async Cost time:', end - start)
    return end - start
~~~

#### 5.一个真的异步请求实例

> ~~~oython
> pip install aiohttp
> ~~~
>
> 使用[aiohttp库](https://aiohttp.readthedocs.io )来支持异步请求网络资源

 ~~~python
 #实例异步请求代码片段
 import aiohttp
 async def get(url):
     async with aiohttp.ClientSession() as client:
         #使用 with 自动关闭 ClientSession 
         status = client.get(url).status
         return status
 ~~~

~~~python
#一个小的异步爬虫
import asyncio
import requests
import time
import aiohttp

# 使用aiohttp 实现异步请求
async def aioget(client,url):
    async with client.get(url) as response:
        #必须  使用 await 来改变返回结果的类型，不加 await返回结果是协程对象
        return await response.json()
#存储程序
async def save(status,i):
    with open("test/{}.json".format(i), "w+",encoding='utf-8') as f:
        f.write(str(status))
        
#主函数
async def aiorequest(i):
    url = 'https://api.bilibili.com/x/player/pagelist?aid=' + str(i)
    print('Waiting for', url)
    async with aiohttp.ClientSession() as client:
        # 挂起请求 操作
        status = await aioget(client,url)
        #挂起写入文件的操作 IO操作
        await save(status,i)
        # 不挂起 的速度 在运行将近100次的情况下  是 慢了0.3s  差别不大
        # with open("test/{}.json".format(i), "w+", encoding='utf-8') as f:
        #     f.write(str(status))
        print('Get response from', url, "Json", status['code'])
def TestAsync():
    now = lambda:time.time() 
    start = now()

    tasks = [asyncio.ensure_future(aiorequest(i)) for i in range(27960015,27960100)]

    loop = asyncio.get_event_loop()
    loop.run_until_complete(asyncio.wait(tasks))

    end = now()
    print('Async Cost time:', end - start)
    return end - start
~~~

#### 6.多进程于单进程的比较

> 由于python GIL锁的缘故，所以多线程在python里面有点鸡肋。多进程一般使用的 multiprocessing库

~~~python
def request1(_):
    url = 'http://www.baidu.com'
    print('Waiting for', url)
    result = requests.get(url).status_code
    print('Get response from', url, 'Result:', result)

def multirequest():
    now = lambda: time.time()
    start = now()
    # 得到 cpu核心数
    cpu_count = multiprocessing.cpu_count()
    print('Cpu count:', cpu_count)

    #创建 线程池大小 为 cpu核心数
    pool = multiprocessing.Pool(cpu_count)
    pool.map(request1, range(100))

    end = now()
    print('Multi Cost time:', end - start)
~~~

#### 7.异步协程和多线程结合

> 使用一个新的库 aiomultiprocess ,由于fork调用的原因，在windows平台上可能不能运行.
>
> 其实最后结果和异步相差不大
>
> ~~~shell
> pip install aiomultiprocess
> ~~~

~~~python
import asyncio
import aiohttp
import time
from aiomultiprocess import Pool

start = time.time()

async def get(url):
    session = aiohttp.ClientSession()
    response = await session.get(url)
    result = await response.text()
    session.close()
    return result

async def request():
    url = 'http://127.0.0.1:5000'
    urls = [url for _ in range(100)]
    async with Pool() as pool:
        result = await pool.map(get, urls)
        return result

coroutine = request()
task = asyncio.ensure_future(coroutine)
loop = asyncio.get_event_loop()
loop.run_until_complete(task)

end = time.time()
print('Cost time:', end - start)
~~~

 