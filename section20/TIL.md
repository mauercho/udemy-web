## 함수

- 코드의 재사용 가능한 일부. 중복을 줄이는 데 유용하고 코드를 읽고 이해하기 쉽게 만듬.
- 함수 정의하고 실행
- js는 호이스팅이라고 있어서 execute 하고 정의해도 되긴함. 근데 정의하고 실행하셈,

```js
//DEFINE

function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}

//EXECUTE
singSOng();
```

## 인수

- 함수 괄호 안에 인수 넣는거. indexOf 같은게 인수임.
- 인수는 함수를 실행할 때 괄호 안에 전달하는 것, 매개변수는 함수 정의할 때 용도에 따라 정해주는것
- 예외처리 안해주면 괄호 안에 인수 안써주면 undefined 으로 인식

```js
function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}
```

## 반환 키워드

- return으로 함수 밖으로 값을 내보낼 수 있음.
- return 만나면 함수 종료

```js
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
}
```
