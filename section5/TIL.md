## HTML 테이블

- 2차원의 행과 열 구조

## 테이블: TR, TD, Th, Thead, Tfoot, Tbody

- td는 테이블 데이터 셀
- tr은 표 안에 있는 셀들이 모인 행을 말함.
- th는 헤더를 정의함. 기본적으로 굵은 글씨체
- Thead, Tfoot, Tbody -> 이 요소들은 논리 섹션으로 분리하는 작업 외에 하는 일이 없음
- 표가 복잡하면 테이블 헤드와 바디를 지정하면 좋음. 시멘틱 마크업 작성하고 이해하기 쉬운 표를 만들어줌,

```html
    <table>
        <thead>
            <tr>
                <th>Animal</th>
                <th>Average mass
                    [kg (lb)]</th>
                <th>Maximum mass
                    [kg (lb)]</th>
                <th>Flighted</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ostrich</td>
                <td>104(230)</td>
                <td>156.8 (346)</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Somali Ostrich</td>
                <td>90 (200)</td>
                <td>130 (287)</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Wild Turkey</td>
                <td>13.5 (29.8)</td>
                <td>39 (86)</td>
                <td>Yes</td>
            </tr>
        </tbody>
    </table>
```
<table>
        <thead>
            <tr>
                <th>Animal</th>
                <th>Average mass
                    [kg (lb)]</th>
                <th>Maximum mass
                    [kg (lb)]</th>
                <th>Flighted</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ostrich</td>
                <td>104(230)</td>
                <td>156.8 (346)</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Somali Ostrich</td>
                <td>90 (200)</td>
                <td>130 (287)</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Wild Turkey</td>
                <td>13.5 (29.8)</td>
                <td>39 (86)</td>
                <td>Yes</td>
            </tr>
        </tbody>
    </table>

## 테이블: Colspan & Rowspan

- 여러 열이나 행에 걸친 셀을 생성하는 법
- colspan과 rowspan 요소 이용

```html
    <table>
        <thead>
            <tr>
                <th rowspan="2">Animal</th>
                <th colspan="2">Average Mass</th>
                <th rowspan="2">Flighted</th>
            </tr>
            <tr>
                <th>kg</th>
                <th>lb</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ostrich</td>
                <td>104</td>
                <td>230</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Somali Ostrich</td>
                <td>90</td>
                <td>200</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Wild Turkey</td>
                <td>13.5</td>
                <td>29.8</td>
                <td>Yes</td>
            </tr>
        </tbody>
    </table>
```

<table>
		<thead>
				<tr>
						<th rowspan="2">Animal</th>
						<th colspan="2">Average Mass</th>
						<th rowspan="2">Flighted</th>
				</tr>
				<tr>
						<th>kg</th>
						<th>lb</th>
				</tr>
		</thead>
		<tbody>
				<tr>
						<td>Ostrich</td>
						<td>104</td>
						<td>230</td>
						<td>No</td>
				</tr>
				<tr>
						<td>Somali Ostrich</td>
						<td>90</td>
						<td>200</td>
						<td>No</td>
				</tr>
				<tr>
						<td>Wild Turkey</td>
						<td>13.5</td>
						<td>29.8</td>
						<td>Yes</td>
				</tr>
		</tbody>
</table>

## 폼 요소

- 폼 요소는 텍스트 입력란이나 비밀번호 입력란, 버튼 및 체크 박스 등 여러 개별 폼 컨트롤을 품는 껍데기나 컨테이너에 가까음.
- 이메일, 이름, 비밀번호, 버튼 등 있음.
- 그룹화된 모든 입력을 담는 상자임. (컨테이너임)
- 폼 요소는 폼을 제출했을 떄 폼 데이터를 어디로 보낼지 지시함.
- action 속성 중요함. 폼이 제출되었을 때 데이터를 보낼 위치와 시간은 이 속성이 지정함.
- 폼 액세스는 입력 내용을 그룹화한 뒤 작은 배송 라벨을 붙여 어떤 지정된 목적지로 배출함.

## 일반적인 입력 형식

- 폼안에 들어가는 요소 중 가장 일반적인 요소는 \<input> 요소 -> 20개 이상의 입력란 생성 가능
- 닫는 태그가 없는 요소

```html
<form action="/tacos">
	<input type="text" placeholder="username">
	<input type="password" placeholder="password">
	<input type="color">
	<input type="number" placeholder="enter a number">
</form>
```

<form action="/tacos">
	<input type="text" placeholder="username">
	<input type="password" placeholder="password">
	<input type="color">
	<input type="number" placeholder="enter a number">
</form>

## 레이블

- \<label> 요소는 실제로 특정한 입력값이나 form control 및 텍스트와 직접적으로 연결되어 있음.
- id 와 for 속성을 이용

```html
  <p>
      <label for="username">Enter a Username:</label>
      <input id="username" type="text" placeholder="username" name="username">
  </p>
  <p>
      <label for="password">Enter a Password:</label>
      <input type="password" placeholder="password" id="password" name="password">
  </p>
  <p>
      <label for="color">Enter a Color:</label>
      <input type="color" id="color" name="color">
  </p>
  <p>
      <!-- Alternative way to label an input (less common) -->
      <label>
          Enter a Number:
          <input type="number" placeholder="enter a number" name="num">
  </label>
  </p>
```

<p>
    <label for="username">Enter a Username:</label>
    <input id="username" type="text" placeholder="username">
</p>
<p>
    <label for="password">Enter a Password:</label>
    <input type="password" placeholder="password" id="password">
</p>
<p>
    <label for="color">Enter a Color:</label>
    <input type="color" id="color">
</p>
<p>
    <!-- Alternative way to label an input (less common) -->
    <label>
        Enter a Number:
        <input type="number" placeholder="enter a number">
</label>
</p>

- 이런 식으로 연결됨. label 안에 input을 쓰면 for 하고 id 안써줘도 되지만 그렇게 쓰지 않는 게 표준임. (위의 예시의 마지막 부분)

## Button

- 특정 페이지들에서 보이는 log in 버튼, sign up 버튼 등은 대부분 css를 이용해서 버튼으로 보이게 한 링크임.
- 태그 중에도 button 태그 있음. \<button> \</button>

```html
<form action="/tacos">
    <!-- this button doesn't submit the form b/c of the "type" attribute -->
    <button type="button">Regular button (won't submit)</button>
    <!-- This button submits the form! -->
    <button>Submit!!!</button>
    <!-- So does this one: -->
    <input type="submit" value="Click Me!">
</form>
```

<form action="/tacos">
    <!-- this button doesn't submit the form b/c of the "type" attribute -->
    <button type="button">Regular button (won't submit)</button>
    <!-- This button submits the form! -->
    <button>Submit!!!</button>
    <!-- So does this one: -->
    <input type="submit" value="Click Me!">
</form>

- type 기본은 submit임. 이 타입에서 누르면 부모 form 제출
- type="button" 하면 폼 제출 안하는 아무것도 안하는 클릭만 되는 버튼이 됨. (자바스크립트에서 의미 가짐)
- \<input type="submit" value="Click Me!"> 이런 식으로 쓸 수 도 있음. 닫는 태그 없음.
- 폼 밖에 버튼 넣으면 기본값 동작이 없음.

## 이름 속성

- input에 매우 중요한 속성임.
```html
<form action="/tacos">
        <p>
            <label for="username">Enter a Username:</label>
            <input id="username" type="text" placeholder="username" name="username">
        </p>
        <p>
            <label for="password">Enter a Password:</label>
            <input type="password" placeholder="password" id="password" name="password">
        </p>
        <p>
            <label for="color">Enter a Color:</label>
            <input type="color" id="color" name="color">
        </p>
</form>
```

<form action="/tacos">
        <p>
            <label for="username">Enter a Username:</label>
            <input id="username" type="text" placeholder="username" name="username">
        </p>
        <p>
            <label for="password">Enter a Password:</label>
            <input type="password" placeholder="password" id="password" name="password">
        </p>
        <p>
            <label for="color">Enter a Color:</label>
            <input type="color" id="color" name="color">
        </p>
</form>

- 위의 예시에서 username 에 abcd 라고 글쓰면 name이 username이기 때문에 /tacos?username=abcd 이런 식으로 폼 제출함.
- 여러개 재출하면 &로 연결됨.
- 위의 예시같은 경우 url에 보이면 안되는 password까지 보이는데 get 요청이기 때문에 그럼. 나중에 post 등의 HTTP 요청 종류쓰면 안 보임.

## 구글과 레딧 검색하기

- 해당 값을 전송하는 입력값의 검색 쿼리에 대해 정확한 이름을 사용하면 됨.
- 페이지에서 q=dog를 원하는 데 name="query" 이런 식으로 써주면 query=dog 이런 식으로 들어감.
- 패턴을 맞춰야함.
- 폼에 button 이 없고 input 만 있는 경우 enter 치면 입력됨. 버튼 있어도 enter 치면 입력 됨.

```html
  <h3>Search Reddit</h3>
  <form action="https://www.reddit.com/search">
      <input type="text" name="q">
      <button>Search Reddit</button>
  </form>
  <h3>Search Google</h3>
  <form action="https://www.google.com/search">
      <input type="text" name="q">
      <button>Search Google</button>
  </form>
  <h3>Search Youtube</h3>
  <form action="https://www.youtube.com/results">
      <input type="text" name="search_query">
      <button>Search Youtube</button>
  </form>
```

<h3>Search Reddit</h3>
<form action="https://www.reddit.com/search">
    <input type="text" name="q">
    <button>Search Reddit</button>
</form>
<h3>Search Google</h3>
<form action="https://www.google.com/search">
    <input type="text" name="q">
    <button>Search Google</button>
</form>
<h3>Search Youtube</h3>
<form action="https://www.youtube.com/results">
    <input type="text" name="search_query">
    <button>Search Youtube</button>
</form>

## 체크박스

- type="checkbox", label 을 써줘야 모바일에서 label 누르는 것으로 체크 가능.
```html
<form action="/birds">
        <input type="checkbox" name="agree_tos" id="agree">
        <label for="agree">I agree to everything</label>
        <button>Submit</button>
</form>
```

<form action="/birds">
        <input type="checkbox" name="agree_tos" id="agree" checked>
        <label for="agree">I agree to everything</label>
        <button>Submit</button>
</form>

- 누르면 /birds?agree_tos=on 이라고 뜸.
- 체크하지 않고 누르면. /birds? 이렇게만 뜸.
- 뒤에 checked 넣으면 처음부터 체크된 상태로 나타낼 수있음.

## 라디오 버튼

- 그룹에서 하나만 선택 가능
```html
<form action="/birds">
    <p>
        <label for="xs">XS:</label>
        <input type="radio" name="size" id="xs" value="xs">
        <label for="s">S</label>
        <input type="radio" name="size" id="s" value="s">
        <label for="m">M</label>
        <input type="radio" name="size" id="m" value="m">
    </p>
</form>
```

<form action="/birds">
    <p>
        <label for="xs">XS:</label>
        <input type="radio" name="size" id="xs" value="xs">
        <label for="s">S</label>
        <input type="radio" name="size" id="s" value="s">
        <label for="m">M</label>
        <input type="radio" name="size" id="m" value="m">
    </p>
</form>

- radio type 을 하나로 묶으려면 이름이 같아야함.
- value 값 안 넣어주면 /birds?size=on 이 됨.
- value 값을 넣어주면 size=xs 이런 식으로 넣어짐.
- name을 같은 것을 주어야 하나만 선택가능함.

## 선택창
```html
<form action="/birds">
      <p>
          <label for="meal">Please Select an Entree</label>
          <select name="meal" id="meal">
              <option value="fish">Fish</option>
              <option value="veg">Vegetarian</option>
              <option value="steak">Steak</option>
          </select>
      </p>
</form>
```

<form action="/birds">
      <p>
          <label for="meal">Please Select an Entree</label>
          <select name="meal" id="meal">
              <option value="fish">Fish</option>
              <option value="veg">Vegetarian</option>
              <option value="steak">Steak</option>
          </select>
      </p>
</form>

- select 가 상위요소로 있어야 함. label 하려면 select 에 name과 id를 넣어야 함.
- 제출하면 meal=steak 이런 식으로 됨.
- option 속성을 selected 로 하면 미리 설정 되어 있게 할 수 있음.

## 범위

- range 써서 범위 줌.

```html
<form action="/birds">
    <p>
            <label for="cheese">Amount of Cheese:</label>
            <input type="range" id="cheese" min="1" max="100" value="75" name="cheese_level">
    </p>
</form>
```

<p>
    <label for="cheese">Amount of Cheese:</label>
    <input type="range" id="cheese" min="1" max="100" value="75" name="cheese_level">
</p>

- value 는 초기값 min과 max는 최솟값과 최댓값
- step = "7" 이런식으로 줘서 7칸식 올라갈게도 할 수 있음.

```html
<p>
    <!-- Alternative way to label an input (less common) -->
    <label>
        Enter a Number:
        <input type="number" placeholder="enter a number" name="num" min="1" max="1000">
    </label>
</p>
```

<p>
            <!-- Alternative way to label an input (less common) -->
            <label>
                Enter a Number:
                <input type="number" placeholder="enter a number" name="num" min="1" max="1000">
            </label>
</p>

- 이런 식으로 number input에 min과 max를 줘서  범위 선택가능 하게 할 수 있음.
- step 도 넣어 줄 수 있음.

## textarea

```html
<p>
    <label for="requests">Any Special Requests?</label>
    <br>
    <textarea id="requests" rows="10" cols="40" name="Requests?" placeholder="Type something here"></textarea>
</p>
```

<p>
    <label for="requests">Any Special Requests?</label>
    <br>
    <textarea id="requests" rows="10" cols="40" name="Requests?" placeholder="Type something here"></textarea>
</p>

- col 하고 row를 줄여 textarea 크기 조절 가능함.

## HTML5 폼의 유효성 검사

- 유효성 검사는 일반적으로 제한을 추가하거나 사용자 입력 또는 데이터의 유효성을 확인하는 거임.
- 서버 측 유효성 검사도 있고 클라이언트 측 유효성 검사도 있음.
- 서버 측 유효성 검사는 데이터를 제출하고 거부됨.
- 클라이언트 측은 제출이 안됨.
- required 속성 치면 아무것도 안치면 제출이 안됨.

\<input type="text" id="user" name="username" minlength="5" maxlength="20" required>

- 이런 식으로 써줄 수 있음. 최소 글자수하고 최대 글자 수를 적어줌.

\<input type="range" id="cheese" min="1" max="100" value="75" name="cheese_level">

- 이런 것도 최솟 값이 1이여서 음수 같은거 못 넣어줌.
- 정규 표현식이라고 있는데 (소문자 최소 한개, 대문자 최소한개 이런 식으로 넣어줄 수 있음) 나중에 배울거임.
- 몇몇은 유효성 검사가 디폴트로 내장되어있음. 패턴이 있는 경우임. ex) type="email" 같은 경우 @가 들어가야함. type="url" 이거는 http:// 이 있어야함.