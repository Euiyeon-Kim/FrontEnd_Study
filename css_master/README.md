# 목차

1. [기본 CSS](#기본-css)
2. [Week1](#week1)

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
