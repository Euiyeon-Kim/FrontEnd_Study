# 목차

1. [Week1](#week1)
2. [Week2](#week2)
3. [Week3](#week3)

# Week1

## Why ReactJS?

-   전 세계 top 10,000개 website 중 44.76%는 React JS 사용
-   페이스북의 투자 및 지원
-   큰 커뮤니티

# Week2

## ReactJS vs ReactDom

-   ReactJS는 어플리케이션이 interactive하도록 만들어 주는 library
-   ReactDOM은 React element들을 HTML의 body에 둘 수 있도록 해주는 library 혹은 package

## ReactJS vs VanillaJS

-   VanillaJS는 html의 element를 만들고 js에서 이를 가져와서 수정
-   ReactJS는 js에서 html element를 만들고 html에 삽입
-   코드 한 줄로 html element를 생성하고 event listener를 달아 둘 수 있음
    ```javascript
    const btn = React.createElement("button", { onClick: () => console.log("I'm Clicked") }, "Click me");
    ```

## ETC

-   CDN으로 React와 ReactDOM import 가능
    ```html
    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    ```

## JSX

-   javascript를 확장한 문법으로 html과 유사하게 생김
    ```jsx
    const Btnjsx = <button onClick={() => console.log("I'm Clicked")}>Click me</button>;
    ```
-   위 상태 그대로는 브라우저가 이해할 수 없음
    -   React.createElement 형태로 변환되어야 함
    -   해당 과정을 Babel이 해줄 것
-   직접 만든 component를 rendering할 때는 무조건 대문자로 component를 만들어어야함
-   component를 만들 때는 함수형태로 만들어 주어야 함

# Week3
