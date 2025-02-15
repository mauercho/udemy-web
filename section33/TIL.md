## Express

- 웹 개발 프레임워크
- 메서드 애드온 플러그인 제공됨. API 생성하는 등 작업 도와줌.
- 라이브러리는 언제든지 코드에 결합 가능함. 우리가 제어할 수 있음.
- 프레임워크는 제어 관여하기 힘듬. 프레임워크의 작동 원리에 따라 코드를 작성할 뿐임.
- 앱이름에는 대문자쓰면 안됨.

## Express 앱

```js
const express = require("express");
const app = express();

app.use(() => {
  console.log("We got a new request!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
```

- 신버전은 npm i express 로 되는데 구버전은 --save 붙여야함.
- console.dir(app) 하면 많은 메서드 확인 가능
- listen 쓰면 특정 포트로 요청받으면 함수가 실행되도록 할 수 있음.
- use 쓰면 요청이 어디서 오든 상관없이 요청이 들어오면 콜백이 실행되는거임.

## 요청 및 응답 객체

- 위의 예시에서 요청이 서버에 도착했을 때 응답할 내용이 없었음.
- 콘텐츠로 응답하기 위해서 두 가지 객체를 알아야함. -> 들어오는 요청을 의미하는 객체(req) 응답을 의미하는 객체(res)
- http요청은 자바스크립트 객체가 아니라 텍스트 정보인데 express는 이걸 데이터로 변환함.
- use 콜백함수에 console.dir(req) 해보면 많은 객체 나옴.
- express가 자동으로 http 요청 정보를 파싱해 javascript객체를 만들고 콜백의 첫 번째 인수(req)로 전달한다는 거임.
- res.send: HTTP 요청 보냄. JSON으로 보낼 수도 있음.

```js
const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("We got a new request!");
  // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!");
  // res.send({ color: "red" });
  res.send("<h1>This is my webpage</h1>");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
```

## routing

- 요청된 경로를 가져와서 응답을 갖는 어떠한 코드에 맞추는 것
- get, post, delete, put 다 가능
- 경로와 콜백함수 필요.
- res.send로 응답을 보낼때 하나의 요청으로 끝남.
- 존재하지 않는 라우트를 요청하면 express로부터 cannot get 응답을 받음.

```js
app.get("*", (req, res) => {
  res.send(`I don't know that path!`);
}); // 존재하지 않는 라우트 요청하는거 처리 res.send로 응답을 보낼때 하나의 요청으로 끝나기 때문에 파일 마지막에 써줘야함.
```

## Express 경로 매개 변수

- 경로 문자열에 콜론 이용해 경수 변수로 지정하게끔 할 수 있음.
- 유효한건지 확인하는 작업 없음. 그냥 패턴만 확인하는 거임.
- req객체에 params로 매개변수 확인 가능

```js
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});
```

## 쿼리 문자열 작업하기

- 쿼리란 URL의 일부로 물음표 뒤에 위치하며 키-값 쌍으로 정보를 담음. ex) search?q=colors . q=colors를 갖는 쿼리 문자열임.
- 라우트를 정의할때 경로에 쿼리 문자열에 일치시키거나 쿼리 문자열을 찾는 코드를 추가하지 않음. -> 대신 req 객체의 query라는 특성 이용.
- q=dogs&color=red 이렇게 주소가 들어왔을때 console.log(req.query) 해보면 {q: 'dogs', color:'red'} 이렇게 뜸.

```js
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    // q가 누락된경우 그냥 /search 에서 끝남.
    res.send("NOTHING FOUND IF NOTHING SEARCHED!");
  } else {
    res.send(`<h1>Search results for: ${q}</h1>`);
  }
});
```

## Nodemon

- 지금까지 성가신 점은 코드를 변경할때마다 서버를 재시작해야 한다는 거였음.
- Nodemon이란 패키지 다운 받고 (npm i -g nodemon) nodemon index.js 하면 됨.
- 경로를 관찰하고 폴더의 모든 것을 관찰하고 있음을 알려줌.
- 파일 혹은 디렉토리의 다른 js파일을 변경하고 저장할때 nodemon은 이를 감지하고 서버를 재시작할거임.
