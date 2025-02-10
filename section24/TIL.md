## DOM

- DOM은 문서 객체 모델임. 웹페이지를 구성하는 JavaScript 객체들의 집합
- 브라우저가 웹페이지를 띄울 때 HTML와 CSS 정보를 받아들인 다음 요소와 스타일을 기반으로 JavaScript 객체를 생성함.

![alt text](image.png)

- body 태그에 모든 요소의 하나하나에 대한 고유의 Javascript 객체가 생성됨.
- 트리 구조를 가짐. 트리 구조의 최상위에 있는 거는 document 객체
- 콘솔에 document 치면 HTML형식으로 DOM 구조 나옴. console.log(document)라고 쳐야지 JavaScript 객체 형태로 프로퍼티가 열림. 이래야 객체의 모든 메서드/속성 탐색 가능하고 DOM 요소의 상세 값 확인 가능.
- body 태그들의 참조 같은거 확인 가능.
- document.all 확인 하면 페이지의 모든 요소를 확인 할 수 있는데 document.all[10].innerText 이런 식으로 확인 가능하고 document.all[10].innerText = 'S'; 이런 식으로 변경도 가능
- 연결된 시트처럼 눈에 보이지 않는 것도 변경 가능 -> meta 태그에 있음.

## getElementById

- 요소 선택을 도와주는 메서드
- 일치하는 ID를 가진 요소를 찾아냄. 없으면 undefined
- const banner = document.getElementById('banner') -> 이런식으로 씀.
- console.dir(banner) 라고 하면 많은게 뜸. currentSrc tagName 등등. childElementCount 같은 것도 나옴.

## getElementsByTagName

- Elements인 이유는 한번에 한개 이상 선택하기 때문임.
- 같은 Id 가진거는 하나라 getElementById는 단수임.
- 이름 그대로 TagName으로 선택함.
- HTMLCollection 반환. 배열처럼 생겼지만 배열은 아님. map 같은거 못씀. 근데 인덱스로 접근하거나 for each 같은 구문 됨. length 도 됨.
- js에서 Element는 반환되는 객체에 해당하는데 하나의 HTML을 나타내는 모든 특성을 가진 객체임. HTML Collection에 들어있는게 Element임.

```js
const allImages = document.getElementsByTagName("img");
for (let img of allImages) {
  img.src = "fdfsfs"; //모든 img태그의 그림이 주소가 가르치는걸로 바뀜,
}
```

## getElementsByClassName

- 클래스로 선택함.
- getElementsByTagName이랑 getElementsByClassName이랑 모두 해당하는 값이 없으면 null이 나옴.

## querySelector

- ID든 클래스든 이름이든 요소 타입이든 속성, css 스타일이든 원하는 선택자를 무엇이든 이용해서 선택가능
- 가장 처음에 일치하는 것만 나옴.
- id 는 # 클래스는 . 태그는 그냥 써주면 됨. document.querySelector('#banner'), document.querySelector('p');
- css 스타일 선택자도 연결해서 쓸 수 있음. document.querySelector('img:nth-of-type(2)'); document.querySelector('a[title="JAVA"]')

## querySelectorAll

- 모든 요소 반환. 이런거 항상 반환값은 Element 객체라는거 기억하기.
- querySelectorAll('p a') -> p 안에 있는 a 만 출력.

## innerHTML, textContent, innerText

- 요소를 선택했는데 이제 작업 가능 -> 작업 자체는 너무 많음. 필수적인 것만 알고 필요한거는 mdn이나 구글 검색으로 커버하는 식으로 접근해야함.
- innerText 는 선택한 요소 안의 항목을 찾아줌. document.querySelector('p').innerText
- textContent도 비슷함. 그러나 모든 요소 반환해줌. display: none 해준 것도 보여줌. textContent는 모두 나오게 함.
- innerHTML은 마크업의 전체 내용 출력해줌. ex) document.querySelector('h1').innerText = '\<i>askdjas\</i>' 이렇게 쓰면 괄호 포함 그대로가 text로 들어감. 근데 innerHTML을 바꾸면 i 적용되어서나옴.
- document.querySelector('p').innerHTML 보면 모든 태그들이 포함되어서 나옴.
- = 으로 할당하는것도 되는데 +=로 뒤에 붙여쓰는 것도 가능함. document.querySelector('h1').innerHTML += '\<sup>asjdsa\</sup>'; -> 이렇게 하면 뒤에 제곱수처럼 asjdsa 추가됨.

## 속성 getAttribute, setAttribute

- href, src 뿐 아니라 id와 class도 속성에 해당함.
- document.querySelector('#banner').id = "whoops"; -> 이런식으로 속성 수정 가능
- getAttribute는 속성에 액세스하는 또 다른 방법임. 속성에서 적혀있는 자체를 직접 가져옴.
- .href처럼 요소의 특성에 직접 액세스하는 경우에 JavaScript 거침. 그래서 예시에 file:// 써져있는거 확인할 수 있음.

```js
const firstLink = document.querySelector("a");
firstLink.href; // file://wiki/ ,...

firstLink.getAttribute("href"); // wiki/....
```

- setAttribute를 이용해 속성 변경 가능

```js
firstLink.setAttribute("href", "https://www.google.com");

const input = document.querySelector('input[type="text"]');
input.type = "password"; // 이런식으로도 변경가능
//대부분 setAttribute랑 결과가 동일한데 다를때도 있긴 있음.  그건 알 필요는 없음.
```

## 스타일 변경하기

- style도 특성 중 하나임. h1.style(querySelect해놓은 h1) 뽑아보면 모든 CSS 특성이 나온거 확인 가능함. 모두 카멜 케이스라는거 확인 가능.
- 인라인으로 style 지정 안하면 h1.style.fontSize 했을때 그냥 빈 문자열 나옴.
- h1.style.fontSize = "12px"; 이런 식으로 줄 수 있는데 이 때는 인라인으로 들어간거 확인할 수 있음.
- 인라인 스타일을 변경하는 거는 효과적이지 않음.
- 인라인으로 쓰지 않는한 h1.style.fontSize 확인 불가능
- 브라우저에 의해 계산된 style을 확인하기 위해 window 객체의 getComputedStyle 메서드 사용함.
- window.getComputedStyle(h1) 하면 많은 객체들이 나오는데 window.getComputedStyle(h1).color 이런 식으로 찾아볼 수 있음.

```js

```

## ClassList

- 위 방법으로 style 변경 하는 것보다 클래스를 만들어서 적용하는 방법이 더 나음.
- 미리 클래스에 스타일을 저장해놓음.
- h2.setAttribute('class', 'purple'); 이런 식으로 넣어줌. 그러나 h2.setAttribute('class', 'borderClass'); 이런 식으로 넣어줄 때 class를 덮는 문제가 생김. 만약 이 방법으로 합치고 싶으면 let currentClasses = h2.getAttribute('class') 한다음 h2.setAttribute('class', \`${correntClasses} + puple`) 이런 식으로 해야함.
- 다른 방법 있음. classList를 사용하는 거임. 요소의 클래스를 제어하고 클래스 검색하며 조작도 하기위해 호출하게 되는 객체.

```js
const h2 = document.querySelector("h2");
h2.cLassList.add("purple"); // 이러면 Purple 클래스 추가됨.

h2.classList.remove("border"); // 클래스 지우기.
h2.classList.contains("border"); // 클래스 유무 확인
h2.classList.toggle("purple"); // purple 클래스를 껏다 킴.
```

# 계층 이동

- parentElement 로 부모 요소에 액세스 가능
- 생각보다 많은 작업을 할 수 있음.

```js
const firstBold = document.querySelector("b");

firstbold.parentElement;
firstbold.parentElement, parentElement; // 계속 하면 html나올거임.
```

- 부모는 하나지만 자식은 여러개일수 있음.
- paragraph.childElementCount -> 자식 숫자 세줌.
- paragraph.childeren 자식들 HTMLCollection으로 반환
- 자식 요소 목록 상에 반복 걸려면 형제 요소 특성 알면 됨.
- nextSibiling, previousSibiling: 노드를 보여줌. 아직 안배움.
- nextElementSibilng, previousElementSibling: 이게 다른 형제 요소로 넘어가게 해줌.

## append & appendChild

- appendChild: 마지막으 요소로 추가함.
- append: 한번에 한 개 이상을 삽입할 수 있게 해줘서 많은 요소나 노드 추가 가능
- prepend: 앞에 추가함.

```js
const newImg = document.createElement("img"); // 새 요소 만들기

console.dir(newImg);
newImg.src = "sdfsfsd"; // src 추가
document.body.appendChild(newImg);
newImg.classList.add("square"); // 클래스 추가

const p = document.querySelector("p");
p.append("i am new text"); // appendChild로는 문자열 못 줌. 노드만 가능
p.append("i am", " new text"); // 이런 것도 가능

const newB = document.createElement("b");
newB.append("Hi!");

p.prepend(newB);
```

- 자식 대신에 인접한 형제에 삽입하고 싶은 경우도 있음. ex) h2 와 img 사이에 추가하고 싶음.
- 이 경우 insertAdjacentElement 사용함.
  - beforebegin: Before the targetElement itself.
  - afterbegin: Just inside the targetElement, before its first child
  - beforeend: Just inside the targetElement, after its last child.
  - afterend: After the targetElement itself.

```js
const h2 = document.createElement("h2");
h2.append("Are adorable chickens");

const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", h2); // 이런 식으로 씀.
```

- after, before 메서드도 있는데 더 간단하게 앞이나 뒤에 넣을 수 있음.

```js
const h3 = document.createElement("h3");
h3.innerText = "I am h3";
h1.after(h3); // 이러면 예전에 document.querySelector("h1"); 했던 h1뒤에 h3 추가됨
```

## remove & removeChild

- removeChild가 더 예전에 만들어진 메소드인데 불편함. 요소에서 자식을 제거하는 거임.
- remove는 그냥 바로 제거

```js
const firstLi = document.querySelector("li"); // removeChild 쓰려면 부모 찾아서 써야함.
const ul = firstLi.parentElement;

ul.removeChild(firstLi);

const img = document.querySelector("img");
img.remove(); // 바로 지워짐.
```
