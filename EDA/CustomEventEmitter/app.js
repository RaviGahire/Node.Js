
class MyEventEmitter {
    constructor() {
        this.events = {}
        this.eventCount = 0
    }

    // On method
    on(eventName, handler) {
        if (this.events[eventName]) {
            this.events[eventName].push(handler)
        } else {
            this.events[eventName] = [handler]
        }
    }

    // Emit method
    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(event => event(...args));
        }
    }

    off(eventName, handler) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(
                event => event !== handler
            );
        }
    }

    // once method
    once(eventName, handler) {
        const onceHandler = (...args) => {
            this.off(eventName, onceHandler);
            handler(...args);
        };

        this.on(eventName, onceHandler);
    }
}

const emitter = new MyEventEmitter()

emitter.on("a", (a, b, c) => {
    console.log("Emited event a")
    console.log(a, b, c)
})


emitter.once("b", () => {
    console.log("Emited event b")
})

// emitter.emit("a", 1, 2, 3, 45)
emitter.emit('b')
emitter.emit('b')

// console.log(emitter)