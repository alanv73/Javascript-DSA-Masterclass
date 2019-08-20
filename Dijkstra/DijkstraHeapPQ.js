class Node{
        constructor(val, priority){
            this.val = val;
            this.priority = priority;
        }
}

/////////////////////////

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

///////////////////////////////////////

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight){
        if(this.adjacencyList[v1]) this.adjacencyList[v1].push({node: v2, weight});
        if(this.adjacencyList[v2]) this.adjacencyList[v2].push({node: v1, weight});
    }

    shortestPath(start, end){ // returns incorrect answer
        let distances = {};
        let previous = {};
        let currentDistance;
        let tempDistance;
        let node;
        let path = [];
        let pq = new PriorityQueue();

        Object.keys(this.adjacencyList).forEach((key) => {
            if(key === start){
                distances[key] = 0;
            } else {
                distances[key] = Infinity;
            }
            pq.enQueue(key, distances[key]);
            previous[key] = null;
        });

        let currentVertex = pq.deQueue();
        currentDistance = distances[currentVertex.val];

        while(currentVertex && currentVertex.val != end){
            for(let neighbor in this.adjacencyList[currentVertex.val]) {
                node = this.adjacencyList[currentVertex.val][neighbor];
                tempDistance = currentDistance + node.weight;
                if(tempDistance < distances[node.node]){
                    distances[node.node] = tempDistance;
                    previous[node.node] = currentVertex.val;
                    pq.enQueue(node.node, tempDistance);
                }
            }
            currentDistance =tempDistance;
            currentVertex = pq.deQueue();
        }
        currentVertex = currentVertex.val;
        while(previous[currentVertex]){
            path.push(currentVertex);
            currentVertex = previous[currentVertex];
        }
        return path.concat(currentVertex).reverse();
    }

    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; // to return at end
        let smallest;

        // build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enQueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enQueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.deQueue().val;
            if(smallest === finish){
                // build return path
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                // done
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    // distances[smallest] == current known distance to the current node (smallest)
                    // nextNode[weight] == the weight of the edge taken from the adjcencyList
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        // update new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // update previous - how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enQueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
    
}

let wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);
