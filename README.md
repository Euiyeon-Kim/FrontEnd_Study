# FrontEnd

### ToC
1. [다양한 HTML 태그](#다양한-HTML-태그)

## 다양한 HTML 태그
1. `<a>`: 앵커
    ~~~html
    <a href="사이트 주소">누르면 이동</a>
    ~~~
2. `<img>`: 이미지
    ~~~html
    <img src="이미지 경로" alt="이미지 설명">
    ~~~
3. `<em>` / `<i>` / `<del>` / `<ins>` / `<strong>` / `<b>`: 강조, 이탤릭체, 삭제선, 밑줄, 중요, 볼드


## HTML Attribute
1. style 속성: html에서 바로 css 코드 입력 가능
    ~~~html
    <h1 style="font-size:60px;">Heading 1</h1>
    ~~~
2. title 속성
    ~~~html
    <p title="메세지!">여기 hover하면 왼쪽 메세지 나옴</p>
    ~~~

## Javascript로 HTML element 조정하기
- getElementById 속성 사용하기
    ~~~javascript
    document.getElementById("demo").style.fontSize = "25px";
    ~~~