{
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    }

    class DoubleLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        push(val) { // add to end (tail)
            let node = new Node(val);
            if (!this.head) {
                this.head = node;
            } else {
                this.tail.next = node;
                node.prev = this.tail;
            }
            this.tail = node;
            this.length++;
            return this;
        }
        pop(){ // remove from end (tail)
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
        shift(){ // remove from beginning (head)
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
        unshift(val){ // add to beginning (head)
            let node = new Node(val);
            if (!this.tail) {
                this.tail = node;
            } else {
                this.head.prev = node;
                node.next = this.head;
            }
            this.head = node;
            this.length++;
            return this;
        }
        get(index){
            if(index < 0 || index >= this.length) return null;
            let count, current;
            if(index <= this.length / 2){
                count = 0;
                current = this.head;
                while (current && count < index) {
                    current = current.next;
                    count++;
                }
            } else {
                count = this.length - 1;
                current = this.tail;
                while (current && count > index) {
                    current = current.prev;
                    count--;
                }
            }
            return current;
        }
        set(index, val){
            let node = this.get(index);
            if(node){
                node.val = val;
                return true;
            }
            return false;
        }
        insert(index, val){
            if(index < 0 || index > this.length) return false;
            if(index === 0) return !!this.unshift(val);
            if(index === this.length) return !!this.push(val);

            let newNode = new Node(val);
            let prev = this.get(index - 1);
            let next = prev.next;

            prev.next = newNode, newNode.prev = prev;
            newNode.next = next, next.prev = newNode;
            this.length++;
            return true;
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

        static print(doublelinkedlist) {
            if (doublelinkedlist.head) {
                let arr = [];
                let current = doublelinkedlist.head;
                while (current) {
                    arr.push(current.val);
                    current = current.next;
                }
                console.log(arr);
            }

        }
    }

    let dll = new DoubleLinkedList();
    dll.push('zero');
    dll.push('one');
    dll.push('two');
    dll.push('three');
    dll.push('four');
    dll.push('five');
    dll.push('six');
    dll.push('seven');
    dll.push('eight');
    dll.push('nine');
    dll.push('ten');
    DoubleLinkedList.print(dll);
    console.log(dll.get(7));
    DoubleLinkedList.print(dll);
    console.log(dll);

}
