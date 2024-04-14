## Flexbox란 ?

- CSS에 생긴지 오래 되지 않은 도구
- Flexbox를 이용하면 하나의 컨테이너 안에서 어떤 요소를 크게 하고 어떤 요소를 작게 할지 요소들 사이에 공간을 얼마나 띄우고 요소들을 각각 어디에 배치할지 등등 다양한 요소를 보기 좋게 배열하면서 레이아웃을 유연하게 조정할 수 있음.

## Flex-Direction

- display:flex; 를 주면 세로로 되있던 컨테이너가 가로로 정렬되는 것을 볼 수 있음.
- 본축은 왼쪽에서 오른쪽 그렇기 때문에 콘텐츠가 왼쪽에서 오른쪽으로 정렬되는 거임.
- flex-direction으로 본축 결정. default 는 row. -> 이걸로 본축이 결정됨.
- flex-direction을 row, row-reverse, column, column-reverse 다양하게 줄 수 있음.

## justify-content
- 본축을 기준으로 요소와 콘텐츠를 어떻게 배치할지 결정하는 속성임.
- 따라서 flex-direction 이 어떻게 되어있는지에 따라 가로로 적용될지 세로로 적용될지 알 수 있음.
- default는 flex-direction: flex-start;
- center 는 중앙
- space-between: 바깥쪽 여백 다 없애고 요소 사이에 간격 띄움.
- space-around: 요소마다 여백 생김. 근데 양쪽 바깥만 균등하지 않음. 요소 사이는 2가 있다면 끝 요소와 끝 사이에는 1의 여백
- space-evenly: 이거 쓰면 전체가 균등

## Flex-wrap
- wrap, nowrap, wrap-reverse 쓸 수 있음.
- nowrap 상태면 1000 px 짜리 컨테이너에 400px 짜리 박스 5개가 들어가면 박스가 꾸겨져서 들어감.
- wrap을 주면 박스 크기는 유지된 채로 다음 박스가 교차축에 따라 나타남.
- reverse 를 주면 교차축을 거꾸로 하는 거임. ex) flex-direction: row 면 교차축은 위에서 아래인데 flex-wrap:reverse; 주면 아래에서 위로 설정되어서 나옴,

## align-items
- 교차축을 따라 아이템을 배열함. justify-content은 주축을 따름.
- default는 align-items: flex-start;
- flex-end, centeer 등 있음.
- baseline도 있는데 안에 텍스트가 있을 경우 텍스트에 맞춰서 정렬됨,
- wrap-reverse는 교차축 거꾸로 하기 때문에 같이 쓰면 여러 조합 가능

## align-content
- 행이나 열이 여러개일때 교차축을 기준으로 정렬함.
- flex-wrap을 wrap으로 해야함.
- center flex-start flex-end space-between 등 다 적용 가능

## align-self
- 단일 요소에 사용하거나 플렉스 컨테이너에서 두 개 요소에 개별로 사용함.

```css
div:nth-of-type(1) {
  align-self:center;
}
div:nth-of-type(5) {
  align-self:flex-end;
}
```
- 이런 식으로 줄 수 있음. 유연성 부여.

## flex-basis, grow & shrink

1. flex-basis: 요소가 배치되기 전에 요소의 최초 크기 결정함.
2. flex-grow: 공간이 있을 때 요소가 그 공간을 얼마나 차지할지 정함. max-width를 줘서 최대 길이를 조절해 줄 수 있음.
3. flex-shrink: 요소들이 줄어드는 비용을 통제함. 다른 요소에 비해 얼마나 더 줄어들지 설정하는 거임. 0으로 주면 아예 안줄어듬. default는 1임.

## flex shorthand

- flex 속기법도 있음. 그냥 flex: 써주는 거임.
- 세개 써주면 flex-grow, flex-shrink, flex-basis 순서임.
- 두개 써주면 flex-grow flex-shrink 인데 하나가 너비이거나 px em 이라면 flex-grow와 flex-basis임.
- 한개면 flex-grow

## 미디어 쿼리 개요

- 반응형 디자인은 사용자의 화면 크기에 따라 반응하는 웹사이트
- 미디어 쿼리를 통해서 이 작업을 할 수 있음.
- 크롬 브라우저에서 개발자 도구를 열면 웹페이지를 다른 기기로 볼 수 있게 할 수 있음. cmd + shift + M

## 미디어 쿼리의 능력

```css
@media (max-width: 1500px){
    h1 {
        color: yellow;
    }
}
```
- 이런 식으로 주는거임. 괄호 안에 max-width 또는 min-width 를 써줘서 최소 길이 일때 최대 길이 일때를 써줄 수 있음.

```css
@media (min-width: 600px) and (max-width: 800px){
    h1 {
        color: purple;
    }
}
```
- and를 써줄 수 도 있음.

```css
@media (max-width: 500px){
    h1 {
        color: red;
    }
}
@media (max-width: 1000px){
    h1 {
        color: orange;
    }
}
```
- 위의 방식처럼쓰면 뒤에 orange가 있고 1000px까지 orange기 때문에 빨간색 안나오고 계속 orange색 나올거임.

```css
@media (min-width: 500px){
    h1 {
        color: orange;
    }
}
@media (min-width: 1000px){
    h1 {
        color: yellow;
    }
}
@media (min-width: 1500px){
    h1 {
        color: green;
    }
}
```
- 보통 위의 방식으로 씀.

```css
 @media (orientation: landscape) {
 body {
     background-color: magenta;
 }
}
```
- 이런 식으로 쓰면 화면 가로 방향일 때 배경색 바뀜.

