const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.node = null;
    }

    root() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.node;
    }

    add(data) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let leaf = new Node(data);
        if (!this.node) {
            this.node = leaf;
            return this.node;
        }
        let currNode = this.node;
        let isEnd = false;
        while (!isEnd) {
            if (currNode.data > leaf.data) {
                if (!currNode.left) {
                    currNode.left = leaf;
                    break;
                } else {
                    currNode = currNode.left;
                }
            } else if (currNode.data < leaf.data) {
                if (!currNode.right) {
                    currNode.right = leaf;
                    break;
                } else {
                    currNode = currNode.right;
                }
            } else break;
        }
    }

    has(data) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.find(data) ? true : false;
    }

    find(data) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (!this.node) return null;
        let currNode = this.node;
        let isEnd = false;
        while (!isEnd) {
            if (currNode.data === data) {
                return currNode;
            } else if (currNode.data > data) {
                if (!currNode.left) {
                    return null;
                }
                currNode = currNode.right;
            }
        }
    }

    remove(data) {
        /// throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this.node = removeNode(this.node, data);

        function removeNode(currNode, data) {
            if (!currNode) return null;
            if (data > currNode.data) {
                currNode.right = removeNode(currNode.right, data);
            } else if (data < currNode.data) {
                currNode.left = removeNode(currNode.left, data);
            } else {
                if (!currNode.left) {
                    return currNode.right;
                } else if (!currNode.right) {
                    return currNode.left;
                } else {
                    let min = currNode.right;
                    while (min.left) {
                        min = min.left
                    }
                    currNode.data = min.data;
                    currNode.right = removeNode(currNode.right, min, data);
                }
            }
            return  currNode;
        }
    }

    min() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if(!this.node) return this.node;
        let currNode=this.node;
        while (true){
            if(currNode.left){
                currNode=currNode.left;
            }else {
                return  currNode.data;
            }

        }
    }

    max() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if(!this.node) return this.node;
        let currNode=this.node;
        while (true){
            if(currNode.right) {
                currNode=currNode.right
            }else {
                return currNode.data;
            }
        }
    }
}

module.exports = {
    BinarySearchTree
};