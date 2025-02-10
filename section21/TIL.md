## 함수 범위

- 함수 안에 정의된 변수가 있을 경우 그 변수 먼저 참조. 없으면 전역 변수
- 블록은 함수를 제외하고 중괄호가 있는 모든 곳 ex) 조건문, 루프 등
- var 키워드를 쓰면 변수의 범위가 함수로는 지정되지만 블록으로는 지정되지 않음. for (var i = 0; ; ) -> 하면 밖에서 i 뽑을 수있음.
- 블록 안에서 변수 선언되면 해당 변수는 그 범위에서만 존재함.

## 렉시컬 범위

- 부모 함수의 안에 중첩된 내부 함수는 해당 외부 함수의 범위나 범위 내에서 정의된 변수에 엑세스 할 수 있음
- 역으로 부모 함수에서 내부 함수의 변수 엑세스 불가능

```js
function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"];
  function cryForHelp() {
    let color = "purple";
    function inner() {
      for (let hero of heroes) {
        console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp();
}
```

## 함수 표현식

- = 기호 뒤에 오는 오른쪽 부분이 함수를 만들고 그 함수를 변수 안에 저장함.
- 함수의 이름이 아니라 변수의 이름. 이름이 없는 함수를 변수 안에 저장한거임.
- 함수 또한 JavaScript에서는 값임.

```js
// function add(x, y) {
//     return x + y;
// }

const add = function (x, y) {
  return x + y;
};
```

## 고차 함수

- 다른 함수와 작동하거나 또 다른 함수에서 작동하는 함수

```js
function callTwice(func) {
  func();
  func();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie); // 여기서 rollDie에 괄호 안써주는거 확인. 바로 써주면 rollDie 함수 실행을 해서 반환된 값을 callTwice의 인자로 넣어줌.
```

## 반환 함수

```js
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }

const mystery = makeMysteryFunc();
```

- 함수를 만들어주는 팩토리 함수

```js
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
const isAdult = makeBetweenFunc(19, 64);

isAdult(30); // true 나옴.
```

## 메서드 정의하기

- 메서드는 객체에 종속된 특성으로 함수에 포함되는 개념. 이름 앞에 점을 찍어서 사용.

```js
const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

myMath.square(3);
```

- 위의 예시처럼 메서드는 객체에 속성으로 추가된 함수임.
- 위는 속기법으로 쓴 내용임. 원래는 square: function(num){} 이런 식으로 썼음. function 지우고 함수 이름() 이런 식으로 써주면 됨.

## this 키워드

- 메서드에 있는 객체 가리킬 때 this 키워드를 사용함.

```js
const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log("THIS IS:", this);
    console.log(`${this.name} says MEOWWWW`);
  },
};

const meow2 = cat.meow; // 이러면 그냥  says MEOWWWW 가 나옴
// cat.meow() 하면 Blue Steele says MEOWWWW
```

- this 값은 함수의 호출 컨텍스트에 따라 값이 달라질 수 있음.
- meow2() 할때 console.log("THIS IS:", this); 여기서 윈도우 객체 뜰거임.
- alert 같은거는 윈도우 객체에 있는거임. 그냥 console 창에 window 뜨면 다 뜸.
- console에서 function scream() { console.log("AHHH"); } 정의 하면 window.scream 쳐보면 함수 나옴.
- js에서 this키워드 동작은 함수가 호출되는 방식에 따라 결정됨.
- cat.meow() 호출 시. 호출 방식이 객체의 메서드로 호출됨. this의 값은 cat의 객체임.
- meow2() 호출 시, 호출 방식이 일반 함수로 호출임. 따라서 this의 값은 undefined 혹은 window임.

## try/catch 사용하기

- try 안에서 예외나 오류가 나왔을 때 실행하는 코드 블록이 catch 블록
- 우리는 때로 오류를 일으키는 행동을 함. 예상 밖의 일이 수없이 생김. 그럴 때를 위해 try catch 쓰셈.
- 나중에 비동기 함수를 다룰 때 배움.

```js
function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    // e 에 오류가 들어감. console.log(e) 이렇게 써줄 수 있음.
    console.log("Please pass a string next time!");
  }
}
```
