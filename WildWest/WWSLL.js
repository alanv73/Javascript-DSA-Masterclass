class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;    
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let node = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = this.head;
        } else {
            let currentNode = this.head;
            while(currentNode.next.next){
                currentNode = currentNode.next;
            }
            currentNode.next = null;
            this.tail = currentNode;
        }
        this.length--;
        return node;
    }
    get(index){
        if(!this.head) return undefined;
        let count = 0;
        let currentNode = this.head;
        while(currentNode.next && count != index){
            currentNode = currentNode.next;
            count++;
        }
        if(count === index){
            return currentNode;
        } else {
            return undefined;
        }
    }
    set(index, value){
        let node = this.get(index);
        let found = false;
        if(node){
            node.val = value;
            found = true;
        }
        return found;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(index, value){
        if(index < 0 || index > this.length) return false;
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            if(index === this.length) {
                this.push(value);
            } else if(index === 0) {
                this.unshift(value);
            } else {
                let prevNode = this.get(index - 1);
                if(!prevNode) return false;
                newNode.next = prevNode.next;
                prevNode.next = newNode;
            }
        }
        this.length++;
        return true;
    }
    shift(){
        if(!this.head) return undefined;
        let node = this.head;
        this.head = node.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        node.next = null;
        return node;
    }
    rotate(num){
        if(num === 0) return this;
        let node;
        let loops = Math.abs(num);
        for(let i = 0; i < loops; i++){
            if(num < 0){
                node = this.pop();
                this.unshift(node.val);
            } else {
                node = this.shift();
                this.push(node.val);
            }
        }
        return this;
    }
}

var sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20).push(25);
sll.head.val;
sll.tail.val;
sll.rotate(3);
sll.head.val;
sll.head.next.val;
sll.head.next.next.val;
sll.head.next.next.next.val;
sll.head.next.next.next.next.val;
sll.tail.val;
sll.tail.next;
