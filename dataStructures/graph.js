

class Graph {
    constructor() {
        this.numberOfNodes = 0
        this.adjacentList = {}
    }

    addVertex(node) {
        this.adjacentList[node] = []
        this.numberOfNodes++
    }

    addEdge(node1, node2) {
        let lista1 = this.adjacentList[node1]
        let lista2 = this.adjacentList[node2]
        lista1.push(node2)
        lista2.push(node1)
        this.adjacentList[node1] = lista1
        this.adjacentList[node2] = lista2
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