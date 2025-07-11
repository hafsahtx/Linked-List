class Node{
    constructor(value)
    {
    this.value=value
    this.next=null
    }
}
class LinkedList{
    constructor()
    {
        this.head=null
    }
    append(value)
    {
        let newnode=new Node(value)
       
        let current=this.head
        while(current.next)
        {
            current=current.next
        }
        current.next=newnode
        
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
   
}
let list=new LinkedList()
list.prepend(1)
list.append(2)
list.append(3)
list.printList()
list.size()
list.getHead()
list.getTail()
list.at(2)
list.contains(5)
//list.popNode()
list.findNode(3)
list.toStringNode();