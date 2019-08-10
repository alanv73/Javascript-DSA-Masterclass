
    class Node{
        constructor(val){
            this.val = val
            this.next = null;      
            this.prev = null;      
        }
    }

    class DoublyLinkedList{
        constructor(){
            this.head = null;      
            this.tail = null;      
            this.length = 0;      
        }
        push(val){
            var node = new Node(val);
            if (this.head === null) {
                this.head = node;
            } else {
                this.tail.next = node;
                node.prev = this.tail;
            }
            this.tail = node;
            this.length++;
            return this;
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

        reverse(){
            if(this.length < 2) return this;
            let node = this.head;
            this.head = this.tail;
            this.tail = node;
            let next, prev;
            while(node){
                next = node.next;
                prev = node.prev;
                node.next = prev;
                node.prev = next;
                node = next;
            }
            return this;
        }
        print() {
            if (this.head) {
                let arr = [];
                let current = this.head;
                while (current) {
                    arr.push(current.val);
                    current = current.next;
                }
                console.log(arr);
            }

        }
    }


    let dll = new DoublyLinkedList();
//     dll.push(5);
