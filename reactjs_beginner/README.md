# 목차

1. [Week1](#week1)
2. [Week2](#week2)
3. [Week3](#week3)
4. [Week4](#week4)
5. [Week5](#week5)
6. [Week6](#week6)

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
    const btn = React.createElement('button', { onClick: () => console.log("I'm Clicked") }, 'Click me')
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
    const Btnjsx = <button onClick={() => console.log("I'm Clicked")}>Click me</button>
    ```
-   위 상태 그대로는 브라우저가 이해할 수 없음
    -   React.createElement 형태로 변환되어야 함
    -   해당 과정을 Babel이 해줄 것
-   직접 만든 component를 rendering할 때는 무조건 대문자로 component를 만들어어야함
-   component를 만들 때는 함수형태로 만들어 주어야 함
-   이렇게 만든 component는 여러번 쓸 수 있음

# Week3

## State

-   React.useState(initialValue)은 initial value와 해당 value를 setting 할 수 있는 함수를 return 함
    ```javascript
    const [data, setData] = React.useState()
    ```
-   이 때 setData(3)을 호출하면 data에 3을 대입함
-   state를 업데이트 하는 방법
    -   setData 함수로 직접 업데이트 하기
    -   현재 값 기반으로 값을 업데이트하는 함수 사용하기
    -   아래 두 코드는 같은 역할
    ```javascript
    const [counter, setCounter] = React.useState(0)
    setCounter(counter + 1)
    setCounter(current => current + 1)
    ```

## ETC

-   ReactJS는 이전 rendering된 component와 달라진 부분만 다시 rendering
-   배열을 한 번에 받아서 변수로 만들려면 아래와 같이 하면 됨
    ```javascript
    const a = ['A', 'B']
    const [x, y] = a
    ```
-   보통 이름 지을 때 a, setA 같은 식으로 작명
    ```javascript
    const [data, setData] = React.useState(0)
    ```
-   js에 for나 class가 preoccupy되어 있으므로 htmlFor, className 같은 식으로 써줘야함
-   jsx에 js 코드를 삽입하려면 대괄호로 감싸야함

# Week4

## Props

-   html에서 속성 정하듯이 우리가 만든 component에도 property 전달 가능
    ```javascript
    return (
        <div>
            <Btn text="Save Changes" />
            <Btn text="Clear" />
        </div>
    )
    ```
-   부모 component의 state가 변하면 자식 component도 다 re-render됨
-   React.memo()로 component를 설정해두면 부모 component의 state가 바뀌더라도 자식 component의 props가 바뀌지 않으면 re-render 되지 않음
    -   시간 절약 가능

## Proptypes

-   Proptypes 라이브러리로 props의 자료형 확인가능
-   required 여부도 확인가능
-   Default value도 설정가능
    ```javascript
    const Btn = ({ text, size = 14 }) => {}1
    ```

# Week5

## CSS Module

-   _.module.css를 작성하고 _.js에 해당 css 파일을 import 해서 class 이름으로 사용가능
    -   css의 class가 중첩되는 것을 방지할 수 있음
    -   의도하지 않게 이름 때문에 style이 꼬이는거 방지
    -   랜덤으로 class 이름 부여

# Week6

## useEffect

-   component 내의 state가 변경되면 무조건 rendering 다시 함
-   이 때 api call 같은 작업 등이 component 생성에 들어가 있으면 reload할 때 마다 api 요청을 보내야함
-   이를 방지 하기 위한 기능 useEffect(effect, dependency)
    ```javascript
    useEffect(() => console.log('Run once'), [state])
    ```
    -   dependency가 바뀌면 effect를 실행시킴

## cleanup

-   component가 사라질 때도 특정 함수 실행시키기 가능
    ```javascript
    function Hello() {
        useEffect(() => {
            console.log('Hi :)')
            return () => console.log('Bye :(')
        }, [])
        return <h1>HELLO!</h1>
    }
    ```
-   자주 사용하는 편은 아님

# Week7

## React Router

```javascript
<Router>
    <Switch>
        <Route path="/movie/:id">
            <Detail />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
</Router>
```

-   위와 같이 여러 페이지 라우팅 가능
-   :id 의 형태로 parameter 전달 가능
