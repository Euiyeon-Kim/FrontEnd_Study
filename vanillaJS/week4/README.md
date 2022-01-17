## User input
- HTML에서 form 태그로 받을 수 있음
- input 태그내에 유효성 검사 요소들은 form 태그 안에 있을 때만 사용가능
    ~~~ html
        <form id="login">
            <input required maxlength="15" type="text" placeholder="What is your name?"/>
            <button>Log in</button>
        </form>
    ~~~
- input 태그 내의 button을 누르거나 type이 "submit"인 input을 누르면 submit 동작수행 (submit 동작에는 새로고침 포함)
- Default 동작을 막기 위해서는 event handle함수에 전달되는 인자에서 preventDefault 호출
    ~~~ javascript
        function onSubmit(event){
            // 더이상 새로고침 하지 않음
            event.preventDefault()
        }
        object.addEventListener("submit", onSubmit)
    ~~~

## String
-  `와 $ 사용시 python의 f-string 같은 효과 볼 수 있음
    ~~~ javascript
        ₩Hello ${name}₩
    ~~~

## Saving information
- 브라우저에 정보를 저장하려면 local storage 사용
- setItem으로 key value 추가 가능