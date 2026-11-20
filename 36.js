
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.root == null) {
            this.root = newNode;
            console.log(data + " inserted as root");
            return;
        }
        let temp = this.root;
        while (true) {
            if (data < temp.data) {
                if (temp.left == null) {
                    temp.left = newNode;
                    console.log(data + " inserted");
                    break;
                }
                temp = temp.left;
            }
            else if (data > temp.data) {
                if (temp.right == null) {
                    temp.right = newNode;
                    console.log(data + " inserted");
                    break;
                }
                temp = temp.right;
            }
            else {
                console.log(data + " already exists");
                break;
            }
        }
    }

    search(data) {
        let temp = this.root;
        while (temp != null) {
            if (data == temp.data) {
                console.log(data + " found in BST");
                return true;
            }
            else if (data < temp.data) {
                temp = temp.left;
            }
            else {
                temp = temp.right;
            }
        }
        console.log(data + " not found in BST");
        return false;
    }

    inorder(node) {
        if (node != null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    displayInorder() {
        if (this.root == null) {
            console.log("Tree is empty");
            return;
        }
        console.log("Inorder Traversal :");
        this.inorder(this.root);
    }
}

let tree = new BST();

tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

tree.displayInorder();

tree.search(40);
tree.search(100);