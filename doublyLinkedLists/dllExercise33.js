class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    pop(){
        if(!this.head) return undefined;
        let node = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;
        }
        this.length--;
        return node;
    }
    shift(){
        if(!this.head) return undefined;
        let node = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
        }
        this.length--;
        return node;
    }
    unshift(val){
        var node = new Node(val);
        if (this.tail === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            this.length++;
         }
        return this;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
         }
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let current, count;
        if(index < this.length / 2){
            count = 0;
            current = this.head;
            while(current && count < index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(current && count > index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    insert(index, val){
        if(index < 0 || index >= this.length) return false;
        if(index === this.length - 1) return this.push(val);
        if(index == 0) return !!this.unshift(val);
        let node = new Node(val);
        let prev = this.get(index - 1);
        let next = node.next;
        node.next = next, node.prev = prev;
        prev.next = node, next.prev = node;
        this.length++;
        return true
        
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let node = this.get(index);
        let prev = node.prev;
        let next = node.next;
        prev.next = next, next.prev = prev;
        node.next = null, node.prev = null;
        this.length--;
        return node;
    }
}