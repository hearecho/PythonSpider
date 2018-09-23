

base_url = "https://m.weibo.cn/api/container/getIndex?"

from urllib.parse import urlencode
from pyquery import PyQuery as pq
import requests

base_url = 'https://m.weibo.cn/api/container/getIndex?'

headers = {
    'Host': 'm.weibo.cn',
    'Referer': 'https://m.weibo.cn/u/1812616552',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
}


def get_page(page):
    params = {
        'type': 'uid',
        'value': '1812616552',
        'containerid': '1076031812616552',
        'page': page
    }
    url = base_url + urlencode(params)
    # urlencode() 方法将参数转化为 URL 的 GET请求参数
    # 类似于type=uid&value=2145291155&containerid=1076032145291155&page=2
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json()
    except requests.ConnectionError as e:
        print('Error', e.args)


def parse_page(json):
    if json:
        items = json.get('cards')
        for item in items:
            try:
                item = item.get('mblog')
                weibo = {}
                if "【C菌】" in pq(item.get('text')).text():
                    continue
                else:
                    weibo['id'] = item.get('id')
                    weibo['time'] = item.get('created_at')
                    weibo['text'] = pq(item.get('text')).text()
                    weibo['attitudes'] = item.get('attitudes_count')
                    weibo['comments'] = item.get('comments_count')
                    weibo['reposts'] = item.get('reposts_count')
                    yield weibo
            except:
                pass



if __name__ == '__main__':
    for page in range(1, 100):
        json = get_page(page)
        results = parse_page(json)
        for result in results:
            print(result)