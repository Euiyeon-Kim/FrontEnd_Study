## Variable 정의

- const(상수): 중간에 값 변경 불가(err)
- let(변수): 중간에 값 변경 가능
- 보통 const로 작성하고 필요한 경우에만 let 사용
- var: 옛날 방식으로 어디서나 값 변경 가능

### Const 수정 기준
- const로 정의된 무언가에 뭘 대입하려고 하면 에러
    ~~~ javascript
        const arr = ['a', 'b', 'c']
        arr.push('d') // That's ok
        arr = false   // That's not ok
    ~~~


## Special datatype

- boolean: true or false
- null: 자동으로는 절대 안생김 / 개발자가 할당해줬을 때만
- undefined: variable을 정의할 때 initialization 없이 정의했을 경우


## Array
~~~ javascript
const weekend = ["sat", "sun"]
~~~
- 데이터 타입과 관계없이 item 삽입 가능 (python과 유사)
- \- 인덱싱 불가
- push로 append
- const여도 push 가능


## Object
- Dictionary랑 거의 같은 형태인데 key가 아니라 property
- '='가 아니라 ':' 사용
- 값에 접근할 때도 대괄호 필요없이 dot으로 접근
    ~~~ javascript
        const player = {
            id: 'keywi',
            rank: 1,
        }
        player.score = 100
    ~~~


## Function
- 아래와 같은 방식으로 정의
    ~~~ javascript
        function hi(name){
            console.log("HELLO "+name)
        }    
    ~~~
- object 안에도 function 삽입 가능


## Input 받기
- prompt(): 문자열 Input을 받고 싶을 때 사용
  - 옛날 방식
  - css 수정 불가
  - JS가 다음 코드 execution을 멈추게 함
 

## ETC

- string + string 연산 시 둘 다 " or ' 통일 해줘야 함
- variable 이름은 lowerCamelCase
- 데이터의 타입 확인하기
    ~~~ javascript
        console.log(typeof "TTT")
    ~~~
- parseInt(): string to int / 변환할 수 없는 형태일 경우 NaN return 
- isNaN(): 값이 NaN인지 아닌지 확인
- === 연산자: 진짜 똑같은지 확인 / type이 다르면 다르다고 취급
    ~~~ javascript
        5 === '5' // false
    ~~~
- == 연산자: type을 변환해서 
    ~~~ javascript
        5 == '5' // true
    ~~~
    
    
