## forEach 메서드

- 함수를 인수로 받아들이는 forEach
- for of 루프 등장하기 전에는 훨씬 자주 쓰였음.

```js
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});
```

## Map 메서드

- 콜백 함수를 수령해서 배열의 요소당 1번씩 실행한다는 점이 비슷함.
- 콜백의 반환 값을 이용해서 새로운 배열을 생성한다는 점이 다름.
- 데이터의 일부만 가져오거나 두 배로 늘린다거나 할 때 필요.

```js
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const doubles = numbers.map(function (num) {
  return num * 2;
});

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

const titles = movies.map(function (movie) {
  return movie.title.toUpperCase();
});
```

## 화살표 함수

- function이라는 키워드 없이도 함수를 입력할 수 있음.
- 함수 표현식 만들 때 사용

```js
// const add = function(x,y) {
//     return x + y;
// }

const add = (x, y) => {
  return x + y;
};

const square = (num) => {
  // 인수 1개면 괄호 없애줄 수 있음.
  return num * num;
};

const rollDie = () => {
  // 인수 0개여서 괄호 써준거임. 괄호 없앨 수 있는 거는 오직 1개일때만
  return Math.floor(Math.random() * 6) + 1;
};
```

## 화살표 함수의 반환 - 더욱 더 짧게 만드는 법

- 하나의 값을 반환할때 중괄호 대신 괄호 써주고 return 을 안써줄 수 있음. 심지어 괄호도 안쓰고 한줄로 써줄 수도 있음.
- 중요한 건 함수의 바디에 표현식이 하나만 있어야함.

```js
const add = (a, b) => a + b;

const rollDie = () => Math.floor(Math.random() * 6) + 1;

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )
const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

//아래 예시에서 movie의 괄호 없어도 됨. 인수 하나니까
const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);
// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))
```

## setTimeout과 setInterval

- setTimeout은 비동기 JavaScript 섹션에서 핵심적인 역할을 함.
- 첫번째는 콜백함수고 두번째인수는 그 함수의 실행을 연기시킬 밀리초의 숫자 담음.
- 콜백함수가 아닌 그냥 함수가 전달되는 경우 곧바로 실행함.
- setInterval은 전달할 함수를 호출하는데 콜백을 매 특정 밀리 초 마다 호출하는 함수임.
- 계속 반복되기 때문에 setInterval은 인터벌에 해당하는 id를 반환해주는데 그거를 받아서 clearInterval에 해당 id를 넣어줘야함.
- 다른 함수의 인자로 사용되는 함수를 콜백 함수라고 함.

```js
console.log("HELLO!!!...");
setTimeout(() => {
  console.log("...are you still there?");
}, 3000);

console.log("GOODBYE!!");

const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

// clearInterval(id);
```

## Filter

- 요소로 구성된 배열에서 필터링을 하여 새로운 배열 만듬.
- 원본 배열을 바꾸지는 않음.

```js
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const d = numbers.filter((n) => {
  return n < 10;
});

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

const badMovies = movies.filter((m) => m.score < 70);

const recentMovies = movies.filter((m) => m.year > 2000);

// const goodMovies = movies.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => m.title)

movies.filter((m) => m.score > 80).map((m) => m.title);
```

## some, every

- 항상 참이나 거짓을 반환함.
- every는 모두 조건에 맞아야 참 반환. some은 하나만 맞아도 참

```js
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

exams.every((score) => score >= 75); // true

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2010,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

movies.some((movie) => movie.year > 2015);
```

## Reduce 메서드

- 배열을 가져다가 점차 줄여가면서 마지막에는 하나의 값만 남기는 것.
- 첫번째 매개변수는 리턴되는 요소, 두번째 매개변수는 각각의 요소
- evens.reduce((sum, num) => sum + num, 100); 예시처럼 , 뒤에 뭐 넣으면 그게 초기 sum값임.

```js
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price);

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});
// 위와 같이 최솟값 찾아 줄수도 있음

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

const highestRated = movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});

// We can provide an initial value as the 2nd arg to reduce:
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num); //20
evens.reduce((sum, num) => sum + num, 100); //120
```

## 화살표함수와 this

- 일반 함수와 달리 화살표 함수에서 this 키워드는 다르게 동작함.
- 처음 this 봤을때는 함수가 만든 범위와 관련이 없고 실행하는 방법과 관련이 있다고 했는데 화살표 함수 썼을 때는 그렇지 않음.
- 화살표 함수 안에 있는 this 키워드는 범위에 상속되는 this 키워드 값과 같다.

```js
const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      // setTimeout은 윈도우 객체의 메서드라 function() 형식으로 쓰면 this가 윈도우객체임.
      //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};
```
