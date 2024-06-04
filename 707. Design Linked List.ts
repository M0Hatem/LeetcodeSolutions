class DoublyLinkedListNode{
    public val:number
    public next:DoublyLinkedListNode
    public prv:DoublyLinkedListNode
    constructor(val:number) {
        this.val = val
        this.next = null
        this.prv = null
    }
}

class MyLinkedList {
    head:DoublyLinkedListNode
    tail:DoublyLinkedListNode
    constructor() {
        this.head = new DoublyLinkedListNode(-1)
        this.tail = new DoublyLinkedListNode(-1)

        this.head.next = this.tail
        this.tail.prv = this.head
    }

    get(index: number): number {
        let currentNode:DoublyLinkedListNode = this.head.next
        let counter:number = 0
        while (currentNode !== this.tail && counter<index+1){
            currentNode = currentNode.next
            counter++
        }
        return currentNode.val
    }

    addAtHead(val: number): void {
        const newNode= new DoublyLinkedListNode(val)

        newNode.next = this.head.next
        newNode.prv = this.head
        this.head.next.prv = newNode
        this.head.next = newNode

    }

    addAtTail(val: number): void {
        const newNode = new DoublyLinkedListNode(val)

        newNode.next = this.tail
        newNode.prv = this.tail.prv
        this.tail.prv.next = newNode
        this.tail.prv = newNode
    }

    addAtIndex(index: number, val: number): void {
        let currentNode:DoublyLinkedListNode = this.head.next
        let counter:number = 0
        while(counter<index+1){
            currentNode = currentNode.next
            counter++
        }
        const newNode:DoublyLinkedListNode=new DoublyLinkedListNode(val)
        newNode.next = currentNode
        newNode.prv = currentNode.prv
        currentNode.prv.next = newNode
        currentNode.prv = newNode
    }

    deleteAtIndex(index: number): void {
        let currentNode:DoublyLinkedListNode = this.head.next
        let counter:number = 0
        while(counter<index+1){
            currentNode = currentNode.next
            counter++
        }

    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 **/