class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.last = newNode;
        } else {
            let node = this.first;
            newNode.next = node;
        }
        this.first = newNode;
        return ++this.size;
    }
    pop(){ // reverse of single linked list (shift)
        if(!this.first) return null;
        let node = this.first;
        if(this.first == this.last){
            this.last = null;
        }
        this.first = node.next;
        this.size--;
        return node.val;
    }
}