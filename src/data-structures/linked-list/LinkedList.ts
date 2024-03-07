interface ILinkedList<T> {
  add(data: T): NodeItem<T>;
  // prepend(data: T): NodeItem<T>;
  delete(node: T): boolean;
  // search(head: NodeItem<T>, value: T): boolean;
  // traverse(head: NodeItem<T>): Array<NodeItem<T>>;
  // traverseInReverse
}

class NodeItem<T> {
  public next: NodeItem<T> | null = null;
  constructor(public value: T) {
    this.next = null;
  }
}

class LinkedList<T> implements ILinkedList<T> {
  private head: NodeItem<T> | null = null;

  add(data: T) {
    const node = new NodeItem(data);
    if (!this.head) this.head = node;
    else {
      const getLastNode = (node: NodeItem<T>): NodeItem<T> => {
        return node.next ? getLastNode(node.next) : node;
      }
      const lastNode = getLastNode(this.head);
      lastNode.next = node;
    }
    return node;
  }

  delete(value: T) {
    if (!this.head) return false;

    if (this.head.value === value) {
      if (!this.head.next) {
        this.head = null;
      } else {
        this.head = this.head.next;
      }
      return true;
    }

    let current = this.head;
    while(current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      if (!current.next.next) {
        current.next = null;
      } else {
        current.next = current.next.next;
      }
      return true;
    }

    return false;
  }
}


const list = new LinkedList<number>;
list.add(1);
list.add(2);
const node = list.add(3);
list.add(12);
console.log(JSON.stringify(list))

const res = list.delete(32432);

console.log('the result is: ', res);
console.log(JSON.stringify(list));