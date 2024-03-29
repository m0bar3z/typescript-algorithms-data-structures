interface IQueue<T> {
  add: (value: T) => void;
  delete: () => void;
  contain: (value: T) => boolean;
}

class Queue<T> implements IQueue<T> {
  private queue: Array<T> = [];

  constructor(value?: Array<T>) {
    if(value) this.queue = value;
  }

  add(value: T) {
    this.queue.push(value);
  }

  delete() {
    this.queue.shift();
  }

  contain(value: T) {
    return this.queue.some(item => item === value);
  }
}
