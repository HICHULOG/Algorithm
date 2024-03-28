## 클로저(Closures)

클로저는 함수와 그 함수가 선언된 렉시컬 환경의 조합입니다. 이 환경은 함수가 생성될 때 주변 상태를 '캡처'하고, 이후 실행에서도 그 상태에 접근할 수 있게 합니다.

### 클로저 작동 원리

- JavaScript의 함수는 **내부 상태**에 접근할 수 있는 **내부 함수**를 포함할 수 있습니다.
- 내부 함수는 외부 함수의 실행이 끝난 후에도 외부 함수의 변수에 접근할 수 있습니다.
- 이러한 성질을 이용해 데이터를 은닉하고 특정 함수를 통해서만 데이터에 접근할 수 있게 할 수 있습니다.

### 클로저 사용하는 이유

1. **데이터 은닉과 캡슐화**
   - 클로저를 통해 내부 변수를 외부에서 직접 접근하지 못하게 할 수 있습니다.
2. **상태 유지**
   - 함수가 호출될 때마다 상태를 유지할 수 있습니다.
3. **동적 함수 생성**
   - 함수를 동적으로 생성하고 이 함수들이 생성될 당시의 환경을 기억하게 할 수 있습니다.
4. **커링(Currying)**
   - 함수의 인자를 분할하여 순차적으로 적용할 수 있게 합니다.

### 클로저 사용 예

1. **데이터 은닉과 캡슐화**
   ```javascript
   function counter() {
     let count = 0;
     return function() {
       return ++count;
     };
   }
   const myCounter = counter();
   console.log(myCounter()); // 1
   console.log(myCounter()); // 2
   ```

2. **이벤트 핸들러 내에서 상태 유지**
   ```javascript
   function setupButton() {
     let count = 0;
     document.getElementById('myButton').addEventListener('click', function() {
       console.log(++count, 'times clicked');
     });
   }
   setupButton();
   ```

3. **커링(Currying)**
   ```javascript
   function multiply(a) {
     return function(b) {
       return a * b;
     };
   }
   const multiplyByTwo = multiply(2);
   console.log(multiplyByTwo(3)); // 6
   ```

클로저는 JavaScript에서 매우 강력한 개념으로, 다양한 방식으로 활용할 수 있습니다. 데이터를 은닉하고, 상태를 유지하며, 동적으로 함수를 생성하는 데 유용하게 사용됩니다.
