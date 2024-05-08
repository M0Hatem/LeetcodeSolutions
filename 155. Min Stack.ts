class MinStack {
    private stack: number[] = []

    constructor() {
    }

    push(val: number): void {
        if (this.stack.length == 0) {
            this.stack[0] = val
            return
        }
        this.stack[this.stack.length] = val

    }

    pop(): void {

        this.stack.splice(this.stack.length - 1, 1)
    }

    top(): number {

        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        let min: number = this.stack[0]
        this.stack.map((item) => {

            if (item < min) {
                min = item
            }
        })
        return min
    }
}


const minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
console.log(minStack.getMin()); // return -3
minStack.pop();
// console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */