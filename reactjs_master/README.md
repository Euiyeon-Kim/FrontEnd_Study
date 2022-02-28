# 목차

1. [Week1](#week1)

# Week1

## Styled components

-   ReactJS component처럼 생성 가능 -> div 위치에는 html에 원래 있는 태그만 사용 가능
    ```javascript
    const Box1 = styled.div`
        background-color: tomato;
        width: 100px;
        height: 100px;
    `
    // App에서 return <Box1></Box1>
    ```
-   props를 사용해서 Component를 수정가능하게 만들기 가능

    ```javascript
    const Box = styled.div`
        background-color: ${props => props.bgColor};
        width: 100px;
        height: 100px;
    `
    // App에서 <Box bgColor="pink"></Box> or <Box bgColor="tomato"></Box>
    ```

-   style extension -> custom 태그도 사용 가능
    ```javascript
    const Circle = styled(Box)`
        border-radius: 50px;
    `
    ```
-   같은 style을 다른 태그로 사용하고 싶을 경우
    ```javascript
    <Circle as="a" href="/" bgColor="tomato"></Circle>
    // anchor 태그로 사용
    ```
-   style이 아닌 property를 공통적으로 넘겨주고 싶을 경우

    ```javascript
    const Inputs = styled.input.attrs({ required: true, minLength: 10 })`
        background-color: plum;
    ```

-   helper function인 keyframes를 import해서 animation 설정 가능 / 이 때 animation 정의 부분은 순수 css코드

    ```javascript
    const rotate = keyframes`
            0%{
                transform: rotate(0deg);
                border-radius: 0px;
            } 50%{
                border-radius: 100px;
            } 100%{
                transform: rotate(360deg);
                border-radius:  0px;
            }
        `
    ```

-   styled component에서 하위 태그도 접근 가능

    ```javascript
    const Box = styled.div`
        background-color: tomato;
        animation: ${rotate} 1s linear infinite;
        span {
            font-size: 40px;
        }
    `
    // Box 태그 하위의 span에 접근
    ```

-   App을 ThemeProvider 태그로 감싸서 테마 설정 가능
