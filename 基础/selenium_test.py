from bs4 import BeautifulSoup
from selenium import webdriver


# url = "work.wutnews.net"
class Pythonautotest():


    def __init__(self):
        self.browser = webdriver.Firefox()
        self.source = ""

    def get_page(self,url):
        self.browser.get(url)
        self.source = self.browser.page_source()





    def find_id(self,id):
        return self.browser.find_element_by_id(id) #"imgVerifyCode"格式


if __name__ == "__main__":
    b = Pythonautotest()
    b.browser.get("http://work.wutnews.net/login.aspx")
    element = b.browser.find_element_by_id("imgVerifyCode")

    # print(b.browser.page_source)
    html = b.browser.page_source
    soup = BeautifulSoup(html,'lxml')
    res = soup.find('img',id="imgVerifyCode")
    print(res['src'])
