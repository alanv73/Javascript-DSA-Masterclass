// {
    class Node{
        constructor(val){
            this.val = val;
            this.next = null;
        }
    }

    class Queue{
        constructor(){
            this.first = null;
            this.last = null;
            this.size = 0;
        }
        enqueue(val){ // push
            let newNode = new Node(val);
            if(!this.last){
                this.first = newNode;
            } else {
                this.last.next = newNode;
            }
            this.last = newNode;
            return ++this.size;
        }
        dequeue(){ // pop
            if(!this.first) return null;
            let node = this.first;
            if(this.first === this.last){
                this.last = null;
            }
            this.first = node.next;
            this.size--;
            return node.val;
        }
    }

    let q = new Queue();

// }