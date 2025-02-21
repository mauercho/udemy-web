## 프로토타입

- 객체가 서로 기능을 상속하는 방식의 메커니즘.
- 객체는 템플릿 객체 역할을 하는 프로토타입 객체를 가질 수 있음.
- MDN Array 를 보면 많은 메서드 확인 가능 Array.prototype.concat() 등등
- arr.push 같은거는 \_\_proto\_\_ 라는 특성 안에 있음 arr2도 push pop 있음. 프로토라는 특성을 공유하는데 청사진 객체에 대한 참조 -> 프로토타입
- arr.includes 이런가는 우리가 만든 배열에서 정의된 것이 아니라 프로토타입 객체에서 정의됨.
- 요약하자면 push라고 불리는 모든 배열에 대해 별개의 메서드를 갖는다기보다 하나의 프로토타입이 있고 각각의 배열이 \_\_proto\_\_라는 특별한 특성으로 그 프로토타입을 참조함.
- 프로토타입객체에도 나만의 메서드 추가 가능. 아래에 예시 있음.
- \_\_proto\_\_는 참조, prototype은 메서드나 특성을 추가하는 실제 객체

```js
String.prototype.yell = function () {
  return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

"bees".yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function () {
  return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!";
};
const nums = [6, 7, 8, 9];
nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
```

## 객체 지향 프로그래밍 개요

- 특성이나 메서드 정의를 포함하는 클래스나 객체 템플릿 생성하는 객체 지향 프로그래밍
- document.querySelector('h1') 를 console.dir 해보면 HTMLHeadingElement가 객체를 생성하는 제조법으로 찍은걸 알 수 있음.

## 팩토리 함수

- 새로운 객체를 생성하고 반환하는 함수
- new 키워드나 this 키워드를 사용하지 않고 단순히 함수를 호출하여 객체를 반환함.
- 어떤 값을 전달하면 팩토리가 객체를 만들어주고 마지막에 반환하여 우리가 사용할 수 있게된다는 거임.
- 비어 있는 상태로 시작하지만 주어진 인수를 기반으로 속성 추가
- 아래 예시에서 makeColor(0, 0, 0)과 makeColor(255,255,150)은 다른 객체지만 세 개의 속성과 두 개의 메서드를 포함한다는 점에서 같음.

```js
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"
```

## 생성자 함수

- 위의 팩토리 함수 예시보면 일반함수 재활용 안함. ex) black = makeColor(0,0,0), firstColor = makeColor(35, 255, 150) 일 때 black.rgb() === firstColor.rgb() 가 false로 나옴. 함수를 매번 정의하기 때문임.
- 생성자 함수 같은 경우 메서드 매번 정의하지않음. ex) "hi".slice === "bye".slice 하면 true 나옴. 프로토타입에 메서드가 포함되어 있어서임.
- JS에서 생성자 함수 좀 특이함.

```js
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
```

- console.log() 를 뒤에 붙여보면 Window 참조한다고 나옴. 다른 객체 안에 있는 게 아니라 전체 범위에서 참조를 하면서 가장 가까운 window객체를 참조하기 때문임. Color(255, 0, 0)
- new 연산자로 호출하면 결과가 달라짐. new Color(255, 0 ,0) 하면 this가 지정한 특성이 나옴. r g b 나오고 proto 나옴. proto 아래는 Color로 설정된 생성자 특성이 있음.
- 아래 예시대로 하면 생성자 함수 생성하는 거임. 프로토타입에 정의한거임. function Color 안에서 정의하면 개별 객체에 정의됨.
- 생성자 함수는 new 키워드로 호출되며 내부적으로 this를 이용해 객체 생성

```js
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex(); // 이거랑 color2.hex랑 === 하면 같이 나옴
const color2 = new Color(0, 0, 0);
color2.hex();
```

- 화살표 함수 쓰지 않게 주의해야함. this 때문에
- new가 하는 역할
  1.  새로운 객체를 생성하고,
  2.  이를 생성자 함수와 연결하며,
  3.  생성자 함수 내부의 this를 새로 생성된 객체에 바인딩하고,
  4.  마지막으로 새로운 객체를 반환합니다.
- new 안 쓰고 객체 생성 방법

```js
function Color(r, g, b) {
  const obj = {}; // 1. 빈 객체 생성
  obj.r = r; // 2. 속성 추가
  obj.g = g;
  obj.b = b;

  obj.__proto__ = Color.prototype; // 3. 프로토타입 연결

  return obj; // 4. 객체 반환
}

const color1 = Color(255, 0, 0);
console.log(color1); // { r: 255, g: 0, b: 0 }
```

- 구문이 좀 짜증 날 수도 있음. 메서드가 다 따로 정의되어 있기 때문. => 클래스 구문 등장

## JavaScript 클래스

- 클래스로 작성하면 위에서처럼 메서드를 프로토타입에 수동으로 추가할 필요 없음.
- 생성자 함수를 해체해서 메서드 추가할 필요 없음. const { r, g, b } = this;const { r, g, b } = this;
- 클래스 이름은 대문자
- 언제나 constructor 추가. 새로운 인스턴스 만들어질때마다 즉시 실행되는 함수임.
- 메서드 역시 prototype 입력할 필요 없음.

```js
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() {
    const { r, g, b } = this; // new 키워드 써줘서 this는 개별 객체 참조
    return `${r}, ${g}, ${b}`;
  } // 이러면 자동적으로 프로토타입에 추가됨.
}
```

```js
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
```

- 모두 프로토타입에 위치해있어서 하나의 프로토타입 템플릿 객체를 찾음.
- 메서드안에 다른 메서드를 넣는거 확인

## 클래스 연습

- hsl => 색조 (0~360), 채도(%), 명도(%) 순
- constructor 잘 이용하여 h, s, l 만든거 확인

## 확장 및 슈퍼 키워드 extends super

```js
class Pet {
  constructor(name, age) {
    console.log("IN PET CONSTRUCTOR!");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTRUCTOR!");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWWW!!";
  }
}

class Dog extends Pet {
  bark() {
    return "WOOOF!!";
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}
```

- Cat이랑 Dog 에 둘 다 쓰일만한 메서드인 eat()가 들어간 Pet Class 만들고 Cat이랑 Dog에서 extends 함.
- 일단 그 객체 프로토타입에 메서드 있나 확인하고 없으면 상위 클래스에서 메서드 있나 확인함. Dog에서 나온 eat 메서드는 scarfs his food를 return 할거임.
- prototype은 생성자 함수(또는 클래스)가 생성한 모든 인스턴스가 공유하는 속성과 메서드를 정의하는 객체
- 하위 클래스에서 상위클래스에 없는 추가 정보를 넣고 싶을 때 super씀.
- 예시 같은 경우 cat constructor가 먼저 실행되고 pet constructor 실행.
- super 가 부모클래스의 메서드 호출도 가능함 super.eat() 이런 식으로 쓰면 됨. 하는 역할 두개 부모클래스의 메서드 호출, 부모클래스의 생성자 호출

```js
class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTRUCTOR!");
    super(name, age);
    //this.name = name;
    //this.age = age; // 대신 super 써준거임.
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWWW!!";
  }
}
```
