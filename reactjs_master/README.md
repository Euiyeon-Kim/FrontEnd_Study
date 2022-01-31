# 목차

1. [Week1](#week1)

# Week1

## Styled components

-   ReactJS component처럼 생성 가능
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

-   style extension
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
