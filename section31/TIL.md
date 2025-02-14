## Node

- JavaScript의 런타임임.
- JavaScript는 설치하지 않는 대신 ECMAScript 사양이라는 일정한 사양을 갖추어야함. 그러면 브라우저가 JavaScript를 실행함.
- 오랫동안 브라우저가 JavaScript를 작성하고 실행할 수 있는 유일한 장소였음.
- Node는 브라우저 밖에서 작동되는 JavaScript 실행 환경임.
- 웹서버 구축 가능(내 API를 만듬. 내 데이터베이스를 만들어 거기에 웹 서버를 연결) ex) Express
- 명령줄 도구 만드는 데도 쓰임. 명령줄 도구란 사용자 인터페이스가 없는 경우에 명령줄에서 실행되는 어플리케이션. ex) npm
- 네이티브 앱도 node로 만들 수 있음.

## Node REPL

- 브라우저의 콘솔은 REPL 읽고 평가하고 출력하고 반복함.
- 문서 객체 모델 API가 Node에는 없음. window(브라우저에서 전역 객체), doucument 없음.
- global 입력해보면 setTimeout 이런거 있음.
- 브라우저에 없는 기능 많이 있음. -> 내장 모듈임. 이걸로 운영 체제와 파일과 폴더를 다룰 수 있음.
- js파일을 node firstScript.js 같이 해주면 실행됨. node를 입력해서 REPL로 열고 파일명과 함께 입력해서 스크립트를 실행할 수 있었음.

## 프로세스와 Argv

- node 공식 문서에서 process 살펴보면 process는 Node에서 사용하는 객체임. 전역 범위에 있음.
- process.version, process.release 이런거 됨.

```js
console.log("HELLO FROM ARGS FILE!");
console.log(process.argv);
```

- proces.argv 하면 첫번째 요소는 process.execPath 노드를 실행할 수 있는 특성 뜨고 두번째 값은 실행하고 있는 파일뜸. 다음 요소부터는 전달된 인수 뜸.

```js
//greeter.js
const args = process.argv.slice(2);
for (let arg of args) {
  console.log(`Hi there, ${arg}`);
}
```

- 위와 같이하고 node greeter.js colt rusty 치면 Hi there, colt. Hi there, rusty 뜸.

## 파일 시스템 모듈 fs

- fs는 파일 시스템을 의미하는 모듈임. 파일 생성 읽기 추가 등 다양한 메서드 있음.
- 모든 파일 시스템은 동기 방식과 비동기 방식으로 작동함. 비동기 방식은 완료되었다는 콜백을 마지막 인수로 받아들임. 동기 연산은 발생한 예외는 즉시 처분되므로 try...catch문 써야함.
- mkdirSync는 동기 메서드 mkdir은 비동기 메서드

```js
const fs = require("fs");
const folderName = process.argv[2] || "Project"; // 폴더 이름 있으면 argv[2]고 없으면 Project

// fs.mkdir('Dogs', { recursive: true }, (err) => { //비동기
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

try {
  fs.mkdirSync(folderName); // 폴더 생성되고 파일 만들어야해서 동기 씀.
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (e) {
  console.log("SOMETHING WENT WRONG!!!");
  console.log(e);
}
```
