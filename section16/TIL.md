## 비교 연산자

- 대문자가 소문자보다 앞에 있음. 'A' 가 41 'a' 가 61
- 등식에는 이중등호하고 삼중등호 있음. 이중등호는 두 값이 같도록 전환하고 비교함.
  - 1 == '1', 0 == false, null == undefined 모두 true
- 삼중등호는 타입과 값 모두 비교
- 실수 방지 위해 값 비교 할 때는 삼중 등호 쓰셈.

## console, alert, prompt 코드

- console.log(): 인수를 콘솔에 출력함.
  - console.warn(), console.error() 이런 것도 있음.
- alert(): 사용자에게 뭔가 출력해주지만 콘솔에 출력해주지 않음. 알람으로 출력
- prompt(): 인수를 받아들임. let userInput = prompt("Please enter a number");
- parseInt(): 문자열 숫자로 변경. atoi 라고 생각하면됨.

## javascript 실행하기!

- html 파일 열어서 script 태그에 js 명시해주면됨.
- 예시처럼 주로 body태그의 끝에 작성

```html
<body>
  <h1>First Script!</h1>

  <script src="app.js"></script>
</body>
```

## 조건문

- if (rating === 3) console.log("Success");

```js
let random = Math.random();
if (random < 0.5) {
  console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
} else {
  console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!");
}
console.log(random);
```

- if, else if, else 개념 똑같음.
- 그냥 문자열끼리 비교 가능 'Monday' === 'Monday'
- const dayOfWeek = prompt('ENTER A DAY').toLowerCase(); 이런식으로 prompt받은 것도 변환 가능

```js
const dayOfWeek = prompt("ENTER A DAY").toLowerCase();

if (dayOfWeek === "monday") {
  console.log("UGHHH I HATE MONDAYS!");
} else if (dayOfWeek === "saturday") {
  console.log("YAY I LOVE SATURDAYS!");
} else if (dayOfWeek === "friday") {
  console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
} else {
  console.log("MEH");
}
```

## 조건부 네스팅

- 조건부 안에 조건문

```js
const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
  // Password cannot include space
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password!");
  } else {
    console.log("Password cannot contain spaces!");
  }
} else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}
```

## truthy and falsy

- 다음과 같은 것들 빼고 모두 truthy
  - false
  - 0
  - ""
  - null
  - undefined
  - NaN
- 변수나 입력 등 다른 곳에서 가져온 것이 있는 상황에서 사용할 수 있는 것 ex) undefined나 null을 if에 넣어서 확인

## 논리 연산자

- && : 둘다 true여야 true, 단축평가 존재함.

```js
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("VALID PASSWORD!");
} else {
  console.log("INCORRECT FORMAT FOR PASSWORD!");
}
```

- || : 둘 중 하나만 true 면 true. AND가 OR 보다 먼저 실행됨. 그냥 괄호 쓰는게 좋음.

```js
const age = 100;
if ((age >= 0 && age < 5) || age >= 65) {
  console.log("FREE");
} else if (age >= 5 && age < 10) {
  console.log("$10");
} else if (age >= 10 && age < 65) {
  console.log("$20");
} else {
  console.log("INVALID AGE!");
}
```

- ! : 값을 반전 시키는 역할을 함.

```js
let firstName = prompt("enter your first name");
if (!firstName) {
  firstName = prompt("TRY AGAIN!!!");
}
```

## switch문

- C에서 하던 개념 그대로 가져가면 됨.

```js
const day = 4;
switch (day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 6:
  case 7:
    console.log("WEEKEND!");
    break;
  default:
    console.log("I DON'T KNOW THAT");
}
```
