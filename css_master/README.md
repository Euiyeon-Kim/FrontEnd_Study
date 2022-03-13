# 목차

1. [기본 CSS](#기본-css)
2. [Week1 - Flex](#week1)
3. [Week2 - Grid](#week2)

# 기본 CSS

## 자식 selector

```css
.child:nth-child(2) {
    background: blue;
}
```

# Week1

## 기존 Display

1. block (default)
   옆으로 큰 마진을 가지고 한 줄에 하나의 element

2. iline-block

    - 블록 속성을 유지하면서 한 줄에 여러 element를 둘 수 있음
    - Element 사이에 이상한 margin이 생김

3. inline
    - width랑 height를 결정할 수 없음

## Flex

-   바로 위 component가 flex container여야 함
-   기본 flex-direction은 row
-

### Main-axis / Cross-axis

-   Flex container에서 아이템들이 추가되는 축이 main-axis
-   flex-direction이 row일 경우 x축이 main-axis, y축이 cross-axis
-   main-axis의 아이템을 움직일 때는 justify-content 옵션 사용
-   cross-axis의 아이템을 움직일 때는 align-items 옵션 사용

### 자식 컴포넌트에서 위치 바꾸기

-   그동안은 부모 component에서 자식 component가 어디에 위치할 지 설정
-   자식 component에서 align-itmes(cross-axis) 축으로 본인만 이동 가능
-   자식 컴포넌트에서 order 설정 시 html 수정 없이 위치 바꾸기 가능 / default order는 다 0

### Flex-wrap / Flex-flow

-   기본적으로 flex는 element를 한 줄에 우겨 넣는데에만 관심이 있음
-   width를 설정해둬도 element를 우겨 넣으면 width가 감소
-   flex-wrap: nowrap -> 한 줄에 우겨넣어라
-   flex-wrap: wrap -> child의 크기를 유지해라
-   flex-flow로 direction 먼저 적고 wrap 쓰면 한 줄로 단축 가능

### Align-content

-   flex안의 component가 여러 줄일 때 줄 배치를 어떻게 할 것인지 결정
-   줄 간격을 어떻게 둘건지

### Flex-grow / Flex-shrink

-   Flex-shirink 옵션으로 다른 컴포넌트에 비해 몇 배 더 찌부시킬지 결정 가능
-   Flex-grow 옵션으로 남은 공간을 어떻게 가져갈 지 결졍 가능

    ```css
    /*남은 공간을 박스 2와 3이 1:2 비율로 나눠 가짐*/
    .box:nth-child(2) {
        flex-grow: 1;
    }
    .box:nth-child(3) {
        flex-grow: 2;
    }
    ```

### Flex-basis

-   Flex-grow, Flex-shrink 전에 basic 크기를 제공

# Week2

## Grid

-   Flex로는 그리드 형태를 만들기 어려워서 등장

### grid-template-row / grid-template-column

-   Template으로 표 쉽게 생성 가능
    ```css
    body {
        display: grid;
        grid-template-columns: 250px 250px 250px;
        column-gap: 10px;
        row-gap: 10px;
    }
    ```
-   repeat(반복 횟수, 반복 대상)으로 쉽게 반복 가능
    ```css
    grid-template-columns: repeat(4, 200px);
    ```
-   grid-template-areas로 레이아웃 생성 가능
    ```css
    .grid {
        grid-template-areas:
            'h h h h'
            'c c c n'
            'c c c n'
            'f f f f ';
    }
    .footer {
        grid-area: f;
    }
    ```

### grid-column-start / grid-column-end 

-   Grid에 들어가는 element에서 직접 언제 시작하고 언제 끝나는지 알려줄 수 있음

    ```css
    .header {
        grid-column-start: 1;
        grid-column-end: 5; /*두 칸짜리*/
        grid-column: 1 / 5; /*위 두 줄이랑 같은 의미*/
        grid-column: 1 / -1; /*처음부터 끝까지*/
        grid-column: span 4; /*네 칸 차지*/
        grid-column: 1 / span 4; /*시작 줄 지정 네 칸 차지*/
    }
    ```
### grid-area
- grid-row-start / grid-column-start / grid-row-end / grid-column-end 순으로 적어서 단축 가능

### grid-template

-   모든 템플릿 다 통합해서 적기
    ```css
    .grid {
        /*각 줄 끝에 높이 지정*/
        grid-template:
            'h h h h' 1fr
            'c c c n' 2fr
            'f f f f' 1fr / 1fr 1fr 1fr 1fr; /*맨 마지막에 각 column 크기 지정*/
    }
    .footer {
        grid-area: f;
    }
    ```
-   Grid template에서는 repeat 사용 안됨

### Justify-items / Align-itmes / Place-items

-   Flex랑 비슷하게 동작
-   row가 justify-items, column이 align-items
-   Default는 stretch -> 각 칸을 다 채우기
-   place-items: vertical horizontal을 띄어쓰기로 구분해서 한 줄로 씀

### Justify-content / Align-content / Place-content

-   justify-item은 칸 하나하나를 의미
-   content는 칸들이 합쳐진 그리드 자체를 의미
-   row가 justify-content, column이 align-content
-   place-content: vertical horizontal을 띄어쓰기로 구분해서 한 줄로 씀

### Justify-self / Align-self / Place-self

-   row가 justify-self, column이 align-self
-   place-self: vertical horizontal을 띄어쓰기로 구분해서 한 줄로 씀

### Grid-auto-column / row / flow

-   grid-auto-flow: 설정한 그리드 크기보다 커졌을 경우 content를 늘릴 방향
-   grid-auto-columns: 설정한 그리드 크기보다 커졌을 경우 추가할 cell의 크기

### Minmax

-   Grid 한 Cell의 크기를 정할 수 있음
    ```css
    .grid {
        grid-template-columns: repeat(10, minmax(100px, 1fr));
    }
    ```
-   minimum을 만족할 수 없는 화면 크기가 되면, 스크롤이 생김

### Auto-fill / Auto-feat

-   auto-fill: 조건을 만족하는 가장 많은 column 생성
    ```css
    .grid:first-child {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
    ```
-   auto-fit: 현재 화면에 맞게 stretch
    ```css
    .grid:first-child {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    ```

### Max-content / Min-content

-   Content 크기에 따라 grid 크기도 변경 가능
-   max-content: Content가 필요한 만큼 박스를 늘림
-   min-content: Content가 차지하는 minimum만큼 박스를 줄임
