// heaps are used to make prioruty queues and graph traversal
//
// max binary heap
// two child limit
// parent larger than children/children smaller than parent
// no order between siblings
// as compact as possible/all children filled before adding a new level
// fill left first
//
// min binary heap
// parent smaller than children/children larger than parent

//                       100
//                  19           36
//              17    12      25    5
//            9   15 6  11  13  8  1  4
// 100
//     19 36
//           17 12 25 5
//                      9 15 6 11 13 8 1 4
// 100 19 36 17 12 25 5 9 15 6 11 13 8 1 4

// using arrays - children = 2n + 1 and 2n + 2 where n = parent index
// parent = (floored)(n - 1) / 2  where n = child index
// insertion - add to end (push) then bubble up by layers (parents) until reaching the correct position

class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(val){
        this.values.push(val);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while(this.values[index] > this.values[parentIndex]){
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }
    brokenExtractMax(){ // <ugh>
        this.swap(0, this.values.length - 1);
        let max = this.values.pop();
        let idx = 0;
        let element = this.values[idx];

        // gets hung in infinite loop at some point
        while(idx < this.values.length){
            let leftChildIdx = (2 * idx) + 1;
            if(leftChildIdx >= this.values.length) return max;
            let leftChild = this.values[leftChildIdx];
            let rightChildIdx = (2 * idx) + 2;
            // <cringe>
            if(rightChildIdx >= this.values.length){
                this.swap(idx, leftChildIdx);
                idx = leftChildIdx;
            } else {
                let rightChild = this.values[rightChildIdx];

                // <shudder>
                if(element < leftChild || element < rightChild) {
                    if(element < leftChild && element < rightChild) {
                        if(leftChild === Math.max(leftChild, rightChild)){
                            this.swap(idx, leftChildIdx);
                            idx = leftChildIdx;
                        } else {
                            this.swap(idx, rightChildIdx);
                            idx = rightChildIdx;
                        }
                    }
                } else {
                    if(leftChild === Math.max(leftChild, rightChild)){
                        this.swap(idx, leftChildIdx);
                        idx = leftChildIdx;
                    } else {
                        this.swap(idx, rightChildIdx);
                        idx = rightChildIdx;
                    }
                }
            }
        }
        return max;
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) { // handling for last item in list
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){ // helper method for colt's extractMax solution
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
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) || 
                    (swap != null && rightChild > leftChild)
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

    coltInsert(element){ // colt's insert solution
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){ // helper method for colt's insert solution
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    swap(index1, index2){
        let temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }
}

var mbh = new MaxBinaryHeap();
mbh.values = [41,39,33,18,27,12]
mbh.coltInsert(55);
console.log(mbh.values);
