## CSS란?

- CSS는 캐스케이딩 스타일시트임
- 내용이 담긴 형식
- 문서를 시각적으로 표현하고 나타내기 위해서 사용하는 언어
- 규칙이 있음.

## 방대한 CSS에 당황하지 않기.

- 양이 상당함.
- 모두 머리에 담아둘 필요가 없음.
- 많이 사용하는 특성은 자연스럽게 기억하게 될 거임.
- css shadow mdn 이런식으로 검색해서 보기.

## 스타일을 올바르게 담기.

- 작성 스타일에는 몇가지 옵션이 있음.
	1. HTML 요소에 직접 스타일을 작성하기. -> 좋은 방법은 아님.
		ex) \<h1 style="color: purple">Hello World</h1>
				\<button style="background-color: palegreen">I AM BUTTON</button>
				\<button style="background-color: palegreen">Another button!</button>
	2. CSS 를 직접 작성하는 방법임. -> 1번보다 훨씬 좋은 방법이지만 여러 문서나 여러 페이지에 동일한 스타일을 적용하려는 경우 여전히 문제가 있음.
		ex) \<style>
        h2 {
            color: palevioletred;
        }
   	\</style>
	3. 외부 스타일 시트에 스타일을 작성하는 방법. 별도의 .css 파일 만듬.
		ex) \<link rel="stylesheet" href="app.css"> 헤드에 이런 거 넣고 css 작성하는 거임.
      * rel = "stylesheet"는 딱히 필요없는데 보통 써줌.
			* href 속성은 스타일시트의 경로나 위치를 써줌.

## 색 및 배경색 속성

- 색상을 주는 방법은 다양함. 그냥 컬러를 쓰는 방법도 있고 16진수, rgb, hsl, hsla, rgba 같은 방법 등이 있음.
- color는 배경색이 아니라 글자색을 바꿔줌.
- background-color 는 배경색 바꿔줌,
- background만 써줘도 되는데 background-color보다 많은 일을 함.
- css 다룰 때는 항상 세미 콜론 중요

```css
h2 {
    color: #5FCFFC;
    background-color: rgb(89, 151, 0);
}

button {
    color: magenta;
    background-color: cyan;
}

p {
    color: olive;
    background: rgb(228, 161, 37);
}

body {
    background-color: #c5e;
}

```

## 색상 시스템: RGB와 알려진 색상

- 명명된 색상은 140가지 정도
- 요즘 모니터는 1600만 가지 이상의 색상을 표시함.
- RGB모델로 다양한 색깔 만들 수 있음. R G B 다 더하면 하얀색 다 없으면 검정색
- color picker 쳐서 원하는 색 RGB를 알 수 있음.
- 분홍색을 얻으려면 빨강을 최대치로 올리고 녹색 파랑 더하는 느낌. 빛이 많이 필요하니까.

## 색상 시스템: 16진법

- 헥스 컬러 코드
- #+6글자 16진수
- 2개씩 R, G, B를 나타냄.
- cc55ee 같은 거는 c5e 로 줄여서 써줘도 똑같음.

## 일반 텍스트 속성

1. text-align: left, right, center 등등
	* 요소 내적인 정렬
2. font-weight: normal, bold, lighter, bolder, 100, 900
	* 폰트 굵기 조절
	* 숫자도 쓸수 있고 키워드도 쓸 수 있음.
	* normal은 400 이고 높을 수록 굵어짐.
3. text-decoration: underline, underline dotted red, none, green wavy underline
	* underline은 밑줄
	* line-through는 취소선
	* 색깔도 같이 넣어줄 수 있음. ex) text-decoration: #f78120 underline wavy
	* none 써주면 없앨수도 있음. a 태그 같은 경우 밑줄이 생기는데 none하면 없어짐.
4. line-height: normal, 2.5
	* 줄간격 지정함.
	* 텍스트 자체나 그 크기를 조절하는게 아니라 간격만 조절하는 거임.
5. letter-spacing: 10px
	* 글자 사이의 간격 조절하는 거임.

## 픽셀로 글꼴 크기 지정

- font-size 입력하고 크기 설정하면 됨.
- 다양한 옵션들이 있음. 지금 당장은 픽셀만 배움
- 픽셀은 가장 흔히 사용되는 절대 단위
- font-size: 100px;

## 글꼴 집합 (폰트 패밀리)

- 폰트 패밀리는 요소의 폰트를 변경할 때 사용함. https://www.cssfontstack.com
- 사이트에 있는 폰트가 모든 기기에서 지원되지 않을 수도 있고 어떤 사용자에게는 다른 폰트로 보일 수도 있음.
- font-family: Segoe UI, Futura, Arial; 앞에서 부터 폰트 보고 있는 걸로 선택함.
- 폰트 타입 패밀리로 지정 가능. 그럼 그 패밀리에서 내 기기에 구현 가능한 폰트 선택해서 써줌.
ex) fantasy, sans-serif 등등