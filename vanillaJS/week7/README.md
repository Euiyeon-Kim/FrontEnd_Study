## 리스트 태그
- ol: ordered list
- ul: unordered list
- dl: definition list


## Element 제거
- const에 html 요소를 불러오고 .remove() method 사용


## Local storage
- JSON.stringify(obj) method로 어떤 오브젝트던 json 형식의 string으로 변환 가능
- 위 방법으로 생성한 string은 JSON.parse(str) method로 다시 object로 복원 가능


## for 문
- IterableObject.forEach(함수) 형태
    ~~~ javascript
        arr.forEach(funcName)
    ~~~
- arrow function 형태로 짧게 작성도 가능
    ~~~ javascript
        arr.forEach(element=>{console.log("HELLO")})
    ~~~

## Array filtering
- array에서 element를 제거하는게 아니라 특정 element가 빠진 array를 반환
    - const filteredArr = arr.filter(filterFunc)로 return 값을 받아줘야함
- arr.filter(filterFunc)로 실행
- 각 element마다 없앨지 말지 여부 결정
- filterFunction에서 true 반환시 남겨둠