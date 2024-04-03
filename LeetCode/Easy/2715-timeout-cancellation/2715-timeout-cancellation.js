var cancellable = function(fn, args, t) {
    let isCancelled = false; // 실행 취소 여부를 추적하는 플래그

    // fn을 지연 실행하는 setTimeout
    const timeoutId = setTimeout(() => {
        if (!isCancelled) { // 취소되지 않았다면 fn 실행
            fn.apply(null, args);
        }
    }, t);

    // cancelFn 반환
    return function cancelFn() {
        isCancelled = true; // 실행 취소
        clearTimeout(timeoutId); // 지연 실행 취소
    };
};