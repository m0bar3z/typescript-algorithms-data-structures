class NodeItem {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const node = new NodeItem(data);
        if (!this.head)
            this.head = node;
        else {
            const getLastNode = (node) => {
                return node.next ? getLastNode(node.next) : node;
            };
            const lastNode = getLastNode(this.head);
            lastNode.next = node;
        }
        return node;
    }
    delete(value) {
        if (!this.head)
            return false;
        if (this.head.value === value) {
            if (!this.head.next) {
                this.head = null;
            }
            else {
                this.head = this.head.next;
            }
            return true;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            if (!current.next.next) {
                current.next = null;
            }
            else {
                current.next = current.next.next;
            }
            return true;
        }
        return false;
    }
    contain(value) {
        let current = this.head;
        while (current) {
            if (current.value === value)
                return true;
            else
                current = current.next;
        }
        return false;
    }
}
export {};
