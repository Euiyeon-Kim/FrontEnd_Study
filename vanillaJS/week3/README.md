## Document
- JS에서 html element들에 접근 가능한 object
- document를 통해 html정보를 읽어오고 변경할 수 있음
- getElementById(): html에서 id로 element 가져오기
- getElementsByClassName(): html에서 class로 element 가져오기
- getElementsByTagName(): html에서 tag로 element 가져오기
- querySelector(): css selector와 같은 형태로 html에서 element 가져오기 (맨 처음거 하나만 return)
- querySelectorAll(): css selector와 같은 형태로 html에서 element 가져오기 (조건에 맞는거 다 return)


## Window
- Document와 마찬가지로 JS에서 기본적으로 접근 가능


## Event
- addEventListener(event, function): event발생 시 function 수행
- element.event = function 형태로도 가능
    ~~~ javascript
        // 둘이 똑같음
        h1.onClick = function
        h1.addEventListener("click", function)
    ~~~
- addaddEventListener는 나중에 removeEventListener로 제거 가능
- console.dir() 했을 때 on_형태의 property들은 listen 가능한 event라고 보면 됨


## CSS와 연동하기
- css 파일에 class를 설정
- js 파일에 이벤트 발생 시 class를 추가하거나 제거
    ~~~ javascript
        h1.classList.toggle(class) // class가 있다면 제거 없다면 추가
    ~~~
- className을 수정하면 class가 통채로 바뀜


## ETC
- console.dir: console.log보다 더 자세한 정보 제공