## 콜 스택

- JavaScript가 뒤에서 사용하는 메커니즘 혹은 기능. 함수 호출과 관련된 실행 정보를 저장하고 관리하는 스택 자료구조
- 함수 호출 관리하는 방법(후입선출)
- inspector 창에서 sources 들어가면 breakpoint 넣고 디버깅할 수 있음.

## WebAPI와 단일 스레드

- 자바스크립트는 단일 스레드임 한번에 한가지의 일만 함.
- setTimeout 같은 거는 어떻게 적용되는거냐 ? 단일 스레드라면 그 시간만큼 기다려야 하는 것 아닌가?
- 브라우저가 작업함. 브라우저는 대부분 C++ 같은 언어로 작성되어서 JavaScript가 할 수 없는 것들을 함.
- JavaScript는 브라우저가 특정 작업을 처리하도록 넘길거임. -> Web API
- JavaScript 콜 스택이 WEB API 함수를 인식하고 브라우저에 전달함. setTimeout 같은 경우 특정 시간이 지나면 (브라우저가 작업 마치면) 다시 콜스택에 추가됨. JavaScript는 다시 이어받아서 코드 실행.
- 하나는 JavaScript가 실행하는 것이고 다른 하나는 나중에 실행되는 함수를 전달하는 콜백 개녕. 이 두가지 메커니즘으로 작동함.

## Callback이라는 지옥

```js
const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};
delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("green", 1000, () => {
        delayedColorChange("blue", 1000, () => {});
      });
    });
  });
});

// 이러면 1초마다 빨주노초 나옴
setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "orange";
    setTimeout(() => {
      document.body.style.backgroundColor = "yellow";
      setTimeout(() => {
        document.body.style.backgroundColor = "green";
        setTimeout(() => {
          document.body.style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

- 이런 패턴 흔함. 어떤 일이 일어나야 하는 종속적인 행동이 있을 때 첫번째 것이 끝나야 두번째 것이 발생할 수 있음. 이럴때 콜백 함수 사용
- 콜백함수도 실패와 성공처럼 두 개의 콜백이 있는 패턴이 있을 수도 있음. -> 복잡해질 수 밖에 없고 이게 JavaScript의 문제임.
- 중첩이 많이 생기고 콜백 지옥에 빠지는데 이것때문에 Promises가 필요함.

```js
searchMoviesAPI(
  "amadeus",
  () => {
    saveToMyDB(
      movies,
      () => {
        //if it works, run this:
      },
      () => {
        //if it doesn't work, run this:
      }
    );
  },
  () => {
    //if API is down, or request failed
  }
);
```

## Callback을 사용한 fakeRequest

- promise는 어떤 연산이 최종적으로 성공했는지 실패했는지 알려주는 객체임.
- 아래는 Promise를 안썼을때 예시

```js
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

fakeRequestCallback(
  "books.com/page1",
  function (response) {
    console.log("IT WORKED!!!!");
    console.log(response);
    fakeRequestCallback(
      "books.com/page2",
      function (response) {
        console.log("IT WORKED AGAIN!!!!");
        console.log(response);
        fakeRequestCallback(
          "books.com/page3",
          function (response) {
            console.log("IT WORKED AGAIN (3rd req)!!!!");
            console.log(response);
          },
          function (err) {
            console.log("ERROR (3rd req)!!!", err);
          }
        );
      },
      function (err) {
        console.log("ERROR (2nd req)!!!", err);
      }
    );
  },
  function (err) {
    console.log("ERROR!!!", err);
  }
);
```

## Promises를 사용한 fakeRequest

- Promise는 하나의 객체임. 최종 값이나 작동 여부에 대한 약속임.
- pending, resolved, rejected 3가지 상태 가짐.
- pending은 기다리는 상태, 비동기적 값이 최종적으로 resolved일지 rejected일지 결정되는데 이 때 특정 코드를 실행함.

```js
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then(() => {
    console.log("IT WORKED!!!!!! (page1)");
    fakeRequestPromise("yelp.com/api/coffee/page2")
      .then(() => {
        console.log("IT WORKED!!!!!! (page2)");
        fakeRequestPromise("yelp.com/api/coffee/page3")
          .then(() => {
            console.log("IT WORKED!!!!!! (page3)");
          })
          .catch(() => {
            console.log("OH NO, ERROR!!! (page3)");
          });
      })
      .catch(() => {
        console.log("OH NO, ERROR!!! (page2)");
      });
  })
  .catch(() => {
    console.log("OH NO, ERROR!!! (page1)");
  });
```

## Promises의 마법

- Promise는 .then 안에서 자신에게 Promise를 반환할 수 있음.
- 아래 예시에 나와 있음. 더 보기 깔끔함. 어디선가 에러 뜨면 그냥 catch
- promise는 전달 받은 값으로 resolve 또는 reject됨.

```js
fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("IT WORKED!!!!!! (page1)");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("IT WORKED!!!!!! (page2)");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log("IT WORKED!!!!!! (page3)");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH NO, A REQUEST FAILED!!!");
    console.log(err);
  });
```

## 자신만의 Promises 만들기.

- promise를 만들지는 않을거임. 근데 만드는 법 알면 좋음.
- new Promise()를 쓰고 안에 매개변수 둘 적어야함. 이름은 원하는대로 정하면 되는데 보통 resolve와 reject임. 이 함수들은 어디서든 실행 가능한 함수임. 하지만 이것들이 resolution, rejection 을 나타내줌.

```js
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("YOUR FAKE DATA HERE");
      }
      reject("Request Error!");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("DONE WITH REQUEST!");
    console.log("data is:", data);
  })
  .catch((err) => {
    console.log("OH NO!", err);
  });

//예전 콜백 지옥 함수도 아래와 같이 수정 가능
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("indigo", 1000))
  .then(() => delayedColorChange("violet", 1000));

// 읽기 굉장히 편해짐. 실패할 수도 없어서 Reject 필요없음. 만약 있으면 .catch 하나 추가하면 됨.
```

## 비동기 키워드 async -> Promise 위에 적용되는거임.

- async 자체가 비동기 함수로 선언하는 키워드임. 자동으로 Promise 반환
- 비동기 함수에 오류가 있으면 실패로 뜸.

```js
async function hello() {} // 이것도 Promise 객체임.

const sing = async () => {
  throw "OH NO, PROBLEM!"; // 이러면 rejected 되는 상황임.
  sdfiodshjfiudshf; // 이렇게 말도 안되는 오류 내도 reject == throw
  return "LA LA LA LA"; // resolve
};

sing()
  .then((data) => {
    console.log("PROMISE RESOLVED WITH:", data);
  })
  .catch((err) => {
    console.log("OH NO, PROMISE REJECTED!");
    console.log(err);
  });

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "corgifeetarecute") return "WELCOME!";
  throw "Invalid Password";
};

login("todd", "corgifeetarecute")
  .then((msg) => {
    console.log("LOGGED IN!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("ERROR!");
    console.log(err);
  });
```

## 대기 키워드 await

- await 키워드의 역할은 Promise가 값을 반환할 때까지 기다리기 위해 비동기 함수의 실행을 일시정지 시킴.
- 비동기함수에 쓴다고 생각.
- await 키워드의 역할은 기다리는거임. Promise가 값을 반환할 때까지 기다리기 위해 비동기 함수의 실행을 일시정지 시킴.

```js
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "ALL DONE!";
}

rainbow().then(() => console.log("END OF RAINBOW!")); // rainbow도 Promise 반환해서 then 쓸수 있음.

async function printRainbow() {
  await rainbow();
  console.log("END OF RAINBOW!");
}

printRainbow();
```

## 비동기 함수 오류 처리하기

- 실패 다루기 위해 try...catch 이용함.
- try안에서 실패하면 catch 로 들어간다는거 이용

```js
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 2000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("CAUGHT AN ERROR!");
    console.log("error is:", e);
  }
}
```
