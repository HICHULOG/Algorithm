### EventEmitter 클래스 구조

1. **생성자 (`constructor`):**
   - `listeners` 객체를 초기화합니다. 이 객체는 이벤트 이름을 키로 하고 콜백 함수들의 배열을 값으로 하는 매핑을 저장하는 역할을 합니다. 각 이벤트에는 다수의 콜백을 등록할 수 있습니다.

2. **구독하기 (`subscribe`):**
   - `event_name` (이벤트 이름)과 `callback` (콜백 함수)을 매개변수로 받습니다. 이 메서드는 해당 이벤트 이름에 콜백 함수를 등록하며, 여러 콜백을 동일한 이벤트에 연결할 수 있습니다.
   - 구독을 취소할 수 있는 `unsubscribe` 함수를 포함하는 객체를 반환합니다. 이 객체를 통해 나중에 특정 콜백을 해당 이벤트에서 쉽게 제거할 수 있습니다.

3. **이벤트 발생 (`emit`):**
   - `event_name` (이벤트 이름)과 선택적으로 `args` (인자 배열)을 매개변수로 받습니다. 지정된 이벤트 이름에 등록된 모든 콜백 함수를 호출하며, 각 콜백 함수에 인자를 전달합니다.
   - 각 콜백 함수의 반환값을 배열로 수집하여 반환합니다. 만약 등록된 콜백이 없을 경우 빈 배열을 반환합니다.

4. **구독 취소 (`unsubscribe` 내부 함수):**
   - 특정 이벤트의 특정 콜백을 리스너 목록에서 제거합니다. 이 함수는 `subscribe` 메서드에 의해 반환된 객체 내에 정의됩니다.
   - 콜백을 성공적으로 제거한 후, 해당 이벤트에 더 이상 콜백이 없으면 이벤트 항목 자체를 `listeners` 객체에서 삭제합니다.

### 사용 예제

```javascript
const emitter = new EventEmitter();

// "firstEvent" 이벤트에 두 개의 콜백 함수 구독
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);

// "firstEvent" 이벤트 발생, 구독한 콜백 함수들 실행
console.log(emitter.emit("firstEvent", [5])); // 출력: [6, 7]

// 첫 번째 구독 취소
sub1.unsubscribe();

// 다시 "firstEvent" 이벤트 발생, 남은 콜백 함수 실행
console.log(emitter.emit("firstEvent", [5])); // 출력: [7]
```

이 클래스를 통해 이벤트 기반의 프로그래밍을 손쉽게 구현할 수 있으며, 다양한 컴포넌트 간의 동적인 데이터 교환과 이벤트 처리가 가능해집니다. 이벤트 드리븐 아키텍처에서 매우 유용하게 사용될 수 있습니다.​
