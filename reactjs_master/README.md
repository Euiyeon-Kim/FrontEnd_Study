# 목차

1. [Week2](#week2)
2. [Week3](#week3)
3. [Week4](#week4)

# Week2

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

# Week3

## Typescript

-   Built on top of JS
-   Strongly-typed JS -> 프로그램이 시작하기 전에 type check
-   웹 브라우저는 JS 밖에 지원하지 않기 때문에 배포 전에 TS를 JS로 컴파일 해야함
-   Typescript(.ts) / Typescript + React(.tsx)
-   DefinitelyTyped 레포에 기존 Node package들의 타입이 명시되어 있는데, 이를 설치하면 JS에서 작성된 라이브러리도 사용 가능

## Interface

-   Typescript에게 Object의 shape을 설명해주는 방법

    ```typescript
    interface CircleProps {
        bgColor: string
        borderColor?: string // ? indicates optional
    }
    function Circle({ bgColor }: CircleProps) {
        return <Container />
    }
    ```

-   디폴트 값 설정하기
    ??를 사용해서 Default값 설정 가능
    ```typescript
    function Circle({ bgColor, borderColor }: CircleProps) {
        return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
    }
    ```

## State

-   React에서는 state선언을 통해 값이 바뀔 때 마다 rendering 가능
    ```typescript
    const [value, setValue] = useState(1)
    ```
-   Typescript는 초기값을 통해 자료형 예측
-   명시적으로 여러 개 설정 가능
    ```typescript
    const [value, setValue] = useState<number | string>(1)
    ```
-   Event도 type을 지정하면 auto complete 사용할 수 있음
    ```typescript
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event
        setValue(value)
    }
    ```

## Theme

-   Styled-component Theme을 Typescript와 함께 사용하려면 Theme의 type을 customize한 styled.d.ts 파일 필요

-   아래와 같은 형식으로 기존의 styled-components의 type inherit

    ```typescript
    // import original module declarations
    import 'styled-components'

    // and extend them!
    declare module 'styled-components' {
        export interface DefaultTheme {
            borderRadius: string

            colors: {
                main: string
                secondary: string
            }
        }
    }
    ```

# Week4

## React Query

-   편리하게 데이터를 Fetch할 수 있음

## React Router with Typescript

-   주소로 전달한 파라미터를 사용할 때도 이전과 마찬가지로 interface 알려줘야함

    ```typescript
    // Version 1
    const { coinId } = useParams<{ coinId: string }>()

    // Version 2
    interface RouteParams {
        coinId: string
    }
    const { coinId } = useParams<RouteParams>()
    ```

## 전체 Document에 style 적용하기

-   styled-component로 전체 document에 style을 적용하려면 createGlobalStyle 생성

    ```typescript
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    )
    ```

-   하나의 component만을 반환해야하기 때문에 GlobalStyle과 Router를 <></>와 같은 Fragment로 감싸서 반환

-   GlobalStyle 내부에 [다음 내용](https://github.com/zacanger/styled-reset/blob/master/src/index.ts) 복사

## ETC

-   HTML 특수문자 우측화살표 &rarr;
