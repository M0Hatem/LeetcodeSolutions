class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;
    let newHead = reverseList(head.next);
    let front = head.next;
    front.next = head;
    head.next = null;
    return newHead
}
const head = new ListNode(1,new ListNode(2,new ListNode(3,null)))
const result = reverseList(head)
if (result !== null) {
    console.log(result);
}
