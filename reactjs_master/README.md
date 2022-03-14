# 목차

1. [Week2](#week2)
2. [Week3](#week3)
3. [Week4](#week4)
4. [Week5](#week5)
5. [Week6](#week6)
6. [Week7](#week7)

# Week2

## Styled components

-   ReactJS component처럼 생성 가능 -> div 위치에는 html에 원래 있는 태그만 사용 가능
    ```javascript
    const Box1 = styled.div`
        background-color: tomato;
        width: 100px;
        height: 100px;
    `;
    // App에서 return <Box1></Box1>
    ```
-   props를 사용해서 Component를 수정가능하게 만들기 가능

    ```javascript
    const Box = styled.div`
        background-color: ${props => props.bgColor};
        width: 100px;
        height: 100px;
    `;
    // App에서 <Box bgColor="pink"></Box> or <Box bgColor="tomato"></Box>
    ```

-   style extension -> custom 태그도 사용 가능
    ```javascript
    const Circle = styled(Box)`
        border-radius: 50px;
    `;
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
        `;
    ```

-   styled component에서 하위 태그도 접근 가능

    ```javascript
    const Box = styled.div`
        background-color: tomato;
        animation: ${rotate} 1s linear infinite;
        span {
            font-size: 40px;
        }
    `;
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
        bgColor: string;
        borderColor?: string; // ? indicates optional
    }
    function Circle({ bgColor }: CircleProps) {
        return <Container />;
    }
    ```

-   디폴트 값 설정하기
    ??를 사용해서 Default값 설정 가능
    ```typescript
    function Circle({ bgColor, borderColor }: CircleProps) {
        return (
            <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
        );
    }
    ```

## State

-   React에서는 state선언을 통해 값이 바뀔 때 마다 rendering 가능
    ```typescript
    const [value, setValue] = useState(1);
    ```
-   Typescript는 초기값을 통해 자료형 예측
-   명시적으로 여러 개 설정 가능
    ```typescript
    const [value, setValue] = useState<number | string>(1);
    ```
-   Event도 type을 지정하면 auto complete 사용할 수 있음
    ```typescript
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setValue(value);
    };
    ```

## Theme

-   Styled-component Theme을 Typescript와 함께 사용하려면 Theme의 type을 customize한 styled.d.ts 파일 필요
-   아래와 같은 형식으로 기존의 styled-components의 type inherit

    ```typescript
    // import original module declarations
    import 'styled-components';

    // and extend them!
    declare module 'styled-components' {
        export interface DefaultTheme {
            borderRadius: string;

            colors: {
                main: string;
                secondary: string;
            };
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
    const { coinId } = useParams<{ coinId: string }>();

    // Version 2
    interface RouteParams {
        coinId: string;
    }
    const { coinId } = useParams<RouteParams>();
    ```

## 전체 Document에 style 적용하기

-   styled-component로 전체 document에 style을 적용하려면 createGlobalStyle 생성
    ```typescript
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
    ```
-   하나의 component만을 반환해야하기 때문에 GlobalStyle과 Router를 <></>와 같은 Fragment로 감싸서 반환
-   GlobalStyle 내부에 [다음 내용](https://github.com/zacanger/styled-reset/blob/master/src/index.ts) 복사

## React Query없이 API 값 가져오기

-   javascript랑 매한가지
    ```typescript
    useEffect(() => {
        (async () => {
            const response = await fetch(
                'https://api.coinpaprika.com/v1/coins'
            );
            const json = await response.json();
            setCoins(json.slice(0, 100));
        })();
    }, [coins]);
    ```
-   짧은 함수 즉시 실행하기
    ```typescript
    ;(function() => {})()
    ```

## React Query없이 Loading 화면 만들기

-   setState로 loading boolean변수 생성
    ```typescript
    const [loading, setLoading] = useState<boolean>(true);
    ```
-   useEffect등을 사용한 fetching이 끝나면 loading false로 전환
-   loading 상태에 따라 화면 다르게 return
    ```typescript
    return loading ? <Loading /> : <LoadDone />;
    ```
-   위와 같은 방식으로 사이트를 만들면 다른 사이트로 이동할 때 state가 사라져서 계속 reload

## 화면전환 시 주소가 아닌 방법으로 정보 전달하기

-   Link태그의 to에 path와 state를 포함해서 state에 다른 parameter 전달 가능

```typescript
    <Link
        to={{
            pathname: `/${coin.id}`,
            state: { name: `${coin.name}` },
        }}
    >
```

-   위와 같은 방법으로 정보 전달 시 이전 페이지에서 얻은 정보로 다음 페이지를 구성하기 때문에 URL을 통해 후반 페이지에 바로 접근하면 문제가 생김

## Nested Router

-   웹사이트의 탭이나 스크린의 여러 파트가 나누어져 있을 때 유용
-   URL을 사용해서 Element를 숨기고 보여줄 수 있음

    ```typescript
    return (
        ...
        <Link to={`/${coinId}/chart`}> Chart </Link>
        <Link to={`/${coinId}/price`}> Price </Link>

        <Switch>
            <Route path={`/${coinId}/price`}>
                <Price />
            </Route>
            <Route path={`/${coinId}/chart`}>
                <Chart />
            </Route>
        </Switch>
        ...
        )
    ```

-   useRoutematch를 사용하면 현재 url이 어딘지 체크할 수 있음

## React-Query

-   다음 코드를 한 줄로 축약할 수 있음

```typescript
const [coins, setCoins] = useState<CoinInterface[]>([]);
const [loading, setLoading] = useState<boolean>(true);
useEffect(() => {
    (async () => {
        const response = await fetch('https://api.coinpaprika.com/v1/coins');
        const json = await response.json();
        setCoins(json.slice(0, 100));
        setLoading(false);
    })();
}, [coins]);
```

-   일단 QueryProvider로 App 감싸고 시작

-   Loading 중인지 확인하는 기능도 제공

```typescript
// isLoading과 data는 예약어
// "allCoins"는 query의 id로 , query 마다 다른 값을 가지고 있어야 함
const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
```

-캐싱 기능도 제공하기 때문에 다른 페이지로 이동 후 돌아와도 loading하지 않음

```typescript
// 아래와 같이 캐시 확인 가능
function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
        </>
    );
}
```

-   여러 정보를 한 페이지에서 가져와야 할 때 아래와 같이 loading 가능

```typescript
// Query ID는 배열형태
// JS의 기본 기능을 사용해서 isLoading은 이름 변경기능
const { isLoading: infoLoading } = useQuery(['info', coinId], () =>
    fetchCoinInfo(coinId)
);
const { isLoading: priceLoading } = useQuery(['price', coinId], () =>
    fetchCoinPrice(coinId)
);
```

-   자동으로 interval마다 재 fetch 가능 (refetchInterval/ms)

```typescript
const { isLoading: priceLoading, data: price } = useQuery<IPrice>(
    ['price', coinId],
    () => fetchCoinPrice(coinId),
    { refetchInterval: 10000 }
);
```

## Helmet

-   DOM 구조의 head로 가는 기능 제공
-   npm install react-helmet
-   npm i --save-dev @types/react-helmet
-   favicon, title 등을 Routing된 페이지 마다 변경 가능

# Week5

## State management tool 없이 하위 component가 상위 component state에 접근

-   Props로 계속 state와 setState함수 전달 전달

```typescript
interface IRouterProps {
    toggleDark: () => void;
}
```

-   Global state: 컴포넌트 위치에 상관없이 계속 접근해야 하는 state
    ex) Theme, Login 상태 등등

## Recoil

-   계층적으로 전달해줄 필요 없이 바로 state에 접근 가능
-   Index에서 App을 RecoilRoot로 감싸주면 준비 끝

```typescript
    <React.StrictMode>
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>,
```

-   아무 component에서나 접근 가능한 atom 생성

```typescript
import { atom } from 'recoil';

export const isDarkAtom = atom({
    key: 'isDark',
    default: false,
});
```

-   Component에서 값 접근

```typescript
const isDark = useRecoilValue(isDarkAtom);
```

-   Component에서 값 수정 이전과 마찬가지로 Current value에 바로 접근 가능

```typescript
const setFn = useSetRecoilState(isDarkAtom)
<button onClick={() => setFn(cur => !cur)}>Toggle Mode</button>
```

-   위 두 작업을 한 번에 할 수 있음

```typescript
const [toDos, setToDos] = useRecoilState(toDoState);
```

-   Selector는 Atom의 state를 받아와서 정렬 및 가공할 수 있게 해줌

```typescript
export const toDoSelector = selector({
    key: 'toDoSelector',
    get: ({ get }) => {
        const toDos = get(toDoState);
        return [
            toDos.filter(toDo => toDo.category === 'TO_DO'),
            toDos.filter(toDo => toDo.category === 'DOING'),
            toDos.filter(toDo => toDo.category === 'DONE'),
        ];
    },
});
```

-   Selector는 useRecoilState로 받아왔을 때 get과 set 반환
    ```typescript
    const [toDos, setToDos] = useRecoilState(toDoSelector);
    ```

## React-hook-form

-   useForm 함수를 통해 필요한 모든 인자 Import

```typescript
const { register, handleSubmit, formState } = useForm();
```

-아래와 같이 해줌으로써 validation, onChange 다 가능

```typescript
<input
    {...register('UserName', {
        required: 'User name is required',
        minLength: 10,
    })}
    placeholder="Write a username"
/>
```

## ETC

-   JS에서 && 연산자의 좌항이 true면 우항을 그대로 반환한다

```typescript
    return {category !== 'DONE' && <button>Done</button>}
```

# Week6

## React-beautiful-dnd

-   드래그 앤 드랍 모션을 도와주는 라이브러리
-   DragDropContext -> Droppable -> Draggable 영역이 정의되어야 함
-   Draggable과 Droppable은 HTML elements를 함수 형태로 return 해야함

## DragDropContext

-   onDragEnd 함수를 prop으로 받음

## Draggable / Droppable

-   기본 셋업
    ```typescript
    return (
        <Droppable droppableId="one">
            {provided => (
                <ul ref={provided.innerRef} {...provided.droppableProps}>
                    <Draggable draggableId="first" index={0}>
                        {provided => (
                            <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                One
                            </li>
                        )}
                    </Draggable>
                </ul>
            )}
        </Droppable>
    );
    ```
-   dragHandleProps는 element의 아무데나 잡고 드래그가 가능하도록 함

## Draggable list 만들기

-   map으로 element return
-   map으로 각 item과 index받아올 수 있음 (like python enumerate)

    ```typescript
    {
        toDos.map((toDo, index) => (
            <Draggable key={toDo} draggableId={toDo} index={index}>
                {provided => (
                    <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <span>🔥</span>
                        {toDo}
                    </Card>
                )}
            </Draggable>
        ));
    }
    ```

-   key랑 draggableId는 무조건 같아야 함

## Draggable Element가 Droppable에서 빠졌을 때 크기 유지 하기

-   Draggable component 태그가 닫힌 후 바로 다음에 {provided.placeholder}

## Draggable이 끝나면 Array 순서 수정하기

-   arr.splice(시작 위치, 삭제할 요소 수, 추가할 요소)
-   mutation method
-   Recoil state는 mutatable 하지 않기 때문에 그대로 사용 불가

## 성능 개선 - react.memo

-   React.js에서는 부모 컴포넌트가 바뀌면 자식 컴포넌트는 싹 다 다시 렌더링
-   Component가 받고 있는 props가 바뀌지 않으면 rendering하지 말라고 설정 가능
    ```typescript
    export default React.memo(DraggableCard);
    ```

## Obecjt 중에 일부 key, value만 교체

```typescript
setAllBoards(oldBoards => {
    const changedBoard = [...oldBoards[source.droppableId]];
    changedBoard.splice(source.index, 1);
    changedBoard.splice(destination.index, 0, draggableId);
    return {
        ...oldBoards,
        [source.droppableId]: changedBoard,
    };
});
```

## Reference

-   React code에서 HTML element에 접근하고 수정하고 싶을 때 사용
-   vanilla javascript에서 document.getElementbyId와 유사한 기능

# Week7

## Framer Motion

-   ReactJS에서 애니메이션 도와주는 라이브러리
-   모든 html 태그를 지원하는데 motion.tag이름으로 컴포넌트 생성해야함
-   Styled component를 움직이려면 styled component 생성시 아래와 같이 생성
    ```typescript
    const Box = styled(motion.div);
    return (
        <Box
            transition={{ delay: 3, duration: 2 }}
            animate={{ borderRadius: '100px' }}
        />
    );
    ```
-   transition 옵션에서 물리 법칙을 어느정도 시뮬레이션 할 수 있음

## Varients

-   애니메이션의 스테이지
-   여러 애니메이션을 묶을 수 있음

    ```typescript
    const myVarient = {
    start: { scale: 0 },
    end: { scale: 1, rotateZ: 360, transition: { type: 'spring', damping: 10 } },
    }

    <Box variants={myVarient} initial="start" animate="end" />
    ```

-   자식 Component는 부모 component variant 옵션을 그대로 상속

    ```typescript
    // 이 때 circle에도 initial="start" animate="end" 옵션이 있는 것 처럼 동작
    return (
        <Box variants={boxVar} initial="start" animate="end">
            <Circle variants={circleVar} />
        </Box>
    );
    ```

-   자식 컴포넌트 애니메이션 속도 제어 가능
    ```typescript
    const boxVar = {
        start: {
            scale: 0.5,
        },
        end: {
            scale: 1,
            transition: {
                delayChildren: 0.5, // 자식 컴포넌트 전체 delay
                staggerChildren: 0.5, // 자식 컴포넌트 순서대로 +0.5씩 delay
            },
        },
    };
    ```
-   이벤트에 따라서도 제어 가능
    ```typescript
    return <Box variants={boxVar} whileHover="hover" whileTap="click" />;
    ```

## Motion Value

-   모션을 트랙킹하고 싶을 때 사용가능

    ```typescript
    const x = useMotionValue(0);
    return <Box style={{ x }} drag="x" dragSnapToOrigin />;
    ```

-   React state로 취급되지 않기 때문에 값이 변하더라도 component가 rerender되지 않음
-   transform 값을 interpolation을 통해 구할 수 있음

    ```typescript
    const x = useMotionValue(0);
    const scale = useTransform(x, [-800, 0, 800], [2, 1, 0]);
    return (
        <Wrapper>
            <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
        </Wrapper>
    );
    ```

-   HTML 태그 안에서 애니메이션 마다 속도 제어 가능

```typescript
    transition={{
        default: { duration: 3 },
        fill: { duration: 1, delay: 1 },
    }}
```

## AnimatePresence

-   Component가 사라지는 것도 animation으로 표현 가능 (exit 옵션에 추가 가능)

```typescript
return (
    <Box
        variants={boxVar}
        initial="start"
        animate="visible"
        exit="leaving"
    ></Box>
);
```

## Custom

-   Variant에 argument 전달할 수 있음

## Layout

-   외부에서 스타일이 바뀌더라도 animation으로 만들 수 있음
-   SharedLayout으로 두 개의 다른 component를 자연스럽게 렌더링할 수 있음
