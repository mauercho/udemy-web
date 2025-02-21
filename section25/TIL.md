## 이벤트

- 인터랙티브 웹사이트를 만들 때 중요한 역할을 함.
- 사용자들이 하는 행동에 반응하는 작업 ex) 클릭, 드래그, 드롭, 마우스 올리기 스크롤 움직이기, 폼 제출 등등
- 무한 스크롤 역시 페이지 맨 끝으로 스크롤 내리면 새 이미들이 로딩됨.

## 인라인 이벤트

- 이벤트 붙이는 방법 3가지 있음. 그 중 인라인에 붙이는 방법임.
- 아래 예시는 onClick을 줘서 클릭하면 나오게 했음.
- 마크업이 길어지고 여러개 작업하려면 일일히 세미콜론 넣어주어야함.
- 결정적으로 똑같은 동작 버튼 5개 만들려고하면 onclick 구문 5개 복사해야함.
- 엄청 안쓰이는 방법

```html
<button onclick="alert('you clicked me!'); alert('stop clicking')">
  Click Me!
</button>
```

## 자바스크립트에 넣는법

- html body 맨 뒤에 \<script src="app.js">\</script> 추가해줌.
- 아래 예시처럼 하면 됨.
- onmouseenter: 마우스 포인터가 이벤트가 시작되는 요소 내부에 있을때임.
- 꼭 버튼에만 되는거 아님. 거의 대부분의 요소에 가능 ex) h1 h2 등등

```html
<h1>Events</h1>
<button id="v2">Click Me (2nd version)</button>

<button id="v3">Click Me (3rd version)</button>
```

```js
const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE IT WORKED!!");
};

function scream() {
  console.log("AAAAAHHHHH");
  console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream; // scream() 아닌 거 확인

document.querySelector("h1").onclick = () => {
  alert("you clicked the h1!");
};
```

## addEventListener

- 가장 좋은 세번째 방법임.
- addEventListener라는 제너릭 메서드 씀. 첫번째 인수로 클릭이나 더블 클릭, 감지하고 싶은 이벤트 넣음. 두번째 인수는 콜백 함수임.
- 이벤트 목록이 엄청 다양함. mdn 찾아보는게 좋음.
- 또 모든 이벤트가 모든 요소에 적용되는 거 아님. ex) keypress는 버튼에 작동하지 않음.
- tasButton.onclick = twist; tasButton.onclick = shout; 이렇게 이어서 쓰면 onclick에 대한 함수가 shout로 덮어쓰여짐.
- addEventListener는 덮여쓰여지지 않고 뒤에 추가됨.
- 그리고 once 처럼 다양한 옵션이 들어갈 수 있음. tasButton.addEventListener("click", twist, {once:true}); 이러면 처음 클릭만 됨.
- removeEventListener로 이벤트 지울 수 있는데 강의에서는 안 다뤘음.

```js
const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("CLICKED!");
});

function twist() {
  console.log("TWIST!");
}
function shout() {
  console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener("click", twist);
tasButton.addEventListener("click", shout);
```

## 랜덤 컬러 연습하기

```js
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
```

## 이벤트와 this 라는 키워드

- 이벤트 핸들러에 의해 발동된 콜백 안에서 사용될때 this는 그걸 부르는 것을 참조함. 이벤트를 발생시킨 무언가와 상호작용하거나 그것에 기반해 작동함.

```js
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     button.style.backgroundColor = makeRandColor();
//     button.style.color = makeRandColor();
//   });
// }

// for (let h1 of h1s) {
//   h1.addEventListener("click", function () {
//     h1.style.backgroundColor = makeRandColor();
//     h1.style.color = makeRandColor();
//   });
// } // 이게 약간 비효율 적임. 제너릭 함수가 그 기능을 하게 만듬.

for (let button of buttons) {
  button.addEventListener("click", colorize);
}

const h1s = document.querySelectorAll("h1");
for (let h1 of h1s) {
  h1.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}
```

## 키보드 이벤트와 이벤트 객체

- 이벤트 객체라는 거는 콜백함수에 자동적으로 전달됨.
- 종종 이벤트 객체 필요함. ex) 어떤 키가 눌러졌는지 알아내야함.
- code랑 key는 다름. 모두 입력된 키보드 값을 담고 있음. code가 위치기반임. ex) a 누르면 key로는 소문자 a 나오고 code 는 keyA 나옴. 다른 언어 써도 code 는 keyA 나올거임. key는 나오는 문자라고 생각하면됨.
- window.addEventListener로 페이지의 어느 곳에서든 Event들을 수 있게 할 수 있음. keydown 넣으면 모든 버튼 입력마다 콜백함수 실행될거임.

```js
document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
}); // 여기 검색된거 보면 type, target, clientX, clienY 등 다양하게 존재.

const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);
});

window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    default:
      console.log("IGNORED!");
  }
}); //window.addEventListerner 쓴 거 확인.
```

## 폼 이벤트 및 preventDefault

- preventDefault는 특정 이벤트의 기본 동작이 수행되지 않도록 막아줌.
- 폼 제출 이벤트만을 위한게 아니지만 90%는 폼 제출 이벤트 할 때 쓰임.

```html
<form action="/dogs" id="tweetForm">
  <input type="text" name="username" placeholder="username" />
  <input type="text" name="tweet" placeholder="tweet" />
  <button>Post Tweet</button>
</form>
<!-- 버튼 누르면 자동으로 /dogs로 요청이 전송됨. 해당위치로 가기 싫으면 그때를 위해 preventDefault 쓰는 거임.-->
```

```js
const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
}); // 이러면 form 의 기본동작 수행 안됨.
```

## 실습

- .value 속성으로 값 접근 가능한거 확인 가능

```html
<h1>My Form</h1>
<form action="/shelter" id="shelterForm">
  <input type="text" id="catName" />
  <button>submit</button>
</form>
<h2>Available Cats</h2>
<ul id="cats"></ul>
```

```js
const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListner("submit", function (e) {
  e.preventDefault();
  const catName = input.value;
  const newLi = document.createElement("li");
  newLi.innerText = catName;
  list.append(newLi); // 이런 식으로 li 요소 더해주기.
  //   console.log(input.value); // input 안에 있는 글자 나오는 거 확인
  input.value = ""; //input값 지우기
});
```

- form에 elements로 접근하면 form 안에 요소들 접근 가능. 아래 예시는 name="username"인 요소가 있어서 tweetForm.elements.username; 이렇게 접근 한거임.

```js
//tweetForm.elements.username.value 이렇게 접근 가능. 이거 잘쓰면 좋음.
const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // const usernameInput = document.querySelectorAll('input')[0];
  // const tweetInput = document.querySelectorAll('input')[1];
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
};
```

## 입력과 변경 이벤트

- 입력이 업데이트 될때마다 뭔가 실시간으로 일어나게 하려면 input 이벤트 쓰면됨.
- change 이벤트는 입력에 집중하고 있다가 마우스 포인터로 다른 곳 찍으면 실행되는거임. 입력을 블러하면 나옴. 집중하고 있던 입력을 끈다. 입력을 떠날때마다 실행

```js
const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

input.addEventListener("input", function (e) {
  h1.innerText = input.value;
}); // 실시간으로 h1바뀜.
```

## 이벤트 버블링

- 아래 예시 같은 경우 안에 버튼 클릭해도 p 눌리고 section 눌린걸로 되어서 alert 3개 뜸.
- 이벤트 버블링이라고 함. 맨 아래에서 더 높은 레벨로 올라가는 거임.
- e.stopPropagation(); 을 통해 버블링 막을 수 있음.

```html
<section onclick="alert('section clicked')">
  <p onclick="alert('paragraph clicked')">
    I am a paragraph:
    <button onclick="alert('button clicked')">Click</button>
  </p>
</section>
```

```js
const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", function (e) {
  container.style.backgroundColor = makeRandColor();
  e.stopPropagation();
});
container.addEventListener("click", function () {
  container.classList.toggle("hide");
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
```

## 이벤트 위임

- 이벤트 위임이란 부모 요소에 이벤트 수신기를 추가하는걸 말함.
- 이벤트 수신기가 추가된 시점에 페이지에 없었던 요소를 다루어야 하는 상황에서 편리함.

```html
<ul id="tweets">
  <li>I AM LI!!!</li>
  <li>I AM LI!!!</li>
  <p>aslkdjaslkdjaksl</p>
</ul>
```

```js
for (let li of lis) {
  li.addEventListener("click", function () {
    li.remove(); // 이러면 기존에 있던 li는 누르면 사라지는데 새로 생긴 li들은 안 사라짐.
  });
}
```

- ul에 click 이벤트 리스너 달면 밑에 li 눌러도 발생함. 그런 점에서 거기서 target으로 접근하면 li인지 ul인지 확인 가능.

```js
const tweetsContainer = document.querySelector("#tweets");
tweetsContainer.addEventListener("click", function (e) {
  e.target.nodeName === "LI" && e.target.remove(); // li인지 확인하고 li면 지우는거 확인가능.
});
```
