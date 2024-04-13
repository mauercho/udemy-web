## 불투명도와 알파 채널

### 알파채널
- 알파채널은 색상이 비치는 정도(투명도)를 결정함.
- 1은 전혀 투명하지 않다는 뜻 0은 완전히 투명하다는 뜻
- background-color: rgba(255,255,255,0.7) 이런 식으로 쓰면 됨. 마지막 요소가 알파채널
- 적용하는 부분의 배경색상에만 영향을 줌.
- background color 만 바뀌면 글자의 색은 그대로임.
- 예전에 rgb 쓰던거 #00cca0 + 알파채널를 나타내는 16진수 두개로 rgba 만들어 줄 수 있음. ex) #00cca0FF

### 불투명도(opacity)
- opacity = 0.5; 이런 식으로 써주면됨. 0 쪽이 완전히 투명하다는 뜻
- 전체 요소의 투명도를 결정함.
- 이건 안에 있는 요소 전체가 투명해짐. 다른 콘텐츠가 있으면 해당 콘텐츠도 영향을 받는다.

## 위치 속성(position)
- static, relative, absolute, fixed, sticky 있음.
1. static
	- 디폴트가 static임
	- 이 상태면 top 같은 거 줘도 안움직임.
2. relative
	- 원래 위치에서 상대적인 위치로 이동함.
	- #relative #middle {
    position: relative;
    top: 50px;
    left: 50px;} 밑으로 50px 오른쪽으로 50px
3. absolute
	- 요소가 문서의 일반적인 흐름에서는 제거됨.
	- 가까이 위치한 조상이 있다면 해당 조상을 기준으로 함.
	- 조상이 없다면 초기 컨테이닝 블록 (body)를 기준으로 상대적인 위치에 배치됨.
	- 부모에 relative 주고 요소에 top bottom 등 위치 주면 그 부모 기준으로 움직임.
4. fixed
	- 일반적인 문서 흐름에서 제거됨.
	- 공간도 차지하지 않음.
	- 그 위치에 고정해 있음.
5. sticky
	- 고정되지 않은 상태로 스크롤 따라가지만 위쪽에 도달하면 그 위치에 머물음.

## CSS 전환(transition)
- 여러가지 속성으로 이루어짐.
- 처음 숫자 쓰면 그 숫자에 맞춰서 변환일어남. 두번째 숫자 쓰면 그 두번째 숫자가 지연시간임.
- .circle {
    width: 300px;
    height: 300px;
    background-color: magenta;
    transition: background-color 1s ease-in, border-radius 2s;
}

	.circle:hover {
			background-color: cyan;
			border-radius: 50%;
	} -> 이런 식으로 각각의 요소마다 transition 하는 시간을 다르게 지정할 수 있음.
- transition-timing-function은 변환하는 방법임. ex) ease in
- ease-in 은 처음에 느렸는데 빨라지는거.
- easings.net 이 사이트에서 timing function 확인 가능.
- transition all 써주면 모든 요소 적용 가능

## CSS 변환(transform)

- 확대, 축소, 늘리기, 기울이기 등 있음.
- 블록 레벨 요소에 margin을 auto 로 넣으면 요소가 컨테이너 중앙에 있게 됨.

```css
section:first-of-type h1:nth-of-type(1){
    /* transform-origin: top right; */
    transform: rotate(45deg);
} /* 회전함. transform-origin으로 변형 기준값 설정 가능. center; top left; 50px 5px; 등등
보통 2차원 평면 기준으로 회전이지만, transform: rotateX rotateY rotateZ 등을 쓸 수있음.
45deg -0.2turn 등등 넣을 수있음.
*/


section:first-of-type h1:nth-of-type(2){
    transform: scale(0.6);
}
/* 크기 크게 하거나 작게 하는거. 0.5 면 절반 비율로 축소 2, 1 넣으면 높이는 동일 너비 두배
scaleX 나 scaleY로 그것에 대한 것만 크기 변형 시킬 수도 있음.
*/

section:first-of-type h1:nth-of-type(3){
    transform: translateX(200px);
}/*
요소를 이동 시키는 기능. X축으로만 이동 translateX기 때문에 그리고 오른쪽으로 이동함.

*/
section:first-of-type h1:nth-of-type(4){
    transform: translate(-100px, 50px);
}/* 이런식으로 왼쪽 100px 아래쪽 50px 한꺼번에 움직이는 것도 가능*/

section:nth-of-type(2) h1:nth-of-type(1){
    transform: skew(30deg);
}
/* 기울이기. x와 y에 30도씩, 각각 줄라면 인자에 두개 써주거나 skewX 나 skewY 이용 */

section:nth-of-type(2) h1:nth-of-type(2){
    transform: skew(10deg, 5deg);
}

section:nth-of-type(2) h1:nth-of-type(3){
    transform: rotate(-20deg) scale(1.3);
}/* 동시에 쓰기*/

section:nth-of-type(2) h1:nth-of-type(4){
    transform: translateX(-500px) rotate(0.5turn) scaleY(1.5);
}

section:nth-of-type(2) {
    transform: scale(0.7) translateX(500px);
}
```

## 버튼 만들기

```css
body {
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #151b29;
} /* 구글 폰트 가져옴, html보면 head에 링크 해놓음 그래서 Roboto 쓸 수 있음.*/

button {
  background: none;
  color:#ffa260;
  border: 2px solid;
  padding: 1em 2em;
  font-size: 1em;
  transition: color 0.25s, border-color 0.25s, box-shadow 0.25s,transform 0.25s;
} /*  변환 속도 조절 요소마다 시간 다르게 적용*/

button:hover {
  border-color: #f1ff5c;
  color: white;
  box-shadow: 0 0.5em 0.5em -0.4em #f1ff5c;
  transform: translateY(-0.25em);
  cursor: pointer;
} /* 커서를 손으로 바꾸는 거. 글자는 흰색 테두리는 노란색 그림자 지게함. box shadow 요소에 따른 거는 검색 해봐야할듯. transform으로 Y축으로 띄워줌.*/
```

## 배경에 관한 진실

- 배경 이미지도 바꿀 수 있음.

```css
section {
    width: 80%;
    height: 800px;
    /* background-image: url("https://images.unsplash.com/photo-1564442038901-4f9a19d3d456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1227&q=80");
    background-size: cover;
    background-position: top; */
    background: center/cover url("https://images.unsplash.com/photo-1564442038901-4f9a19d3d456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1227&q=80");
    margin: 0 auto;
}

h1 {
    font-size: 150px;
    text-align:center;
    text-shadow: black -6px 6px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: lighter;
    color:white;
}
```

- background-size로 이미지의 크기를 바꿀 수 있는데 cover, contain, auto 등을 넣어줄 수 있음.
- contain은 비율을 유지하며 이미지 잘림 없이 꽉차게 표시됨. (잘림이 없기 때문에 이미지가 반복 될 수 있음.)
- cover는 비율 유지하며 꽉차게 나타나지만 잘림 있음. cover 많이 씀.
- backgroud-position으로 배경 시작점 지정해줄수 있음. bottom이면 사진 밑 부분 기준임.
- background-repeat: no-repeat; 으로 줘서 반복 안 나게도 가능함.
- background: 속기법임 위에 것들 다 넣을 수 있음. 근데 여기서 background size 요소를 넣을라면 position/size 이런식으로 줘야됨. ex) center/cover
- no-repeat 으로 주면 뒤에 배경 남을 수도 있는데 뒤에 색깔 넣어서 배경색 넣어 줄 수도 있음.

## 놀라운 구글의 글꼴

- fonts.google.com -> 여기에 폰트들 있음.
- Google 글꼴은 무료임.
- 선택하면 링크 나오는데 임베딩할 수 있음.

```html
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@100;400&display=swap"
        rel="stylesheet">
```

- 이런 식으로 넣어주기.

## 사진 블로그 코딩하기 연습

- html에 요소를 붙여쓰지 않으면 white space 가 존재.
\<span>hello\</span> \<span>world\</span> 이런 식으로 쓰면 hello world 처럼 사이에 white space 가 나옴. 안 나오게 하려면 span을 붙어야함.