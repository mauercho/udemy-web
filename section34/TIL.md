## 템플레이팅이란

- 검색했을때 검색결과 부분만 다르고 패턴은 같은 것을 확인할 수 있음.
- 템플릿을 사용한거임. 최종 적으로 로직과 HTML 응답 생성을 결합하는 것이 목표
- 쓸 도구들 많음. -> EJS Handlebars Nunjucks Pug 등. EJS 쓸거임.(javascript문법 비슷하게 씀)

## EJS용 Express 구성하기

- 템플레이팅 엔진은 여러개이기 때문에 express 에게 ejs 쓴다고 알려줘야함. app.set('view engine', 'ejs'); -> view engine ejs로 써라.
- npm i ejs 하면 Expresse이면에서 우리가 설치한 EJS 패키지를 불러올거임.
- view engine을 사용할 때 express는 views나 템플릿이 views 디렉토리 안에 있다고 가정함.
- 그동안 문자열 보내왔는데(send) render로 파일 템플릿 보낼 수 있음. -> render

```js
app.get("/", (req, res) => {
  res.render("home.ejs");
});
```

- 이렇게 가능. 엔진이 ejs이기 때문에 home만 붙여도 됨.

## 뷰 디렉토리 설정하기.

- 지금은 위치가 views 폴더가 있는 디렉토리와 동일한 곳에서 열었을 때만 작동함.
- 상위 포러로 가면 액세스는 가능한데 views의 home.ejs를 참고할 수 없음.
- 내장된 모듈 path 써서 해결
- app.set("views", path.join(\_\_dirname, "/views")); index.js라는 파일이 있는 현재 디렉토리를 가져와서 거기에 views를 붙여주는 거임.
- 이제 다른 폴더에서 nodemon index.js 하면 됨,
- path는 파일과 디렉토리 경로에 관한 메서드를 제공해줌.

```js
const path = require("path");
app.set("views", path.join(__dirname, "/views"));
```

## EJS 보간 구문

- EJS같은 템플레이팅 엔진을 사용하는 이유는 로직을 더하고 데이터를 보충하고 빈 곳을 메우기 위해서임.
- \<%= %> 태그: 이 안에 코드를 넣으면 그 안의 값은 템플릿으로 출력됨. \<%= `hello world.toUpperCase() %>

```ejs
Your random number is: <%= Math.floor(Math.random() * 10) + 1 %>
```

- 위와 같이 써줄 수 있지만 템플릿에서 로직은 최대한 제거하려 하는게 좋음.

```js
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { rand: num });
});
```

- 위와 같이 render 할때 두번째 인자에 키-값 쌍 객체를 써줄 수 있음. 최종 객체가 템플릿으로 전달됨.
- random.ejs도 아래와 같이 바꾸면 자동으로 값 전달.

```ejs
<h1>Your random number is: <%= rand %></h1>
```

- 그냥 동일하게 res.render("random", { num }); 이런식으로 보내도 됨. Num 을 num으로 만들고 싶다는 거임.

```js
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
});
```

```ejs
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= subreddit %></title>
  </head>
  <body>
    <h1>Browsing The <%= subreddit %></h1>
  </body>
</html>
```

- 똑같이 해줬음.

## EJS 조건문

- 위의 \<%= 구문은 어떤 값을 템플릿으로 출력해줌.
- \<% 로 JavaScript 임베드 하되 결과는 템플릿에 추가하지 않는 구문 쓸 수 있음.
- 아래는 if else 문 예시. 그냥 ? 조건문 써서 한 줄로 뽑는 예시도 있는거 확인. 이때는 템플릿에 출력해야하기 때문에 \<%= 씀.

```ejs
//random.ejs
<h1>Your random number is: <%= num %></h1>
<% if(num % 2 === 0){ %>
<h2>That is an even number!</h2>
<% } else { %>
<h2>That is an odd number!</h2>
<% } %>
<p>Here's an alternate way of doing it:</p>
<h3>That number is: <%= num%2===0 ? 'EVEN' : 'ODD' %></h3>
```

## EJS의 루프

- 조건문과 똑같이 \<% 쓰면 됨.

```js
app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats });
});
```

```ejs
// cats.ejs
<h1>All The Cats</h1>
<ul>
    <% for(let cat of cats) { %>
    <li><%= cat %></li>
    <% } %>
</ul>

```

- 위 예시에서 cat에 \<%= 안써주면 그대로 cat글자만 나옴.

## 복잡한 예시

```js
//index.js
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data }); // 이렇게 넘겨야 안에 있는 요소들 그냥 특성에 접근 가능함.
  } else {
    res.render("notfound", { subreddit });
  }
});
```

```ejs
<h1>Browsing The <%= name %> subreddit</h1>
<h2><%= description %></h2>
<p><%=subscribers %> Total Subscribers</p>
<hr />

<% for(let post of posts) { %>
<article>
  <p><%= post.title %> - <b><%=post.author %></b></p>
  <% if(post.img) { %>
  <img src="<%= post.img %>" alt="" />
  <% } %>
</article>
<% } %>

```

- 맨위에 const redditData = require('./data.json'); 해주고 했음. 나중에는 직접 데이터 받을거임.

## 정적 Asset사용하기.

- 정적 파일을 제공한다는 것은 css나 javascript와 같은 파일이 제공한다 것 사진 로고 글꼴 오디오 등
- express.static이라는 미들웨어 라는 걸 이용하여 적용 가능
- index.js에 app.use(express.static(path.join(\_\_dirname, 'public'))) 추가. 똑같이 index.js가 있는 곳의 절대경로 참조 하는 거임. public 디렉토리에 에셋이나 정적파일 넣을 수 있음.
- 원하는 ejs에 \<link rel="stylesheet" href="/app.css"> 이런식으로 추가. public이후에 있는 파일 적어야함. public/app.css 이기 때문에 app.css 적었음.

## 부트스트랩과 Express

- cdn 써도 되는데 예시에서는 그냥 다운 받았음. public/css public/js에 파일 넣고 아래와 같이 넣어줬음.

```ejs
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<script src="/js/jquery.js"></script>
<script src="/js/bootstrap.min.js"></script>
```

- navbar 찾아서 넣어주고 끝

```js
// subreddit.ejs
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="#">
    Express Demo
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">
          Home <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/rand">
          Random
        </a>
      </li>
      <li class="nav-item">
        {/* href 넣어준거 확인 */}
        <a class="nav-link" href="/r/chickens">
          Chickens
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/r/soccer">
          Soccer
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/r/mightyharvest">
          Mighty Harvest
        </a>
      </li>
    </ul>
  </div>
</nav>
```

## EJS와 파일 분할

- 다른 페이지에서 위의 예시와 같이 navbar 복사 head 복사 하려면 번거로움. 모든 파일마다 일일히 넣어주어야함.
- 공통으로 사용할 수 있게 만들고 필요할 때마다 하위 템플릿에 그 템플릿을 포함할 수 있음.
- \<%- include('partials/head') %> 이런 식으로 넣어주면됨.
- 모든 ejs파일 보면 확인 가능함. footer head navbar 이렇게 include 해줬음.
- 대시(-)를 사용하면 이스케이프가 되지 않은 값을 템플릿에 출력함. 콘텐츠를 문자열로 취급할떄 이스케이프 된다고함. = 쓴거는 괄호안에 콘텐츠는 이스케이프가 됨. 즉 = 쓰면 콘텐츠를 HTML로 취급 안함. - 사용하면 콘텐츠를 HTML로 취급함.
