// Breadth First Search Tree

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let node = this.root;
        while(true){
            if(val === node.val) return undefined;
            if(val < node.val){
                //left
                if(!node.left){
                    node.left = newNode;
                    return this;
                }
                node = node.left;
            } else if(val > node.val) {
                // right
                if(!node.right){
                    node.right = newNode;
                    return this;
                }
                node = node.right;
            }
        }
    }
    find(val) {
        if(!this.root) return false;
        let found = false;
        let node = this.root;
        while(!found && node){
            if(val < node.val){
                node = node.left;
            } else if(val > node.val) {
                node = node.right;
            } else {
                found = true;
            }
        }
        return node || undefined;
    }
    contains(val) {
        if(!this.root) return false;
        let node = this.root;
        while(node){
            if(val < node.val){
                node = node.left;
            } else if(val > node.val) {
                node = node.right;
            } else {
                return true;
            }
        }
        return false;
    }
    bfs(){
        if(!this.root) return [];
        let q = [];
        let values = [];
        let current = this.root;
        q.push(current);
        while(q.length){
            current = q.shift();
            values.push(current.val);
            if(current.left) q.push(current.left);
            if(current.right) q.push(current.right);
        }
        return values;
    }
    
}

var tree = new BinarySearchTree();
var tree = new BinarySearchTree();
//                     10
//               6           15
//           3       8            20

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.bfs(); // [10,6,15,3,8,20]
