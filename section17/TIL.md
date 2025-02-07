## 배열

- 값의 순서 있는 집합
- 대괄호 쓰면됨. let colors = ['red', 'orange'];
- length 가능
- 동질성은 필요 없음. 모든 자료형 한꺼번에 넣을 수 있음.

## 배열 임의 접근

- 인덱스로 요소 찾음.
- 배열의 요소 바꿀수 있음. ex) colors[2] = 'yellow';
- 길이 3 짜리 배열에 colors[10] = 'indigo'; 이러면 중간에 undefinded 한 요소들이 생기고 index 10에 indigo 담김.

## 배열 메서드

- 배열에 내장된 메서드
  - push(): 배열 끝에 추가 ex)movieLine.push('oliver'). 배열 자체에 추가. movieLine.push('harry', 'hermione');
  - pop(): 마지막에 있는 배열 요소 뺌. let person = movieLine.pop() 빼고 마지막 요소 반환
  - shift(): 배열의 시작에서 요소를 뺌. 큐 생각하면됨. let nextPatron = movieLine.shift();
  - unshift(): 배열의 시작에 요소 추가함. movieLine.unshift('VIP');
  - concat(): let array3 = array1.concat(array2); 배열을 합쳐서 합친 것을 반환
  - include(): true 나 false 반환. 특정 값이 포함되어 있는지 알려줌. ex) cats.include('blue'); -> cats이라는 배열 안에 blue 있으면 true 없으면 false
  - indexOf(): 문자열이나 비슷한데 배열의 요소를 봐줌
  - reverse(): 원본 배열을 뒤집음. comboParty.reverse();
  - slice(): 배열의 일부를 복사하는 방법. 시작점과 끝점 인수 받음. 시작점만 적으면 그 부분부터 끝까지. let warmColors = colors.slice(0, 3); 인수로 음수도 받음. 원래 배열은 안 바뀜.
  - splice(): 기존 요소 제거하거나 대체하거나 새로운 요소들을 추가해서 배열의 내용을 변경함. 원본 배열 바뀜. colors.splice(1, 1) -> 1번째 인덱스부터 한개 제거. colors.splice(2, 0, 'red'); -> 2번째 인덱스부터 제거하지 말고 red 추가. colors.splice(3,0,'yellow-green','forestgreen'); 이렇게도 가능 colors.splice(2,2,'DELETED'); -> 2번째부터 2개 지우고 DELETED 추가. 삭제된거 배열로 반환해줌.
  - sort(): array1.sort(); 모두 문자열로 변환후 UTF코드 값 비교. 그래서 숫자는 정확하지 않음. 100보다 34가 더 크게 나옴. 함수 만들어서 써줘야함. 이건 추후 학습

## 참조 타입과 동일성 테스트

- [] === [] 은 false임. 배열은 참조. 고유한 주소의 값을 가짐.
- let nums =[1,2,3]; let numsCopy = nums; -> 서로 주소 값이 같아서 하나 바꾸면 다른 쪽도 바뀜.

## 배열 + const

- 배열은 일종의 주소로 작용했음. 따라서 const 배열 사용해도 배열의 콘텐츠 바꿀 수 있음.
- const nums = [1,2,3]; nums.push(4); 가능. 근데 nums = [1,2]; 이렇게 다른 참조로 바꿀라고 하면 오류 발생

## 다차원 배열

- 배열 안에 뭐든 넣을 수 있음. 배열 넣은 거임.
- const gameBoard = [\['X','O','X'], ['O', null, 'X'], \['O','O','X']] 이런느낌.
- gameBoard[1][1] 이런식으로 접근 가능
