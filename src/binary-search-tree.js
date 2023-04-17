const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    node = new Node();

    root() {
        return this.node.data ? this.node : null;
    }

    add(data) {
        if (this.node.data===undefined) {
            this.node.data = data;
        } else {
            let isEnd = false;
            let last = this.node;

            while (!isEnd) {
                if (data < last.data) {
                    if (last.left === null) {
                        last.left = new Node(data);
                        isEnd = true;
                    } else {
                        last = last.left;
                    }
                } else {
                    if (last.right === null) {
                        last.right = new Node(data);
                        isEnd = true;
                    } else {
                        last = last.right;
                    }
                }
            }
        }
    }

    has(data) {
        if (this.node.data === undefined) {
            return false;
        } else {
            let last = this.node;

            while (true) {
                if (data < last.data) {
                    if (last.left === null) {
                        return false;
                    } else {
                        last = last.left;
                    }
                } else if (data > last.data) {
                    if (last.right === null) {
                        return false;
                    } else {
                        last = last.right;
                    }
                } else {
                    return true;
                }
            }
        }
    }

    find(data) {
        if (this.node.data === undefined) {
            return null;
        } else {
            let last = this.node;

            while (true) {
                if (data < last.data) {
                    if (last.left === null) {
                        return null;
                    } else {
                        last = last.left;
                    }
                } else if (data > last.data) {
                    if (last.right === null) {
                        return null;
                    } else {
                        last = last.right;
                    }
                } else {
                    return last;
                }
            }
        }
    }

    remove(data) {
        if (this.node.data === undefined) {
            return null;
        } else {
            let prev = null;
            let last = this.node;
            let isEnd = false;

            while (!isEnd || last === null) {
                if (data < last.data) {
                    prev = last;
                    last = last.left;
                } else if (data > last.data) {
                    prev = last;
                    last = last.right;
                } else {
                    isEnd = true;
                }
            }

            if (last != null) {
                if (last.left === null && last.right === null) {
                    if (prev.data < last.data) {
                        prev.right = null;
                    } else {
                        prev.left = null;
                    }
                } else if (last.left != null && last.right === null) {
                    if (prev.data < last.data) {
                        prev.right = last.left;
                    } else {
                        prev.left = last.left;
                    }
                } else if (last.left === null && last.right != null) {
                    if (prev.data < last.data) {
                        prev.right = last.right;
                    } else {
                        prev.left = last.right;
                    }
                } else {
                    let minNode = null;
                    let prevMin = last.right;

                    while (minNode === null) {
                        if (prevMin.left === null) {
                            prevMin.left = last.left;

                            if (prev != null) {
                                if (prev.data < prevMin.data) {
                                    prev.right = prevMin;
                                } else {
                                    prev.left = prevMin;
                                }
                            } else {
                                this.node = prevMin;
                            }

                            minNode = prevMin;
                        } else if (prevMin.left != null && prevMin.left.left == null) {
                            minNode = prevMin.left;
                            prevMin.left = null;
                            minNode.left = last.left;

                            let maxNode = minNode;
                            isEnd = false;

                            while (!isEnd) {
                                if (maxNode.right != null) {
                                    maxNode = maxNode.right;
                                } else {
                                    maxNode.right = prevMin;
                                    isEnd = true;
                                }
                            }
                            if (prev != null) {
                                if (prev.data < minNode.data) {
                                    prev.right = minNode;
                                } else {
                                    prev.left = minNode;
                                }
                            } else {
                                this.node = minNode;
                            }
                        } else {
                            prevMin = prevMin.left
                        }
                    }
                }
            }
        }
    }

    min() {
        if (this.node.data === undefined) {
            return null;
        } else {
            let last = this.node;

            while (true) {
                if (last.left === null) {
                    return last.data;
                } else {
                    last = last.left;
                }
            }
        }
    }

    max() {
        if (this.node.data === undefined) {
            return null;
        } else {
            let last = this.node;

            while (true) {
                if (last.right === null) {
                    return last.data;
                } else {
                    last = last.right;
                }
            }
        }
    }
}

module.exports = {
    BinarySearchTree
};