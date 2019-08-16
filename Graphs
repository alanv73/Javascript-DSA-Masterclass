// graph class using adjecency list
// undirected

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
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
