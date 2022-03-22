import requests
from bs4 import BeautifulSoup

indeed_result = requests.get(
    "https://kr.indeed.com/jobs?q=python&fromage=last&start=0")

indeed_soup = BeautifulSoup(indeed_result.text, 'html.parser')

pagination = indeed_soup.find("ul", {"class": "pagination-list"})
pages = pagination.find_all("li")


spans = []
for page in pages:
    spans.append(page.find('span'))
print(spans)
