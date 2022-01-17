## Interval
- 특정 주기마다 실행되는 기능 구현
- setInterval(실행시킬 함수, 실행시킬 주기 ms)
- 1000ms는 1초

## Timeout
- 특정 주기 이후에 실행되는 기능 구현
- setTimeout(실행시킬 함수, 얼마나 기다리고 실행할지 ms)


## Date
- Date()로 정보 가져오기 가능
    ~~~ javascript
        const date = new Date()
        date.getDay()       // 요일 정보
        date.getDate()      // 날짜 정보
        date.getFullYear()  // 년도 정보
    ~~~


## Padding
- string.padStart(길이, 패딩)
- string의 길이가 지정한 길이 미만일 경우 지정 길이가 되도록 시작부에 패딩
- padEnd도 있음