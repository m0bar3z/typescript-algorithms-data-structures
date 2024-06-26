interface ILinkedList<T> {
  add(data: T): NodeItem<T>;
  delete(node: T): boolean;
  contain(node: T): boolean;
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

  contain(value: T) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      else current = current.next;
    }
    return false;
  }
}