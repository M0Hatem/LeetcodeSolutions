class DLNode {
    constructor(public val: number, public next: DLNode | null = null, public prev: null | DLNode = null) {}
}

class MyLinkedList {
    private head: DLNode | null = null;

    private tail: DLNode | null = null;

    private size = 0;

    constructor() {}

    getNode(index: number): DLNode | null {
        if (index < 0 || index >= this.size) {
            return null;
        }

        if (index > this.size / 2) {
            let node = this.tail!;
            let nodeIndex = this.size;

            while (--nodeIndex !== index) {
                node = node.prev!;
            }

            return node;
        }

        let node = this.head!;
        let nodeIndex = 0;

        while (nodeIndex++ !== index) {
            node = node.next!;
        }

        return node;
    }

    get(index: number): number {
        return this.getNode(index)?.val ?? -1;
    }

    addAtHead(val: number): void {
        const node = new DLNode(val);

        if (this.head) {
            node.next = this.head;
            this.head.prev = node;
        }

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        this.size++;
    }

    addAtTail(val: number): void {
        const node = new DLNode(val);

        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;

        if (!this.head) {
            this.head = node;
        }

        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        if (index === this.size) {
            this.addAtTail(val);
            return;
        }

        const node = new DLNode(val);

        const nextNode = this.getNode(index)!;
        const prevNode = nextNode.prev!;

        prevNode.next = node;
        node.prev = prevNode;

        nextNode.prev = node;
        node.next = nextNode;

        this.size++;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return;
        }

        if (index === 0) {
            this.head = this.head?.next ?? null;

            if (this.head) {
                this.head.prev = null;
            }

            this.size--;
            return;
        }

        if (index === this.size - 1) {
            this.tail = this.tail?.prev ?? null;

            if (this.tail) {
                this.tail.next = null;
            }

            this.size--;
            return;
        }

        const node = this.getNode(index)!;
        const prevNode = node.prev;
        const nextNode = node.next;

        if (prevNode) {
            prevNode.next = nextNode;
        }

        if (nextNode) {
            nextNode.prev = prevNode;
        }

        this.size--;
    }
}