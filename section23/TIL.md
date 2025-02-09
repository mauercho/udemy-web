## 기본 매개 변수

- 기본 매개 변수추가 가능
- 순서 중요함. 디폴트 값이 없는 매개변수 뒤에 디폴트 값이 있는 변수가 있어야함.

```js
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hey there", punc = "!") {
  console.log(`${msg}, ${person}${punc}`);
}
```

## 함수 호출 시의 스프레드 구문

- 다양한 상황에서 쓰임.
- 반복 가능한 객체를 전개 구문을 사용하여 확장함.
- 배열 스프레이

```js
const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
Math.max(13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456); //이건 잘 나옴.
Math.max(nums); // NaN 숫자 전체가 있는 배열이 통과되어서 어떻게 출력해야할지 모름.
// 인수를 따로따로 넣어야함.
Math.max(...nums); // 배열이 펼쳐지고 인수들이 따로따로 들어가짐.

console.log(nums); // [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456]
console.log(...nums); // 13 4 5 21 3 3 1 2 7 6 4 2 53456 이런 식으로 나옴
console.log(..."hello"); // h e l l o
console.log("h", "e", "l"); // h e l

const cats = ["Blue", "Scout", "Rocket"];
const pets = [...cats]; // 이거 복사한건데 컨텐츠를 복사한거임. 깊은 복사 느낌

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs]; //["Blue", "Scout", "Rocket", "Rusty", "Wyatt"]
```

# 객체 스프레이

- 객체 여러개 하나로 합칠 수 있음. 복사 수정 가능
- 배열을 펼쳐서 새로운 객체를 만들 수도 있음.
- 객체를 복사할 때 전개를 사용해서 펼침.

```js
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const catDog = { ...feline, ...canine }; // 합쳐진 객체가 나옴
// 여기서 family key값이 겹침. 그때는 뒤에 있는걸로.
const catDog = { ...feline, ...canine, family: "Dog" }; //맨 뒤의 Dog로 겹쳐짐.

const arr = { ...[2, 4, 6, 8] }; // {0:2, 1:4, 2:6, 3:8}

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
```

## 나머지 매개 변수

- 점 세개 써서 전개와 비슷하다고 생각할 수 있지만 전혀 다름.
- 함수를 만들 때 인수 객체라는 값이 전달되었음. 배열 객체는 아니여서 배열 메서드 사용불가 but 함수로 전달된 인수 모두 가지고 있음.
- 나머지 매개변수는 펼치지 않고 매개변수를 한데 모았음.

```js
function sum() {
  return arguments.reduce((total, el) => total + el);
} // 이거는 불가능 배열 메서드 사용 불가능 해서,,, 근데 arguments 뜯어보면 인수를 모두 가지고 있음.
```

```js
function sum(...nums) {
  return nums.reduce((total, el) => total + el);
} // 이렇게 쓰면 됨.

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}
// raceResults('tammy', 'todd', 'tina', 'trevor', 'travis');
// 여기서 ${}에 들어가면 문자열 변환이 일어나서 'tina', 'trevor', 'travis' 이렇게 뽑히는거임.
// console.log(everyoneElse) 만하면 배열로 나옴. 그래서 console.log(everyoneElse + '') 하면 배열을 또 문자열 변환 일으키고 더해준거기때문에 'tina', 'trevor', 'travis' 이렇게 나옴.
```

## 배열 분해

- 값을 해체하고 꺼내고 선정하는 간편한 방식 배열이나 객체에 적용 가능

```js
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

const [gold, silver] = scores; // gold변수에는 929321 silver변수에는 899341 넣어짐.
const [gold, silver, bronze, ...everyoneElse] = scores; // eveyoneElse에는 다들어감.
```

## 객체 분해

- 배열과 달리 순서가 상관 없음. 훨씬 더 자주 쓰임.
- 키 이름과 같아야함.

```js
const user = {
  email: "harvey@gmail.com",
  password: "sCoTt1948sMiTh",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors",
  city: "San Francisco",
  state: "California",
};

const user2 = {
  email: "Stacy@gmail.com",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1987,
  city: "Tulsa",
  state: "Oklahoma",
};

// const firstName = user.firstName;
// const lastName = user.lastName; // 이렇게 쓰는게 아니라
const { email, firstName, lastName, city, bio } = user; // 이런식으로 써야함.
// 왼쪽에 있는 것들이 user의 key값으로 있어야함. 없으면 undefined
const { born: birthYear, died: deathYear = "N/A" } = user; // died란 변수로 저장하는게 아니라 deathYear로 저장하고 있는 거 확인. 그리고 key값 없으면 N/A로 저장하게 하고 있음.
```

## 매개 변수 분해

-

```js
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

// 위와 같은 방식으로 할 수도 있음. 근데 user다른 키값 많은거 안쓸 수도 있잖어...

function fullName({ firstName, lastName = "N/A" }) {
  return `${firstName} ${lastName}`;
} // 이것 처럼 가능. key값 없을 수도 있으니 없을 경우의 값 넣어줌.

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

// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({ title, score, year }) => {
  return `${title} (${year}) is rated ${score}`;
});
```
