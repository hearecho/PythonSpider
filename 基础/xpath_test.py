#xpath用法
#时间 2018 /1/14
import requests
from lxml import etree

#url = "http://quotes.toscrape.com/"
#在firfox的控制台 使用 $x('//span/@class')  调用xpath
class Xpath():
    def __init__(self,url):
        self.url = url
        r = requests.get(url)
        r.encoding = r.apparent_encoding
        self.text = r.text
        self.html = etree.HTML(self.text)
        self.result = etree.tostring(self.html)

    def get_tag(self,tag):
        return self.html.xpath(tag) #获取所有标签为 tag 格式为 '//tag'

    def get_class(self,tag):
        return self.html.xpath(tag+'/@class')

    def get_limchild(self,tag1,tag2):
        return self.html.xpath(tag1+tag2)#类型 tag //li tag2 /a[@href="link.html"]

    def get_allchild(self,tag1,tag2):
        return self.html.xpath(tag1+tag2)#类型 tag //li tag2 //a 若tag2为 第一个标签

    def get_lasttag(self,tag):
        return self.html.xpath(tag)#用 //li[last()] 倒数第二个可以用 last()-1

    def get_add(self,class_):
        return self.html.xpath(class_)
if __name__ == "__main__":
    # text = '''
    # <div>
    #     <ul>
    #          <li class="item-0"><a href="link1.html">first item</a></li>
    #          <li class="item-1"><a href="link2.html">second item</a></li>
    #          <li class="item-inactive"><a href="link3.html">third item</a></li>
    #          <li class="item-1"><a href="link4.html">fourth item</a></li>
    #          <li class="item-0"><a href="link5.html">fifth item</a>
    #      </ul>
    #  </div>
    # '''
    # html = etree.HTML(text)#补全标签
    # result = etree.tostring(html)
    # print(result)
    # html = etree.parse('hello.html')#读取文件
    # result = etree.tostring(html,pretty_print=True)
    # print(result)
    x = Xpath('http://quotes.toscrape.com/')
    # egs = x.get_tag('//a')#获取 span标签
    # print(type(egs))
    # print(type(egs[0]))
    # for eg in egs:
    #     print(eg)
    # egs = x.get_class('//span')
    # for eg in egs:
    #     print(eg)
    # egs = x.get_limchild('//span','/a[@class="tag"]')
    # for eg in egs:
    #     print(eg)
    # egs = x.get_allchild('//span','//small')
    # for eg in egs:
    #     print(eg)
    # eg = x.get_lasttag('//span[last()]/a/@class')
    # print(eg)
    egs = x.get_add('//*[@class="tag"]')
    for eg in egs:
        print(eg)