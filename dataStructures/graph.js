

class Graph {
    constructor() {
        this.numberOfNodes = 0
        this.adjacentList = {}
    }

    addVertex(node) {

    }

    addEdge(node1, node2) {

    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList)
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connection = ""
            let vertex;
            for (vertex of nodeConnections) {
                connection += vertex + " "
            }
            console.log(node + "-->" + connection)
        }
    }
}

let gp = new Graph()
gp.addVertex(1)
gp.addVertex(2)
gp.addEdge(1, 2)
gp.showConnections()