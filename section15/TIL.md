## 문자열

- 텍스트 정보 따옴표로 감싸야함.
- 작은 따옴표, 큰 따옴표 둘다 가능 일관성만 유지하면 됨.
- 원하는 문자 다 가능.

## Indices 와 Length

- 문자열은 인덱싱되어있음. 0부터 셈.
- let animal = "Dumbo Octopus"; animal[0];
- animal[99] -> 이렇게 쓰면 undefined 씀.
- 보통은 문자열 첫 글자 확인 때 많이 씀.
- length 라는 특성 있음. animal.length
- "lol" + "lol" 문자열 접합.
- 문자열 하나만 바꿀 수 없음. 전체적으로 새 문자열을 덮어 써야함.
- 숫자와 문자열 더해도 됨, 1 + "hi" -> 1hi 나옴 이건 문자열임.

## 문자열 메서드

- 크롬 개발자도구에서 확인 가능. "hello". 만 해도 목록으로 알려줌.
- thing.method()
  - toUpperCase() : 모두 대문자로 만듬. 비파괴 매서드임. 원본 문자열은 그대로.
  - toLowerCase() : 모두 소문자
  - trim(): 문자열의 처음과 끝에 오는 공백을 모두 깎아줌.
- greeting.trim().toUpperCase() -> 이런식으로 연달아 써줄 수도 있음.

## 인수가 있는 문자열 규칙

- 많은 메서드는 인수를 받음. 괄호안에 넣는 값
- thing.method()
  - indexOf(): 주어진 인수가 나타나는 문자열 인덱스와 자릿수 반환. 없으면 -1 let tvShow = 'catdog'; tvShow.indexOf('cat'); -> 0
  - slice(): 한개 이상의 인수 받을 수 있음. 문자열 잘라줌. 첫번째 인수는 startIndex 두번째 인수는 endIndex + 1. 하나만 써주면 startIndex 부터 끝까지 잘라줌. 음수 인덱스도 가능
  - replace(): 특정 문자열 대신에 패턴 교체. 나중에 정규 표현식 배우면 더 유용하게 씀. 첫번째인수는 교체되어야 할 값 두번째인수는 그 자리를 교체해서 들어가려는 값.
  - repeat(): 안에 있는 인수만큼 문자열 반복

## 엄청나게 유용한 문자열 테믈릿

- 문자열 안에 표현식을 내장할 수 있음.
- 백틱 써야함. `hello ${1 + 2 + 9}` 하면 알아서 hello 12로 바꿔줌.
- 달러사인과 중괄호 쓴 부분 평가해줌. 따옴표들 대신 백틱으로 써줘도 문자열임.
- 변수 써줘도 됨. ${product}. 메서드 호출도 가능 ${product.toUpperCase()}

## Undefinde 와 NULL

- JavaScript의 실제 값
- null은 일부로 값을 지정하지 않는 걸로 설정하는 거. false 나 0으로 또는 빈 문자열로 설정할 수 있지만 null로 설정하면 명시적으로 값이 없다고 알려주는 거임.
- undefined: 아무것도 정의된 게 없다. 자주 볼거임.

## 난수와 Math 개체

- 수학과 관련 있는 특성과 메서드의 모음: Math 객체
- 콘솔에 Math만 검색해도 나옴.
- Math.PI 이런 식으로 접근 가능
- Math.floor(): 소숫점 그냥 버림.
- Math.ceil(): 그냥 올림.
- Math.random(); 0과 1 사이의 소숫점 숫자 임의로 생성.
  - 1과 5사이 숫자 얻으려면 Math.floor(Math.random() \* 5) + 1
- 메서드 궁금한 거 있으면 MDN 보면 됨
