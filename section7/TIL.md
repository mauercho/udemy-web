## 전체 선택자, 요소 선택자

- 전체선택자 : 잘 안씀. 전체 선택

```css
* {
  background-color: cyan;
}
```

- 요소 선택자: 지정된 타입의 모든 항목 선택, 쉼표를 이용하여 선택자 여러 개 합치기 가능.

```css
button {
  font-size: 30px;
  background-color: #a8dadc;
}

h1,
h2 {
  color: #1d3557;
}
```

## ID 선택자

- coolors 사이트 컬러 찾기 좋은 사이트임.
- 특정 요소에 id="이름" 쓰면됨.
- css 스타일 쓰는 곳에 #이름 {} 써서 요소 줄 수 있음.
- 하나의 id는 페이지 내에 한번만 나와야 함.
- 중복 되면 안됨. 고유한 식별자여야 함.

```css
#signup {
  background-color: #1d3557;
  color: #f1faee;
}
```

## 클래스 선택자

- 특정 요소에 class="이름" 쓰면됨.
- css 스타일 쓰는 곳에 .이름 {} 써서 요소 줄 수있음.
- 요소 선택자와 더불어 가장 많이 쓰이는 선택자임.

```css
.tag {
  background-color: #e63946;
  color: #f1faee;
  font-size: 16px;
}
```

## 자손 선택자

- 띄어쓰기를 이용한 선택자
- li a { } -> li 태그안의 모든 a 들을 선택해라.

```css
.post a {
  color: #457b9d;
  font-weight: 700;
  text-decoration: none;
}
```

- 이런식으로 특정 클래스 안에 요소를 넣어줄 수도 있음.
- 얼마나 단계 차이나든 상관 없음. 자손에만 있으면 됨.

## 인접 선택자

- \+ 써서 씀. h1 + p {} 이러면 h1 뒤에 오면서 같은 단계에 있는 p태그 선택

```css
h2 + button {
  font-size: 20px;
}
```

## 직계 자손 선택자

- 부등호 > 써서 씀. 바로 아래에 있는 태그 선택함. 즉 한 단계 아래만 선택함.

```css
footer > a {
  color: #457b9d;
}
```

## 속성 선택자

- 특정 속성을 가진 요소 선택 가능

```css
input[type="password"] {
  color: greenyellow;
}
/* 타입이 password인 input만 바꿔줌 */

section[class="post"] {
}
/* 위의 예시를 다른 방법으로도 쓸 수 있음. */
section.post {
}

a[href*="google"] {
  color: #1d3557;
}
/* google이 들어가 있는 태그들의 색깔을 바꿔라 */
a[href$=".org"] {
  color: #1d3557;
}
/* .org로 끝나는것들을 바꿔라. */
```

## 가상 클래스

- 선택자 끝에 붙여 상태를 특정하는 키워드 ex)커서 올려주면 아래에 줄 생기고 그런 거.
- 키워드는 : 로 시작함.

```css
.post a:hover {
  text-decoration: underline;
}
/* post클래스 안에 a태그 위에 마우스 커서 올리면 밑줄 */

.post button:active {
  background-color: #02c39a;
}
/* 버튼 클릭할 때 누르고 있으면 빨간색으로 변화하는등 활성화 시키는 거임. */

.post:nth-of-type(2n) {
  background-color: #dfe8dc;
}
/* 형제 그룹 내 위치에 따라 선택할 수 있는거. 짝수번째마다 background색깔 다르게 설정한거임. n 안쓰고 2만 쓰면 그냥 2번째것만 바뀜.*/
```

- 이외에도 :checked 를 쓰면 체크박스 같은 예시에서 체크되면 색깔 바뀌거나 하게 만들 수 있음.

## 가상 요소

- :: 를 이용해서 씀.
- 첫글자만 색깔 바뀌게 첫 줄만 색깔 바뀌게 등등 설정 가능

```css
h2::first-letter {
  font-size: 50px;
}
/* 첫 글자만 크게 */

p::first-line {
  color: purple;
}
/* 첫 줄만 보라색으로 */

p::selection {
  background-color: #fcbf49;
}
/* 드래그 한 줄 배경 색깔 바뀌게 */
```

- 유사 요소는 :: 가상 클래스는 : 쓰는데 크롬에서는 : 쓰든 :: 쓰든 되긴함. 그래도 잘 써야함.

## 계단식 CSS

- 스타일 적용할때 최상단부터 흘러서 다음 스타일 시트로 넘어가는 식임. 순서가 중요함.

```css
h1,
h2 {
  color: blue;
}
h1,
h2 {
  color: yellow;
}
/* 이 경우 노란색으로 적용함.*/
```

## 우선순위 CSS

- 하나 이상의 스타일이 겹치는 경우 더 구체적인 선택자의 스타일을 선택함.
- ID > CLASS > 요소 선택자.
- chrome inspect에서 우선순위 때문에 탈락한거 화인 가능함.
- 브라우저에서 여러 css 미리 적용해 볼 수 도 있음.
- 인라인 스타일이 우선순위가 높긴 하는데 안씀.
- !important 도 있는데 이거는 개별 스타일 지정에 사용할 수 있는 선택자임. 이게 원탑. 자동으로 최우선
- https://specificity.keegan.st/ 여기서 높은 것이 우선순위 높은거임.

```css
button {
  background-color: magenta !important;
}
```

## CSS 상속

- 구체적인 특성을 지정하지 않은 하위 요소에 상위 항목 특성이 적용되는 것을 말함.
- 상속 받는 것도 있고 안 받는 것도 있음. color 같은 경우 input 태그 button 태그 등에는 적용안됨.
- 적용시키는 법 inherit 쓰면 됨.
- mdn 에서 상속 가능 여부 확인 가능.

```css
button,
input {
  color: inherit;
}
```
