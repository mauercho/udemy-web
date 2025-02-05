## 박스 모델: 가로와 세로

- css 모든게 박스 모델에 들어감.
- 패딩이 있고 마진이 있고 박스 사이에 여백이 있음.
- width, height 각각 가로 세로 값 정하는 특성

```css
div {
  width: 200px;
  height: 200px;
}
```

## 박스 모델: 테두리와 모깎기

- 테두리의 굵기나 스타일, 색상 같은 특성
- 테두리의 상하좌우를 다르게 적용할 수도 있고 곡률도 조정할 수 있음.
- 테두리는 보통 픽셀 단위 씀. 일반적으로 테두리는 얇고 웬만해선 규격이 바뀌지 않기 때문
- 색상 + 스타일 + 크기 나와야지 테두리 나옴.

```css
#one {
  background-color: #e5989b;
  border-width: 5px;
  border-color: black;
  border-style: solid;
  /* box-sizing: border-box; 이 특성 넣으면 테두리를 기준으로 요소의 크기가 결정됨. */
  margin-left: 50px;
  margin-bottom: 100px;
}

#two {
  background-color: #b5838d;
  border-color: #ffcdb2;
  border-width: 3px;
  border-style: dashed;
  border-left-width: 8px; /* 왼쪽만 크기 키움. */
  padding-right: 50px;
  margin: 200px;
}

#three {
  background-color: #6d6875;
  border: 4px solid black; /* 속기법 테두리의 두깨 색상 속성을 한번에 작성하는 특성*/
  border-left-style: dotted; /* 왼쪽 스타일만 dotted로 바꿈*/
  border-radius: 50%; /* 모서리의 곡률을 조절하는 특성 백분율로 써서 박스 크기의 상대적 비율을 조정할 수도 있고 px줄 수도 잇음. 50% 넣으면 거의 원형 */
}
```

## 박스 모델: 패딩

- 콘텐츠 박스와 요소를 둘러싼 테두리 사이에 남은 공간을 패딩이라고 함.
- 공간이 필요할 때마다 패딩을 사용하면 됨.
- padding-top padding-left padding-right padding-bottom 각각 패딩 주는 방법 있음.
- 속기법으로 패딩 주는 방법도 있음.
  - padding: 10px; -> 이거는 모든 방향 패딩
  - padding: 5px 10px; -> 이거는 수직 방향 | 수평방향
  - padding: 1px 2px 2px; -> top | 수평방향 | bottom 잘 안씀
  - padding: 5px 1px 0 2px; -> top | right | bottom | left
- px뿐만아니라 mm 등 배웠던 모든 단위 쓸 수 있음.

## 박스 모델: 여백

- 한 요소가 있고 또 다른 요소가 있을 때 두 요소에 둘린 각 테두리 간의 간격 테두리가 보이지 않아도 없는 것은 아님.
- 좌, 우, 상, 하 다있음.
- 패딩처럼 속기법 가능 padding이랑 속기법 똑같음.
- body 태그 자체에 기본적으로 margin 있음. 보통 0px로 바꾸고 시작함.
- 여백을 지우고 시작한 후 필요할 때 여백을 만드는 게 나음.

## 디스플레이 요소

- INLINE, BLOCK, INLINE-BLOCK 세가지 있음. display: inline; 이런식으로 바꾸기 가능.
  - INLINE: width 와 height 무시. margin과 padding은 수평방향으로만 밀고 수직 방향으로는 안 밀음
  - BLOCK: width, height, margin 과 padding이 다 먹힘.
  - INLINE-BLOCK: inline처럼 행동하는데 margin, height, padding, width 다 먹힘. display:"inline-block";
  - none: display:"none"; 하면 안 보임. 나중에 js 할때 잘 쓰임.

## CSS 단위

- Relative -> 모두 골고루 쓰임.
  - EM
  - REM
  - VH
  - VW
  - %
- Absolute
  - px -> absolute 중에는 거의 이거밖에 안 쓰임.
  - pt
  - cm
  - in
  - mm

1. %

   - 항상 부모의 특성과 상대적임. -> 픽셀 값을 계산할 필요가 없음.
   - 몇몇 특성의 경우 퍼센티지가 다르게 작용함. 부모 요소가 아니라 자체의 폰트 크기를 기준으로 삼거나 요소 자체의 다른 값을 기준으로 삼는 경우가 있음.

2. em

   - 이것 역시 다른 값에 영향 받음.
   - 1em이면 부모 요소와 똑같은 크기가 됨.
   - 글꼴 크기의 em은 부모 요소의 글꼴 크기에 좌우 but 여백의 em은 글꼴 크기에 좌우

   ```css
   button {
   font-size: 1em;
   padding: 0 1em;
   border-radius: 0.5em;
   background-color: #2a9d8f;
   color: white;
   }
   	<!--이런 식으로 쓸 수있음. 부모 크기에 따라 글씨 바뀌는 등 다른 것들도 함께 바뀜-->
   ```

3. rem
   - 여러 요소가 겹쳐있는 경우 1.5em 이런식으로 줬을 때 안으로 갈 수록 크기가 겹쳐서 커지는 문제 있음.
   - rem은 root 요소인 HTML 요소의 글씨 크기에 따라 바꿈. -> 문서 전체에서 하나의 글꼴 크기에 비례하여 바뀐다는 뜻.
   - border-radius 같은 거 써야할 때는 em과 rem을 같이 쓰는 경우 많음. 글꼴 크기가 계산되고 거기에 radius를 맞춰야하기 때문에.
