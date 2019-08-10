{
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }

    // var first = new Node("hi");
    // first.next = new Node("there");
    // first.next.next = new Node("how");
    // first.next.next.next = new Node("are");
    // first.next.next.next.next = new Node("you");

    // var tempNode = first;
    // while(tempNode.next != null) {
    //     console.log(tempNode.val);
    //     tempNode = tempNode.next;
    // }
    // console.log(tempNode.val);

    class SinglyLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        push(val) {
            let newNode = new Node(val);
            if (!this.head) {
                this.head = newNode;
            } else {
                this.tail.next = newNode;
            }
            this.tail = newNode;
            this.length++;
            return this;
        }
        pop() {
            if (!this.head)
                return undefined;
            var current = this.head;
            var newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
        shift() {
            if (!this.head)
                return undefined;
            let currentHead = this.head;
            this.head = currentHead.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return currentHead;
        }
        unshift(val){
            let newNode = new Node(val);
            if(!this.head){
                this.head = newNode;
                this.tail = this.head;    
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
            return this;
        }
        get(index){
            if(index < 0 || index >= this.length) return null;
            let count = 0;
            let current = this.head;
            while (current && count < index) {
                current = current.next;
                count++;
            }
            return current;
        }
        set(index, val){
            if(index < 0 || index > this.length) return null;
            let target = this.get(index);
            if(target){
                target.val = val;
                return true;
            }
            return false;
        }
        insert(index, val){
            if(index < 0 || index > this.length) return false;
            if(index === this.length) return !!this.push(val);
            if(index === 0) return !!this.unshift(val);

            let target = this.get(index - 1);
            let newNode = new Node(val);
            newNode.next = target.next;
            target.next = newNode;
            this.length++;
            return true;
        }
        remove(index){
            if(index < 0 || index >= this.length) return undefined;
            if(index === this.length - 1) this.pop();
            if(index === 0) this.shift();
            let preTarget = this.get(index - 1);
            let target = preTarget.next;
            preTarget.next = target.next;
            this.length--;
            return target;
        }
        reverse(){
            this.tail = this.head;
            let prev = null;
            let next = null;
            let current = this.head;
            while(current){
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            this.head = prev;
            return this;
        }
        coltsreverse(){
            var node = this.head;
            this.head = this.tail;
            this.tail = node;
            var next;
            var prev = null
            for(var i = 0; i < this.length; i++){
                next = node.next;
                node.next = prev;
                prev = node;
                node = next;
            }
            return this;
        }

        static traverse(linkedList) {
            var current = linkedList.head;
            while (current) {
                console.log(current.val);
                current = current.next;
            }
        }

        static print(linkedList) {
            var arr = [];
            var current = linkedList.head;
            while (current) {
                arr.push(current.val);
                current = current.next;
            }
            console.log(arr);
        }
    }



    var ll = new SinglyLinkedList();
    ll.push('hello'); // 0
    ll.push('goodbye'); // 1
    ll.push('bonjour'); // 2
    ll.push('au revoir'); // 3
    ll.push('hola'); // 4
    ll.push('adios'); // 5

    SinglyLinkedList.print(ll);
    ll.coltsreverse();
    SinglyLinkedList.print(ll);
    console.log(ll);
    ll.reverse();
    SinglyLinkedList.print(ll);
    console.log(ll);
}
