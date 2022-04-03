# 목차
1. [Layout 설계](#layout-설계)

# Layout 설계
- overflow-x: hidden으로 두면 가로 스크롤이 안생김
- margin: 0 auto는 상하 여백을 0으로 두고 좌우 여백을 균등하게 배분
- margin: auto으로 설정하면 해당 element가 차지할 수 있는 최대 margin 차지
- css 선택자 not
    ~~~css
    /*class가 product-name인거 빼고*/
    .local-nav-links a:not(.product-name){
        margin-left: 2em;
    }
    ~~~