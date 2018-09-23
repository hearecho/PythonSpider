from bs4 import BeautifulSoup
import requests
url = "http://www.baidu.com"

def __first():
    r = requests.get("http://www.example.com")
    r.encoding = r.apparent_encoding
    html = r.text
    soup = BeautifulSoup(html,'lxml')

    # print(soup.prettify())
    return soup

def __Tag(soup):
    print(soup.title)
    # print(soup.head)
    # print(soup.a)
    # print(soup.body)
    print(soup.p)
    #属性 name attrs
    print("p的name属性是"+str(soup.p.name))
    print("p的attrs属性是"+str(soup.p.attrs))
    #可以修改  也可以使用del soup.p['class']删除

def __String(soup):#获取内容
    print(soup.p.string)
    pass

#遍历文档树
#直接子节点

def __child(soup):
    #contents 输出方式为列表
    print("head的第一个子节点"+str(soup.head.contents[0]))
    print("head的第二个子节点"+str(soup.head.contents[0]))
    #childern 可遍历
    print("children")
    for child in soup.body.children:
        print(child)

#所有子孙节点
def __children(soup):
    for child in soup.descendants:
        print(child)

#父节点 parent 全部父节点 parents 用法和 child一样
#兄弟节点 next_sibling previous_sibling 用法相似 全部兄弟节点 加s
#前后节点 。next_element previous_element  用法相似 所有前后节点 加s

#搜索文档树 find_all() 以及其他几种 所有tag子节点
#参数设置  可以有 name, 字符串, 正则表达式, 列表，布尔类型的值 （匹配任何值）不返回字符串节点，
# 传方法即函数，keyword 参数即href = re.complie(''),id='link'
#还有 recursive 参数 调用tag的 find_all() 方法时,Beautiful Soup会检索当前tag的所有子孙节点,如果只想搜索tag的直接子节点,可以使用参数 recursive=False

#css选择器
#url = http://quotes.toscrape.com/page/1
class Select():
    url = ""

    def __init__(self,url):
        self.url = url
        r = requests.get(self.url)
        self.text = r.text
        self.soup = BeautifulSoup(self.text,"lxml")


    def return_soup(self):
        r = requests.get(self.url)
        r.encoding = r.apparent_encoding
        soup = BeautifulSoup(r.text,"lxml")
        return soup

    def select_tag(self,tag):
        return self.soup.select(tag)

    def select_class(self,class_):
        return self.soup.select(class_)# class_格式为 '.link1'

    def select_id(self,id_):
        return self.soup.select(id_)# id_ 格式为 '#link1'
        #此网站暂时木有 id属性

    def select_dul(self,tag,class_,id_):#组合查找即和写 class 文件时，标签名与类名、id名进行的组合原理是一样的，例如查找 p 标签中，id 等于 link1的内容，二者需要用空格分开
        if not id_:
            return self.soup.select(tag+" "+class_)
        if not class_:
            return self.soup.select(tag+" "+id_ )
        if not tag:
            return []

    def select_direct(self,tag1,tag2):#tag1 和tag2 不能缺少 直接子标签查找
        if not tag1 or not tag2:
            return []
        else:
            return self.soup.select(tag1+" > "+tag2)

    def select_attrs(self,tag,attrs):# attrs   格式 'a[class='sister']'
        if not tag:
            return self.soup.select(attrs)
        elif not attrs:
            return self.soup.select(tag)
        else:
            return self.soup.select(tag+" "+attrs)


if __name__ == "__main__":
    # __first()
    # soup = __first()
    # __Tag(soup)
    # __String(soup)
    # __children(soup)
    # __children(soup)
    # print(type(soup))
    s = Select("http://quotes.toscrape.com/")
    # smalls = s.select_tag("small")
    # for small in smalls:
    #     print(small)
    # egs = s.select_class(".text")
    # for eg in egs:
    #     print(eg)
    # egs = s.select_dul('span','.author','')
    # for eg in egs:
    #     print(eg)
    # egs = s.select_direct('head','title')
    # for eg in egs:
    #     print(eg)
    # egs = s.select_attrs('body','div[itemtype="http://schema.org/CreativeWork"]')
    # for eg in egs:
    #     print(eg)
    egs = s.select_dul('span','.author','')
    for eg in egs:
        print(eg.get_text())
        #或许文本信息 get_text()

