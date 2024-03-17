## HTML5 ?

- HTML을 정의하는 가장 발전된 표준
- 새로운 형태의 HTML임. 새로운 요소, 속성, 행동을 가진 새로운 버전의 HTML
- HTML5은 다운로드하거나 설치하는 새로운 버전이 아니라 그저 문서의 한 버전임.
- 브라우저가 그것들을 사용하고 구현하는 거임.
- DOCTYPE의 역할은 브라우저에 이 문서가 HTML5 구문 또는 HTML5 버전 표준을 쓴다고 알려주는 것임.
- HTML에 DOCTYPE 바꾸어도 내용은 바뀌지 않음. 브라우저에 알려줄 뿐이지 무언가를 끄는 거는 아님.
- 브라우저가 무엇을 기대할 수 있는지 알려줄 뿐임.

## 블록 vs 인라인 요소 - Div와 Span
- 블록 요소는 한 줄을 차지함.
- 인라인 요소는 한 줄에 같이 있음.
- div, span 둘 다 일종의 제너릭 컨테이너임.
- div는 블록 요소 -> 전체 블록을 차지하고 위 아래의 콘텐츠를 밀어냄. 그룹화할 수 있음.
- span은 인라인 요소 -> 무언가를 그룹화해서 다른 스타일 적용하기 좋음 . ex) 특정 글자만 색깔 바꾸기.

## 기타 요소 모음 - HR, BR, Sup, Sub

- \<hr> 태그
    - 닫는 태그 없음.
    - 가로지르는 선을 하나 만드는 것.
- \<br> 태그
    - 줄바꿈 태그
    - 줄을 바꿔 줌.
- \<sup> 태그
    - a 제곱 할 때 위에 2처럼 윗첨자를 줌.
    - \<sup>\<a href="somesource.com">[2]\</a>\</sup> 이런 식으로 링크도 넣을 수 있음.
- \<sub> 태그
    - 아래 첨자 태그
    - 방정식 같은 곳에 많이 쓰임.
    - H\<sub>2\</sub>O -> H<sub>2</sub>O
    - \<sup>1\</sup>/\<sub>2\</sub> + \<sup>1\</sup>/\<sub>2\</sub> -> <sup>1</sup>/<sub>2</sub> + <sup>1</sup>/<sub>2</sub>

## 엔티티 코드

- HTML 대신 쓸 수 있는 특별한 코드 또는 시퀀스
- 이걸 쓰면 다른 글자가 표시됨. ex) 다이아몬드, 스페이드 등등
- & 로 시작해서 ; 로 끝남.
- [entitiycode.com](http://entitiycode.com) 에서 확인가능
- \< 같은것도 html에서 태그의 시작이라고 생각함. but \&lt; 이런 식으로 쓰면 \< 이 잘 나옴.
- 각각의 코드마다 번호도 있음. &9824; = &spades;
- 엔티티 코드는 타이핑하기 어렵거나 브라우저가 인식하기 힘든 글자를 표시할 수 있게 하는 특별한 코드일 뿐이다.
- & 도 예약 문자라 브라우저는 엔티티 코드의 시작이라고 생각함. \&amp; 이런식으로 써야함.

## 시멘틱 마크업 개요

- 똑같은 역할을 하는데 의미를 담은 태그들이 있음. ex) \<div> 와 \<main>, \<section>, \<nav> 들과는 아예 같은 태그임. 뒤에 것들은 의미가 들어있음.
- 시멘틱 마크업의 중요성
	* 크롤러 프로그램이 마크업의 구조를 빨리 파악할 수 있다.
	* 스크린 리더를 쓰는 사람들이 코드에 더 쉽게 접근할 수 있다.
	* 우리들이 쉽게 읽을 수 있다.

## 시멘틱 요소 사용법 div 대신 사용 가능한 요소들

- main
	- 문서의 주요 내용
	- 페이지 전반에서 계속 반복되는 내용은 전부 제외하는 게 원칙(사이드 바, nav 링크, 검색 창)
- nav
	- 내비게이션 링크를 제공하는 것들
- section
	- 독립적인 부분을 나타냄 -> 다른 기능은 없지만 div 보다는 나음.
- article
	- 문서 내의 독립적인 구성 나타냄
	- 꼭 신문 기사나 블로그 기사에만 쓰는 건 아님.
- aside
	- 사이드바나 말풍선 등
- time, datetime, figure, abbreviation, data 등등 여러가지 있음.

## 스크린 리더

- Mac 에서는 cmd + F5  Voiceover 가 네비게이션이 어디있는지 메인 요소가 어디 있는지 알려줄 수 있음. (시멘틱 요소를 잘 썼으면)

## 에밋(Emmet)

- https://docs.emmet.io/cheat-sheet/ -> 여기서 에밋들 확인 가능
- Child >, Sibling +, Climb-up ^, Multiplication *, numbering $ 이렇게 많이 쓰임.
	```html
	<!-- ul>li -->
	<ul>
			<li></li>
	</ul>

	<!-- main>section>h1 -->
	<main>
			<section>
					<h1></h1>
			</section>
	</main>

	<!-- h1+h2+h3 -->
	<h1></h1>
	<h2></h2>
	<h2></h2>

	<!-- ul>li*5 -->
	<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
	</ul>

	<!-- nav>ul>li*5>a[href=www.$.com]{Click Me} -->
	<nav>
			<ul>
					<li><a href="www.1.com">Click Me</a></li>
					<li><a href="www.2.com">Click Me</a></li>
					<li><a href="www.3.com">Click Me</a></li>
					<li><a href="www.4.com">Click Me</a></li>
					<li><a href="www.5.com">Click Me</a></li>
			</ul>
	</nav>
	```