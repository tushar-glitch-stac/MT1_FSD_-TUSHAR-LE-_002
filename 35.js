
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        console.log(data + " inserted at beginning");
    }

    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            console.log(data + " inserted at end");
            return;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
        console.log(data + " inserted at end");
    }

    insertAtPosition(data, pos) {
        if (pos == 1) {
            this.insertAtBeginning(data);
            return;
        }
        let newNode = new Node(data);
        let temp = this.head;
        let count = 1;
        while (temp != null && count < pos - 1) {
            temp = temp.next;
            count++;
        }
        if (temp == null) {
            console.log("Position out of range");
            return;
        }
        newNode.next = temp.next;
        temp.next = newNode;
        console.log(data + " inserted at position " + pos);
    }

    deleteByValue(data) {
        if (this.head == null) {
            console.log("List is empty");
            return;
        }
        
        if (this.head.data == data) {
            this.head = this.head.next;
            console.log(data + " deleted");
            return;
        }
        let temp = this.head;
        while (temp.next != null && temp.next.data != data) {
            temp = temp.next;
        }
        if (temp.next == null) {
            console.log(data + " not found");
            return;
        }
        temp.next = temp.next.next;
        console.log(data + " deleted");
    }

    deleteAtPosition(pos) {
        if (this.head == null) {
            console.log("List is empty");
            return;
        }
        if (pos == 1) {
            console.log(this.head.data + " deleted");
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        let count = 1;
        while (temp != null && count < pos - 1) {
            temp = temp.next;
            count++;
        }
        if (temp == null || temp.next == null) {
            console.log("Position out of range");
            return;
        }
        console.log(temp.next.data + " deleted");
        temp.next = temp.next.next;
    }

    search(data) {
        let temp = this.head;
        let pos = 1;
        while (temp != null) {
            if (temp.data == data) {
                console.log(data + " found at position " + pos);
                return true;
            }
            temp = temp.next;
            pos++;
        }
        console.log(data + " not found in list");
        return false;
    }

    // Display
    display() {
        if (this.head == null) {
            console.log("List is empty");
            return;
        }
        let temp = this.head;
        let result = "";
        while (temp != null) {
            result = result + temp.data + " -> ";
            temp = temp.next;
        }
        result = result + "NULL";
        console.log(result);
    }
}

let list = new LinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtBeginning(5);
list.insertAtPosition(15, 3);

list.display();

list.search(20);
list.search(100);

list.deleteByValue(20);
list.display();

list.deleteAtPosition(2);
list.display();