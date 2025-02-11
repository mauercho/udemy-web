## 실습

```js
p1Display.classList.remove("winner", "loser");
p2Display.classList.remove("winner", "loser");
```

- 이런 식으로 있으면 지우고 없으면 없는거고 만들 수 있음.

## Bulma

- https://bulma.io/

## 코드 리팩토링

- practice 폴더에 있는 js랑 scorekeeper 폴더에 있는 js랑 비교해보기. 후자에 코드 리팩토링이 잘 되어있음.

```js
for (let p of [p1, p2]) {
  p.score = 0;
  p.display.textContent = 0;
  p.display.classList.remove("has-text-success", "has-text-danger");
  p.button.disabled = false;
} // 이렇게도 접근 가능함. 많을때 유용함.
```
