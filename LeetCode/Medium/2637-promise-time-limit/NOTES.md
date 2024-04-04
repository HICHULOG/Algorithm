# 시간 제한 함수 구현

```javascript
var timeLimit = function(fn, t) {
    
	return async function(...args) {
        return new Promise((resolve,reject) => {
            setTimeout(() => reject("Time Limit Exceeded"),t);
            fn(...args).then(resolve).catch(reject)
        })
    }
};
```

이 코드는 주어진 비동기 함수 `fn`과 시간 제한 `t` (밀리초 단위)를 받아, 시간 제한이 적용된 새로운 함수를 반환하는 `timeLimit` 함수를 정의합니다. 반환된 함수는 원래 함수 `fn`이 주어진 시간 `t` 내에 완료되면 그 결과를 해결(resolve)하고, 시간 `t`를 초과하면 "Time Limit Exceeded"라는 메시지와 함께 거부(reject)합니다.

## 코드 분석

- **입력 매개변수**:
  - `fn`: 비동기 작업을 수행하는 함수.
  - `t`: 시간 제한 (밀리초).

- **반환 함수**: 
  - `timeLimit` 내에서, 또 다른 비동기 함수를 반환합니다. 이 함수는 임의의 인자들(`...args`)을 받아 처리할 수 있습니다.

- **Promise 생성**:
  - 반환된 함수 내부에서는 `new Promise`를 사용해 새로운 `Promise` 객체를 생성합니다. 이 `Promise` 객체는 두 가지 경우 중 하나로 해결됩니다:
    - 원래 함수 `fn`의 실행이 `t` 밀리초 내에 완료되면, `fn`의 결과를 `resolve`를 통해 반환합니다.
    - `t` 밀리초가 지나면, `setTimeout`에 의해 "Time Limit Exceeded" 메시지를 포함한 거부(`reject`)가 발생합니다.

- **fn 실행과 결과 처리**:
  - `fn(...args).then(resolve).catch(reject)`를 통해, `fn`이 성공적으로 완료되면 그 결과를 `resolve`로, 실패하면 그 오류를 `reject`로 전달합니다.

## 작동 방식

1. 반환된 함수가 호출되면, `fn`이 주어진 인자들(`...args`)로 실행됩니다.
2. 동시에, `setTimeout`이 설정되어 주어진 시간 `t` 밀리초 후에 "Time Limit Exceeded"라는 메시지로 `Promise`를 거부하도록 합니다.
3. 만약 `fn`의 실행이 `t` 밀리초 내에 완료되면, `fn`의 결과를 반환하고, `setTimeout`에 의한 거부는 무시됩니다.
4. 반면, `fn`의 실행이 `t` 밀리초를 초과하면, "Time Limit Exceeded" 메시지와 함께 거부가 발생합니다.

이 방식을 통해, 비동기 함수에 대한 실행 시간을 제한하고, 시간 초과 시 특정 동작을 취할 수 있습니다.
