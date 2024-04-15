class EventEmitter {
    
    constructor() {
        this.listeners = {};
    }

    subscribe(event_name, callback) {
        if (!this.listeners[event_name]) {
            this.listeners[event_name] = [];
        }
        this.listeners[event_name].push(callback);

        // Unsubscribe function
        const unsubscribe = () => {
            const callbacks = this.listeners[event_name];
            const index = callbacks.indexOf(callback);
            if (index !== -1) {
                callbacks.splice(index, 1);
                if (callbacks.length === 0) {
                    delete this.listeners[event_name];
                }
            }
        };

        return { unsubscribe };
}
     emit(eventName, args = []) {
        if (!this.listeners[eventName]) {
            return [];
        }
        return this.listeners[eventName].map(callback => callback(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */