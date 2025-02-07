## For 루프

- 어떤 기능을 반복함.
- for은 기존에 아는 내용
- 어떻게 멈추는지와 정확하게 쓰였는지 항상 유의해야 무한 루프 발생 안함.

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

## 배열 루프

- 배열을 다룰 때는 루프 씀.

```js
const animals = ["lions", "tigers", "bears"];
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}
// 0 lions
// 1 tigers
// 2 bears
```

## 네스트 구성루프

```js
for (let i = 1; i <= 10; i++) {
  console.log(`i is : ${i}`);
  for (let j = 1; j < 4; j++) {
    console.log(`        j is: ${j}`);
  }
}

const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
```

## while loop

- 반복 횟수가 정해져 있지 않을 때 while 루프 사용하면 유용함.

```js
let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
  guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!");
```

## break

- break 쓰면 반복문 벗어남.

```js
let input = prompt("Hey, say something!");
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === "stop copying me") break;
}
console.log("OK YOU WIN!");
```

## 추측 게임 만들기

```js
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess:");
  } else {
    guess = prompt("Too low! Enter a new guess:");
  }
}

if (guess === "q") {
  console.log("OK, YOU QUIT!");
} else {
  console.log("CONGRATS YOU WIN!");
  console.log(`You got it! It took you ${attempts} guesses`);
}
```

## for..of

- 좀 더 깔끔하게 코드 쓸 수 있음.
- 배열에서 각각의 요소에 액세스하기 위한 목적으로 만든 거임. 인덱스는 신경 쓰지 않아도 됨.
- 반복 가능한 다른 객체 반복시키는 손쉬운 방법 -> 문자열도 가능 근데 배열이랑 가장 많이 쓰임.

```js
const subreddits = ["cringe", "books", "chickens", "funny"];
for (let sub of subreddits) {
  console.log(sub);
}

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// 위의 코드를 다음과 같이 깔끔하게 바꿀 수 있음.
for (let row of seatingChart) {
  for (let student of row) {
    console.log(student);
  }
}
```

## 객체 루프

- 객체는 반복 가능한 걸로 인식되지 않음.
- 그래서 for...of 안 쓰임.
- 대신 for...in 쓰임.
- key 값 출력.
- Object.values(testScores), Object.keys(testScores), Object.entries(testScores) 이거 가능. 각각 값, 키, 키-값 쌍. 배열 반환 해줌.
- 객체에는 length 쓰면 undefined 뜸. Object.keys(testScores) 이런거 반환된 배열을 토대로 length 해줘야함.

```js
const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`);
}

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
```

## Todo list 만들기

- splice 는 삭제된 배열을 반환해줌.
- parseInt로 나온 거를 Number.isNaN() 의 인자로 넣어서 숫자가 들어왔나 아닌게 들어왔나 체크 가능.
