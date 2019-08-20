// cheater priority queue for Dijkstra's Algorithm
// array of objects {val: value, priority: priority}
// sort is O(n log(n))

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}
