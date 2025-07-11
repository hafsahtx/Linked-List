class Node{
    constructor(value)
    {
    this.value=value
    this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    append(value){
        let newnode=new Node(value);
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newnode;
    }
    prepend(value){
        let newnode = new Node(value);
         if(!this.head)
        {
            this.head=newnode
            return
        }
    }
    size(){
        let count = 1;
        let current = this.head;
        while(current.next){
            count+=1;
            current = current.next;
        }
        console.log(`size: ${count}`);
    }
    getHead(){
        let current = this.head;
        console.log(current);
    }
    getTail(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        console.log(current)
    }
    at(index){
        let current = this.head;
        while(index){
            current = current.next;
            index--;
        }
        console.log(current)
    }
    popNode(){
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
        console.log(current)
    }
    contains(value){
        let current = this.head;
        
        while(current.next){
            if(current.value === value){
                console.log("true");
                return;
        } current = current.next;
        }
        if(current.value === value){
            console.log("true");
                return;
        }else{
            console.log("false")
        }
        
    }
    findNode(value){
        let index = 0;
        let current = this.head;
        while(current){
            if(current.value === value){
                console.log(`${current.value} at index ${index}`)
            }
            index++;
            current = current.next;
        }
    }
    toStringNode(){
        let current = this.head;
        let result = "";
        while(current){
            result += `(${current.value}) -> `
            current = current.next;
        }
        console.log(result + "null");
    }
    insertAt(value,index){
        let count = 1;
        if (index===0){
             let current = this.head;
             let newnode = new Node(value);
             this.head = newnode;
             newnode.next = current;
             return;
        }
        let current = this.head;
        while(current){ 
            if(count===index){
                let newnode = new Node(value);
                newnode.next = current.next;
                current.next = newnode;
            }
            count++;
            current = current.next;
            
        }
    }
    removeAt(index){
        let current = this.head;
        let count = 1;
        if(index===0){
            this.head = current.next;
        }else{
            while(current){
                if(count===index){
                    current.next = current.next.next;
                    return;
                }
                count++;
                current = current.next
            }
        }
    }
   
}
let list=new LinkedList()
list.prepend(1)
list.append(2)
list.append(3)
list.size()
list.getHead()
list.getTail()
list.at(2)
list.contains(35)
//list.popNode()
list.findNode(3)
list.toStringNode();
list.insertAt(5,0);
list.toStringNode();
list.removeAt(0);
list.toStringNode();


