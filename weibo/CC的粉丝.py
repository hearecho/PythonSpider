from urllib.parse import urlencode
from pyquery import PyQuery as pq
import requests
import pymysql
import json

base_url = 'https://m.weibo.cn/api/container/getIndex?'

headers = {
    'Host': 'm.weibo.cn',
    'Referer': 'https://m.weibo.cn/u/1812616552',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
}
connect = {
	'host':'localhost',
	'port' : 3306,
    'user':'root',
    'password':'ssf971114',
    'db':'test',
    'charset':'utf8mb4',
}
db = pymysql.connect(**connect)
cursor = db.cursor()
sql = "truncate table ccfans"
cursor.execute(sql)
db.commit()
def get_page(page):
    params = {
        'containerid':'231051_-_fans_-_1812616552',
        'luicode':'10000011',
        'lfid':'1005051812616552',
        'type':'uid',
        'value':'1812616552',
        'since_id':page,
    }
    url = base_url + urlencode(params)
    print(url)
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json()
    except requests.ConnectionError as e:
        print('Error', e.args)
def parse_page(jsons):
    if jsons:
        try:
            items = jsons.get("data")
            print(items)
            items = jsons.get('cards')

            items = items[0]['card_group']
            # print(items)
        except:
            pass
        for item in items:
            weibofans = {}
            try:
                # print(item1)
                # print(item2)
                weibofans['name'] = item['user']['screen_name']
                weibofans['id'] = item['user']['id']
                weibofans['fans'] = item['desc2']
                sql = "insert into ccfans(fanname,fanid,follower) values (\'{}\',\'{}\',\'{}\')".format(weibofans['name'],weibofans['id'],weibofans['fans'])
                cursor.execute(sql)
                db.commit()
                yield weibofans
            except:
                pass


if __name__ =='__main__':
    for page in range(1,2):
        jsons = get_page(page)
        # print(json.dumps(jsons,indent=2))
        results = parse_page(jsons)
        # print(results)
        # for result in results:
        #     print(result)


