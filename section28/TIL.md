## AJAX 개요

- URL을 치고 엔터 쳐서 HTTP 요청을 할 수 있지만 우리는 코드를 이용해서 요청 가능. -> AJAX 라고 함.
- AJAX = asynchoronous javascript and xml 의 약자. 비동기식 자바스크립트와 xml
- 정보를 올리거나 전송하고 정보 저장하려면 요청함.
- inspector창에서 Network 치면 나옴.
- 그동안 우리가 해왔던 요청방식은 링크 클릭 or Enter쳐서 폼을 제출해서 데이터를 받았음. 서버는 html css js로 데이터를 보냄. 브라우저는 렌더링된 결과물을 보여줌.
- 서버는 javascript로 요청을 받고 JSON같은 데이터 보내줄 수 있음. 주고 받는 정보를 inspector 네트워크에서 얻을 수도 있음. (데이터)
- 비동기적으로 데이터를 로드하고 업데이트 하는 기술

## API

- javascript로 AJAX요청을 할 때 HTML, CSS, JS 가 아닌 순수한 정보를 원함.
- 사람의 편의를 위한 코드 필요 X -> 이때 필요한게 API(application programming interface)
- 특정 엔드포인트를 제공하고 제공되는 엔드포인트는 코드에 정보로 응답하거나 다른 소프트웨어에 정보로 응답합니다.
- 컴퓨터가 여러 소프트웨어와 상호작용하거나 소통하는 모든 인터페이스를 의미함. -> 보통 webAPI 말함. (애플리케이션을 위한 인터페이스로 HTTP를 이용하는 API입니다)
- 다른 애플리케이션이나 데이터베이스로 가는 입구.
- 보통 JSON으로 응답함.

## JSON

- API가 주로 데이터를 전송할 때 쓰는 포맷. 오직 데이터만 있음.
- 예전에는 XML 썼는데 요즘은 JSON 씀.
- JavaScript의 객체 구문과 유사하게 생김. but 다름.
- JSON은 키값에 따옴표 사용함. JS에서는 키값에 따옴표 전혀 안씀. 그리고 JSON은 undefined 못 나타냄. -> 객체 배열 문자열 숫자 불리언 null 가능.
- JSON은 JavaScript에서만 쓰는게 아님. 언어마다 파싱하는 방법 있음.
- JavaScript는 내장된 메서드 있음. JSON.parse(데이터) -> 객체로 변환시켜줌. JSON.stringfy(데이터) -> 객체를 JSON으로 변환시켜줌.

## Using Hoppscotch (or Postman)

- Postman 로그인하게 바뀌어서 Hoppscotch 써도 됨. 오픈 소스임.
- https://hoppscotch.io/

## HTTP Verbs

- 같은 URL(엔드포인트가 같음) URL로 요청을 보내도 다양한 동사로 보낼 수 있음.
- 공식 문서 확인하면서 써야함.
- GET: 정보를 가져올때 사용함
- POST: 데이터를 어딘가로 보낼 때 사용함. 데이터를 보내서 특정 공간에 저장 등등
- DELETE: 뭔가 삭제

## HTTP 상태 코드

- https://developer.mozilla.org/ko/docs/Web/HTTP/Status
- 문제가 없을때 2로 시작하는 상태 코드 나옴.
- 4으로 시작하는 상태 코드는 클라이언트 사이드 오류에 해당함.
  - 404: Not Found
  - 405: Method Not Allowed 특정 요청 지원하지 않을 때 뜨는 코드
- 5로 시작하는 상태 코드는 서버 사이드 오류에 해당.
- 3으로 시작하는 상태 코드는 리디렉션과 관련있음.

## Understanding Query Strings

- 한 글자만 틀려도 완전히 다른 URL이 되고 요청에 오류가 생김.
- URL 끝에 ?sort=desc&color=blue 이런 식으로 붙은 거 자주 봤을 거임.
- 키-값 쌍이고 &로 구분 지음. 쿼리 문자열로 원하는 내용 추가한거임. 값 찾지 않는 이상 서버는 쿼리문자열 무시할 거임. 키먼저 쓰고 = 쓰고 값
- 많은 API가 사용자에게 쿼리 문자열을 통해 값을 제공하도록 만들어졌음.
- https://www.tvmaze.com/api/search/shows?q=purple 이런식으로 검색해 볼수도 있음.
- 일부 엔드 포인트에는 쿼리 문자열을 여러개 넣어야함.
- POSTMAN 에서는 parameters를 통해 쉽게 쿼리 문자열 추가 가능

## HTTP HEADERS

- 요청에 첨부하는 세부사항 느낌. 메타데이터와 같은 키-값 쌍. 응답에도 포함됨.
- 크롬에서 network탭 들어가서 요청 보면 Header 탭 따로 있음. 거기에 키-값 쌍으로 이루어짐.
- 특정 API에서는 사용자 지정 헤더를 보내야함. 브라우저에서는 힘든데 postman은 가능
- 공식 문서 확인하면 헤더에 키-값 뭐 써줘야하는지 알 수 있음.

## Making XHRS

- JS를 통해서 요청보내는 옛날 방식 -> 효율성 떨어짐. Promise 지원하지 않아 수많은 콜백 받음. 이런게 있다 정도로만 알면 됨.

```js
const req = new XMLHttpRequest(); // 객체 생성

req.onload = function () {
  // 오류가 없을때
  console.log("IT LOADED!!");
  const data = JSON.parse(this.responseText);
  console.log(data.name, data.height);
};

req.onerror = function () {
  // 오류 났을때
  console.log("ERROR!!!!");
  console.log(this);
};

req.open("GET", "https://swapi.dev/api/people/1/"); // 요청 열고
req.send(); //요청 전송
```

- 그냥 fetch 쓰자.

## FETCH API

- XHRS가 비동기 함수를 지원하지 않는 문제를 Fetch는 해결해줌.
- fetch('https://swapi.dev/api/people/1/') 해보면 Promise 객체 뜸. then catch 추가 가능!
- 하지만 Response 본문에 우리가 원하는 항목들이 없음. fetch가 헤더를 수신하는 즉시 promise가 처리되기 때문임.
- res.json 처럼 json메서드 사용하면 해결 가능. 이것도 프로미스 반환해야해서 then 추가

```js
fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESOLVED!", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });
```

- 요청보내고 다음 요청 보내는 경우 예시

```js
fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESOLVED!", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("https://swapi.dev/api/people/2/");
  })
  .then((res) => {
    console.log("SECOND REQUEST RESOLVED!!!");
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });
```

- 리팩토링 한거

```js
const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

loadStarWarsPeople();
```

- fetch 단점은 응답 객체의 본문이 자동으로 구문분석되지 않는다는 점임. -> axios가 해결해줌.

## Axios

- 라이브러리로 JavaScript의 네이티브 함수가 아님. HTTP 요청의 생성과 처리를 최대한 간소화할 목적으로 만들었음.
- import 해야함. cdn 으로 했음.
- fetch랑 달리 다시 json으로 호출해 처리할 필요없이 구문 분석하고 그 결과가 나옴.
- GET 요청뿐 아니라 다른 요청에도 Axios가 아주 좋은 패키지이자 라이브러리임.

```js
axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESPONSE: ", res);
  })
  .catch((e) => {
    console.log("ERROR! ", e);
  });

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);
```

## Axios로 헤더 세팅하기.

- 아래와 같이 하면 됨. axios 두번째 인자에 { headers: { Accept: "application/json" } }; 이런 식으로 넣어주면 됨.
- 어떤 API는 json을 원하면 /json이 포함된 엔드포인트를 지정하도록 하거나 type=json 문자열 추가하거나 등등 다양함.
- 아래 예시는 header를 수정해야하게 만든 API인거임.

```js
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);
```

## TV 프로그램 검색 앱 실습

```js
const searchTerm = form.elements.query.value;
// const res = await axios.get(
//   `http://api.tvmaze.com/search/shows?q=${searchTerm}`,
//   config
// );  // 이렇게도 가능
const config = { params: { q: searchTerm } };
const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
```

- 위의 예시보면 axios에서 제공하는 params를 이용하는 방법을 쓰고 있음.
- const config = { params: { q: searchTerm, isFunny: 'colt' }, headers: {} }; 이런 식으로도 가능
- 다른 사람의 API를 사용할 때 신경 써서 작성해야 함. API 과부화 올 수도 있음.

```js
const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
```
