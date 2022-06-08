# 목차

1. [Week2](#week2)

# Week2

## Sraping이란?

웹으로부터 정보를 가져오는 것

## Request
- URL로 부터 정보 받아오기
    ~~~python
    indeed_result = requests.get("https://www.indeed.com/jobs?q=python&limit=50")
    ~~~

## BeautifulSoup
- html 형태로 받아온 정보 파싱하기
    ~~~python
    indeed_soup = BeautifulSoup(indeed_result.text, "html.parser")
    ~~~
- find()로 html component찾기
    ~~~python
    pagination = indeed_soup.find("ul", {"class": "pagination-list"})
    ~~~
