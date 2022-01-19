# 목차

1. [Week1](#week1)
2. [Week2](#week2)
3. [Week3](#week3)
4. [Week4](#week4)
5. [Week5](#week5)
6. [Week6](#week6)
7. [Week7](#week7)
8. [Week8](#week8)

# Week1

## Why JS?

-   브라우저가 있으면 JS는 설치가 필요없음 (내제되어 있기 때문에)
-   프론트엔드 개발이되는게 JS 밖에없음

## What can be done

-   three.js: 3d 그래픽 생성 가능
-   React native: JS로 앱 만들기 가능
-   Electron: JS로 데스크탑 앱 만들기 가능
-   백엔드 제어도 가능
-   socket.io: 실시간 여러 기능 구현 가능
-   ml5.js: 머신러닝가능

## 브라우저

-   콘솔에서 JS 코드로 interaction 가능
-   HTML을 열어서 css와 js코드 실행

## Default

-   ! 치면 html 기본 포멧 작성 가능
-   보통 js 파일은 html body 태그의 하단에 위치
-   콘솔 항상 열고 에러 체크하기

# Week2

## Variable 정의

-   const(상수): 중간에 값 변경 불가(err)
-   let(변수): 중간에 값 변경 가능
-   보통 const로 작성하고 필요한 경우에만 let 사용
-   var: 옛날 방식으로 어디서나 값 변경 가능

### Const 수정 기준

-   const로 정의된 무언가에 뭘 대입하려고 하면 에러
    ```javascript
    const arr = ["a", "b", "c"];
    arr.push("d"); // That's ok
    arr = false; // That's not ok
    ```

## Special datatype

-   boolean: true or false
-   null: 자동으로는 절대 안생김 / 개발자가 할당해줬을 때만
-   undefined: variable을 정의할 때 initialization 없이 정의했을 경우

## Array

```javascript
const weekend = ["sat", "sun"];
```

-   데이터 타입과 관계없이 item 삽입 가능 (python과 유사)
-   \- 인덱싱 불가
-   push로 append
-   const여도 push 가능

## Object

-   Dictionary랑 거의 같은 형태인데 key가 아니라 property
-   '='가 아니라 ':' 사용
-   값에 접근할 때도 대괄호 필요없이 dot으로 접근
    ```javascript
    const player = {
        id: "keywi",
        rank: 1,
    };
    player.score = 100;
    ```

## Function

-   아래와 같은 방식으로 정의
    ```javascript
    function hi(name) {
        console.log("HELLO " + name);
    }
    ```
-   object 안에도 function 삽입 가능

## Input 받기

-   prompt(): 문자열 Input을 받고 싶을 때 사용
    -   옛날 방식
    -   css 수정 불가
    -   JS가 다음 코드 execution을 멈추게 함

## ETC

-   string + string 연산 시 둘 다 " or ' 통일 해줘야 함
-   variable 이름은 lowerCamelCase
-   데이터의 타입 확인하기
    ```javascript
    console.log(typeof "TTT");
    ```
-   parseInt(): string to int / 변환할 수 없는 형태일 경우 NaN return
-   isNaN(): 값이 NaN인지 아닌지 확인
-   === 연산자: 진짜 똑같은지 확인 / type이 다르면 다르다고 취급
    ```javascript
    5 === "5"; // false
    ```
-   == 연산자: type을 변환해서
    ```javascript
    5 == "5"; // true
    ```

# Week3

## Document

-   JS에서 html element들에 접근 가능한 object
-   document를 통해 html정보를 읽어오고 변경할 수 있음
-   getElementById(): html에서 id로 element 가져오기
-   getElementsByClassName(): html에서 class로 element 가져오기
-   getElementsByTagName(): html에서 tag로 element 가져오기
-   querySelector(): css selector와 같은 형태로 html에서 element 가져오기 (맨 처음거 하나만 return)
-   querySelectorAll(): css selector와 같은 형태로 html에서 element 가져오기 (조건에 맞는거 다 return)

## Window

-   Document와 마찬가지로 JS에서 기본적으로 접근 가능

## Event

-   addEventListener(event, function): event발생 시 function 수행
-   element.event = function 형태로도 가능
    ```javascript
        // 둘이 똑같음
        h1.onClick = function
        h1.addEventListener("click", function)
    ```
-   addaddEventListener는 나중에 removeEventListener로 제거 가능
-   console.dir() 했을 때 on\_형태의 property들은 listen 가능한 event라고 보면 됨

## CSS와 연동하기

-   css 파일에 class를 설정
-   js 파일에 이벤트 발생 시 class를 추가하거나 제거
    ```javascript
        h1.classList.toggle(class) // class가 있다면 제거 없다면 추가
    ```
-   className을 수정하면 class가 통채로 바뀜

## ETC

-   console.dir: console.log보다 더 자세한 정보 제공

# Week4

## User input

-   HTML에서 form 태그로 받을 수 있음
-   input 태그내에 유효성 검사 요소들은 form 태그 안에 있을 때만 사용가능
    ```html
    <form id="login">
        <input required maxlength="15" type="text" placeholder="What is your name?" />
        <button>Log in</button>
    </form>
    ```
-   input 태그 내의 button을 누르거나 type이 "submit"인 input을 누르면 submit 동작수행 (submit 동작에는 새로고침 포함)
-   Default 동작을 막기 위해서는 event handle함수에 전달되는 인자에서 preventDefault 호출
    ```javascript
    function onSubmit(event) {
        // 더이상 새로고침 하지 않음
        event.preventDefault();
    }
    object.addEventListener("submit", onSubmit);
    ```

## String

-   `와 $ 사용시 python의 f-string 같은 효과 볼 수 있음
    ```javascript
        ₩Hello ${name}₩
    ```

## Saving information

-   브라우저에 정보를 저장하려면 local storage 사용
-   setItem으로 key value 추가 가능

# Week5

## Interval

-   특정 주기마다 실행되는 기능 구현
-   setInterval(실행시킬 함수, 실행시킬 주기 ms)
-   1000ms는 1초

## Timeout

-   특정 주기 이후에 실행되는 기능 구현
-   setTimeout(실행시킬 함수, 얼마나 기다리고 실행할지 ms)

## Date

-   Date()로 정보 가져오기 가능
    ```javascript
    const date = new Date();
    date.getDay(); // 요일 정보
    date.getDate(); // 날짜 정보
    date.getFullYear(); // 년도 정보
    ```

## Padding

-   string.padStart(길이, 패딩)
-   string의 길이가 지정한 길이 미만일 경우 지정 길이가 되도록 시작부에 패딩
-   padEnd도 있음

# Week6

## Random 변수 생성

-   Math.random(): 0~1 사이의 난수 생성

## HTML element 추가하기

-   element 생성
    ```javascript
    // 태그가 img인 html element 생성
    const bg = document.createElement("img");
    // html에 추가
    document.body.appendChild(bg);
    ```

# Week7

## 리스트 태그

-   ol: ordered list
-   ul: unordered list
-   dl: definition list

## Element 제거

-   const에 html 요소를 불러오고 .remove() method 사용

## Local storage

-   JSON.stringify(obj) method로 어떤 오브젝트던 json 형식의 string으로 변환 가능
-   위 방법으로 생성한 string은 JSON.parse(str) method로 다시 object로 복원 가능

## for 문

-   IterableObject.forEach(함수) 형태
    ```javascript
    arr.forEach(funcName);
    ```
-   arrow function 형태로 짧게 작성도 가능
    ```javascript
    arr.forEach((element) => {
        console.log("HELLO");
    });
    ```

## Array filtering

-   array에서 element를 제거하는게 아니라 특정 element가 빠진 array를 반환
    -   const filteredArr = arr.filter(filterFunc)로 return 값을 받아줘야함
-   arr.filter(filterFunc)로 실행
-   각 element마다 없앨지 말지 여부 결정
-   filterFunction에서 true 반환시 남겨둠

# Week8

## 위치 가져오기

-   navigator 사용
    ```javascript
    navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
    ```

## Fetch

-   fetch는 promise operation
    ```javascript
    fetch(url).then((response) => {
        console.log(response);
    });
    ```
