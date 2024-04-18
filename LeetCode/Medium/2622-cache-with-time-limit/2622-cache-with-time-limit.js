class TimeLimitedCache{
    constructor() {
        this.store = new Map(); // 키와 값을 저장하는 맵
        this.timeouts = new Map(); // 각 키의 타이머 아이디를 저장하는 맵
    }

    set(key, value, duration) {
        let alreadyExists = false;
        if (this.store.has(key)) {
            clearTimeout(this.timeouts.get(key)); // 기존 타이머를 클리어함
            alreadyExists = true;
        }

        // 새 값과 만료 시간을 설정
        this.store.set(key, value);

        // 지정된 기간 후에 키를 자동으로 삭제하기 위한 타이머 설정
        const timeout = setTimeout(() => {
            this.store.delete(key);
            this.timeouts.delete(key);
        }, duration);

        // 같은 키가 다시 설정될 경우 나중에 이 타이머를 클리어할 수 있도록 타이머 참조를 저장
        this.timeouts.set(key, timeout);
        
        return alreadyExists;
    }

    get(key) {
        if (this.store.has(key)) {
            return this.store.get(key);
        }
        return -1; // 키가 존재하지 않거나 만료됨
    }

    count() {
        return this.store.size;
    }
};