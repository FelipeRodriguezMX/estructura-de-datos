class Stack {
    constructor(tamano) {
        this.stack = [];
        this.count = 0;
        this.tamano = tamano
    }

    push(element) {
        if (this.count < this.tamano) {
            this.stack[this.count++] = element;
            return true;
        }else 
            return false;
    }

    pop() {
       return (this.count<= 0) ? null : this.stack[this.count--]
    }

    peek() {
        return (this.count<= 0) ? null : this.stack[this.count-1]
    }

    // size() {
    //     return this.count;
    // }

    stackData() {
        // console.log(this.stack);
        return this.stack;
    }
}

module.exports = Stack;