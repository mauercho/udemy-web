## Module.exports 사용하기

- Node도 다른 파일에서 코드 불러올 수 있음.

```js
//math.js
const add = (x, y) => x + y;

const PI = 3.14159;

const square = (x) => x * x;

exports.square = square;
exports.PI = PI;

// =========================
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;
```

```js
const { PI, square } = require("./math"); // 이 디렉토리에서 참조한다는 의미에서 ./ 붙여줌.

console.log(PI);

console.log(square(9));
```

- exports로 써도 됨. 근데 exports = "ADSFDSF" 이런 식으로 하나의 값으로 추가하면 더 이상 exports.PI = PI이런 거 못 씀. exports == module.exports 인데 새로운 값으로 할당하면 더 이상 exports == module.exports 인게 아님.
- 따라서 단일 값 보낼 때는 module.exports 해야함.
- 객체로 보내준다고 생각하면됨. exports.aaa = square; 하면 require하는 쪽에서 aaa: [Function: square]; 처럼 있음.

## 디렉토리의 필요성

- 디렉토리 전체를 불러올 수 있음. 매우 자주 쓰이는 패턴임.
- index.js는 Node에서 쓰이는 특정한 이름인데 일종의 진입점. 디렉토리의 메인파일이라 디렉토리 전체 불러오라하면 Node가 index.js 찾음.

```js
// index.js
const blue = require("./blue");
const sadie = require("./sadie");
const janet = require("./janet");

const allCats = [blue, sadie, janet];

module.exports = allCats;

// blue.js
// module.exports = {
//     name: 'blue',
//     color: 'grey'
// }
```

```js
const cats = require("./shelter");
console.log("REQUIRED AN ENTIRE DIRECTORY!", cats);
```

## npm

- node 커뮤니티
- 많은 패키지로 된 라이브러리
- 명령줄 도구가 있음. 이 도구를 사용해 패키지들을 손쉽게 설치하고 관리할 수 있음.

## 패키지 설치하기

- npm install 패키지 이름. 이름 정확하게 적기
- 패키지의 핵심코드들이 node_modules라는 디렉토리 안에 들어가게 됨.
- package-lock.json는 node_modules 디렉토리의 콘텐츠에 관한 기록임.
- const jokes = require("give-me-a-joke"); node_modules에 있는거 불러올때는 파일경로 안써도 됨.
- 쓰는 방법은 공식문서 보면됨.

```js
const jokes = require("give-me-a-joke");
const colors = require("colors");

jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow); // 문자열 프로토타입에 rainbow패키지가 추가되었나보군!
});
```

## 글로벌 패키지 추가하기.

- require 하면 node_modules를 찾아보려고 함. 패키지를 하나의 디렉토리 지역에 설치한 거임.
- 지역 설치를 하는 이유는 진행하는 프로젝트에 따라서 다른 버전이 필요할 수 있기 때문임.
- npm install -g cowsay -> -g 옵션 붙이면 전역설치임. usr/local/lib/node_modules에 쓰기 권한 있어야 쓸 수 있음.
- 전역 인거 파일에서 require 해도 밖에서 node index.js하면 실행 안될 수 있음. npm link cowsay 이런 식으로 지역 설치되지 않은 전역 패키지에 액세스할 수 있음.

## package.json

- node_modules에는 설치한 모든 패키지가 있고 직접 설치하지 않은 디펜던시도 있음.
- package.json은 특별한 이름을 지닌 파일로 모든 노드 앱에 들어감. 보통 프로젝트의 루트 디렉토리에 넣음.
- description, license, version, dependencies 등등 써있음.
- npm이 여기 써있는 dependencies를 다 다운받을거임.
- npm init -> packages.json 직접 생성. 그리고 npm install 하면 dependencies에 그거 들어가 있음.
- 착수 중인 작업에 대한 기록 남길 수 있고 다른 기기에서 내 자신이 파일 공유할 때 디펜던시를 한번에 다운로드할 수 있음.

## 한 프로젝트에 대한 모든 종속요소 설치하기.

- package.json에 여러 dependencies 가 있어서 다른 사람도 이거 다운받을 수 있음.
- 보통 node_modules폴더를 공유할 때 포함시키지 않음. 공간을 많이 차지하기 때문임.
- package.json이 있는 곳에서 npm install 만 치면 거기 dependencies에 있는거 다 다운로드 받을거임.
- 더 이상 쓰지 않을때는 불필요한 디펜던시 설치되지 않게 package.json에서 삭제하기.
