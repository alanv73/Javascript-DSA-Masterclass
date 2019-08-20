class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2){
        if(this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
        if(this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);
    }

    myRemoveEdge(v1, v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
        // remove v2 from v1
        let newEdges = [];
        this.adjacencyList[v1].forEach((edge) => {
            if(edge != v2) newEdges.push(edge);
        });
        this.adjacencyList[v1] = newEdges;

        // remove v1 from v2
        newEdges = [];
        this.adjacencyList[v2].forEach((edge) => {
            if(edge != v1) newEdges.push(edge);
        });
        this.adjacencyList[v2] = newEdges;
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v != vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v != vertex1);
    }

    myRemoveVertex(vertex){
        if(this.adjacencyList[vertex]) {
            this.adjacencyList[vertex].forEach((edge) => this.removeEdge(vertex, edge));
            delete this.adjacencyList[vertex];
        }
    }

    removeVertex(vertex){
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstResursive(vertex){ // depth-first graph traversal -- recursively
        let result = [];
        let visited = {};
        let dfs = vertex => {
            if(!vertex) return null;
            result.push(vertex);
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) dfs.call(this, neighbor);
            });
        }
        dfs.call(this, vertex);
        return result;
    }

    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    myBreadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        while(queue.length){
            currentVertex = queue.shift();
            if(!visited[currentVertex]){
                result.push(currentVertex);

                this.adjacencyList[currentVertex].forEach(neighbor => {
                    if(!visited[neighbor]){
                        queue.push(neighbor);
                    }
                });
                visited[currentVertex] = true;
            }
        }
        return result;
    }

    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');


//             A
//          /    \
//         B      C
//        |       |
//        D ----- E
//         \    /
//           F