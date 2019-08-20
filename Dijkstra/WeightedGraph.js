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

// weighted graph class using adjecency list
// undirected

// adjacencyList - [{node: 'B', weight: 10}, {node: 'C', weight: 5}]


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

    shortestPath(start, end){
        let distances = {};
        let previous = {};
        let currentDistance;
        let tempDistance;
        let node;
        let pq = new PriorityQueue();

        Object.keys(this.adjacencyList).forEach((key) => {
            if(key === start){
                distances[key] = 0;
            } else {
                distances[key] = Infinity;
            }
            pq.enqueue(key, distances[key]);
            previous[key] = null;
        });

        let currentVertex = pq.dequeue();
        currentDistance = distances[currentVertex.val];

        while(currentVertex && currentVertex.val != end){
            for(let neighbor in this.adjacencyList[currentVertex.val]) {
                node = this.adjacencyList[currentVertex.val][neighbor];
                tempDistance = currentDistance + node.weight;
                if(tempDistance < distances[node.node]){
                    distances[node.node] = tempDistance;
                    previous[node.node] = currentVertex.val;
                    pq.enqueue(node.node, tempDistance);
                }
            }
            currentDistance =tempDistance;
            currentVertex = pq.dequeue();
        }

        return previous;
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
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
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
                        nodes.enqueue(nextNeighbor, candidate)
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

//          A
//      2/     \4
//      C       \
//    /  \2      B
//  4|    D __  |
//  /    |   3\ | 3
//  \   |1     E
//   \ |      /
//    F‾‾‾‾‾‾‾1

