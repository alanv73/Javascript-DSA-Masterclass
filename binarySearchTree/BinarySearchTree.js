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
    
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
