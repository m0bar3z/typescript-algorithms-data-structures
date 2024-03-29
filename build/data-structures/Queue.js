class Queue {
    constructor(value) {
        this.queue = [];
        if (value)
            this.queue = value;
    }
    add(value) {
        this.queue.push(value);
    }
    delete() {
        this.queue.shift();
    }
    contain(value) {
        return this.queue.some(item => item === value);
    }
}
const queue = new Queue;
queue.add(32);
queue.add(88);
queue.add(19);
queue.add(96);
console.log(queue);
queue.delete();
console.log(queue);
const res = queue.contain(32);
console.log("hey", res);
export {};
