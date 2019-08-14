class Node{
        constructor(val, priority){
            this.val = val;
            this.priority = priority;
        }
}

// Priority Queue implemented using a Min Binary Heap
// on a Node class with a value and priority (0 = highest priority)

class PriorityQueue{ // min binary heap (lower value is higher priority)
    constructor(){
        this.values = [];
    }

    deQueue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) { // handling for last item in list
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){ // helper method for deQueue
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap != null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    enQueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){ // helper method for enQueue
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

var pq = new PriorityQueue();
pq.enQueue("common cold", 5);
pq.enQueue("gunshot wound", 1);
pq.enQueue("high fever", 4);
pq.enQueue("broken arm", 2);
pq.enQueue("glass in foot", 3);
pq.enQueue("common cold 2", 5);
